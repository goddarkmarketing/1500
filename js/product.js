(function () {
  const CATEGORY_LABELS = {
    life: 'ประกันชีวิต',
    saving: 'ประกันออมทรัพย์',
    accident: 'ประกันอุบัติเหตุ',
    medical: 'ประกันสุขภาพ',
    critical: 'ประกันโรคร้ายแรง',
    retirement: 'ประกันเกษียณ',
    group: 'ประกันกลุ่ม',
    rider: 'สัญญาเพิ่มเติม',
  };

  const ICONS = {
    user: '<i data-lucide="user" class="icon prod-quickinfo__icon" aria-hidden="true"></i>',
    shield: '<i data-lucide="shield" class="icon prod-quickinfo__icon" aria-hidden="true"></i>',
    hospital: '<i data-lucide="hospital" class="icon prod-quickinfo__icon" aria-hidden="true"></i>',
    calendar: '<i data-lucide="calendar" class="icon prod-quickinfo__icon" aria-hidden="true"></i>',
  };

  const ARROW = '<i data-lucide="arrow-right" class="icon icon--18" aria-hidden="true"></i>';
  const PLUS = '<i data-lucide="plus" class="icon prod-acc-item__icon" aria-hidden="true"></i>';

  function getCategoryLabel(cat) {
    return CATEGORY_LABELS[cat] || 'ประกันชีวิต';
  }

  function getDefaultDetail(product) {
    const catLabel = getCategoryLabel(product.category);
    return {
      subtitle: product.name,
      tagline: product.note || `แผน${catLabel}ที่ตอบโจทย์ความต้องการของคุณ พร้อมความคุ้มครองที่ยืดหยุ่น`,
      quickInfo: [
        { icon: 'user', label: 'อายุรับประกัน', value: '1 – 70 ปี' },
        { icon: 'shield', label: 'ทุนประกันสูงสุด', value: 'ตามแผนที่เลือก' },
        { icon: 'calendar', label: 'ระยะเวลาคุ้มครอง', value: '1 ปี (ต่ออายุได้)' },
      ],
      planInfo: [
        { label: 'ประเภทแผน', value: catLabel },
        { label: 'ระยะเวลาคุ้มครอง', value: '1 ปี (ต่ออายุได้)' },
        { label: 'ผลประโยชน์หลัก', value: 'ตามเงื่อนไขกรมธรรม์' },
      ],
      links: [
        { label: 'จุดเด่นของแผน', href: '#prodHighlights' },
        { label: 'ความคุ้มครอง', href: '#prodTableSection' },
        { label: 'ดาวน์โหลดโบรชัวร์', href: '#' },
      ],
      paragraphs: [
        `${product.name} เป็นแผน${catLabel}จากเมืองไทยประกันชีวิต ออกแบบมาเพื่อมอบความคุ้มครองที่เหมาะสมกับไลฟ์สไตล์และความต้องการของคุณ ด้วยเงื่อนไขที่เข้าใจง่ายและบริการดูแลลูกค้าตลอดอายุกรมธรรม์`,
        `แผนประกันนี้ให้ความคุ้มครองตามที่ระบุในกรมธรรม์ พร้อมทีมที่ปรึกษาที่พร้อมให้คำแนะนำในทุกขั้นตอน ตั้งแต่การเลือกแผน การชำระเบี้ย ไปจนถึงการเคลมสิทธิ์`,
        `สนใจสอบถามรายละเอียดเพิ่มเติม ติดต่อ ตต. ถนอมศรี บำรุงตา โทร 097-114-2619 หรือกรอกแบบฟอร์มด้านล่างเพื่อให้เจ้าหน้าที่ติดต่อกลับ`,
      ],
      accordions: [
        {
          title: 'เงื่อนไขการรับประกันภัย',
          body: 'ผู้เอาประกันภัยต้องมีสุขภาพแข็งแรงและผ่านเกณฑ์การพิจารณาตามที่บริษัทกำหนด โปรดศึกษารายละเอียดในกรมธรรม์ฉบับเต็มก่อนตัดสินใจ',
        },
        {
          title: 'ความคุ้มครองและผลประโยชน์',
          body: 'ความคุ้มครองและผลประโยชน์เป็นไปตามแผนที่เลือกและเงื่อนไขที่ระบุในกรมธรรม์ สามารถสอบถามรายละเอียดเพิ่มเติมจากที่ปรึกษาประกันชีวิต',
        },
        {
          title: 'ข้อยกเว้น',
          body: 'มีข้อยกเว้นบางประการตามที่ระบุในกรมธรรม์ เช่น การบาดเจ็บจากการฆ่าตัวตาย การดื่มสุรา หรือโรคที่มีอยู่ก่อนทำประกันภัย',
        },
        {
          title: 'ขั้นตอนการเคลม',
          body: 'ติดต่อ ตต. ถนอมศรี บำรุงตา โทร 097-114-2619 พร้อมเอกสารประกอบตามที่บริษัทกำหนด',
        },
        {
          title: 'คำเตือนและข้อควรทราบ',
          body: 'ผู้ซื้อควรทำความเข้าใจเงื่อนไข ข้อยกเว้น และผลประโยชน์ก่อนตัดสินใจทำประกันภัย',
        },
      ],
    };
  }

  function mergeDetail(product) {
    const defaults = getDefaultDetail(product);
    const override = typeof PRODUCT_DETAILS !== 'undefined' ? PRODUCT_DETAILS[product.slug] : null;
    if (!override) return defaults;
    return {
      ...defaults,
      ...override,
      quickInfo: override.quickInfo || defaults.quickInfo,
      planInfo: override.planInfo || defaults.planInfo,
      links: override.links || defaults.links,
      paragraphs: override.paragraphs || defaults.paragraphs,
      accordions: override.accordions || defaults.accordions,
    };
  }

  function renderBreadcrumb(product) {
    const catLabel = getCategoryLabel(product.category);
    const el = document.getElementById('prodBreadcrumb');
    if (!el) return;
    el.innerHTML = `
      <a href="index.html">หน้าแรก</a> &rsaquo;
      <a href="insurance.html">ประกันภัยของเรา</a> &rsaquo;
      <a href="insurance.html?cat=${product.category}">${catLabel}</a> &rsaquo;
      <span>${product.name}</span>
    `;
  }

  function renderHero(product, detail) {
    const img = document.getElementById('prodHeroImg');
    const fallback = 'assets/ins-hero-bg.png';
    if (img) {
      img.src = product.image || fallback;
      img.alt = product.name;
      img.onerror = () => { img.src = fallback; };
    }

    document.title = `${product.name} | เมืองไทยประกันภัย`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = detail.tagline;

    const title = document.getElementById('prodTitle');
    const subtitle = document.getElementById('prodSubtitle');
    const tagline = document.getElementById('prodTagline');
    if (title) title.textContent = product.name;
    if (subtitle) subtitle.textContent = detail.subtitle;
    if (tagline) tagline.textContent = detail.tagline;

    const quickEl = document.getElementById('prodQuickInfo');
    if (quickEl) {
      quickEl.innerHTML = detail.quickInfo.map((item) => `
        <div class="prod-quickinfo__item">
          ${ICONS[item.icon] || ICONS.shield}
          <span class="prod-quickinfo__label">${item.label}</span>
          <span class="prod-quickinfo__value">${item.value}</span>
        </div>
      `).join('');
    }

    const planEl = document.getElementById('prodPlanInfo');
    if (planEl) {
      planEl.innerHTML = detail.planInfo.map((row) => `
        <dl class="prod-plan-panel__row">
          <dt>${row.label}</dt>
          <dd>${row.value}</dd>
        </dl>
      `).join('');
    }

    const linksEl = document.getElementById('prodLinks');
    if (linksEl) {
      linksEl.innerHTML = detail.links.map((link) => `
        <li class="prod-links__item">
          <a href="${link.href}">${link.label} ${ARROW}</a>
        </li>
      `).join('');
    }

    const planSelect = document.getElementById('prodLeadPlan');
    if (planSelect) {
      planSelect.innerHTML = `<option value="${product.name}" selected>${product.name}</option>`;
    }
  }

  function renderContent(detail) {
    const el = document.getElementById('prodContent');
    if (!el) return;
    el.innerHTML = detail.paragraphs.map((p) => `<p>${p}</p>`).join('');
  }

  function renderTable(detail) {
    const section = document.getElementById('prodTableSection');
    const titleEl = document.getElementById('prodTableTitle');
    const tableEl = document.getElementById('prodTable');
    if (!section || !tableEl || !detail.table) {
      section?.setAttribute('hidden', '');
      return;
    }

    section.removeAttribute('hidden');
    if (titleEl) titleEl.textContent = detail.table.title;

    const { headers, rows } = detail.table;
    tableEl.innerHTML = `
      <thead><tr>${headers.map((h) => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>
        ${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}
      </tbody>
    `;
  }

  function renderAccordions(detail) {
    const el = document.getElementById('prodAccordions');
    if (!el) return;
    el.innerHTML = detail.accordions.map((item, i) => `
      <div class="prod-acc-item${i === 0 ? ' open' : ''}" data-acc>
        <button type="button" class="prod-acc-item__question" aria-expanded="${i === 0}">
          ${item.title}
          ${PLUS}
        </button>
        <div class="prod-acc-item__answer">
          <p>${item.body}</p>
        </div>
      </div>
    `).join('');

    el.querySelectorAll('[data-acc]').forEach((item) => {
      const btn = item.querySelector('.prod-acc-item__question');
      btn?.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        el.querySelectorAll('.prod-acc-item.open').forEach((openItem) => {
          openItem.classList.remove('open');
          openItem.querySelector('.prod-acc-item__question')?.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  function renderRelated(product) {
    const el = document.getElementById('prodRelated');
    if (!el) return;

    const related = LIFE_PRODUCTS
      .filter((p) => p.slug !== product.slug && p.category === product.category)
      .slice(0, 3);

    if (related.length < 3) {
      const extra = LIFE_PRODUCTS
        .filter((p) => p.slug !== product.slug && p.category !== product.category)
        .slice(0, 3 - related.length);
      related.push(...extra);
    }

    el.innerHTML = related.map((p) => `
      <a href="product.html?slug=${p.slug}" class="prod-related__card">
        <div class="prod-related__media">
          ${p.image ? `<img class="prod-related__img" src="${p.image}" alt="${p.name}" loading="lazy">` : ''}
          <span class="prod-related__badge">${getCategoryLabel(p.category)}</span>
        </div>
        <div class="prod-related__body">
          <h3 class="prod-related__name">${p.name}</h3>
        </div>
      </a>
    `).join('');
  }

  function initInteractions() {
    const planToggle = document.getElementById('prodPlanToggle');
    const planPanel = document.getElementById('prodPlanPanel');
    planToggle?.addEventListener('click', () => {
      const open = planPanel?.classList.toggle('open');
      planToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    planPanel?.classList.add('open');

    const form = document.getElementById('prodLeadFormEl');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('ส่งข้อมูลเรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับโดยเร็วที่สุด');
      form.reset();
      const planSelect = document.getElementById('prodLeadPlan');
      if (planSelect && planSelect.options.length) planSelect.selectedIndex = 0;
    });

    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 400);
      }, { passive: true });
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function showNotFound() {
    document.getElementById('productPage')?.setAttribute('hidden', '');
    document.getElementById('prodNotFound')?.removeAttribute('hidden');
    document.querySelector('.footer')?.setAttribute('hidden', '');
    document.getElementById('backToTop')?.setAttribute('hidden', '');
  }

  function init() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    if (!slug) {
      showNotFound();
      return;
    }

    const product = typeof getProductBySlug === 'function' ? getProductBySlug(slug) : null;
    if (!product) {
      showNotFound();
      return;
    }

    const detail = mergeDetail(product);
    renderBreadcrumb(product);
    renderHero(product, detail);
    renderContent(detail);
    renderTable(detail);
    renderAccordions(detail);
    renderRelated(product);
    initInteractions();
    window.refreshLucideIcons?.(document);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
