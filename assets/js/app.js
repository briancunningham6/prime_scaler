// Simple JS implementation for Phoenix LiveView with CDN
// This assumes Phoenix and LiveView libraries are loaded from CDN in the layout

// Define hooks for LiveView if needed
let Hooks = {};

// When document is ready
document.addEventListener("DOMContentLoaded", function() {
  // Get CSRF token
  let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  
  // Initialize LiveSocket if both Phoenix and LiveView are available
  if (window.Phoenix && window.Phoenix.LiveSocket) {
    let liveSocket = new window.Phoenix.LiveSocket("/live", window.Phoenix.Socket, {
      params: { _csrf_token: csrfToken },
      hooks: Hooks
    });
    
    // Connect if there are any LiveViews on the page
    liveSocket.connect();
    
    // Expose liveSocket on window for web console debug logs and latency simulation
    window.liveSocket = liveSocket;
    
    console.log("Phoenix LiveView initialized");
  } else {
    console.error("Phoenix LiveView not available. Make sure Phoenix libraries are loaded.");
  }
});