// Path: assets/js/app.js
// Import deps
import "../css/app.css";

// Import Phoenix HTML helpers
import "phoenix_html";

// Import LiveView JavaScript helpers
import { Socket } from "phoenix";
import { LiveSocket } from "phoenix_live_view";

// Define LiveView hooks here if needed
const Hooks = {};

// Connect to the LiveView socket
const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
const liveSocket = new LiveSocket("/live", Socket, { params: { _csrf_token: csrfToken }, hooks: Hooks });

// Connect and enable LiveSocket debug if in development
liveSocket.connect();
window.liveSocket = liveSocket;