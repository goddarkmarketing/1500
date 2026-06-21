document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.art-cat').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.art-cat').forEach(t => t.classList.remove('art-cat--active'));
      tab.classList.add('art-cat--active');
    });
  });

  document.querySelector('.newsletter__form')?.addEventListener('submit', e => {
    e.preventDefault();
    const input = e.target.querySelector('.newsletter__input');
    if (input?.value.trim()) {
      input.value = '';
      alert('ขอบคุณที่สมัครรับจดหมายข่าว!');
    }
  });
});
