defmodule PrimeScaler.PrimeCalculator do
  @moduledoc """
  Provides functions for calculating prime numbers.
  """

  @doc """
  Calculates the nth prime number.
  
  ## Examples
  
      iex> PrimeScaler.PrimeCalculator.calculate_prime(4)
      7
      
      iex> PrimeScaler.PrimeCalculator.calculate_prime(10)
      29
  """
  def calculate_prime(n) when is_integer(n) and n > 0 do
    find_nth_prime(n, 2, 1)
  end

  defp find_nth_prime(n, current, count) when count == n, do: current
  defp find_nth_prime(n, current, count) do
    if is_prime(current + 1) do
      find_nth_prime(n, current + 1, count + 1)
    else
      find_nth_prime(n, current + 1, count)
    end
  end

  @doc """
  Checks if a number is prime.
  
  ## Examples
  
      iex> PrimeScaler.PrimeCalculator.is_prime(7)
      true
      
      iex> PrimeScaler.PrimeCalculator.is_prime(8)
      false
  """
  def is_prime(2), do: true
  def is_prime(3), do: true
  def is_prime(n) when n <= 1 or rem(n, 2) == 0 or rem(n, 3) == 0, do: false
  def is_prime(n) do
    # Using 6k±1 optimization to check for primality
    max_divisor = :math.sqrt(n) |> Float.floor() |> trunc()
    
    do_is_prime(n, 5, max_divisor)
  end
  
  defp do_is_prime(_, i, max_divisor) when i > max_divisor, do: true
  defp do_is_prime(n, i, max_divisor) do
    if rem(n, i) == 0 or rem(n, i + 2) == 0 do
      false
    else
      do_is_prime(n, i + 6, max_divisor)
    end
  end

  @doc """
  Counts the number of primes up to a given number.
  
  ## Examples
  
      iex> PrimeScaler.PrimeCalculator.count_primes_up_to(10)
      4  # 2, 3, 5, 7
  """
  def count_primes_up_to(n) do
    2..n
    |> Enum.count(&is_prime/1)
  end
end
