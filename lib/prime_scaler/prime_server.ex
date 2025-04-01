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
    GenServer.start_link(__MODULE__, n, name: via_tuple(n))
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
    prime = PrimeCalculator.calculate_prime(n)
    
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
