defmodule PrimeScaler.PrimeRegistry do
  @moduledoc """
  Manages the registry of prime calculation processes and provides
  an ETS table for fast lookups of calculated prime numbers.
  """
  use GenServer
  require Logger

  @registry_name :prime_registry
  @table_name :prime_table

  # Client API

  def start_link(_) do
    GenServer.start_link(__MODULE__, nil, name: __MODULE__)
  end

  @doc """
  Returns the registry name used for process registration.
  """
  def registry_name, do: @registry_name

  @doc """
  Looks up a process by its index (n).
  Returns the PID if found, nil otherwise.
  """
  def lookup(n) when is_integer(n) and n > 0 and n <= 10_000 do
    case Registry.lookup(@registry_name, n) do
      [{pid, _}] -> pid
      [] -> nil
    end
  end

  @doc """
  Registers a process with the given index in our local tracking.
  """
  def register_process(n) when is_integer(n) and n > 0 and n <= 10_000 do
    GenServer.cast(__MODULE__, {:register, n, self()})
  end

  @doc """
  Stores a calculated prime number in the ETS table.
  """
  def store_prime(n, prime) when is_integer(n) and n > 0 and n <= 10_000 do
    :ets.insert(@table_name, {n, prime})
  end

  @doc """
  Retrieves a prime number from the ETS table.
  Returns the prime number if found, nil otherwise.
  """
  def get_prime(n) when is_integer(n) and n > 0 and n <= 10_000 do
    case :ets.lookup(@table_name, n) do
      [{^n, prime}] -> prime
      [] -> nil
    end
  end

  @doc """
  Returns a list of all the active prime calculation process indices.
  """
  def get_active_processes do
    GenServer.call(__MODULE__, :get_active_processes)
  end

  @doc """
  Resets the system by terminating all prime calculation processes.
  """
  def reset_system do
    GenServer.call(__MODULE__, :reset_system)
  end

  # Server Callbacks

  @impl true
  def init(_) do
    # Create an ETS table to store prime numbers
    table = :ets.new(@table_name, [:set, :named_table, :public, read_concurrency: true])

    # Initialize the state with an empty set of active processes
    {:ok, %{active_processes: MapSet.new(), table: table}}
  end

  @impl true
  def handle_cast({:register, n, pid}, state) do
    # Monitor the process so we know when it dies
    Process.monitor(pid)

    # Add the process to our tracking
    updated_processes = MapSet.put(state.active_processes, n)

    # Broadcast that a new process has been registered
    Phoenix.PubSub.broadcast(
      PrimeScaler.PubSub,
      "primes",
      {:process_registered, n}
    )

    {:noreply, %{state | active_processes: updated_processes}}
  end

  @impl true
  def handle_call(:get_active_processes, _from, state) do
    {:reply, MapSet.to_list(state.active_processes), state}
  end

  @impl true
  def handle_call(:reset_system, _from, state) do
    # Get all processes from the registry
    processes = Registry.select(@registry_name, [{{:_, :"$1", :_}, [], [:"$1"]}])

    # Terminate all active processes
    Enum.each(processes, fn pid ->
      Process.exit(pid, :shutdown)
    end)

    # Clear the ETS table
    :ets.delete_all_objects(@table_name)

    # Reset our tracking
    updated_state = %{state | active_processes: MapSet.new()}

    # Broadcast that the system has been reset
    Phoenix.PubSub.broadcast(
      PrimeScaler.PubSub,
      "primes",
      :system_reset
    )

    {:reply, :ok, updated_state}
  end

  @impl true
  def handle_info({:DOWN, _ref, :process, _pid, _reason}, state) do
    # When a process dies, we need to update our tracking
    # We'll do this by rebuilding the set of active processes from the registry
    active_processes =
      Registry.select(@registry_name, [{{:"$1", :_, :_}, [], [:"$1"]}])
      |> Enum.reduce(MapSet.new(), fn n, acc ->
        MapSet.put(acc, n)
      end)

    # Broadcast the updated active processes list
    Phoenix.PubSub.broadcast(
      PrimeScaler.PubSub,
      "primes",
      {:process_registered, nil}
    )

    {:noreply, %{state | active_processes: active_processes}}
  end

  @impl true
  def handle_info({:nodedown, node}, state) do
    Logger.warning("Node #{node} has left the cluster")

    # Broadcast that processes may have terminated
    Phoenix.PubSub.broadcast(
      PrimeScaler.PubSub,
      "primes",
      {:process_registered, nil}
    )

    {:noreply, state}
  end
end