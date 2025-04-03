defmodule PrimeScalerWeb.PrimeLive do
  @moduledoc """
  LiveView for the prime number calculator interface.
  """
  use PrimeScalerWeb, :live_view
  require Logger

  alias PrimeScaler.PrimeServer

  @impl true
  def mount(_params, _session, socket) do
    if connected?(socket) do
      Phoenix.PubSub.subscribe(PrimeScaler.PubSub, "primes")
    end

    # Get latest state from registry
    active_processes = PrimeScaler.get_active_processes()
    processes_by_node = PrimeScaler.PrimeRegistry.get_processes_by_node()
    connected_nodes = [node() | PrimeScaler.PrimeRegistry.get_connected_nodes()]
    
    # Query each active process to verify it's still alive
    active_processes = Enum.filter(active_processes, fn n -> 
      case PrimeScaler.PrimeRegistry.lookup(n) do
        nil -> false
        pid -> Process.alive?(pid)
      end
    end)

    {:ok,
     assign(socket,
       n: nil,
       error: nil,
       calculating: false,
       prime_result: nil,
       calculation_time: nil,
       active_processes: active_processes,
       calculating_numbers: MapSet.new(),
       prime_values: %{},
       processes_by_node: processes_by_node,
       connected_nodes: connected_nodes
     )}
  end

  @impl true
  def handle_event("submit", %{"n" => n_str, "method" => method}, socket) do
    # Parse and validate the input
    case Integer.parse(n_str) do
      {n, _} when n > 0 and n <= 10_000 ->
        # Clear any previous errors and start calculation
        socket = 
          socket
          |> assign(
            error: nil, 
            calculating: true, 
            n: n, 
            calculation_time: nil, 
            prime_result: nil,
            calculating_numbers: MapSet.put(socket.assigns.calculating_numbers, n)
          )

        # Get the LiveView PID
        pid = self()

        # Spawn a task to calculate the prime number so the UI remains responsive
        Task.start(fn ->
          start_time = System.monotonic_time(:millisecond)
          # Set calculation method in the process dictionary
          Process.put(:calculation_method, if(method == "go", do: :go, else: :elixir))
          result = PrimeServer.get_prime(n)
          end_time = System.monotonic_time(:millisecond)
          calculation_time = end_time - start_time

          # Send message to the LiveView process specifically
          send(pid, {:prime_calculated, n, result, calculation_time})
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
        error: nil,
        calculation_time: nil
      )

    {:noreply, socket}
  end

  @impl true
  def handle_event("kill_process", %{"number" => number_str}, socket) do
    case Integer.parse(number_str) do
      {n, _} when n > 0 and n <= 10_000 ->
        if pid = PrimeScaler.PrimeRegistry.lookup(n) do
          Process.exit(pid, :kill)
          # Remove the process from active processes
          active_processes = List.delete(socket.assigns.active_processes, n)
          {:noreply, assign(socket, active_processes: active_processes)}
        else
          {:noreply, socket}
        end
      _ ->
        {:noreply, socket}
    end
  end

  def handle_event("select_number", %{"number" => number_str}, socket) do
    # Parse the number from the grid cell
    case Integer.parse(number_str) do
      {n, _} when n > 0 and n <= 10_000 ->
        # Add number to calculating set
        calculating_numbers = MapSet.put(socket.assigns.calculating_numbers, n)
        
        socket = 
          socket
          |> assign(
            error: nil, 
            calculating: true, 
            n: n, 
            calculation_time: nil, 
            prime_result: nil,
            calculating_numbers: calculating_numbers
          )

        # Get the LiveView PID
        pid = self()

        # Spawn a task to calculate the prime number
        Task.start(fn ->
          start_time = System.monotonic_time(:millisecond)
          result = PrimeServer.get_prime(n)
          end_time = System.monotonic_time(:millisecond)
          calculation_time = end_time - start_time

          # Send message to the LiveView process
          send(pid, {:prime_calculated, n, result, calculation_time})
        end)

        {:noreply, socket}

      _ ->
        {:noreply, socket}
    end
  end

  @impl true
  def handle_info({:prime_calculated, n, result, calculation_time}, socket) do
    # Update the socket with the calculated prime and timing info
    socket =
      socket
      |> assign(
        n: n,
        prime_result: result,
        calculating: false,
        calculation_time: calculation_time,
        calculating_numbers: MapSet.delete(socket.assigns.calculating_numbers, n),
        # Store the calculated prime value for tooltips
        prime_values: Map.put(socket.assigns.prime_values, n, result),
        # Update active processes
        active_processes: [n | socket.assigns.active_processes]
      )

    {:noreply, socket}
  end

  # For backward compatibility with any existing processes
  @impl true
  def handle_info({:prime_calculated, n, result}, socket) do
    socket =
      socket
      |> assign(
        n: n,
        prime_result: result,
        calculating: false,
        calculating_numbers: MapSet.delete(socket.assigns.calculating_numbers, n),
        # Store the calculated prime value for tooltips
        prime_values: Map.put(socket.assigns.prime_values, n, result)
      )

    {:noreply, socket}
  end

  @impl true
  def handle_info({:process_registered, n}, socket) do
    # Update the list of active processes and node status
    active_processes = 
      if n do
        [n | socket.assigns.active_processes]
      else
        PrimeScaler.get_active_processes()
      end

    {:noreply, assign(socket,
      active_processes: active_processes,
      processes_by_node: PrimeScaler.PrimeRegistry.get_processes_by_node()
    )}
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
        calculating_numbers: MapSet.new(),
        prime_values: %{},
        error: nil,
        calculation_time: nil
      )

    {:noreply, socket}
  end

  def handle_info({:node_status_changed, connected_nodes}, socket) do
    {:noreply, assign(socket, connected_nodes: connected_nodes)}
  end

  def handle_info({:process_terminated, n}, socket) do
    active_processes = List.delete(socket.assigns.active_processes, n)
    prime_values = Map.delete(socket.assigns.prime_values, n)
    processes_by_node = PrimeScaler.PrimeRegistry.get_processes_by_node()
    {:noreply, assign(socket, 
      active_processes: active_processes,
      prime_values: prime_values,
      processes_by_node: processes_by_node
    )}
  end

  def handle_info(%{event: "kill_process", payload: %{"number" => number_str}}, socket) do
    case Integer.parse(number_str) do
      {n, _} when n > 0 and n <= 10_000 ->
        if pid = PrimeScaler.PrimeRegistry.lookup(n) do
          Process.exit(pid, :kill)
          active_processes = List.delete(socket.assigns.active_processes, n)
          prime_values = Map.delete(socket.assigns.prime_values, n)
          processes_by_node = PrimeScaler.PrimeRegistry.get_processes_by_node()
          {:noreply, assign(socket, 
            active_processes: active_processes, 
            prime_values: prime_values,
            processes_by_node: processes_by_node
          )}
        else
          {:noreply, socket}
        end
      _ ->
        {:noreply, socket}
    end
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
    {_rows, cols} = grid_dimensions()
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
  Returns the appropriate class for a grid cell based on its state.
  """
  def cell_class(index, active_processes, calculating_numbers, processes_by_node) do
    cond do
      # Cell is being calculated - blue flashing
      index in calculating_numbers -> "grid-cell calculating"
      # Cell has a process - different colors per node
      index in active_processes ->
        node = get_node_for_process(index, processes_by_node)
        case node do
          nil -> "grid-cell active"
          node -> "grid-cell active-#{node_to_class(node)}"
        end
      # Cell is inactive - gray
      true -> "grid-cell inactive"
    end
  end

  defp get_node_for_process(index, processes_by_node) do
    Enum.find_value(processes_by_node, fn {node, process_list} ->
      if index in process_list, do: node, else: nil
    end)
  end

  defp node_to_class(node) do
    node_str = Atom.to_string(node)
    cond do
      String.contains?(node_str, "primary@") -> "primary"
      String.contains?(node_str, "secondary@") -> "secondary"
      true -> node_str |> String.replace("@", "-") |> String.replace(".", "-")
    end
  end

  @doc """
  Formats the calculation time result.
  """
  def format_calculation_time(time_ms) when is_integer(time_ms) do
    cond do
      time_ms < 1000 -> "#{time_ms}ms"
      time_ms < 60_000 -> "#{Float.round(time_ms / 1000, 1)}s"
      true -> "#{div(time_ms, 60_000)}m #{rem(div(time_ms, 1000), 60)}s"
    end
  end
end