// Path: assets/js/app.js

// Simple setup for Phoenix LiveView
// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
  // Debug Phoenix imports
  if (window.Phoenix) {
    console.log("Phoenix loaded successfully");
  } else {
    console.error("Phoenix not available!");
  }
  
  if (window.Phoenix && window.Phoenix.LiveSocket) {
    console.log("Phoenix.LiveSocket loaded successfully");
  } else if (window.phoenix_live_view && window.phoenix_live_view.LiveSocket) {
    console.log("phoenix_live_view.LiveSocket available, will use as fallback");
  } else {
    console.error("LiveSocket not available in any global namespace!");
  }
  
  // Get CSRF token
  const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  console.log("CSRF token found:", csrfToken ? "Yes" : "No");
  
  // Create empty hooks object
  const Hooks = {};
  
  // Initialize LiveSocket (window.Phoenix should be available from CDN scripts)
  try {
    // Support both potential LiveSocket locations
    const LiveSocket = window.Phoenix.LiveSocket || 
                      (window.phoenix_live_view ? window.phoenix_live_view.LiveSocket : null);
    
    if (!LiveSocket) {
      throw new Error("Phoenix LiveView not available. Make sure Phoenix libraries are loaded.");
    }
    
    const Socket = window.Phoenix.Socket;
    
    if (!Socket) {
      throw new Error("Phoenix Socket not available. Make sure Phoenix libraries are loaded.");
    }
    
    // Create LiveSocket with specific debugging
    const liveSocket = new LiveSocket("/live", Socket, { 
      params: { _csrf_token: csrfToken },
      hooks: Hooks,
      logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data); }
    });
    
    // Connect to LiveSocket with error handling
    liveSocket.connect();
    
    // Listen for connection events
    liveSocket.socket.onOpen(() => console.log("LiveSocket connection opened"));
    liveSocket.socket.onError((error) => console.error("LiveSocket connection error:", error));
    liveSocket.socket.onClose(() => console.log("LiveSocket connection closed"));
    
    // Make liveSocket available globally
    window.liveSocket = liveSocket;
    
    console.log("LiveView initialized successfully");
  } catch (e) {
    console.error("Failed to initialize LiveView:", e.message);
  }
});