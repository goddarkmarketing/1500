function refreshLucideIcons(root = document) {
  if (typeof lucide === 'undefined') return;
  lucide.createIcons({
    attrs: {
      'stroke-width': 2,
      'aria-hidden': 'true',
    },
    root,
  });
}

document.addEventListener('DOMContentLoaded', () => refreshLucideIcons());
window.refreshLucideIcons = refreshLucideIcons;
