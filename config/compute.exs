
import Config

# Completely disable Phoenix endpoint and ensure no port binding
config :prime_scaler, PrimeScalerWeb.Endpoint,
  server: false,
  http: false,
  enabled: false,
  load_from_system_env: false,
  start_server: false,
  code_reloader: false,
  check_origin: false,
  http: nil,  # Explicitly disable HTTP
  https: nil, # Explicitly disable HTTPS
  url: nil    # Disable URL generation

# Enable distributed computation
config :prime_scaler, :distribution,
  enabled: true,
  computation_only: true,
  node_selection_strategy: :remote_first

# Disable any web-related Phoenix features
config :phoenix, :serve_endpoints, false
