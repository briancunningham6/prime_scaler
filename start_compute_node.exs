
# Configure the application for compute-only mode
Application.put_env(:prime_scaler, PrimeScalerWeb.Endpoint, server: false)
Application.put_env(:prime_scaler, :distribution, enabled: true, computation_only: true)

# Start required applications
Application.ensure_all_started(:prime_scaler)

# Connect to the primary node
Node.connect(:"primary@192.168.64.1")

IO.puts("Compute node started and connected to #{inspect Node.list()}")
IO.puts("Press Ctrl+C twice to exit")

# Keep the script running
:timer.sleep(:infinity)
