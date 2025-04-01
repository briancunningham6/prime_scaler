defmodule PrimeScalerWeb.PrimeLive do
  @moduledoc """
  LiveView for the prime number calculator interface.
  """
  use PrimeScalerWeb, :live_view
  require Logger

  alias PrimeScaler.PrimeServer

  @impl true
  def mount(_params, _session, socket) do
    # Subscribe to the primes topic to receive updates
    Phoenix.PubSub.subscribe(PrimeScaler.PubSub, "primes")

    # Initial socket state
    socket =
      socket
      |> assign(
        n: nil,
        prime_result: nil, 
        active_processes: PrimeScaler.get_active_processes(),
        calculating: false,
        error: nil
      )

    {:ok, socket}
  end

  @impl true
  def handle_event("submit", %{"n" => n_str}, socket) do
    # Parse and validate the input
    case Integer.parse(n_str) do
      {n, _} when n > 0 and n <= 10_000 ->
        # Clear any previous errors
        socket = assign(socket, error: nil, calculating: true)
        
        # Spawn a task to calculate the prime number so the UI remains responsive
        Task.start(fn ->
          result = PrimeServer.get_prime(n)
          send(self(), {:prime_calculated, n, result})
        end)
        
        {:noreply, socket}
        
      {n, _} ->
        {:noreply, assign(socket, error: "Please enter a number between 1 and 10,000", n: n)}
        
      :error ->
        {:noreply, assign(socket, error: "Please enter a valid number", n: nil)}
    end
  end

  @impl true
  def handle_event("reset", _, socket) do
    # Reset the system
    PrimeScaler.reset_system()
    
    # Clear the form and results
    socket =
      socket
      |> assign(
        n: nil,
        prime_result: nil,
        calculating: false,
        error: nil
      )
      
    {:noreply, socket}
  end

  @impl true
  def handle_info({:prime_calculated, n, result}, socket) do
    # Update the socket with the calculated prime
    socket =
      socket
      |> assign(
        n: n,
        prime_result: result,
        calculating: false
      )
      
    {:noreply, socket}
  end

  @impl true
  def handle_info({:process_registered, _n}, socket) do
    # Update the list of active processes
    {:noreply, assign(socket, active_processes: PrimeScaler.get_active_processes())}
  end

  @impl true
  def handle_info(:system_reset, socket) do
    # Update the socket after a system reset
    socket =
      socket
      |> assign(
        active_processes: [],
        n: nil,
        prime_result: nil,
        calculating: false,
        error: nil
      )
      
    {:noreply, socket}
  end

  # Grid helper functions
  
  @doc """
  Calculates the number of rows and columns for the grid.
  """
  def grid_dimensions do
    # 100x100 grid for 10,000 numbers
    rows = 100
    cols = 100
    {rows, cols}
  end
  
  @doc """
  Converts a linear index to row and column.
  """
  def index_to_row_col(index) do
    {rows, cols} = grid_dimensions()
    row = div(index - 1, cols)
    col = rem(index - 1, cols)
    {row, col}
  end
  
  @doc """
  Determines if a cell should be active based on the current active processes.
  """
  def active_cell?(index, active_processes) do
    index in active_processes
  end
  
  @doc """
  Returns the appropriate CSS classes for a grid cell.
  """
  def cell_class(index, active_processes) do
    base_class = "w-2 h-2 border border-gray-300"
    
    if active_cell?(index, active_processes) do
      "#{base_class} bg-blue-500"
    else
      "#{base_class} bg-white"
    end
  end
end
