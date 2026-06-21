const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'ทั้งหมด' },
  { id: 'savings', label: 'แผนออมเงินเพื่อลูกรัก' },
  { id: 'legacy', label: 'คุ้มครองมรดก' },
  { id: 'retirement', label: 'เกษียณสุขใจ' },
  { id: 'senior', label: 'ประกันผู้สูงอายุ (ไม่ตอบคำถามสุขภาพ)' },
  { id: 'critical', label: 'คุ้มครองโรคร้ายแรง' },
  { id: 'accident', label: 'คุ้มครองอุบัติเหตุ' },
  { id: 'medical', label: 'คุ้มครองค่ารักษาพยาบาล' },
];

const LIFE_PRODUCTS = [

  // แผนออมเงินเพื่อลูกรัก
  { category: 'savings', name: 'เมืองไทยแฮปปี้ไลฟ์ พลัส', note: 'แนบอุบัติเหตุ', image: 'https://www.muangthai.co.th/assets/dd817407-9cae-4f75-9891-e6cca514b05c/Website Thumbnail_Big Return 60_Apr_793x432px (1).webp?format=webp' },
  { category: 'savings', name: 'ออมทรัพย์ 20/14', note: 'แนบอุบัติเหตุ', image: 'https://www.muangthai.co.th/assets/6921fb51-6c61-466f-956c-e3834f22fc32/takaful_P04.webp?format=webp' },
  { category: 'savings', name: 'เมืองไทย สไมล์ เซฟเวอร์ 20/16', note: 'แนบอุบัติเหตุ', image: 'https://www.muangthai.co.th/assets/9f5c1b48-a93f-483c-ac48-807d7e7ab12f/saving-2.webp?format=webp' },
  { category: 'savings', name: 'เมืองไทยธนธวี 15/10', note: 'แนบอุบัติเหตุ', image: 'https://www.muangthai.co.th/assets/7e6b8f53-d71f-4e07-9769-0fec01b0e87d/15-3.webp?format=webp' },
  { category: 'savings', name: 'เมืองไทยซุปเปอร์เซฟเวอร์ 25/16', note: 'แนบอุบัติเหตุหรือโรคร้ายแรง', image: 'https://www.muangthai.co.th/assets/ae3212f0-fb99-4aed-a3f7-f418c2fe9363/25-16.webp?format=webp' },
  { category: 'savings', name: 'เมืองไทยเอ็กซ์ตร้า เซฟวิ่ง 15/5', image: 'https://www.muangthai.co.th/assets/5139777c-2193-4d54-af78-e75996ad7bbd/saving.webp?format=webp' },
  { category: 'savings', name: 'เมืองไทยเอ็กซ์ตร้า เซฟวิ่ง 10/5', image: 'https://www.muangthai.co.th/assets/3408f55e-ccd4-4c35-857c-02829aff06a9/Product-Thumbnail_website_ออมจุใจ-10.3_793x432px.webp?format=webp' },
  { category: 'savings', name: 'โครงการ เพื่อสะสมทรัพย์ 15/6', note: 'การันตี', image: 'https://www.muangthai.co.th/assets/75fe83aa-c917-4936-8d05-9a717d61a458/saving-15-6.webp?format=webp' },

  // คุ้มครองมรดก
  { category: 'legacy', name: 'เมืองไทย พรีเมียร์ เลกาซี่ 99/5 และ 99/10', image: 'https://www.muangthai.co.th/assets/202e28f3-2c0a-4cd2-b42c-5299cf4b1087/Premier-Legacy.webp?format=webp' },
  { category: 'legacy', name: 'เมืองไทย เฟล็กซี่ โพรเทคชั่น 99/5', image: 'https://www.muangthai.co.th/assets/e70ed0c9-653b-4068-bbe8-1ba5c68e1ab0/PRODUCT-CARD_793x432.webp?format=webp' },
  { category: 'legacy', name: 'เมืองไทยพรีเมียร์ เลกาซี่ 99/1', image: 'https://www.muangthai.co.th/assets/8a1838c6-b25b-444b-8db5-8440cff943da/PRODUCT-CARD_793x432.webp?format=webp' },
  { category: 'legacy', name: 'เมืองไทย สมาร์ท โพรเทคชั่น 99/7', image: 'https://www.muangthai.co.th/assets/22017f52-fb99-4cf4-a93d-9e803f51f427/Happy-Return-99_7.webp?format=webp' },
  { category: 'legacy', name: 'เมืองไทย สมาร์ทโพรเทคชั่น 99/20', image: 'https://www.muangthai.co.th/assets/118ffb5f-b57a-46da-a94c-0184eabe36e0/Life.webp?format=webp' },
  { category: 'legacy', name: 'คุ้มครองตลอดชีพ 99/99', image: 'https://www.muangthai.co.th/assets/6d8bd57a-6488-4cd6-9024-393c30371cc2/khumkhrong-talot-chip-99-99_793x432.webp?format=webp' },
  { category: 'legacy', name: 'คุ้มครองสุขใจ', note: 'ชำระเบี้ยครบอายุ 60 ปี', image: 'https://www.muangthai.co.th/assets/ef7897a4-d54d-43c6-b277-c1bfa6d8a316/ทำรูปขึ้นเว็บ_เพื่อคุ้มครองตลอดชีพ-99-1ไม่มีเงินคืน_793x432.webp?format=webp' },

  // เกษียณสุขใจ
  { category: 'retirement', name: 'เมืองไทย 9901 D65', note: 'บำนาญลดหย่อนได้', image: 'https://www.muangthai.co.th/assets/4d753a80-ecf1-4a03-aff4-0d273e9d6a91/9901-D65.webp?format=webp' },
  { category: 'retirement', name: 'เฟล็กซี่รีไทร์ 90/1 ดี 60', note: 'บำนาญลดหย่อนได้', image: 'https://www.muangthai.co.th/assets/c1637790-a069-4834-87a5-f01a03f374ec/Flexi-Retire_Product-Card_793x432.webp?format=webp' },
  { category: 'retirement', name: 'เฟล็กซี่ รีไทร์ 90/5 ดี55', note: 'บำนาญลดหย่อนได้', image: 'https://www.muangthai.co.th/assets/5b76caa4-3925-42df-9238-f2bacb49302d/PRODUCT-CARD_793x432.webp?format=webp' },
  { category: 'retirement', name: 'เฟล็กซี่รีไทร์ 90/1 ดี55', note: 'บำนาญลดหย่อนได้', image: 'https://www.muangthai.co.th/assets/cc8baf9b-a6e2-4f1d-90eb-72e49b1e79ac/saving-10-1-Mobile.webp?format=webp' },
  { category: 'retirement', name: 'เฟล็กซี่รีไทร์ 90/1 ดี65', note: 'บำนาญลดหย่อนได้', image: 'https://www.muangthai.co.th/assets/e558ffd9-ee25-406b-a91e-9a7d90a7f846/Unit-2.webp?format=webp' },
  { category: 'retirement', name: 'เมืองไทยแฮปปี้รีไทร์ 60', image: 'https://www.muangthai.co.th/assets/8522fa50-95b9-43a8-9847-221c5c6742b5/Unit1.webp?format=webp' },
  { category: 'retirement', name: 'เมืองไทย 8555 จี20', note: 'บำนาญลดหย่อนได้', image: 'https://www.muangthai.co.th/assets/6cf881ff-12d1-46dd-a7ba-3758ba9a045e/Unit-3.webp?format=webp' },
  { category: 'retirement', name: 'เมืองไทย 8560 จี15', note: 'บำนาญลดหย่อนได้', image: 'https://www.muangthai.co.th/assets/0b43167a-c44a-424f-bd34-b89b510fca0c/Unit-4.webp?format=webp' },

  // ประกันผู้สูงอายุ
  { category: 'senior', name: 'โครงการเมืองไทยวัยเก๋า คุ้มสุขใจ', note: 'เพื่อผู้สูงอายุ', image: 'https://www.muangthai.co.th/assets/38bdf24d-3024-4246-82e1-884373d6da98/WG1.webp?format=webp' },
  { category: 'senior', name: 'โครงการเมืองไทยวัยเก๋า คุ้มได้ใจ', note: 'เพื่อผู้สูงอายุ', image: 'https://www.muangthai.co.th/assets/bc1a0f9b-3899-44e9-9db3-e82d85cdca05/WG2.webp?format=webp' },

  // คุ้มครองโรคร้ายแรง
  { category: 'critical', name: 'ซีไอ เพอร์เฟค แคร์', image: 'https://www.muangthai.co.th/assets/c896770e-74d5-4b8a-a8c3-6bb2e4c6c1e8/CIPrefect.webp?format=webp' },
  { category: 'critical', name: 'โรคร้ายแรงดีแคร์ กลุ่มโรคมะเร็ง', image: 'https://www.muangthai.co.th/assets/474b9288-42a2-473c-8aa8-432b2948cb8e/Pure.webp?format=webp' },
  { category: 'critical', name: 'โรคร้ายแรงดีแคร์ กลุ่มโรคยอดฮิต', image: 'https://www.muangthai.co.th/assets/46f347ba-e140-45ed-8774-239a1d8a6954/DCare.webp?format=webp' },
  { category: 'critical', name: 'โรคร้ายแรงดีแคร์ กลุ่มโรคเกี่ยวกับหลอดเลือดและหัวใจ', image: 'https://www.muangthai.co.th/assets/be410bb4-94f9-4577-ad06-10779c1cb05d/Multiple.webp?format=webp' },
  { category: 'critical', name: 'แคร์พลัส มะเร็ง และ ไตวายเรื้อรัง', image: 'https://www.muangthai.co.th/assets/72711416-e620-49dc-aa60-cd8d3b1add05/Careplus_ProductCard.webp?format=webp' },
  { category: 'critical', name: 'โรคร้ายแรง มัลติเพิล ซีไอ', image: 'https://www.muangthai.co.th/assets/b71dabd1-1b32-4092-8346-ac48e02b0474/Silver.webp?format=webp' },
  { category: 'critical', name: 'คุ้มครองโรคเบาหวาน', image: 'https://www.muangthai.co.th/assets/d604c398-decd-454b-9efc-acd4da7b1b89/Kids-Care_793x432.webp?format=webp' },
  { category: 'critical', name: 'คุ้มครองโรคมะเร็ง', image: 'https://www.muangthai.co.th/assets/aca2624f-e8d3-41f8-861c-6ee01ea0eebc/793x432.webp?format=webp' },

  // คุ้มครองอุบัติเหตุ
  { category: 'accident', name: 'PA Easy Plan Rider', image: 'https://www.muangthai.co.th/assets/b07cda92-f64c-4d9a-8872-1165c8d77018/PRODUCT-CARD_PAEasy-Plan-Rider_793x432.webp?format=webp' },
  { category: 'accident', name: 'PA Pay Max', image: 'https://www.muangthai.co.th/assets/9ae538b0-e24d-436e-87c9-562eb8f180d7/PAPAYMAX_793x432.webp?format=webp' },
  { category: 'accident', name: 'PA ครบเว่อร์', image: 'https://www.muangthai.co.th/assets/e51b546c-ecb8-4e4b-9086-b1922f3459e0/PA-Take-Care_FORWEB_793x432.webp?format=webp' },
  { category: 'accident', name: 'PA Broken Bone', image: 'https://www.muangthai.co.th/assets/1803b9a1-358c-405d-8014-0ca18e27d9eb/Bone-Cover.webp?format=webp' },
  { category: 'accident', name: 'Classic PA', image: 'https://www.muangthai.co.th/assets/f0583904-33c1-4c93-adbe-abdcf6493299/PA-Return-Cash_FORWEB_793x432.webp?format=webp' },
  { category: 'accident', name: 'PA Extreme', image: 'https://www.muangthai.co.th/assets/9ec130ae-74f3-48bf-909b-fa00b3df4887/PAExtr-Cover.webp?format=webp' },

  // คุ้มครองค่ารักษาพยาบาล
  { category: 'medical', name: 'D Health Lite', image: 'https://www.muangthai.co.th/assets/a0de3d61-2824-4f6c-b8b5-ae7d5668e301/PRODUCTCARD_DHealth-Lite_793x432.webp?format=webp' },
  { category: 'medical', name: 'Elite Health Plus', image: 'https://www.muangthai.co.th/assets/1a0bedb5-8f93-4713-9cba-f916222c91df/KKV2_Category-EHP.webp?format=webp' },
  { category: 'medical', name: 'Extra Care Plus', image: 'https://www.muangthai.co.th/assets/15b103e7-4deb-4154-b3b6-370e8614c225/ExtraCare.webp?format=webp' },
  { category: 'medical', name: 'เหมาจ่ายเอ็กซ์ตร้า', image: 'https://www.muangthai.co.th/assets/5973ee35-db1b-45e5-9a5a-e894478d2fd3/MCExtra.webp?format=webp' },
  { category: 'medical', name: 'OPD เหมาจ่าย', image: 'https://www.muangthai.co.th/assets/f6595f3c-ea8e-4eeb-b08d-b1322f9fdd7c/OPD_FORWEB_793x432.webp?format=webp' },
];

