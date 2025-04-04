
import Config

# Completely disable the web interface
config :prime_scaler, PrimeScalerWeb.Endpoint,
  server: false,
  http: false,
  enabled: false

# Enable distributed computation
config :prime_scaler, :distribution,
  enabled: true,
  computation_only: true,
  node_selection_strategy: :remote_first
