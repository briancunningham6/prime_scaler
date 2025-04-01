// Path: assets/js/app.js

// Simple setup for Phoenix LiveView
// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
  // Get CSRF token
  const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  
  // Create empty hooks object
  const Hooks = {};
  
  // Initialize LiveSocket (window.Phoenix should be available from CDN scripts)
  try {
    const liveSocket = new window.Phoenix.LiveSocket("/live", window.Phoenix.Socket, { 
      params: { _csrf_token: csrfToken },
      hooks: Hooks 
    });
    
    // Connect to LiveSocket
    liveSocket.connect();
    
    // Make liveSocket available globally
    window.liveSocket = liveSocket;
    
    console.log("LiveView initialized successfully");
  } catch (e) {
    console.error("Failed to initialize LiveView:", e.message);
  }
});