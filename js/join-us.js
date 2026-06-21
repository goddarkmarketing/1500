document.addEventListener('DOMContentLoaded', () => {
  const row1 = document.getElementById('joinMarqueeRow1');
  const row2 = document.getElementById('joinMarqueeRow2');
  if (!row1 || !row2) return;

  const ROW1_IMAGES = [
    'assets/join-us/row1/line_oa_chat_260620_014940_group_0.jpg',
    'assets/join-us/row1/line_oa_chat_260620_014940_group_1.jpg',
    'assets/join-us/row1/line_oa_chat_260620_014940_group_2.jpg',
    'assets/join-us/row1/line_oa_chat_260620_014940_group_3.jpg',
    'assets/join-us/row1/line_oa_chat_260620_014940_group_4.jpg',
    'assets/join-us/row1/line_oa_chat_260620_014940_group_5.jpg',
    'assets/join-us/row1/line_oa_chat_260620_014940_group_6.jpg',
  ];

  const ROW2_IMAGES = [
    'assets/join-us/row2/line_oa_chat_260620_014939_group_0.jpg',
    'assets/join-us/row2/line_oa_chat_260620_014939_group_1.jpg',
    'assets/join-us/row2/line_oa_chat_260620_014939_group_2.jpg',
    'assets/join-us/row2/line_oa_chat_260620_014939_group_3.jpg',
    'assets/join-us/row2/line_oa_chat_260620_014939_group_4.jpg',
    'assets/join-us/row2/line_oa_chat_260620_014939_group_5.jpg',
    'assets/join-us/row2/line_oa_chat_260620_014939_group_6.jpg',
    'assets/join-us/row2/line_oa_chat_260620_014939_group_7.jpg',
    'assets/join-us/row2/line_oa_chat_260620_014939_group_8.jpg',
    'assets/join-us/row2/line_oa_chat_260620_014939_group_9.jpg',
  ];

  const renderTrack = (container, images) => {
    const track = document.createElement('div');
    track.className = 'join-marquee__track';
    const slides = [...images, ...images];
    track.innerHTML = slides.map((src) => `
      <figure class="join-marquee__item">
        <img src="${src}" alt="ร่วมงานกับเรา MTLP4" loading="lazy" decoding="async">
      </figure>
    `).join('');
    container.appendChild(track);
  };

  renderTrack(row1, ROW1_IMAGES);
  renderTrack(row2, ROW2_IMAGES);

  const lightbox = document.createElement('div');
  lightbox.className = 'join-lightbox';
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = '<img src="" alt="ร่วมงานกับเรา MTLP4" class="join-lightbox__img">';
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('.join-lightbox__img');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  let hideTimer = null;
  let activeItem = null;

  const showPreview = (item) => {
    const img = item.querySelector('img');
    if (!img) return;

    clearTimeout(hideTimer);
    activeItem = item;
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('is-active');
    lightbox.setAttribute('aria-hidden', 'false');
  };

  const hidePreview = () => {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      lightbox.classList.remove('is-active');
      lightbox.setAttribute('aria-hidden', 'true');
      activeItem = null;
    }, 80);
  };

  document.querySelectorAll('.join-marquee__item').forEach((item) => {
    if (canHover) {
      item.addEventListener('mouseenter', () => showPreview(item));
      item.addEventListener('mouseleave', hidePreview);
    } else {
      item.addEventListener('click', () => {
        if (activeItem === item && lightbox.classList.contains('is-active')) {
          clearTimeout(hideTimer);
          lightbox.classList.remove('is-active');
          lightbox.setAttribute('aria-hidden', 'true');
          activeItem = null;
        } else {
          showPreview(item);
        }
      });
    }
  });

  if (!canHover) {
    lightbox.addEventListener('click', () => {
      clearTimeout(hideTimer);
      lightbox.classList.remove('is-active');
      lightbox.setAttribute('aria-hidden', 'true');
      activeItem = null;
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-active')) {
      clearTimeout(hideTimer);
      lightbox.classList.remove('is-active');
      lightbox.setAttribute('aria-hidden', 'true');
      activeItem = null;
    }
  });
});
