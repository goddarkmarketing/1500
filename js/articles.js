document.addEventListener('DOMContentLoaded', () => {
  if (typeof ARTICLES === 'undefined') return;

  const featuredEl = document.getElementById('artFeatured');
  const gridEl = document.getElementById('artGrid');
  const popularEl = document.getElementById('artSidebarPopular');
  const latestEl = document.getElementById('artLatestGrid');

  const renderTag = (category) => {
    const cat = getCategoryMeta(category);
    return `<span class="art-tag ${cat.tagClass}">${cat.label}</span>`;
  };

  const renderFeatured = (article) => {
    if (!featuredEl || !article) return;
    featuredEl.innerHTML = `
      <article class="art-featured">
        <img class="art-featured__img" src="${article.image}" alt="${article.title}">
        <div class="art-featured__body">
          ${renderTag(article.category)}
          <time class="art-date" datetime="${article.date}">${article.dateDisplay}</time>
          <h3 class="art-featured__title">${article.title}</h3>
          <p class="art-featured__excerpt">${article.excerpt}</p>
          <a href="${articleUrl(article.slug)}" class="art-read-more">อ่านต่อ <i data-lucide="arrow-right" class="icon icon--14" aria-hidden="true"></i></a>
        </div>
      </article>
    `;
  };

  const renderCard = (article) => `
    <article class="art-card">
      <a href="${articleUrl(article.slug)}" class="art-card__link">
        <img class="art-card__img" src="${article.image}" alt="${article.title}">
        <div class="art-card__body">
          ${renderTag(article.category)}
          <time class="art-date" datetime="${article.date}">${article.dateDisplay}</time>
          <h3 class="art-card__title">${article.title}</h3>
          <p class="art-card__excerpt">${article.excerpt}</p>
          <span class="art-read-more">อ่านต่อ <i data-lucide="arrow-right" class="icon icon--14" aria-hidden="true"></i></span>
        </div>
      </a>
    </article>
  `;

  const renderLatestCard = (article) => `
    <article class="latest-card">
      <a href="${articleUrl(article.slug)}" class="latest-card__link">
        <div class="latest-card__media">
          <img class="latest-card__img" src="${article.image}" alt="${article.title}">
        </div>
        <div class="latest-card__body">
          <div class="latest-card__meta">
            ${renderTag(article.category)}
            <time class="art-date" datetime="${article.date}">${article.dateDisplay}</time>
          </div>
          <h3 class="latest-card__title">${article.title}</h3>
        </div>
      </a>
    </article>
  `;

  const renderPopular = (articles) => {
    if (!popularEl) return;
    popularEl.innerHTML = `
      <h3 class="art-sidebar__title">บทความแนะนำ</h3>
      ${articles.map((item) => `
        <a href="${articleUrl(item.slug)}" class="popular-item">
          <img class="popular-item__thumb" src="${item.image}" alt="">
          <div class="popular-item__body">
            <div class="popular-item__title">${item.title}</div>
            <time class="popular-item__date">${item.dateShort}</time>
          </div>
        </a>
      `).join('')}
    `;
  };

  const renderGrid = (articles, featured) => {
    if (!gridEl) return;
    const list = articles.filter((a) => a.slug !== featured?.slug);
    gridEl.innerHTML = list.map(renderCard).join('');
  };

  const renderLatest = (articles) => {
    if (!latestEl) return;
    latestEl.innerHTML = articles.slice(0, 4).map(renderLatestCard).join('');
  };

  const applyCategory = (category) => {
    const featured = category === 'all' ? getFeaturedArticle() : null;
    const articles = getArticlesByCategory(category);
    if (featured) renderFeatured(featured);
    else if (featuredEl) featuredEl.innerHTML = '';
    renderGrid(articles, featured);
    window.refreshLucideIcons?.(document.querySelector('.art-main'));
  };

  renderFeatured(getFeaturedArticle());
  renderGrid(getArticlesSorted(), getFeaturedArticle());
  renderPopular(getPopularArticles(5));
  renderLatest(getArticlesSorted());
  window.refreshLucideIcons?.(document);

  document.querySelectorAll('.art-cat').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.art-cat').forEach((t) => t.classList.remove('art-cat--active'));
      tab.classList.add('art-cat--active');
      applyCategory(tab.dataset.category || 'all');
    });
  });

  document.querySelector('.newsletter__form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.querySelector('.newsletter__input');
    if (input?.value.trim()) {
      input.value = '';
      alert('ขอบคุณที่สมัครรับจดหมายข่าว!');
    }
  });
});
