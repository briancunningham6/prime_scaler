
import Config

# Completely disable Phoenix endpoint
config :prime_scaler, PrimeScalerWeb.Endpoint,
  server: false,
  http: false,
  enabled: false,
  load_from_system_env: false,
  start_server: false,
  code_reloader: false,
  check_origin: false

# Enable distributed computation
config :prime_scaler, :distribution,
  enabled: true,
  computation_only: true,
  node_selection_strategy: :remote_first
