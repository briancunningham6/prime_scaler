defmodule PrimeScaler do
  @moduledoc """
  PrimeScaler is an educational Elixir application that demonstrates 
  process management and scalability through prime number calculations.
  
  The main features include:
  - Calculating prime numbers with dedicated Elixir processes
  - Visualizing active processes in a 2D grid
  - Managing process lifecycle and reusing existing processes
  - Demonstrating BEAM's scalability capabilities
  """

  @doc """
  Calculates the nth prime number.
  
  ## Examples
  
      iex> PrimeScaler.calculate_prime(4)
      7
      
      iex> PrimeScaler.calculate_prime(10)
      29
  """
  defdelegate calculate_prime(n), to: PrimeScaler.PrimeCalculator

  @doc """
  Gets the nth prime number from the server.
  If it has already been calculated, returns the cached result.
  Otherwise, calculates it and caches the result.
  """
  defdelegate get_prime(n), to: PrimeScaler.PrimeServer

  @doc """
  Resets the system by terminating all prime calculation processes.
  """
  defdelegate reset_system(), to: PrimeScaler.PrimeRegistry

  @doc """
  Returns a list of all the active prime calculation process indices.
  """
  defdelegate get_active_processes(), to: PrimeScaler.PrimeRegistry
end
