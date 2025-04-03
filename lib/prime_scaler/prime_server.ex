
defmodule PrimeScaler.PrimeServer do
  @moduledoc """
  GenServer responsible for calculating and caching prime numbers.
  Each instance of this server is responsible for calculating a specific prime number.
  """
  use GenServer
  require Logger
  alias PrimeScaler.PrimeCalculator
  alias PrimeScaler.PrimeRegistry

  # Client API

  @doc """
  Starts a new Prime Server process.
  """
  def start_link(n) when is_integer(n) and n > 0 and n <= 10_000 do
    # Select a target node using round-robin among connected nodes
    nodes = [Node.self() | Node.list()]
    target_node = select_target_node(nodes)
    
    # First register the process name
    PrimeRegistry.register_process(n)
    
    # Start the GenServer on the selected node with the registered name
    case :rpc.call(target_node, GenServer, :start_link, [__MODULE__, n, [name: via_tuple(n)]]) do
      {:ok, pid} = result ->
        Logger.info("Started prime server for #{n} on node #{target_node}")
        result
      {:error, {:already_started, pid}} ->
        Logger.info("Process for #{n} already exists")
        {:ok, pid}
      error ->
        Logger.error("Failed to start GenServer: #{inspect(error)}")
        error
    end
  end

  @doc """
  Gets the nth prime number. If the server for that prime number
  doesn't exist yet, it creates one.
  """
  def get_prime(n) when is_integer(n) and n > 0 and n <= 10_000 do
    # Check if the process exists or create it
    case PrimeRegistry.lookup(n) do
      nil ->
        # Start a new process and get the prime
        {:ok, pid} = start_link(n)
        GenServer.call(pid, :get_prime)
      pid ->
        # Use the existing process
        GenServer.call(pid, :get_prime)
    end
  end

  # Server Callbacks

  @impl true
  def init(n) do
    # Register this process with the registry
    PrimeRegistry.register_process(n)

    # We initially don't calculate the prime number
    # but wait for someone to request it
    {:ok, %{n: n, prime: nil}}
  end

  @impl true
  def handle_call(:get_prime, _from, %{n: n, prime: nil} = state) do
    # Calculate the prime number when first requested
    Logger.info("Calculating #{n}th prime number")
    prime = case Process.get(:calculation_method, :elixir) do
      :go ->
        try do
          {result, 0} = System.cmd(Path.join(File.cwd!(), "prime_go"), [Integer.to_string(n)])
          String.to_integer(result)
        rescue
          _ ->
            # Log the failure and fallback to Elixir implementation
            Logger.warn("Go calculation failed for n=#{n}, falling back to Elixir implementation")
            PrimeCalculator.calculate_prime(n)
        end
      _ ->
        PrimeCalculator.calculate_prime(n)
    end

    # Store the result in ETS for quick restart recovery
    PrimeRegistry.store_prime(n, prime)

    # Broadcast that a new prime has been calculated
    Phoenix.PubSub.broadcast(
      PrimeScaler.PubSub,
      "primes",
      {:prime_calculated, n, prime}
    )

    {:reply, prime, %{state | prime: prime}}
  end

  # Select a target node using round-robin distribution
  defp select_target_node(nodes) do
    # Get the last used node index from the process dictionary
    last_index = Process.get(:last_node_index, -1)
    next_index = rem(last_index + 1, length(nodes))
    
    # Store the new index
    Process.put(:last_node_index, next_index)
    
    # Return the selected node
    Enum.at(nodes, next_index)
  end
  end

  @impl true
  def handle_call(:get_prime, _from, %{prime: prime} = state) when not is_nil(prime) do
    # Return the cached prime number
    {:reply, prime, state}
  end

  # Helper function to create the process registration name
  defp via_tuple(n) do
    {:via, Registry, {PrimeRegistry.registry_name(), n}}
  end
end
