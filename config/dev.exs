import Config

# For development, we disable any cache and enable
# debugging and code reloading.
config :prime_scaler, PrimeScalerWeb.Endpoint,
  # Binding to loopback ipv4 address prevents access from other machines.
  # Change to `ip: {0, 0, 0, 0}` to allow access from other machines.
  http: [ip: {0, 0, 0, 0}, port: 5000],
  check_origin: false,
  code_reloader: true,
  debug_errors: true,
  secret_key_base: "N2sVdgkxZDIUBUzkB6eqeUsPrb1W79Uhu7wUDBT+GgY5c0dH6pUYpQR2kU5aInwc",
  watchers: [
    esbuild: {Esbuild, :install_and_run, [:default, ~w(--sourcemap=inline --watch)]},
    tailwind: {Tailwind, :install_and_run, [:default, ~w(--watch)]}
  ]

# Watch static and templates for browser reloading.
config :prime_scaler, PrimeScalerWeb.Endpoint,
  live_reload: [
    patterns: [
      ~r"priv/static/.*(js|css|png|jpeg|jpg|gif|svg)$",
      ~r"priv/gettext/.*(po)$",
      ~r"lib/prime_scaler_web/(controllers|live|components)/.*(ex|heex)$"
    ]
  ]

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# Set a higher stacktrace during development.
config :phoenix, :stacktrace_depth, 20

# Initialize plugs at runtime for faster development compilation
config :phoenix, :plug_init_mode, :runtime
