# PrimeScaler

<<<<<<< HEAD
PrimeScaler is an educational Elixir application demonstrating process management and scalability through prime number calculations.

## Features

- Calculate nth prime numbers (from 1 to 10,000)
- Visual 2D grid representation of active Elixir processes
- Process-per-integer approach for calculation caching
- Demonstrates Elixir's concurrency model and BEAM VM capabilities

## Technology Stack

- Elixir
- Phoenix Framework
- Phoenix LiveView for real-time updates
- Tailwind CSS (via CDN)

## Getting Started

### Prerequisites

- Elixir 1.14 or later
- Erlang/OTP 25 or later
- Phoenix Framework 1.7 or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/briancunningham6/prime_scaler.git
   cd prime_scaler
   ```

2. Install dependencies:
   ```bash
   mix deps.get
   ```

3. Start the Phoenix server:
   ```bash
   mix phx.server
   ```

4. Visit [`localhost:4000`](http://localhost:4000) in your browser.

## How It Works

The application creates a separate Elixir process for each requested prime number calculation. Once calculated, these numbers are cached in their respective processes for future access. The grid visualization shows which numbers have active processes.

Key components:
- `PrimeCalculator`: Implements the prime number calculation algorithm
- `PrimeServer`: GenServer that handles calculation and caching
- `PrimeRegistry`: Manages the registry of calculation processes
- `PrimeLive`: LiveView interface for user interaction

## Reset Functionality

The "Reset System" button in the top-right corner terminates all active processes and clears the cache, allowing you to start with a clean slate.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
=======
An educational Elixir application demonstrating process management and scalability through prime number calculations.

## Overview

PrimeScaler is a Phoenix LiveView application that helps developers understand Elixir's concurrency model and the BEAM virtual machine's scalability features. It provides a visual representation of Elixir processes that calculate prime numbers.

## Features

- Calculate the nth prime number (where n is between 1 and 10,000)
- Visualize active Elixir processes in a 2D grid
- Reuse existing processes for previously calculated values
- Reset the system to terminate all processes
- Educational tool for learning about Elixir's concurrency model

## Installation

1. Make sure you have Elixir installed (version 1.14 or later)
2. Clone this repository
3. Install dependencies with `mix deps.get`
4. Start the Phoenix server with `mix phx.server`

Now you can visit [`localhost:5000`](http://localhost:5000) from your browser.

## How It Works

### Prime Number Calculation

When a user submits a number n, the application:

1. Checks if there's already a process calculating/caching this prime number
2. If not, it spawns a new Elixir process to calculate the nth prime
3. If yes, it reuses the existing process to get the result immediately

### Process Management

The application uses:

- A Registry to track and look up processes by their assigned number
- GenServer processes for calculating and caching prime numbers
- ETS tables for fast lookups of calculated values
- Phoenix PubSub for broadcasting updates to connected clients

## Scalability

To scale the application across multiple nodes:

1. Start the application with a node name: `elixir --name node1@127.0.0.1 -S mix phx.server`
2. In another terminal, start a second node: `elixir --name node2@127.0.0.1 -S mix`
3. Connect the nodes by running in the second node's console: `Node.connect(:"node1@127.0.0.1")`
4. Start a distributed console with: `iex --name console@127.0.0.1 -S mix`
5. Connect to your nodes: `Node.connect(:"node1@127.0.0.1")` and `Node.connect(:"node2@127.0.0.1")`

Now the prime calculation workload can be distributed across multiple nodes.

## Educational Value

This application demonstrates several key Elixir and OTP concepts:

- Concurrency with lightweight processes
- Process isolation and fault tolerance
- State management with GenServer
- Process registry and lookup patterns
- Distributed computing with connected nodes
- Real-time updates with Phoenix LiveView

## License

This project is licensed under the MIT License.
>>>>>>> aea05f2 (Set up initial project files and implement prime number calculation application.)
