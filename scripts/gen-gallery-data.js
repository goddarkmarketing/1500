const fs = require('fs');
const path = require('path');

const galleryRoot = path.join(__dirname, '../assets/แกลอรี่');
const outFile = path.join(__dirname, '../js/gallery-data.js');

const images = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir).sort((a, b) => a.localeCompare(b))) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (/\.(jpe?g|png|webp)$/i.test(name)) {
      const rel = path.relative(galleryRoot, full).split(path.sep).join('/');
      images.push(`assets/แกลอรี่/${rel}`);
    }
  }
}

walk(galleryRoot);

const row1 = `window.GALLERY_ROW1 = [
  'assets/join-us/row1/line_oa_chat_260620_014940_group_0.jpg',
  'assets/join-us/row1/line_oa_chat_260620_014940_group_1.jpg',
  'assets/join-us/row1/line_oa_chat_260620_014940_group_2.jpg',
  'assets/join-us/row1/line_oa_chat_260620_014940_group_3.jpg',
  'assets/join-us/row1/line_oa_chat_260620_014940_group_4.jpg',
  'assets/join-us/row1/line_oa_chat_260620_014940_group_5.jpg',
  'assets/join-us/row1/line_oa_chat_260620_014940_group_6.jpg',
];`;

const row2 = `window.GALLERY_ROW2 = [
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
];`;

const galleryList = `window.GALLERY_IMAGES = [\n${images.map((s) => `  '${s}',`).join('\n')}\n];`;

const content = `${row1}\n\n${row2}\n\n${galleryList}\n\nwindow.GALLERY_ALT = 'ร่วมงานกับเรา MTLP4';\n`;

fs.writeFileSync(outFile, content, 'utf8');
console.log(`Wrote ${images.length} images to ${outFile}`);
