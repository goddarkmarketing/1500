document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('articleRoot');
  if (!root || typeof ARTICLES === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const article = slug ? getArticleBySlug(slug) : null;

  if (!article) {
    document.title = 'ไม่พบบทความ | เมืองไทยประกันภัย';
    root.innerHTML = `
      <div class="art-detail-empty">
        <h1>ไม่พบบทความที่คุณต้องการ</h1>
        <p>บทความนี้อาจถูกลบหรือลิงก์ไม่ถูกต้อง</p>
        <a href="articles.html" class="btn btn--primary">กลับหน้าบทความทั้งหมด</a>
      </div>
    `;
    return;
  }

  const cat = getCategoryMeta(article.category);
  const phone = typeof SITE_INFO !== 'undefined' ? SITE_INFO.phoneDisplay : '097-114-2619';
  const tel = typeof SITE_INFO !== 'undefined' ? SITE_INFO.phone : '0971142619';

  document.title = `${article.title} | เมืองไทยประกันภัย`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = article.excerpt;

  const recommended = getRecommendedArticles(article.slug, 5);

  root.innerHTML = `
    <article class="art-detail-main">
      <nav class="art-detail__breadcrumb" aria-label="breadcrumb">
        <a href="index.html">หน้าแรก</a>
        <span aria-hidden="true">›</span>
        <a href="articles.html">บทความสาระน่ารู้</a>
        <span aria-hidden="true">›</span>
        <span>${article.title}</span>
      </nav>

      <div class="art-detail__hero">
        <img class="art-detail__img" src="${article.image}" alt="${article.title}">
      </div>

      <header class="art-detail__header">
        <div class="art-detail__meta">
          <span class="art-tag ${cat.tagClass}">${cat.label}</span>
          <time class="art-date" datetime="${article.date}">${article.dateDisplay}</time>
        </div>
        <h1 class="art-detail__title">${article.title}</h1>
        <p class="art-detail__excerpt">${article.excerpt}</p>
      </header>

      <div class="art-detail__content">
        ${article.body}
      </div>

      <footer class="art-detail__footer">
        <a href="articles.html" class="art-detail__back">
          <i data-lucide="arrow-left" class="icon icon--16" aria-hidden="true"></i>
          กลับหน้าบทความทั้งหมด
        </a>
        <a href="service.html" class="btn btn--primary art-detail__cta">
          ขอคำปรึกษาฟรี
          <i data-lucide="arrow-right" class="icon icon--16" aria-hidden="true"></i>
        </a>
      </footer>
    </article>

    <aside class="art-detail-sidebar">
      <div class="art-sidebar__block">
        <h2 class="art-sidebar__title">บทความแนะนำ</h2>
        ${recommended.map((item) => `
          <a href="${articleUrl(item.slug)}" class="popular-item">
            <img class="popular-item__thumb" src="${item.image}" alt="">
            <div class="popular-item__body">
              <div class="popular-item__title">${item.title}</div>
              <time class="popular-item__date">${item.dateShort}</time>
            </div>
          </a>
        `).join('')}
      </div>

      <div class="art-detail-consult">
        <i data-lucide="headset" class="icon art-detail-consult__icon" aria-hidden="true"></i>
        <h3 class="art-detail-consult__title">ต้องการคำแนะนำเพิ่มเติม?</h3>
        <p class="art-detail-consult__text">ทีมที่ปรึกษาพร้อมช่วยเลือกแผนประกันที่เหมาะกับคุณ ไม่มีค่าใช้จ่าย</p>
        <a href="tel:${tel}" class="btn btn--primary btn--wide art-detail-consult__btn">
          <i data-lucide="phone" class="icon icon--18" aria-hidden="true"></i>
          โทร. ${phone}
        </a>
      </div>
    </aside>
  `;

  window.refreshLucideIcons?.(root);
});
