// Path: assets/js/app.js

// Basic initialization for Phoenix LiveView
document.addEventListener("DOMContentLoaded", function() {
  if (window.Phoenix) {
    initLiveSocket();
  } else {
    console.log("Phoenix not loaded yet, using fallback");
    // Try to import our own modules
    import("../css/app.css").catch(e => console.warn("Could not load CSS:", e));
    import("phoenix_html").catch(e => console.warn("Could not load phoenix_html:", e));
    
    Promise.all([
      import("phoenix"),
      import("phoenix_live_view")
    ]).then(([phoenix, liveView]) => {
      window.Phoenix = phoenix;
      window.Phoenix.LiveSocket = liveView.LiveSocket;
      initLiveSocket();
    }).catch(e => {
      console.error("Could not initialize Phoenix libraries:", e);
    });
  }
});

function initLiveSocket() {
  const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  const Hooks = {};
  const Socket = window.Phoenix.Socket;
  const LiveSocket = window.Phoenix.LiveSocket;
  
  if (Socket && LiveSocket) {
    const liveSocket = new LiveSocket("/live", Socket, { params: { _csrf_token: csrfToken }, hooks: Hooks });
    liveSocket.connect();
    window.liveSocket = liveSocket;
  } else {
    console.error("Phoenix libraries not available");
  }
}