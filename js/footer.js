document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('[data-site-footer]');
  if (!el || typeof SITE_INFO === 'undefined') return;

  const { brand, agentTitle, license, phone, phoneDisplay, addressHtml } = SITE_INFO;

  el.innerHTML = `
    <div class="footer__grid">
      <div class="footer__brand">
        <a href="index.html" class="logo footer__logo">
          <img src="assets/logo-footer.png" alt="${brand}" class="logo__img logo__img--footer">
        </a>
        <p class="footer__agent">${brand}</p>
        <p class="footer__desc">
          ${agentTitle}<br>
          เลขที่ใบอนุญาต ${license}<br>
          ${addressHtml}<br>
          <a href="tel:${phone}" class="footer__phone">โทร. ${phoneDisplay}</a>
        </p>
      </div>
      <div>
        <h3 class="footer__heading">เกี่ยวกับตัวแทน</h3>
        <ul class="footer__links">
          <li><a href="about.html">เกี่ยวกับตัวแทน</a></li>
          <li><a href="insurance.html">แผนประกันชีวิต</a></li>
          <li><a href="articles.html">บทความสาระน่ารู้</a></li>
        </ul>
      </div>
      <div>
        <h3 class="footer__heading">บริการลูกค้า</h3>
        <ul class="footer__links">
          <li><a href="insurance.html">เช็คเบี้ยประกัน</a></li>
          <li><a href="insurance.html">ซื้อประกัน</a></li>
          <li><a href="service.html">ติดต่อสอบถาม</a></li>
        </ul>
      </div>
      <div>
        <h3 class="footer__heading">ผลิตภัณฑ์</h3>
        <ul class="footer__links">
          <li><a href="insurance.html?cat=savings">แผนออมเงิน</a></li>
          <li><a href="insurance.html?cat=medical">ประกันสุขภาพ</a></li>
          <li><a href="insurance.html?cat=accident">ประกันอุบัติเหตุ</a></li>
          <li><a href="insurance.html?cat=retirement">เกษียณสุขใจ</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="footer__copy">&copy; 2568 ${agentTitle} — ${brand} สงวนลิขสิทธิ์</p>
      <div class="footer__legal">
        <a href="#" data-legal="privacy">นโยบายความเป็นส่วนตัว</a>
        <a href="#" data-legal="terms">ข้อกำหนดและเงื่อนไข</a>
      </div>
    </div>
  `;
});
