defmodule PrimeScalerWeb.PageController do
  use PrimeScalerWeb, :controller

  def home(conn, _params) do
    # Redirect to the prime live view (which is now at the root)
    redirect(conn, to: ~p"/")
  end
end
