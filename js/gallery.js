document.addEventListener('DOMContentLoaded', () => {
  const gridEl = document.getElementById('galleryGrid');
  if (!gridEl) return;

  const images = window.GALLERY_IMAGES || [];
  const alt = window.GALLERY_ALT || 'ร่วมงานกับเรา MTLP4';

  gridEl.innerHTML = images.map((src, i) => `
    <figure class="gallery-grid__item reveal" style="--reveal-delay:${Math.min(i % 8, 7) * 60}ms">
      <button type="button" class="gallery-grid__btn" aria-label="ดูภาพ ${i + 1}">
        <img src="${src}" alt="${alt}" loading="lazy" decoding="async">
      </button>
    </figure>
  `).join('');

  window.GalleryLightbox.bindClickItems(gridEl.querySelectorAll('.gallery-grid__item'));
  window.refreshLucideIcons?.(document);

  if (typeof IntersectionObserver !== 'undefined') {
    gridEl.querySelectorAll('.reveal').forEach((el) => {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.08 });
      obs.observe(el);
    });
  } else {
    gridEl.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
  }
});
