document.addEventListener('DOMContentLoaded', () => {
  if (typeof SITE_INFO === 'undefined') return;

  const { phone, phoneDisplay } = SITE_INFO;
  const contacts = [
    {
      href: `tel:${phone}`,
      label: 'โทรเลย',
      sublabel: phoneDisplay,
      icon: 'phone',
    },
    {
      href: 'service.html',
      label: 'ติดต่อสอบถาม',
      sublabel: 'บริการลูกค้า',
      icon: 'headset',
    },
    {
      href: 'service.html',
      label: 'ขอคำปรึกษาฟรี',
      sublabel: 'ไม่มีค่าใช้จ่าย',
      icon: 'message-circle',
    },
  ];

  const widget = document.createElement('div');
  widget.className = 'float-contact';
  widget.innerHTML = `
    <div class="float-contact__actions" id="floatContactActions" aria-hidden="true">
      ${contacts.map((item, index) => `
        <a href="${item.href}" class="float-contact__action" style="--float-delay: ${index * 0.05}s">
          <span class="float-contact__action-label">${item.label}</span>
          <span class="float-contact__action-btn" aria-label="${item.label} ${item.sublabel}">
            <i data-lucide="${item.icon}" class="icon icon--22" aria-hidden="true"></i>
          </span>
        </a>
      `).join('')}
    </div>
    <button type="button" class="float-contact__toggle" id="floatContactToggle" aria-expanded="false" aria-controls="floatContactActions" aria-label="เปิดเมนูติดต่อ">
      <i data-lucide="messages-square" class="icon icon--28 float-contact__icon-open" aria-hidden="true"></i>
      <i data-lucide="x" class="icon icon--28 float-contact__icon-close" aria-hidden="true"></i>
    </button>
  `;
  document.body.appendChild(widget);

  const toggle = widget.querySelector('#floatContactToggle');
  const actions = widget.querySelector('#floatContactActions');

  const setOpen = (isOpen) => {
    widget.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    actions.setAttribute('aria-hidden', String(!isOpen));
  };

  toggle.addEventListener('click', () => {
    setOpen(!widget.classList.contains('is-open'));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && widget.classList.contains('is-open')) {
      setOpen(false);
    }
  });

  document.addEventListener('click', (e) => {
    if (widget.classList.contains('is-open') && !widget.contains(e.target)) {
      setOpen(false);
    }
  });

  actions.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  window.refreshLucideIcons?.(widget);
});
