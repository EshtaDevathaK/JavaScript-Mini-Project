const app = document.getElementById('app');

// Define the content for each route
const routes = {
  home: `<h2>🏠 Home</h2><p>Welcome to the home page!</p>`,
  about: `<h2>ℹ️ About</h2><p>This is a simple SPA navigation example using hash routing.</p>`,
  contact: `<h2>📞 Contact</h2><p>Contact us at example@example.com.</p>`
};

// Render the page content based on current hash
function render() {
  const hash = window.location.hash.substring(1); // remove #
  if (routes[hash]) {
    app.innerHTML = routes[hash];
  } else {
    app.innerHTML = `<h2>❓ Page Not Found</h2><p>The page '${hash}' does not exist.</p>`;
  }
}

// Listen for hash changes
window.addEventListener('hashchange', render);

// Render content on initial load
if (!window.location.hash) {
  window.location.hash = '#home';
} else {
  render();
}
