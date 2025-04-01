(() => {
  // js/app.js
  document.addEventListener("DOMContentLoaded", function() {
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
    const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    console.log("CSRF token found:", csrfToken ? "Yes" : "No");
    const Hooks = {};
    try {
      const LiveSocket = window.Phoenix.LiveSocket || (window.phoenix_live_view ? window.phoenix_live_view.LiveSocket : null);
      if (!LiveSocket) {
        throw new Error("Phoenix LiveView not available. Make sure Phoenix libraries are loaded.");
      }
      const Socket = window.Phoenix.Socket;
      if (!Socket) {
        throw new Error("Phoenix Socket not available. Make sure Phoenix libraries are loaded.");
      }
      const liveSocket = new LiveSocket("/live", Socket, {
        params: { _csrf_token: csrfToken },
        hooks: Hooks,
        logger: (kind, msg, data) => {
          console.log(`${kind}: ${msg}`, data);
        }
      });
      liveSocket.connect();
      liveSocket.socket.onOpen(() => console.log("LiveSocket connection opened"));
      liveSocket.socket.onError((error) => console.error("LiveSocket connection error:", error));
      liveSocket.socket.onClose(() => console.log("LiveSocket connection closed"));
      window.liveSocket = liveSocket;
      console.log("LiveView initialized successfully");
    } catch (e) {
      console.error("Failed to initialize LiveView:", e.message);
    }
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vYXNzZXRzL2pzL2FwcC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gUGF0aDogYXNzZXRzL2pzL2FwcC5qc1xuXG4vLyBTaW1wbGUgc2V0dXAgZm9yIFBob2VuaXggTGl2ZVZpZXdcbi8vIFdhaXQgZm9yIERPTSB0byBiZSByZWFkeVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gIC8vIERlYnVnIFBob2VuaXggaW1wb3J0c1xuICBpZiAod2luZG93LlBob2VuaXgpIHtcbiAgICBjb25zb2xlLmxvZyhcIlBob2VuaXggbG9hZGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKFwiUGhvZW5peCBub3QgYXZhaWxhYmxlIVwiKTtcbiAgfVxuICBcbiAgaWYgKHdpbmRvdy5QaG9lbml4ICYmIHdpbmRvdy5QaG9lbml4LkxpdmVTb2NrZXQpIHtcbiAgICBjb25zb2xlLmxvZyhcIlBob2VuaXguTGl2ZVNvY2tldCBsb2FkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5waG9lbml4X2xpdmVfdmlldyAmJiB3aW5kb3cucGhvZW5peF9saXZlX3ZpZXcuTGl2ZVNvY2tldCkge1xuICAgIGNvbnNvbGUubG9nKFwicGhvZW5peF9saXZlX3ZpZXcuTGl2ZVNvY2tldCBhdmFpbGFibGUsIHdpbGwgdXNlIGFzIGZhbGxiYWNrXCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJMaXZlU29ja2V0IG5vdCBhdmFpbGFibGUgaW4gYW55IGdsb2JhbCBuYW1lc3BhY2UhXCIpO1xuICB9XG4gIFxuICAvLyBHZXQgQ1NSRiB0b2tlblxuICBjb25zdCBjc3JmVG9rZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPSdjc3JmLXRva2VuJ11cIikuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKTtcbiAgY29uc29sZS5sb2coXCJDU1JGIHRva2VuIGZvdW5kOlwiLCBjc3JmVG9rZW4gPyBcIlllc1wiIDogXCJOb1wiKTtcbiAgXG4gIC8vIENyZWF0ZSBlbXB0eSBob29rcyBvYmplY3RcbiAgY29uc3QgSG9va3MgPSB7fTtcbiAgXG4gIC8vIEluaXRpYWxpemUgTGl2ZVNvY2tldCAod2luZG93LlBob2VuaXggc2hvdWxkIGJlIGF2YWlsYWJsZSBmcm9tIENETiBzY3JpcHRzKVxuICB0cnkge1xuICAgIC8vIFN1cHBvcnQgYm90aCBwb3RlbnRpYWwgTGl2ZVNvY2tldCBsb2NhdGlvbnNcbiAgICBjb25zdCBMaXZlU29ja2V0ID0gd2luZG93LlBob2VuaXguTGl2ZVNvY2tldCB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAod2luZG93LnBob2VuaXhfbGl2ZV92aWV3ID8gd2luZG93LnBob2VuaXhfbGl2ZV92aWV3LkxpdmVTb2NrZXQgOiBudWxsKTtcbiAgICBcbiAgICBpZiAoIUxpdmVTb2NrZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBob2VuaXggTGl2ZVZpZXcgbm90IGF2YWlsYWJsZS4gTWFrZSBzdXJlIFBob2VuaXggbGlicmFyaWVzIGFyZSBsb2FkZWQuXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBTb2NrZXQgPSB3aW5kb3cuUGhvZW5peC5Tb2NrZXQ7XG4gICAgXG4gICAgaWYgKCFTb2NrZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBob2VuaXggU29ja2V0IG5vdCBhdmFpbGFibGUuIE1ha2Ugc3VyZSBQaG9lbml4IGxpYnJhcmllcyBhcmUgbG9hZGVkLlwiKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQ3JlYXRlIExpdmVTb2NrZXQgd2l0aCBzcGVjaWZpYyBkZWJ1Z2dpbmdcbiAgICBjb25zdCBsaXZlU29ja2V0ID0gbmV3IExpdmVTb2NrZXQoXCIvbGl2ZVwiLCBTb2NrZXQsIHsgXG4gICAgICBwYXJhbXM6IHsgX2NzcmZfdG9rZW46IGNzcmZUb2tlbiB9LFxuICAgICAgaG9va3M6IEhvb2tzLFxuICAgICAgbG9nZ2VyOiAoa2luZCwgbXNnLCBkYXRhKSA9PiB7IGNvbnNvbGUubG9nKGAke2tpbmR9OiAke21zZ31gLCBkYXRhKTsgfVxuICAgIH0pO1xuICAgIFxuICAgIC8vIENvbm5lY3QgdG8gTGl2ZVNvY2tldCB3aXRoIGVycm9yIGhhbmRsaW5nXG4gICAgbGl2ZVNvY2tldC5jb25uZWN0KCk7XG4gICAgXG4gICAgLy8gTGlzdGVuIGZvciBjb25uZWN0aW9uIGV2ZW50c1xuICAgIGxpdmVTb2NrZXQuc29ja2V0Lm9uT3BlbigoKSA9PiBjb25zb2xlLmxvZyhcIkxpdmVTb2NrZXQgY29ubmVjdGlvbiBvcGVuZWRcIikpO1xuICAgIGxpdmVTb2NrZXQuc29ja2V0Lm9uRXJyb3IoKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiTGl2ZVNvY2tldCBjb25uZWN0aW9uIGVycm9yOlwiLCBlcnJvcikpO1xuICAgIGxpdmVTb2NrZXQuc29ja2V0Lm9uQ2xvc2UoKCkgPT4gY29uc29sZS5sb2coXCJMaXZlU29ja2V0IGNvbm5lY3Rpb24gY2xvc2VkXCIpKTtcbiAgICBcbiAgICAvLyBNYWtlIGxpdmVTb2NrZXQgYXZhaWxhYmxlIGdsb2JhbGx5XG4gICAgd2luZG93LmxpdmVTb2NrZXQgPSBsaXZlU29ja2V0O1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiTGl2ZVZpZXcgaW5pdGlhbGl6ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBpbml0aWFsaXplIExpdmVWaWV3OlwiLCBlLm1lc3NhZ2UpO1xuICB9XG59KTsiXSwKICAibWFwcGluZ3MiOiAiOztBQUlBLFdBQVMsaUJBQWlCLG9CQUFvQixXQUFXO0FBRXZELFFBQUksT0FBTyxTQUFTO0FBQ2xCLGNBQVEsSUFBSSw2QkFBNkI7QUFBQSxJQUMzQyxPQUFPO0FBQ0wsY0FBUSxNQUFNLHdCQUF3QjtBQUFBLElBQ3hDO0FBRUEsUUFBSSxPQUFPLFdBQVcsT0FBTyxRQUFRLFlBQVk7QUFDL0MsY0FBUSxJQUFJLHdDQUF3QztBQUFBLElBQ3RELFdBQVcsT0FBTyxxQkFBcUIsT0FBTyxrQkFBa0IsWUFBWTtBQUMxRSxjQUFRLElBQUksOERBQThEO0FBQUEsSUFDNUUsT0FBTztBQUNMLGNBQVEsTUFBTSxtREFBbUQ7QUFBQSxJQUNuRTtBQUdBLFVBQU0sWUFBWSxTQUFTLGNBQWMseUJBQXlCLEVBQUUsYUFBYSxTQUFTO0FBQzFGLFlBQVEsSUFBSSxxQkFBcUIsWUFBWSxRQUFRLElBQUk7QUFHekQsVUFBTSxRQUFRLENBQUM7QUFHZixRQUFJO0FBRUYsWUFBTSxhQUFhLE9BQU8sUUFBUSxlQUNmLE9BQU8sb0JBQW9CLE9BQU8sa0JBQWtCLGFBQWE7QUFFcEYsVUFBSSxDQUFDLFlBQVk7QUFDZixjQUFNLElBQUksTUFBTSx5RUFBeUU7QUFBQSxNQUMzRjtBQUVBLFlBQU0sU0FBUyxPQUFPLFFBQVE7QUFFOUIsVUFBSSxDQUFDLFFBQVE7QUFDWCxjQUFNLElBQUksTUFBTSx1RUFBdUU7QUFBQSxNQUN6RjtBQUdBLFlBQU0sYUFBYSxJQUFJLFdBQVcsU0FBUyxRQUFRO0FBQUEsUUFDakQsUUFBUSxFQUFFLGFBQWEsVUFBVTtBQUFBLFFBQ2pDLE9BQU87QUFBQSxRQUNQLFFBQVEsQ0FBQyxNQUFNLEtBQUssU0FBUztBQUFFLGtCQUFRLElBQUksR0FBRyxTQUFTLE9BQU8sSUFBSTtBQUFBLFFBQUc7QUFBQSxNQUN2RSxDQUFDO0FBR0QsaUJBQVcsUUFBUTtBQUduQixpQkFBVyxPQUFPLE9BQU8sTUFBTSxRQUFRLElBQUksOEJBQThCLENBQUM7QUFDMUUsaUJBQVcsT0FBTyxRQUFRLENBQUMsVUFBVSxRQUFRLE1BQU0sZ0NBQWdDLEtBQUssQ0FBQztBQUN6RixpQkFBVyxPQUFPLFFBQVEsTUFBTSxRQUFRLElBQUksOEJBQThCLENBQUM7QUFHM0UsYUFBTyxhQUFhO0FBRXBCLGNBQVEsSUFBSSxtQ0FBbUM7QUFBQSxJQUNqRCxTQUFTLEdBQVA7QUFDQSxjQUFRLE1BQU0sa0NBQWtDLEVBQUUsT0FBTztBQUFBLElBQzNEO0FBQUEsRUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
