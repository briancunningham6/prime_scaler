defmodule PrimeScalerWeb.Router do
  use PrimeScalerWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, html: {PrimeScalerWeb.Layouts, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PrimeScalerWeb do
    pipe_through :browser

    get "/", PageController, :home
    live "/primes", PrimeLive
  end

  # Enable LiveDashboard in development
  if Mix.env() == :dev do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: PrimeScalerWeb.Telemetry
    end
  end
end
