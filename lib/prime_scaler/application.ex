defmodule PrimeScaler.Application do
  @moduledoc false
  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      PrimeScalerWeb.Telemetry,
      
      # Start the PubSub system first
      {Phoenix.PubSub, name: PrimeScaler.PubSub},
      
      # Start the Registry globally for Prime Calculation Processes
      {Registry, [keys: :unique, name: PrimeScaler.PrimeRegistry.registry_name(), partitions: System.schedulers_online()]},
      
      # Start the ETS table owner for prime numbers
      PrimeScaler.PrimeRegistry,
      
      # Start the Endpoint (http/https)
      PrimeScalerWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: PrimeScaler.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    PrimeScalerWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
