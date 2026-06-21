document.addEventListener('DOMContentLoaded', () => {
  const chipsEl = document.getElementById('homeProductChips');
  const searchEl = document.getElementById('homeProductSearch');
  const gridEl = document.getElementById('homeProductsGrid');
  const emptyEl = document.getElementById('homeInsuranceEmpty');
  const emptyTitleEl = document.getElementById('homeInsuranceEmptyTitle');
  const emptyTextEl = document.getElementById('homeInsuranceEmptyText');
  const emptyLinkEl = document.getElementById('homeInsuranceEmptyLink');

  if (!chipsEl || !gridEl || typeof PRODUCT_CATEGORIES === 'undefined') return;

  const HOME_CATS = new Set(['savings', 'legacy', 'retirement', 'senior']);
  const cards = [...gridEl.querySelectorAll('.product-card[data-home-cat]')];

  let activeCategory = 'all';
  let searchQuery = '';

  const getCategoryLabel = id =>
    PRODUCT_CATEGORIES.find(c => c.id === id)?.label || '';

  const countPlans = (cat, q) =>
    LIFE_PRODUCTS.filter(p => {
      if (cat && cat !== 'all' && p.category !== cat) return false;
      if (!q) return true;
      const haystack = [p.name, p.note || '', getCategoryLabel(p.category)].join(' ').toLowerCase();
      return haystack.includes(q);
    }).length;

  const categoryMatchesSearch = cat => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    if (getCategoryLabel(cat).toLowerCase().includes(q)) return true;
    return LIFE_PRODUCTS.some(p => {
      if (p.category !== cat) return false;
      const haystack = [p.name, p.note || '', getCategoryLabel(p.category)].join(' ').toLowerCase();
      return haystack.includes(q);
    });
  };

  const buildInsuranceLink = () => {
    const params = new URLSearchParams();
    if (activeCategory !== 'all') params.set('cat', activeCategory);
    const q = searchQuery.trim();
    if (q) params.set('q', q);
    const qs = params.toString();
    return `insurance.html${qs ? `?${qs}` : ''}`;
  };

  const applyFilter = () => {
    const q = searchQuery.trim().toLowerCase();
    let visibleCards = 0;

    cards.forEach(card => {
      const cat = card.dataset.homeCat;
      const matchCat = activeCategory === 'all' || activeCategory === cat;
      const show = matchCat && categoryMatchesSearch(cat);
      card.hidden = !show;
      if (show) visibleCards++;
    });

    const planCount = countPlans(activeCategory === 'all' ? null : activeCategory, q);
    const showEmpty = visibleCards === 0;

    if (emptyEl) emptyEl.hidden = !showEmpty;
    if (gridEl) gridEl.hidden = showEmpty;

    if (!showEmpty || !emptyEl) return;

    const catLabel = activeCategory === 'all' ? 'แผนประกันชีวิต' : getCategoryLabel(activeCategory);
    const hasHomeCard = HOME_CATS.has(activeCategory);

    if (emptyTitleEl) {
      if (q && planCount > 0) {
        emptyTitleEl.textContent = `พบ ${planCount} แผนที่ตรงกับ "${searchQuery.trim()}"`;
      } else if (!hasHomeCard && activeCategory !== 'all') {
        emptyTitleEl.textContent = catLabel;
      } else {
        emptyTitleEl.textContent = 'ไม่พบแผนที่ค้นหา';
      }
    }

    if (emptyTextEl) {
      if (planCount > 0) {
        emptyTextEl.textContent = `มี ${planCount} แผนในหมวดนี้ ดูรายละเอียดครบได้ที่หน้าประกันภัยของเรา`;
      } else {
        emptyTextEl.textContent = 'ลองเปลี่ยนคำค้นหา หรือเลือกหมวดอื่น';
      }
    }

    if (emptyLinkEl) {
      emptyLinkEl.href = buildInsuranceLink();
      emptyLinkEl.textContent = planCount > 0 ? `ดู ${planCount} แผนในหมวดนี้` : 'ดูแผนทั้งหมด';
    }
  };

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
        applyFilter();
      });
    });
  };

  searchEl?.addEventListener('input', e => {
    searchQuery = e.target.value;
    applyFilter();
  });

  searchEl?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      window.location.href = buildInsuranceLink();
    }
  });

  renderChips();
  applyFilter();
});
