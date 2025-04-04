
import Config

# Disable the web interface
config :prime_scaler, PrimeScalerWeb.Endpoint,
  server: false

# Enable distributed computation
config :prime_scaler, :distribution,
  enabled: true,
  computation_only: true,
  node_selection_strategy: :remote_first
