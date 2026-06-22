document.addEventListener('DOMContentLoaded', () => {
  const row1 = document.getElementById('joinMarqueeRow1');
  const row2 = document.getElementById('joinMarqueeRow2');
  if (!row1 || !row2) return;

  const alt = window.GALLERY_ALT || 'ร่วมงานกับเรา MTLP4';
  const row1Images = window.GALLERY_ROW1 || [];
  const row2Images = window.GALLERY_ROW2 || [];

  const renderTrack = (container, images) => {
    const track = document.createElement('div');
    track.className = 'join-marquee__track';
    const slides = [...images, ...images];
    track.innerHTML = slides.map((src) => `
      <figure class="join-marquee__item">
        <img src="${src}" alt="${alt}" loading="lazy" decoding="async">
      </figure>
    `).join('');
    container.appendChild(track);
  };

  renderTrack(row1, row1Images);
  renderTrack(row2, row2Images);

  const items = document.querySelectorAll('.join-marquee__item');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (canHover) {
    window.GalleryLightbox.bindHoverItems(items);
  } else {
    window.GalleryLightbox.bindClickItems(items);
  }
});
