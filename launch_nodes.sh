
#!/bin/bash

# Kill any existing beam/erlang processes
pkill beam || true
pkill epmd || true

# Start epmd daemon
epmd -daemon

# Function to wait for a node to be ready
wait_for_node() {
  local node=$1
  local max_attempts=30
  local attempt=1
  
  while [ $attempt -le $max_attempts ]; do
    if epmd -names | grep -q "$node"; then
      return 0
    fi
    sleep 1
    attempt=$((attempt + 1))
  done
  return 1
}

# Start primary node in background
echo "Starting primary node..."
iex --name primary@192.168.64.1 --cookie prime_scaler -S mix &
PRIMARY_PID=$!

# Wait for primary node to be ready
wait_for_node "primary"

# Start two compute-only nodes
echo "Starting compute node 1..."
iex --name compute1@192.168.64.1 --cookie prime_scaler -S mix run start_compute_node.exs &
COMPUTE1_PID=$!

echo "Starting compute node 2..."
iex --name compute2@192.168.64.1 --cookie prime_scaler -S mix run start_compute_node.exs &
COMPUTE2_PID=$!

# Wait for all processes
wait $PRIMARY_PID $COMPUTE1_PID $COMPUTE2_PID
