#!/bin/bash

while true; do
  git pull
 iex --name primary@192.168.64.1 --cookie prime_scaler -S mix
  echo "IEx exited. Restarting in 2 seconds..."
  sleep 2
done