import Config

# Configures the endpoint
config :prime_scaler, PrimeScalerWeb.Endpoint,
  url: [host: "localhost"],
  render_errors: [
    formats: [html: PrimeScalerWeb.ErrorHTML, json: PrimeScalerWeb.ErrorJSON],
    layout: false
  ],
  pubsub_server: PrimeScaler.PubSub,
  live_view: [signing_salt: "rRXsDBgz"]

# Configure esbuild
config :esbuild,
  version: "0.17.11",
  default: [
    args:
      ~w(js/app.js --bundle --target=es2017 --outdir=../priv/static/assets --external:/fonts/* --external:/images/*),
    cd: Path.expand("../assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]

# Tailwind CSS is loaded via CDN in the root layout

# Import environment specific config
import_config "#{config_env()}.exs"
