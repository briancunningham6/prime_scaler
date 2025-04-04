
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
    # Get processes from ETS table and verify they're alive
    case :ets.tab2list(:processes_table) do
      [] -> []
      processes ->
        processes
        |> Enum.map(fn {n, _node} -> n end)
        |> Enum.filter(fn n ->
          case Registry.lookup(registry_name(), n) do
            [{pid, _}] -> Process.alive?(pid)
            [] -> false
          end
        end)
    end
  end

  def get_processes_by_node do
    # Get all nodes including self
    all_nodes = [node() | Node.list()]
    base_counts = Map.new(all_nodes, fn node -> {node, 0} end)
    
    # Query each node for its local processes
    process_counts = Enum.reduce(all_nodes, %{}, fn target_node, acc ->
      case :rpc.call(target_node, Registry, :select, [registry_name(), [{{:_, :"$1", :_}, [], [:"$1"]}]]) do
        {:badrpc, _} -> 
          Map.put(acc, target_node, 0)
        processes when is_list(processes) ->
          Map.put(acc, target_node, length(processes))
      end
    end)
    
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
    current_node = node()
    :ets.insert(:processes_table, {n, current_node})
    # Register the process in the registry and update node counts
    GenServer.cast(__MODULE__, {:register_process, n})
    
    # Monitor the process for termination
    if pid = lookup(n) do
      Process.monitor(pid)
    end
  end

  def handle_info({:DOWN, _ref, :process, pid, _reason}, state) do
    # Find the number associated with this pid
    n = :ets.select(:processes_table, [{{:"$1", :_}, [], [:"$1"]}])
        |> Enum.find(fn num -> 
          case Registry.lookup(registry_name(), num) do
            [{^pid, _}] -> true
            _ -> false
          end
        end)
    
    if n do
      :ets.delete(:processes_table, n)
      Phoenix.PubSub.broadcast(
        PrimeScaler.PubSub,
        "primes",
        {:process_terminated, n}
      )
    end
    
    {:noreply, state}
  end

  @impl true
  def init(_) do
    # Monitor node connections/disconnections
    :net_kernel.monitor_nodes(true)

    # Create an ETS table to store prime numbers and process state
    table = :ets.new(@table_name, [:set, :named_table, :public, read_concurrency: true])
    process_table = :ets.new(:processes_table, [:set, :named_table, :public])

    # Initialize the state with process tracking
    state = %{table: table, process_table: process_table, processes_by_node: %{}}
    
    # Broadcast initial node status including self
    broadcast_node_status()
    
    {:ok, state}
  end

  def reset_system do
    :ets.delete_all_objects(@table_name)
    :ets.delete_all_objects(:processes_table)
    Phoenix.PubSub.broadcast(PrimeScaler.PubSub, "primes", :system_reset)
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
