
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
    Registry.select(registry_name(), [{{:_, :"$1", :_}, [], [:"$1"]}])
    |> Enum.group_by(&node(Process.whereis(&1)))
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

  @impl true
  def init(_) do
    # Monitor node connections/disconnections
    :net_kernel.monitor_nodes(true)

    # Create an ETS table to store prime numbers
    table = :ets.new(@table_name, [:set, :named_table, :public, read_concurrency: true])

    # Initialize the state with an empty set of active processes and node tracking
    {:ok, %{active_processes: MapSet.new(), table: table, processes_by_node: %{}}}
  end

  @impl true
  def handle_info({:nodedown, node}, state) do
    Logger.warning("Node #{node} has left the cluster")
    
    # Update processes by node count
    processes_by_node = Map.delete(state.processes_by_node, node)

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
    
    # Broadcast node connection
    Phoenix.PubSub.broadcast(
      PrimeScaler.PubSub,
      "primes",
      {:process_registered, nil}
    )

    {:noreply, state}
  end
end
