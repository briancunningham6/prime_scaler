defmodule PrimeScalerWeb.CoreComponents do
  @moduledoc """
  Provides core UI components.
  """
  use Phoenix.Component

  alias Phoenix.LiveView.JS
  @doc """
  Renders a button.
  """
  attr :type, :string, default: nil
  attr :class, :string, default: nil
  attr :rest, :global, include: ~w(disabled form name value)
  slot :inner_block, required: true

  def button(assigns) do
    ~H"""
    <button
      type={@type}
      class={[
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
        @class
      ]}
      {@rest}
    >
      <%= render_slot(@inner_block) %>
    </button>
    """
  end

  @doc """
  Renders an input with label and error messages.
  """
  attr :id, :any, default: nil
  attr :name, :any
  attr :label, :string, default: nil
  attr :value, :any
  attr :type, :string, default: "text"
  attr :class, :string, default: nil
  attr :rest, :global, include: ~w(autocomplete disabled form max maxlength min minlength pattern placeholder readonly required step)

  def input(assigns) do
    ~H"""
    <div class="mb-4">
      <%= if @label do %>
        <label for={@id || @name} class="block text-gray-700 text-sm font-bold mb-2">
          <%= @label %>
        </label>
      <% end %>
      <input
        type={@type}
        name={@name}
        id={@id || @name}
        value={@value}
        class={[
          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
          @class
        ]}
        {@rest}
      />
    </div>
    """
  end

  @doc """
  Renders a header with title.
  """
  attr :class, :string, default: nil

  slot :inner_block, required: true
  slot :actions

  def header(assigns) do
    ~H"""
    <header class={["bg-white shadow", @class]}>
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
        <h1 class="text-3xl font-bold text-gray-900">
          <%= render_slot(@inner_block) %>
        </h1>
        <%= if @actions do %>
          <div class="flex items-center gap-2">
            <%= render_slot(@actions) %>
          </div>
        <% end %>
      </div>
    </header>
    """
  end

  @doc """
  Renders a container for the main content.
  """
  attr :class, :string, default: nil
  slot :inner_block, required: true

  def container(assigns) do
    ~H"""
    <div class={["max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", @class]}>
      <%= render_slot(@inner_block) %>
    </div>
    """
  end
end
