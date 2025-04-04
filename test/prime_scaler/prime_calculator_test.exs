
defmodule PrimeScaler.PrimeCalculatorTest do
  use ExUnit.Case
  alias PrimeScaler.PrimeCalculator

  test "calculate_prime with valid inputs" do
    assert PrimeCalculator.calculate_prime(1) == 2
    assert PrimeCalculator.calculate_prime(2) == 3
    assert PrimeCalculator.calculate_prime(3) == 5
    assert PrimeCalculator.calculate_prime(4) == 7
    assert PrimeCalculator.calculate_prime(5) == 11
  end

  test "calculate_prime with edge cases" do
    assert_raise ArgumentError, fn -> PrimeCalculator.calculate_prime(0) end
    assert_raise ArgumentError, fn -> PrimeCalculator.calculate_prime(-1) end
  end
end
