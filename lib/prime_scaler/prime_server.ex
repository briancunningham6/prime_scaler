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
    current_node = Node.self()
    all_nodes = [current_node | Node.list()]
    
    # Select target node using round-robin or any other strategy
    target_node = case all_nodes do
      [] -> current_node
      nodes -> Enum.random(nodes)
    end
    
    # Start the GenServer on the target node with proper registration
    case :rpc.call(target_node, GenServer, :start_link, 
      [__MODULE__, n, [name: {:via, Registry, {PrimeRegistry.registry_name(), n}}]]) do
      {:ok, pid} ->
        Logger.info("Started prime server for #{n} on node #{target_node}")
        {:ok, pid}
      {:badrpc, reason} ->
        Logger.error("Failed to start GenServer on node #{target_node}: #{inspect(reason)}")
        # Fallback to local node if remote fails
        GenServer.start_link(__MODULE__, n, name: via_tuple(n))
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
    # We're not including calculation time here since it's now measured in the LiveView
    Phoenix.PubSub.broadcast(
      PrimeScaler.PubSub,
      "primes",
      {:prime_calculated, n, prime}
    )

    {:reply, prime, %{state | prime: prime}}
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
