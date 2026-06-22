window.GalleryLightbox = (() => {
  let root = null;
  let imgEl = null;
  let hideTimer = null;
  let activeTrigger = null;

  const ensure = () => {
    if (root) return root;

    root = document.createElement('div');
    root.className = 'gallery-lightbox';
    root.id = 'galleryLightbox';
    root.setAttribute('aria-hidden', 'true');
    root.innerHTML = `
      <div class="gallery-lightbox__backdrop" data-close-gallery></div>
      <button type="button" class="gallery-lightbox__close" data-close-gallery aria-label="ปิด">
        <i data-lucide="x" class="icon icon--24" aria-hidden="true"></i>
      </button>
      <img src="" alt="" class="gallery-lightbox__img">
    `;
    document.body.appendChild(root);
    imgEl = root.querySelector('.gallery-lightbox__img');

    root.querySelectorAll('[data-close-gallery]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        close();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && root.classList.contains('is-active')) close();
    });

    return root;
  };

  const open = (src, alt, { interactive = true } = {}) => {
    ensure();
    clearTimeout(hideTimer);
    imgEl.src = src;
    imgEl.alt = alt || window.GALLERY_ALT || '';
    root.classList.toggle('is-interactive', interactive);
    root.classList.add('is-active');
    root.setAttribute('aria-hidden', 'false');
    if (interactive) {
      document.body.style.overflow = 'hidden';
      window.refreshLucideIcons?.(root);
      root.querySelector('.gallery-lightbox__close')?.focus();
    }
  };

  const close = () => {
    if (!root || !root.classList.contains('is-active')) return;
    clearTimeout(hideTimer);
    root.classList.remove('is-active', 'is-interactive');
    root.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    activeTrigger = null;
  };

  const scheduleClose = () => {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(close, 80);
  };

  const bindClickItems = (items) => {
    items.forEach((item) => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (!img) return;

        const src = img.currentSrc || img.src;
        if (activeTrigger === item && root?.classList.contains('is-active')) {
          close();
          return;
        }

        activeTrigger = item;
        open(src, img.alt, { interactive: true });
      });
    });
  };

  const bindHoverItems = (items) => {
    items.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        const img = item.querySelector('img');
        if (!img) return;
        activeTrigger = item;
        open(img.currentSrc || img.src, img.alt, { interactive: false });
      });
      item.addEventListener('mouseleave', scheduleClose);
    });
  };

  return { open, close, bindClickItems, bindHoverItems };
})();