function assignProductSlug(product, index) {
  if (product.slug) return product.slug;
  const roman = product.name.match(/^[A-Za-z][A-Za-z0-9\s-]*/);
  if (roman) {
    return roman[0].trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  }
  return `plan-${index + 1}`;
}

LIFE_PRODUCTS.forEach((product, index) => {
  product.slug = assignProductSlug(product, index);
});

const PRODUCT_DETAILS = {
  'd-health-lite': {
    subtitle: 'ดี เฮลท์ ไลท์',
    tagline: 'ประกันสุขภาพแบบเหมาจ่าย คุ้มครองครบ จ่ายเบี้ยไม่หนัก',
    quickInfo: [
      { icon: 'user', label: 'อายุรับประกัน', value: '11 – 90 ปี' },
      { icon: 'shield', label: 'ทุนประกันสูงสุด', value: '5,000,000 บาท' },
      { icon: 'hospital', label: 'ขอบเขตความคุ้มครอง', value: 'ทั่วประเทศ' },
    ],
    planInfo: [
      { label: 'ประเภทแผน', value: 'ประกันสุขภาพแบบเหมาจ่าย' },
      { label: 'ระยะเวลาคุ้มครอง', value: '1 ปี (ต่ออายุได้)' },
      { label: 'ผลประโยชน์หลัก', value: 'ค่ารักษาพยาบาลผู้ป่วยใน / ผู้ป่วยนอก' },
    ],
    links: [
      { label: 'จุดเด่นของแผน', href: '#prodHighlights' },
      { label: 'ความคุ้มครอง', href: '#prodTableSection' },
      { label: 'ดาวน์โหลดโบรชัวร์', href: '#' },
    ],
    paragraphs: [
      'D Health Lite คือประกันสุขภาพแบบเหมาจ่ายที่ออกแบบมาเพื่อให้คุณเข้าถึงการรักษาพยาบาลคุณภาพได้ง่ายขึ้น ด้วยทุนประกันที่เลือกได้หลายระดับ ครอบคลุมทั้งผู้ป่วยในและผู้ป่วยนอก รวมถึงค่าห้อง ค่าอาหาร ค่าผ่าตัด และค่าบริการทางการแพทย์ที่จำเป็น',
      'แผนประกันนี้เหมาะสำหรับผู้ที่ต้องการความคุ้มครองสุขภาพที่สมดุลระหว่างเบี้ยประกันและผลประโยชน์ สามารถเลือกแผนที่เหมาะกับไลฟ์สไตล์และงบประมาณของคุณ พร้อมบริการเครือข่ายโรงพยาบาลทั่วประเทศ',
      'เมื่อเกิดเหตุการณ์ที่ต้องเข้ารับการรักษา คุณสามารถใช้สิทธิ์ได้ตามเงื่อนไขกรมธรรม์ โดยมีทีมงานคอยให้คำปรึกษาและอำนวยความสะดวกในการเคลมตลอด 24 ชั่วโมง',
    ],
    table: {
      title: 'เปรียบเทียบความคุ้มครอง D Health Lite',
      headers: ['รายการ', 'แผน 1', 'แผน 2', 'แผน 3', 'แผน 4'],
      rows: [
        ['ทุนประกันสูงสุดต่อปี', '1,000,000', '2,000,000', '3,000,000', '5,000,000'],
        ['ค่าห้องผู้ป่วยปกติ (ต่อวัน)', '3,000', '4,000', '6,000', '8,000'],
        ['ค่าห้อง ICU (ต่อวัน)', '6,000', '8,000', '12,000', '16,000'],
        ['ค่าผ่าตัดใหญ่', '100,000', '150,000', '200,000', '300,000'],
        ['ค่ารักษาพยาบาลผู้ป่วยนอก', '5,000', '8,000', '12,000', '15,000'],
        ['ค่าใช้จ่ายก่อนเข้ารับการรักษา', '10,000', '15,000', '20,000', '25,000'],
      ],
    },
    accordions: [
      {
        title: 'เงื่อนไขการรับประกันภัย',
        body: 'ผู้เอาประกันภัยต้องมีสุขภาพแข็งแรง ไม่มีประวัติการรักษาโรคที่ระบุในกรมธรรม์ และผ่านการพิจารณาตามเกณฑ์ของบริษัท อายุรับประกันภัยตั้งแต่ 11 ปี จนถึง 90 ปี ณ วันที่ทำประกันภัย',
      },
      {
        title: 'ความคุ้มครองค่ารักษาพยาบาลและค่าใช้จ่าย',
        body: 'ครอบคลุมค่ารักษาพยาบาลผู้ป่วยใน ผู้ป่วยนอก ค่าห้อง ค่าอาหาร ค่าผ่าตัด ค่ายาและเวชภัณฑ์ รวมถึงค่าบริการทางการแพทย์ที่จำเป็นตามที่ระบุในกรมธรรม์ โดยมีวงเงินตามแผนที่เลือก',
      },
      {
        title: 'ข้อยกเว้นและความรับผิดที่ไม่คุ้มครอง',
        body: 'ไม่คุ้มครองการบาดเจ็บหรือเจ็บป่วยที่เกิดจากการฆ่าตัวตาย การดื่มสุรา การใช้ยาเสพติด การรักษาเพื่อความงาม หรือโรคที่มีอยู่ก่อนทำประกันภัยตามเงื่อนไขที่ระบุในกรมธรรม์',
      },
      {
        title: 'ขั้นตอนการเคลม',
        body: 'ติดต่อ ตต. ถนอมศรี บำรุงตา โทร 097-114-2619 พร้อมเอกสารประกอบ เจ้าหน้าที่จะประสานงานกับโรงพยาบาลในเครือข่ายหรือดำเนินการคืนเงินตามเงื่อนไข',
      },
      {
        title: 'เอกสารที่ต้องใช้',
        body: 'สำเนาบัตรประชาชน ใบรับรองแพทย์ ใบเสร็จรับเงิน ใบแจ้งหนี้จากโรงพยาบาล และเอกสารอื่นๆ ตามที่บริษัทกำหนด',
      },
      {
        title: 'คำเตือนและข้อควรทราบ',
        body: 'ผู้ซื้อควรทำความเข้าใจเงื่อนไข ข้อยกเว้น และผลประโยชน์ก่อนตัดสินใจทำประกันภัย โปรดศึกษารายละเอียดในกรมธรรม์ฉบับเต็ม',
      },
    ],
  },
};

function getProductBySlug(slug) {
  return LIFE_PRODUCTS.find((p) => p.slug === slug) || null;
}
