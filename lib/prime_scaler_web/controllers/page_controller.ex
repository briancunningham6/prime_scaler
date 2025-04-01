defmodule PrimeScalerWeb.PageController do
  use PrimeScalerWeb, :controller

  def home(conn, _params) do
    # Redirect to the prime live view
    redirect(conn, to: ~p"/primes")
  end
end
