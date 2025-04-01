// Import dependencies
import { Socket } from "phoenix";
import { LiveSocket } from "phoenix_live_view";

// Define the hooks
let Hooks = {};

// Initialize the LiveSocket
let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
let liveSocket = new LiveSocket("/live", Socket, {
  params: { _csrf_token: csrfToken },
  hooks: Hooks
});

// Connect if there are any LiveViews on the page
liveSocket.connect();

// Expose liveSocket on window for web console debug logs and latency simulation
window.liveSocket = liveSocket;
