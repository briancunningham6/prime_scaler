# PrimeScaler

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
   git clone https://github.com/yourusername/prime_scaler.git
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