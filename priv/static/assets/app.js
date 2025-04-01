(() => {
  // js/app.js
  document.addEventListener("DOMContentLoaded", function() {
    const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    const Hooks = {};
    try {
      const liveSocket = new window.Phoenix.LiveSocket("/live", window.Phoenix.Socket, {
        params: { _csrf_token: csrfToken },
        hooks: Hooks
      });
      liveSocket.connect();
      window.liveSocket = liveSocket;
      console.log("LiveView initialized successfully");
    } catch (e) {
      console.error("Failed to initialize LiveView:", e.message);
    }
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vYXNzZXRzL2pzL2FwcC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gUGF0aDogYXNzZXRzL2pzL2FwcC5qc1xuXG4vLyBTaW1wbGUgc2V0dXAgZm9yIFBob2VuaXggTGl2ZVZpZXdcbi8vIFdhaXQgZm9yIERPTSB0byBiZSByZWFkeVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gIC8vIEdldCBDU1JGIHRva2VuXG4gIGNvbnN0IGNzcmZUb2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW25hbWU9J2NzcmYtdG9rZW4nXVwiKS5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpO1xuICBcbiAgLy8gQ3JlYXRlIGVtcHR5IGhvb2tzIG9iamVjdFxuICBjb25zdCBIb29rcyA9IHt9O1xuICBcbiAgLy8gSW5pdGlhbGl6ZSBMaXZlU29ja2V0ICh3aW5kb3cuUGhvZW5peCBzaG91bGQgYmUgYXZhaWxhYmxlIGZyb20gQ0ROIHNjcmlwdHMpXG4gIHRyeSB7XG4gICAgY29uc3QgbGl2ZVNvY2tldCA9IG5ldyB3aW5kb3cuUGhvZW5peC5MaXZlU29ja2V0KFwiL2xpdmVcIiwgd2luZG93LlBob2VuaXguU29ja2V0LCB7IFxuICAgICAgcGFyYW1zOiB7IF9jc3JmX3Rva2VuOiBjc3JmVG9rZW4gfSxcbiAgICAgIGhvb2tzOiBIb29rcyBcbiAgICB9KTtcbiAgICBcbiAgICAvLyBDb25uZWN0IHRvIExpdmVTb2NrZXRcbiAgICBsaXZlU29ja2V0LmNvbm5lY3QoKTtcbiAgICBcbiAgICAvLyBNYWtlIGxpdmVTb2NrZXQgYXZhaWxhYmxlIGdsb2JhbGx5XG4gICAgd2luZG93LmxpdmVTb2NrZXQgPSBsaXZlU29ja2V0O1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiTGl2ZVZpZXcgaW5pdGlhbGl6ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBpbml0aWFsaXplIExpdmVWaWV3OlwiLCBlLm1lc3NhZ2UpO1xuICB9XG59KTsiXSwKICAibWFwcGluZ3MiOiAiOztBQUlBLFdBQVMsaUJBQWlCLG9CQUFvQixXQUFXO0FBRXZELFVBQU0sWUFBWSxTQUFTLGNBQWMseUJBQXlCLEVBQUUsYUFBYSxTQUFTO0FBRzFGLFVBQU0sUUFBUSxDQUFDO0FBR2YsUUFBSTtBQUNGLFlBQU0sYUFBYSxJQUFJLE9BQU8sUUFBUSxXQUFXLFNBQVMsT0FBTyxRQUFRLFFBQVE7QUFBQSxRQUMvRSxRQUFRLEVBQUUsYUFBYSxVQUFVO0FBQUEsUUFDakMsT0FBTztBQUFBLE1BQ1QsQ0FBQztBQUdELGlCQUFXLFFBQVE7QUFHbkIsYUFBTyxhQUFhO0FBRXBCLGNBQVEsSUFBSSxtQ0FBbUM7QUFBQSxJQUNqRCxTQUFTLEdBQVA7QUFDQSxjQUFRLE1BQU0sa0NBQWtDLEVBQUUsT0FBTztBQUFBLElBQzNEO0FBQUEsRUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
