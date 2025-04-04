#!/bin/bash

# Kill any existing beam/erlang processes
pkill beam || true
pkill epmd || true

# Start epmd daemon
epmd -daemon

# Create a new tmux session detached
tmux new-session -d -s prime_scaler

# Start primary node in first window
tmux send-keys -t prime_scaler:0 "iex --name primary@127.0.0.1 --cookie prime_scaler -S mix" C-m

# Create and start compute node 1
tmux new-window -t prime_scaler:1
tmux send-keys -t prime_scaler:1 "iex --name compute1@127.0.0.1 --cookie prime_scaler -S mix run start_compute_node.exs" C-m

# Create and start compute node 2
tmux new-window -t prime_scaler:2
tmux send-keys -t prime_scaler:2 "iex --name compute2@127.0.0.1 --cookie prime_scaler -S mix run start_compute_node.exs" C-m

# Attach to the tmux session
tmux attach-session -t prime_scaler