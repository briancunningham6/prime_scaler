import Config

# For production, don't forget to configure the url host
# to something meaningful, Phoenix uses this information
# when generating URLs.

# Configure the HTTP endpoint for production
config :prime_scaler, PrimeScalerWeb.Endpoint,
  http: [
    port: 3000,
    ip: {0, 0, 0, 0}
  ]

# Do not print debug messages in production
config :logger, level: :info

# Runtime production configuration, including reading
# of environment variables, is done on config/runtime.exs.
