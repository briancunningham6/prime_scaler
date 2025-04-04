
defmodule PrimeScaler.PrimeServerTest do
  use ExUnit.Case
  alias PrimeScaler.PrimeServer

  test "get_prime returns correct values" do
    {:ok, _pid} = PrimeServer.start_link(1)
    assert PrimeServer.get_prime(1) == 2
  end

  test "server maintains state" do
    {:ok, pid} = PrimeServer.start_link(2)
    assert PrimeServer.get_prime(2) == 3
    assert Process.alive?(pid)
  end
end
