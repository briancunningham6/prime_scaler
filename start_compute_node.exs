
# Try to connect to the primary node with retries
primary_node = :"primary@127.0.0.1"

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
        IO.puts("Failed to connect after many attempts")
        false
      end
    end
  end
end

if ConnectionHelper.connect_with_retry(primary_node, 15) do
  IO.puts("Compute node started and connected to #{inspect Node.list()}")
else
  IO.puts("Could not establish connection to primary node")
end

IO.puts("Press Ctrl+C twice to exit")

# Keep the script running
:timer.sleep(:infinity)
