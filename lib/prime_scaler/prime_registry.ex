
defmodule PrimeScaler.PrimeRegistry do
  use GenServer
  require Logger

  @table_name :primes

  def start_link(_) do
    GenServer.start_link(__MODULE__, nil, name: __MODULE__)
  end

  def registry_name, do: __MODULE__.Registry

  def store_prime(n, prime) do
    :ets.insert(@table_name, {n, prime})
  end

  def get_prime(n) do
    case :ets.lookup(@table_name, n) do
      [{^n, prime}] -> prime
      [] -> nil
    end
  end

  def get_active_processes do
    Registry.select(registry_name(), [{{:_, :"$1", :_}, [], [:"$1"]}])
  end

  def get_processes_by_node do
    processes = Registry.select(registry_name(), [{{:_, :"$1", :"$2"}, [], [{{:"$1", :"$2"}}]}])
    
    # Get all nodes including self
    all_nodes = [node() | Node.list()]
    
    # Initialize counts for all nodes
    base_counts = Map.new(all_nodes, fn node -> {node, 0} end)
    
    # Count processes by their actual running node
    process_counts = processes
    |> Enum.group_by(
      fn {pid, _} -> 
        try do
          # Get the actual node where the process is running
          Process.whereis(pid) && :rpc.call(node(pid), Process, :alive?, [pid]) && node(pid) || node()
        rescue
          _ -> node()
        end
      end,
      fn {_pid, _} -> 1 end
    )
    |> Map.new(fn {node, list} -> {node, Enum.sum(list)} end)
    
    # Merge with base counts to ensure all nodes are represented
    Map.merge(base_counts, process_counts)
  end

  def get_connected_nodes do
    Node.list()
  end

  def lookup(n) do
    case Registry.lookup(registry_name(), n) do
      [{pid, _}] -> pid
      [] -> nil
    end
  end

  def register_process(n) do
    # Register the process in the registry and update node counts
    GenServer.cast(__MODULE__, {:register_process, n})
  end

  @impl true
  def init(_) do
    # Monitor node connections/disconnections
    :net_kernel.monitor_nodes(true)

    # Create an ETS table to store prime numbers
    table = :ets.new(@table_name, [:set, :named_table, :public, read_concurrency: true])

    # Initialize the state with an empty set of active processes and node tracking
    state = %{active_processes: MapSet.new(), table: table, processes_by_node: %{}}
    
    # Broadcast initial node status including self
    broadcast_node_status()
    
    {:ok, state}
  end

  @impl true
  def handle_cast({:register_process, n}, state) do
    # Update processes by node tracking
    current_node = node()
    node_processes = Map.get(state.processes_by_node, current_node, [])
    updated_processes = [n | node_processes]
    updated_state = %{state | processes_by_node: Map.put(state.processes_by_node, current_node, updated_processes)}
    
    # Broadcast updated node status
    broadcast_node_status()

    # Broadcast that a new process was registered
    Phoenix.PubSub.broadcast(
      PrimeScaler.PubSub,
      "primes",
      {:process_registered, n}
    )

    {:noreply, updated_state}
  end

  @impl true
  def handle_info({:nodedown, node}, state) do
    Logger.warning("Node #{node} has left the cluster")
    
    # Update processes by node count
    processes_by_node = Map.delete(state.processes_by_node, node)
    
    # Broadcast updated node status
    broadcast_node_status()

    # Broadcast that processes may have terminated
    Phoenix.PubSub.broadcast(
      PrimeScaler.PubSub,
      "primes",
      {:process_registered, nil}
    )

    {:noreply, %{state | processes_by_node: processes_by_node}}
  end

  @impl true
  def handle_info({:nodeup, node}, state) do
    Logger.info("Node #{node} has joined the cluster")
    
    # Broadcast updated node status
    broadcast_node_status()

    # Broadcast process update
    Phoenix.PubSub.broadcast(
      PrimeScaler.PubSub,
      "primes",
      {:process_registered, nil}
    )

    {:noreply, state}
  end

  defp broadcast_node_status do
    nodes = [node() | Node.list()]
    Phoenix.PubSub.broadcast(
      PrimeScaler.PubSub,
      "primes",
      {:node_status_changed, nodes}
    )
  end
end
