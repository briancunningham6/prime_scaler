# PrimeScaler

PrimeScaler is an educational Elixir application demonstrating process management and scalability through prime number calculations.

## Features

- Calculate nth prime numbers (from 1 to 10,000)
- Visual 2D grid representation of active Elixir processes
- Process-per-integer approach for calculation caching
- Demonstrates Elixir's concurrency model and BEAM VM capabilities
- Distributed computation across multiple nodes

## Technology Stack

- Elixir
- Phoenix Framework
- Phoenix LiveView for real-time updates
- Tailwind CSS
- Distributed Erlang for multi-node operation

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

4. Visit [`localhost:5000`](http://localhost:5000) in your browser.

## How It Works

The application creates a separate Elixir process for each requested prime number calculation. Once calculated, these numbers are cached in their respective processes for future access. The grid visualization shows which numbers have active processes.

### Load Distribution

The system distributes calculation load across multiple nodes using consistent hashing:

1. When a new prime calculation is requested, the system:
   - Checks if a process already exists for that number
   - If not, uses consistent hashing to select a node based on the number
   - Starts the calculation process on the selected node
   - Returns the result to the requesting node

2. The `PrimeRegistry` manages process distribution by:
   - Using global registration to maintain process state across nodes
   - Implementing consistent hashing for even distribution
   - Handling node selection and process location

3. Benefits:
   - Even distribution of calculation load
   - Automatic failover if a node becomes unavailable
   - Process state preservation across the cluster
   - Efficient resource utilization across all nodes

### Failure Handling

The system implements robust failure handling, particularly for the Go-based prime calculator:

1. Process Isolation:
   - Each prime calculation runs in its own process
   - Failures in one calculation don't affect other ongoing calculations
   - The LiveView interface remains responsive regardless of calculation failures

2. Go Calculator Fallback:
   - If the Go implementation fails, the system automatically falls back to the Elixir implementation
   - Failures are logged for monitoring and debugging
   - The user experience remains uninterrupted during fallbacks

3. Error Recovery:
   - Failed calculations are automatically retried using the Elixir implementation
   - Process state is preserved even if calculations fail
   - The system maintains consistency across nodes during failures

Key components:
- `PrimeCalculator`: Implements the prime number calculation algorithm
- `PrimeServer`: GenServer that handles calculation and caching
- `PrimeRegistry`: Manages the registry of calculation processes and node selection
- `PrimeLive`: LiveView interface for user interaction

## Reset Functionality

The "Reset System" button in the top-right corner terminates all active processes and clears the cache, allowing you to start with a clean slate.

## Creating a Release for Distribution

PrimeScaler can be deployed as a release to multiple machines, allowing distributed computation across nodes.

### Building a Release on macOS

1. Make sure you have completed the installation steps above.

2. Create a production release:
   ```bash
   # Set MIX_ENV to prod
   export MIX_ENV=prod
   
   # Compile assets
   mix assets.deploy
   
   # Generate a release
   mix release
   ```

3. The release will be created in the `_build/prod/rel/prime_scaler` directory.

4. Package the release for distribution:
   ```bash
   cd _build/prod/rel
   tar -czf prime_scaler_release.tar.gz prime_scaler
   ```

### Deploying to Another macOS Machine

1. Copy the release package to the target machine:
   ```bash
   scp prime_scaler_release.tar.gz user@target-machine:/desired/path/
   ```

2. On the target machine, extract the release:
   ```bash
   cd /desired/path
   tar -xzf prime_scaler_release.tar.gz
   ```

## Setting Up Distributed Nodes

You can run PrimeScaler in a distributed configuration to spread the computation across multiple machines.

### macOS-Specific Distributed Setup

macOS has some specific requirements for distributed Erlang nodes to communicate properly:

1. Ensure that your firewall allows connections on the required Erlang ports (typically 4369 for EPMD and dynamic ports in the range 9000-9500).

2. On both machines, enable incoming connections for `beam.smp` in System Preferences > Security & Privacy > Firewall > Firewall Options.

3. Make sure your hostnames are correctly set up. You can check and set your hostname with:
   ```bash
   # Check your current hostname
   scutil --get LocalHostName
   
   # Set a hostname if needed
   sudo scutil --set LocalHostName your-hostname
   ```

4. Add entries to `/etc/hosts` on both machines to ensure they can resolve each other:
   ```
   # /etc/hosts
   192.168.1.10 primary-mac
   192.168.1.11 secondary-mac
   ```

### Primary Node (with UI)

1. On your main macOS machine (with the UI), start the application with a specific node name:
   ```bash
   # For a development environment
   iex --name primary@192.168.1.10 -S mix phx.server
   
   # For a production release
   /path/to/prime_scaler/bin/prime_scaler start --name primary@192.168.1.10
   ```
   
   Replace `192.168.1.10` with the actual IP address of your machine.

### Secondary Nodes (computation only)

After deploying a release to a secondary macOS machine:

1. Start the application as a computation-only node:
   ```bash
   # For a development environment
   iex --name secondary@192.168.1.11 --cookie prime_scaler -S mix
   
   # For a production release
   /path/to/prime_scaler/bin/prime_scaler start --name secondary@192.168.1.11
   ```
   
   Replace `192.168.1.11` with the actual IP address of your secondary machine.

2. Inside the Elixir shell (iex) of the secondary node, connect to the primary node:
   ```elixir
   Node.connect(:"primary@192.168.1.10")
   ```

3. Verify the connection:
   ```elixir
   Node.list()
   # Should show the primary node in the list
   ```

### Setting Up a Cookie File for macOS

For security, nodes require the same cookie value to communicate:

1. Create a `.erlang.cookie` file in your home directory on all machines with the same value:
   ```bash
   echo "prime_scaler_cookie" > ~/.erlang.cookie
   chmod 400 ~/.erlang.cookie
   ```

2. For macOS, you might need to restart the terminal session after creating or modifying the cookie file.

### macOS Security Considerations

1. If you encounter security warnings when running a release downloaded from another machine, you might need to remove the quarantine attribute:
   ```bash
   xattr -d com.apple.quarantine /path/to/prime_scaler/bin/prime_scaler
   ```

2. You might also need to set the application as executable:
   ```bash
   chmod +x /path/to/prime_scaler/bin/prime_scaler
   ```

### Configuring Distributed Operations

1. To explicitly enable distributed processing, add this to your application config (`config/config.exs`):
   ```elixir
   config :prime_scaler, :distribution,
     enabled: true,
     node_selection_strategy: :round_robin
   ```

2. Available strategies:
   - `:round_robin` - distributes calculations evenly across nodes
   - `:local_first` - uses local node unless overloaded
   - `:remote_first` - prioritizes remote nodes for calculations

## Setting Up Computation-Only Nodes on macOS

For optimal performance in a distributed setup, you can configure secondary macOS machines to run as computation-only nodes:

### Method 1: Using a Full Release

1. Follow the earlier instructions to create a release and deploy it to the secondary machine.

2. Create a configuration file for the computation-only node:
   ```bash
   # On the secondary machine
   mkdir -p /path/to/prime_scaler/config
   cat > /path/to/prime_scaler/config/compute_only.exs << 'EOF'
   import Config
   
   # Disable the web interface
   config :prime_scaler, PrimeScalerWeb.Endpoint,
     server: false
   
   # Enable distributed computation
   config :prime_scaler, :distribution,
     enabled: true,
     node_selection_strategy: :remote_first,
     computation_only: true
   EOF
   ```

3. Start the node with this special configuration:
   ```bash
   export RELEASE_NODE=secondary@192.168.1.11
   export RELEASE_COOKIE=prime_scaler_cookie
   export RELEASE_CONFIG_DIR=/path/to/prime_scaler/config
   /path/to/prime_scaler/bin/prime_scaler start --config compute_only.exs
   ```

### Method 2: Using a Minimal Setup

If you only want to run the computational part on a secondary macOS machine that already has Elixir installed:

1. Clone the repository (or copy just the essential files):
   ```bash
   git clone https://github.com/yourusername/prime_scaler.git
   cd prime_scaler
   ```

2. Install only the required dependencies:
   ```bash
   mix deps.get --only prod
   ```

3. Create a simple script to start a compute node:
   ```bash
   cat > start_compute_node.exs << 'EOF'
   # Start a compute-only node
   Application.put_env(:prime_scaler, :distribution, 
     enabled: true,
     computation_only: true,
     node_selection_strategy: :remote_first
   )
   
   # Only start the minimum required applications
   Application.ensure_all_started(:prime_scaler)
   
   # Connect to the primary node (replace with your actual primary node name)
   Node.connect(:"primary@192.168.1.10")
   
   IO.puts("Compute node started and connected to #{inspect Node.list()}")
   IO.puts("Press Ctrl+C twice to exit")
   
   # Keep the script running
   :timer.sleep(:infinity)
   EOF
   ```

4. Run the compute node:
   ```bash
   elixir --name secondary@192.168.1.11 --cookie prime_scaler start_compute_node.exs
   ```

## Monitoring the Cluster

1. On any node, you can check the status of the cluster:
   ```elixir
   Node.list()                                # Lists all connected nodes
   :rpc.call(node_name, PrimeScaler, :stats, []) # Gets stats from a specific node
   ```

2. For graphical monitoring, you can use the Phoenix LiveDashboard on the primary node:
   ```elixir
   # Add this to your endpoint.ex or router.ex to enable LiveDashboard
   import Phoenix.LiveDashboard.Router
   
   # In your router
   scope "/" do
     pipe_through :browser
     live_dashboard "/dashboard", metrics: PrimeScalerWeb.Telemetry
   end
   ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.