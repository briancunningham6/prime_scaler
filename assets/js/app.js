// Import dependencies
import "phoenix_html"
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"

// Define any hooks you want to use
let Hooks = {
  TooltipHandler: {
    mounted() {
      this.el.addEventListener('mousemove', e => {
        const tooltip = this.el.querySelector('.grid-cell-tooltip');
        if (tooltip) {
          tooltip.style.left = `${e.clientX}px`;
          tooltip.style.top = `${e.clientY - 10}px`;
        }
      });

      this.handleEvent("update_cell", ({id, class: newClass}) => {
        const cell = document.getElementById(id);
        if (cell) {
          cell.className = newClass;
        }
      });
    }
  }
}

// Handle right-click context menu
document.addEventListener('contextmenu', (e) => {
  const cell = e.target.closest('[data-context-menu]');
  if (cell && cell.classList.contains('active')) {
    e.preventDefault();
    const number = cell.getAttribute('phx-value-number');
    liveSocket.getSocket().channels[0].push('kill_process', { number });
  }
});

// Get CSRF Token
let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")

// Create the LiveSocket
let liveSocket = new LiveSocket("/live", Socket, {
  params: {_csrf_token: csrfToken},
  hooks: Hooks
})

// Show progress bar on live navigation and form submits
// topbar.config({barColors: {0: "#29d"}, shadowColor: "rgba(0, 0, 0, .3)"})
// window.addEventListener("phx:page-loading-start", info => topbar.show())
// window.addEventListener("phx:page-loading-stop", info => topbar.hide())

// Connect if there are any LiveViews on the page
liveSocket.connect()

// Expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
window.liveSocket = liveSocket

// Add debugging
console.log("Phoenix LiveView initialized successfully")