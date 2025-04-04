
# Configure the application for compute-only mode
Application.put_env(:prime_scaler, :distribution, enabled: true, computation_only: true)

# Completely disable the web endpoint
Application.put_env(:prime_scaler, PrimeScalerWeb.Endpoint,
  server: false,
  http: false,
  enabled: false,
  start_server: false
)

# Start only required applications
Application.ensure_all_started(:logger)
Application.ensure_all_started(:phoenix_pubsub)
Application.ensure_all_started(:prime_scaler)

# Try to connect to the primary node with retries
primary_node = :"primary@192.168.64.1"
max_retries = 10

defmodule ConnectionHelper do
  def connect_with_retry(primary_node, retry_count) do
    if Node.connect(primary_node) do
      IO.puts("Successfully connected to primary node!")
      true
    else
      if retry_count > 0 do
        IO.puts("Connection attempt failed. Retrying in 1 second... (#{retry_count} attempts left)")
        :timer.sleep(1000)
        connect_with_retry(primary_node, retry_count - 1)
      else
        IO.puts("Failed to connect after #{max_retries} attempts")
        false
      end
    end
  end
end

if ConnectionHelper.connect_with_retry(primary_node, max_retries) do
  IO.puts("Compute node started and connected to #{inspect Node.list()}")
else
  IO.puts("Could not establish connection to primary node")
end

IO.puts("Press Ctrl+C twice to exit")

# Keep the script running
:timer.sleep(:infinity)
