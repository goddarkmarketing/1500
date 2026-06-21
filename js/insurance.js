document.addEventListener('DOMContentLoaded', () => {
  const agentCtaEl = document.querySelector('[data-ins-agent-cta]');
  if (agentCtaEl && typeof SITE_INFO !== 'undefined') {
    const { brand, agentTitle, license, phone, phoneDisplay, addressHtml } = SITE_INFO;
    agentCtaEl.innerHTML = `
      <p class="cta-agent__brand">${brand}</p>
      <h3 class="cta-agent__title">${agentTitle}</h3>
      <p class="cta-agent__license">เลขที่ใบอนุญาต ${license}</p>
      <address class="cta-agent__address">${addressHtml}</address>
      <a href="tel:${phone}" class="btn btn--primary cta-agent__btn">
        <i data-lucide="phone" class="icon icon--18" aria-hidden="true"></i>
        โทร. ${phoneDisplay}
      </a>
    `;
    window.refreshLucideIcons?.(agentCtaEl);
  }

  const chipsEl = document.getElementById('productChips');
  const gridEl = document.getElementById('productGrid');
  const searchEl = document.getElementById('productSearch');
  const countEl = document.getElementById('productCount');
  const titleEl = document.getElementById('productSectionTitle');
  const emptyEl = document.getElementById('productEmpty');
  const modalEl = document.getElementById('prodModal');
  const loadMoreEl = document.getElementById('prodLoadMore');
  const loadMoreBtn = document.getElementById('prodLoadMoreBtn');
  const loadMoreHint = document.getElementById('prodLoadMoreHint');

  if (!chipsEl || !gridEl || typeof PRODUCT_CATEGORIES === 'undefined') return;

  const PAGE_SIZE = 8;
  let activeCategory = 'all';
  let searchQuery = '';
  let visibleCount = PAGE_SIZE;

  const openModal = () => {
    if (!modalEl) return;
    modalEl.hidden = false;
    document.body.style.overflow = 'hidden';
    modalEl.querySelector('.prod-modal__btn')?.focus();
  };

  const closeModal = () => {
    if (!modalEl) return;
    modalEl.hidden = true;
    document.body.style.overflow = '';
  };

  modalEl?.querySelectorAll('[data-close-modal]').forEach((el) => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalEl && !modalEl.hidden) closeModal();
  });

  gridEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.prod-card__detail');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    openModal();
  });

  const getCategoryLabel = id =>
    PRODUCT_CATEGORIES.find(c => c.id === id)?.label || '';

  const shouldPaginate = () => activeCategory === 'all';

  const filterProducts = () => {
    const q = searchQuery.trim().toLowerCase();
    return LIFE_PRODUCTS.filter(p => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory;
      if (!matchCat) return false;
      if (!q) return true;
      const haystack = [p.name, p.note || '', getCategoryLabel(p.category)].join(' ').toLowerCase();
      return haystack.includes(q);
    });
  };

  const buildCardHtml = (p, i) => `
    <article class="prod-card reveal" data-category="${p.category}" style="--reveal-delay:${Math.min(i % PAGE_SIZE, 7) * 70}ms">
      ${p.image ? `
        <div class="prod-card__media">
          <img class="prod-card__img" src="${p.image}" alt="${p.name}" loading="lazy" decoding="async">
          <div class="prod-card__media-shade" aria-hidden="true"></div>
          <span class="prod-card__badge">${getCategoryLabel(p.category)}</span>
        </div>
      ` : `<span class="prod-card__badge prod-card__badge--body">${getCategoryLabel(p.category)}</span>`}
      <div class="prod-card__body">
        <h3 class="prod-card__name">${p.name}</h3>
        ${p.note ? `<p class="prod-card__note"><span class="prod-card__note-dot" aria-hidden="true"></span>${p.note}</p>` : ''}
        <button type="button" class="prod-card__cta prod-card__detail">
          <span>ดูรายละเอียด</span>
          <i data-lucide="arrow-right" class="icon icon--18" aria-hidden="true"></i>
        </button>
      </div>
    </article>
  `;

  const observeReveal = (root = gridEl) => {
    if (typeof IntersectionObserver === 'undefined') {
      root.querySelectorAll('.reveal:not(.visible)').forEach(el => el.classList.add('visible'));
      return;
    }
    root.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      obs.observe(el);
    });
  };

  const updateLoadMore = (total, shown) => {
    const paginate = shouldPaginate();
    if (!loadMoreEl) return;

    if (!paginate || shown >= total) {
      loadMoreEl.hidden = true;
      return;
    }

    loadMoreEl.hidden = false;
    if (loadMoreHint) {
      loadMoreHint.textContent = `แสดง ${shown} จาก ${total} แผน`;
    }
  };

  const updateHeader = (items, shown) => {
    const catLabel = getCategoryLabel(activeCategory);

    if (titleEl) {
      titleEl.textContent = activeCategory === 'all'
        ? 'แผนประกันชีวิตทั้งหมด'
        : catLabel;
    }
    if (countEl) {
      countEl.textContent = shouldPaginate() && shown < items.length
        ? `แสดง ${shown} จาก ${items.length} แผน`
        : `พบ ${items.length} แผน`;
    }
  };

  const refreshIcons = (root = gridEl) => window.refreshLucideIcons?.(root);

  const renderProducts = ({ append = false, prevVisible = 0 } = {}) => {
    const items = filterProducts();
    const paginate = shouldPaginate();

    if (items.length === 0) {
      gridEl.innerHTML = '';
      emptyEl?.classList.add('visible');
      loadMoreEl && (loadMoreEl.hidden = true);
      if (countEl) countEl.textContent = 'พบ 0 แผน';
      return;
    }
    emptyEl?.classList.remove('visible');

    if (!paginate) {
      visibleCount = items.length;
      gridEl.innerHTML = items.map((p, i) => buildCardHtml(p, i)).join('');
      refreshIcons();
      observeReveal();
      updateHeader(items, items.length);
      updateLoadMore(items.length, items.length);
      return;
    }

    if (!append) {
      visibleCount = PAGE_SIZE;
      const toShow = items.slice(0, visibleCount);
      gridEl.innerHTML = toShow.map((p, i) => buildCardHtml(p, i)).join('');
      refreshIcons();
      observeReveal();
      updateHeader(items, toShow.length);
      updateLoadMore(items.length, toShow.length);
      return;
    }

    const chunk = items.slice(prevVisible, visibleCount);
    const fragment = document.createElement('div');
    fragment.innerHTML = chunk.map((p, i) => buildCardHtml(p, prevVisible + i)).join('');
    fragment.childNodes.forEach(node => gridEl.appendChild(node));
    refreshIcons(gridEl);
    observeReveal(gridEl);
    updateHeader(items, Math.min(visibleCount, items.length));
    updateLoadMore(items.length, Math.min(visibleCount, items.length));
  };

  loadMoreBtn?.addEventListener('click', () => {
    const prevVisible = visibleCount;
    const total = filterProducts().length;
    visibleCount = Math.min(visibleCount + PAGE_SIZE, total);
    renderProducts({ append: true, prevVisible });
  });

  const renderChips = () => {
    chipsEl.innerHTML = PRODUCT_CATEGORIES.map(cat => {
      const count = cat.id === 'all'
        ? LIFE_PRODUCTS.length
        : LIFE_PRODUCTS.filter(p => p.category === cat.id).length;
      return `
        <button type="button" class="prod-chip${cat.id === activeCategory ? ' prod-chip--active' : ''}" data-category="${cat.id}">
          <span class="prod-chip__label">${cat.label}</span>
          <span class="prod-chip__count">${count}</span>
        </button>
      `;
    }).join('');

    chipsEl.querySelectorAll('.prod-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        activeCategory = chip.dataset.category;
        renderChips();
        renderProducts();
      });
    });
  };

  searchEl?.addEventListener('input', e => {
    searchQuery = e.target.value;
    renderProducts();
  });

  const params = new URLSearchParams(window.location.search);
  const catParam = params.get('cat');
  const qParam = params.get('q');
  if (catParam && PRODUCT_CATEGORIES.some(c => c.id === catParam)) {
    activeCategory = catParam;
  }
  if (qParam) {
    searchQuery = qParam;
    if (searchEl) searchEl.value = qParam;
  }

  renderChips();
  renderProducts();
});
