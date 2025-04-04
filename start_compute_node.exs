
# Configure the application for compute-only mode
Application.put_env(:prime_scaler, :distribution, enabled: true, computation_only: true)

# Ensure web endpoint is not started for compute nodes
Application.put_env(:phoenix, :serve_endpoints, false)
Application.delete_env(:prime_scaler, PrimeScalerWeb.Endpoint)

# Only start required applications
Application.load(:prime_scaler)
Application.delete_env(:prime_scaler, PrimeScalerWeb.Endpoint)

# Start only required applications
Application.ensure_all_started(:logger)
Application.ensure_all_started(:phoenix_pubsub)
Application.ensure_all_started(:prime_scaler)

# Try to connect to the primary node with retries
primary_node = :"primary@192.168.64.1"

defmodule ConnectionHelper do
  @max_retries 10

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
        IO.puts("Failed to connect after #{@max_retries} attempts")
        false
      end
    end
  end
end

if ConnectionHelper.connect_with_retry(primary_node, ConnectionHelper.@max_retries) do
  IO.puts("Compute node started and connected to #{inspect Node.list()}")
else
  IO.puts("Could not establish connection to primary node")
end

IO.puts("Press Ctrl+C twice to exit")

# Keep the script running
:timer.sleep(:infinity)
