// Simple client-side include loader. Requires serving files over HTTP (Live Server / local server).
(async function loadSections() {
  const nodes = document.querySelectorAll('[data-include]');
  for (const node of nodes) {
    const url = node.getAttribute('data-include');
    try {
      const res = await fetch(url);
      if (res.ok) {
        node.innerHTML = await res.text();
      } else {
        console.error('Failed to load', url, res.status);
      }
    } catch (err) {
      console.error('Error loading include', url, err);
    }
  }
})();