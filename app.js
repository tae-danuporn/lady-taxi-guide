/* ============================================
   CHIANG MAI TAXI & TOURS — App Logic
   ============================================ */

// ========== PLACES DATA ==========
const placesData = [
    // ══════════════════════════════════════
    // โซนอำเภอเมือง (เชียงใหม่)
    // ══════════════════════════════════════
    {
        id: 'doi-suthep',
        nameTh: 'วัดพระธาตุดอยสุเทพราชวรวิหาร',
        nameEn: 'Wat Phra That Doi Suthep',
        province: 'cm-muang', provinceTh: 'เชียงใหม่ · อ.เมือง', provinceEn: 'Chiang Mai · City',
        category: ['culture'],
        descTh: 'แลนด์มาร์กสำคัญของเชียงใหม่ ชมสถาปัตยกรรมล้านนาและวิวเมืองจากยอดดอย 360°',
        descEn: 'Chiang Mai\'s iconic landmark. Admire Lanna architecture and panoramic city views from the hilltop.',
        driveTime: '30 นาที', driveTimeEn: '30 min',
        visitDuration: '1-2 ชม.', visitDurationEn: '1-2 hrs',
        bestTime: 'เช้า-บ่าย', bestTimeEn: 'Morning-Afternoon',
        images: ['images/doi-suthep-1.jpg', 'images/doi-suthep-2.jpg', 'images/doi-suthep-3.jpg']
    },
    {
        id: 'jing-jai-market',
        nameTh: 'จริงใจมาร์เก็ต',
        nameEn: 'Jing Jai Market',
        province: 'cm-muang', provinceTh: 'เชียงใหม่ · อ.เมือง', provinceEn: 'Chiang Mai · City',
        category: ['market', 'cafe'],
        descTh: 'ตลาดนัดสุดสัปดาห์ เดินชิลๆ ดูงานคราฟต์ กาแฟสเปเชียลตี้ และสินค้าออร์แกนิก',
        descEn: 'Weekend market for a chill stroll — craft goods, specialty coffee, and organic products.',
        driveTime: '10 นาที', driveTimeEn: '10 min',
        visitDuration: '1-2 ชม.', visitDurationEn: '1-2 hrs',
        bestTime: 'เสาร์-อาทิตย์ เช้า', bestTimeEn: 'Sat-Sun morning',
        images: ['images/jing-jai-market-1.jpg', 'images/jing-jai-market-2.jpg', 'images/jing-jai-market-3.jpg']
    },
    {
        id: 'ang-kaew',
        nameTh: 'อ่างแก้ว มหาวิทยาลัยเชียงใหม่',
        nameEn: 'Ang Kaew Reservoir (CMU)',
        province: 'cm-muang', provinceTh: 'เชียงใหม่ · อ.เมือง', provinceEn: 'Chiang Mai · City',
        category: ['nature'],
        descTh: 'จุดพักผ่อนหย่อนใจ วิวภูเขาสะท้อนน้ำ บรรยากาศดีช่วงเย็น',
        descEn: 'Scenic reservoir with mountain reflections. Beautiful atmosphere in the late afternoon.',
        driveTime: '15 นาที', driveTimeEn: '15 min',
        visitDuration: '1 ชม.', visitDurationEn: '1 hr',
        bestTime: 'เย็น 16:00-18:00', bestTimeEn: 'Evening 4-6 PM',
        images: ['images/ang-kaew-1.jpg', 'images/ang-kaew-2.jpg', 'images/ang-kaew-3.jpg']
    },

    // ══════════════════════════════════════
    // โซนแม่ออน / แม่กำปอง (เชียงใหม่)
    // ══════════════════════════════════════
    {
        id: 'mae-kampong',
        nameTh: 'หมู่บ้านแม่กำปอง',
        nameEn: 'Mae Kampong Village',
        province: 'cm-maeon', provinceTh: 'เชียงใหม่ · แม่ออน', provinceEn: 'Chiang Mai · Mae On',
        category: ['culture', 'cafe', 'nature'],
        descTh: 'หมู่บ้านกลางหุบเขา อากาศเย็นสบาย สัมผัสวิถีชีวิตสโลว์ไลฟ์และคาเฟ่ริมลำธาร',
        descEn: 'Mountain village with cool weather, slow-life vibes, and charming streamside cafes.',
        driveTime: '1 ชม.', driveTimeEn: '1 hr',
        visitDuration: '2-4 ชม.', visitDurationEn: '2-4 hrs',
        bestTime: 'ทั้งวัน', bestTimeEn: 'All Day',
        images: ['images/mae-kampong-1.jpg', 'images/mae-kampong-2.jpg', 'images/mae-kampong-3.jpg']
    },
    {
        id: 'mae-kampong-waterfall',
        nameTh: 'น้ำตกแม่กำปอง',
        nameEn: 'Mae Kampong Waterfall',
        province: 'cm-maeon', provinceTh: 'เชียงใหม่ · แม่ออน', provinceEn: 'Chiang Mai · Mae On',
        category: ['nature'],
        descTh: 'เดินชมธรรมชาติและป่าไม้ที่อุดมสมบูรณ์ เข้าถึงง่ายจากหมู่บ้านแม่กำปอง',
        descEn: 'Easy-access nature walk through lush forest, just steps from Mae Kampong village.',
        driveTime: '1 ชม.', driveTimeEn: '1 hr',
        visitDuration: '1-1.5 ชม.', visitDurationEn: '1-1.5 hrs',
        bestTime: 'หน้าฝน-หน้าหนาว', bestTimeEn: 'Rainy-Winter season',
        images: ['images/mae-kampong-waterfall-1.jpg', 'images/mae-kampong-waterfall-2.jpg', 'images/mae-kampong-waterfall-3.jpg']
    },

    // ══════════════════════════════════════
    // โซนแม่แตง (เชียงใหม่)
    // ══════════════════════════════════════
    {
        id: 'elephant-nature',
        nameTh: 'เอลลิแฟนท์เนเจอร์ปาร์ค',
        nameEn: 'Elephant Nature Park',
        province: 'cm-maetaeng', provinceTh: 'เชียงใหม่ · แม่แตง', provinceEn: 'Chiang Mai · Mae Taeng',
        category: ['nature', 'adventure'],
        descTh: 'ศูนย์อนุรักษ์ช้างแบบไม่ขี่ ใกล้ชิดช้างอย่างมีจริยธรรม ต่างชาติที่อินเรื่องสัตว์และธรรมชาติจะชอบมาก',
        descEn: 'Ethical elephant sanctuary — no riding. Feed, bathe, and walk with elephants. A favorite among nature-loving visitors.',
        driveTime: '1 ชม.', driveTimeEn: '1 hr',
        visitDuration: 'ครึ่งวัน-ทั้งวัน', visitDurationEn: 'Half-Full day',
        bestTime: 'เช้า', bestTimeEn: 'Morning',
        images: ['images/elephant-nature-1.jpg', 'images/elephant-nature-2.jpg', 'images/elephant-nature-3.jpg']
    },
    {
        id: 'kaeng-kued',
        nameTh: 'แก่งกื้ด',
        nameEn: 'Kaeng Kued',
        province: 'cm-maetaeng', provinceTh: 'เชียงใหม่ · แม่แตง', provinceEn: 'Chiang Mai · Mae Taeng',
        category: ['adventure', 'nature'],
        descTh: 'ล่องแก่งเรือยาง ล่องแพไม้ไผ่ ขี่เอทีวี เหมาะสำหรับลูกค้าสายลุยและแอดเวนเจอร์',
        descEn: 'White-water rafting, bamboo raft floating, and ATV riding. Perfect for adventure seekers.',
        driveTime: '1.5 ชม.', driveTimeEn: '1.5 hrs',
        visitDuration: 'ครึ่งวัน', visitDurationEn: 'Half day',
        bestTime: 'ทั้งปี', bestTimeEn: 'Year-round',
        images: ['images/kaeng-kued-1.jpg', 'images/kaeng-kued-2.jpg', 'images/kaeng-kued-3.jpg']
    },

    // ══════════════════════════════════════
    // โซนแม่ริม (เชียงใหม่)
    // ══════════════════════════════════════
    {
        id: 'mon-cham',
        nameTh: 'ม่อนแจ่ม',
        nameEn: 'Mon Cham',
        province: 'cm-maerim', provinceTh: 'เชียงใหม่ · แม่ริม', provinceEn: 'Chiang Mai · Mae Rim',
        category: ['nature', 'cafe'],
        descTh: 'ชมวิวภูเขาแบบพาโนรามา สวนดอกไม้ อากาศเย็น และมีคาเฟ่ให้นั่งชิลเยอะ',
        descEn: 'Panoramic mountain views, flower gardens, cool weather, and plenty of hilltop cafes.',
        driveTime: '1 ชม.', driveTimeEn: '1 hr',
        visitDuration: '2-3 ชม.', visitDurationEn: '2-3 hrs',
        bestTime: 'เช้ามืด 05:30', bestTimeEn: 'Early 05:30 AM',
        images: ['images/mon-cham-1.jpg', 'images/mon-cham-2.jpg', 'images/mon-cham-3.jpg']
    },
    {
        id: 'royal-flora',
        nameTh: 'สวนพฤกษศาสตร์สมเด็จพระนางเจ้าสิริกิติ์',
        nameEn: 'Queen Sirikit Botanic Garden',
        province: 'cm-maerim', provinceTh: 'เชียงใหม่ · แม่ริม', provinceEn: 'Chiang Mai · Mae Rim',
        category: ['nature'],
        descTh: 'เดินชมเรือนกระจกพรรณไม้หายาก และทางเดินลอยฟ้าเหนือยอดไม้ (Canopy Walks)',
        descEn: 'Explore rare plant glasshouses and a canopy walkway high above the treetops.',
        driveTime: '45 นาที', driveTimeEn: '45 min',
        visitDuration: '2-3 ชม.', visitDurationEn: '2-3 hrs',
        bestTime: 'เช้า-บ่าย', bestTimeEn: 'Morning-Afternoon',
        images: ['images/royal-flora-1.jpg', 'images/royal-flora-2.jpg', 'images/royal-flora-3.jpg']
    },

    // ══════════════════════════════════════
    // โซนหางดง (เชียงใหม่)
    // ══════════════════════════════════════
    {
        id: 'baan-tawai',
        nameTh: 'บ้านถวาย',
        nameEn: 'Baan Tawai Handicraft Village',
        province: 'cm-hangdong', provinceTh: 'เชียงใหม่ · หางดง', provinceEn: 'Chiang Mai · Hang Dong',
        category: ['culture', 'market'],
        descTh: 'หมู่บ้านหัตถกรรมไม้แกะสลัก เหมาะมาเดินชมศิลปะหรือซื้อของตกแต่งบ้าน',
        descEn: 'Woodcarving handicraft village — browse handmade art and home decor.',
        driveTime: '30 นาที', driveTimeEn: '30 min',
        visitDuration: '1-2 ชม.', visitDurationEn: '1-2 hrs',
        bestTime: 'เช้า-บ่าย', bestTimeEn: 'Morning-Afternoon',
        images: ['images/baan-tawai-1.jpg', 'images/baan-tawai-2.jpg', 'images/baan-tawai-3.jpg']
    },
    {
        id: 'grand-canyon',
        nameTh: 'แกรนด์แคนยอน วอเตอร์พาร์ค',
        nameEn: 'Grand Canyon Water Park',
        province: 'cm-hangdong', provinceTh: 'เชียงใหม่ · หางดง', provinceEn: 'Chiang Mai · Hang Dong',
        category: ['adventure'],
        descTh: 'สวนน้ำและกิจกรรมเวคบอร์ด เหมาะกับกลุ่มลูกค้าวัยรุ่นหรือสายลุย',
        descEn: 'Water park with wakeboarding. Great for young travelers and adventure lovers.',
        driveTime: '30 นาที', driveTimeEn: '30 min',
        visitDuration: '2-4 ชม.', visitDurationEn: '2-4 hrs',
        bestTime: 'ทั้งวัน', bestTimeEn: 'All Day',
        images: ['images/grand-canyon-1.jpg', 'images/grand-canyon-2.jpg', 'images/grand-canyon-3.jpg']
    },

    // ══════════════════════════════════════
    // โซนจอมทอง (เชียงใหม่)
    // ══════════════════════════════════════
    {
        id: 'doi-inthanon',
        nameTh: 'อุทยานแห่งชาติดอยอินทนนท์',
        nameEn: 'Doi Inthanon National Park',
        province: 'cm-chomthong', provinceTh: 'เชียงใหม่ · จอมทอง', provinceEn: 'Chiang Mai · Chom Thong',
        category: ['nature', 'adventure'],
        descTh: 'จุดสูงสุดในไทย อากาศหนาวเย็น พาชมพระมหาธาตุเจดีย์และน้ำตกวชิรธาร',
        descEn: 'Thailand\'s highest peak. Cool weather, twin royal pagodas, and Wachirathan Waterfall.',
        driveTime: '1.5 ชม.', driveTimeEn: '1.5 hrs',
        visitDuration: '4-6 ชม.', visitDurationEn: '4-6 hrs',
        bestTime: 'เช้ามืด (ทะเลหมอก)', bestTimeEn: 'Early morning (sea of mist)',
        images: ['images/doi-inthanon-1.jpg', 'images/doi-inthanon-2.jpg', 'images/doi-inthanon-3.jpg']
    },
    {
        id: 'kew-mae-pan',
        nameTh: 'เส้นทางศึกษาธรรมชาติ กิ่วแม่ปาน',
        nameEn: 'Kew Mae Pan Nature Trail',
        province: 'cm-chomthong', provinceTh: 'เชียงใหม่ · จอมทอง', provinceEn: 'Chiang Mai · Chom Thong',
        category: ['nature', 'adventure'],
        descTh: 'จุดเดินป่าระยะสั้นที่วิวเปิดโล่งและสวยอลังการที่สุดแห่งหนึ่ง (เปิดตามฤดูกาล)',
        descEn: 'Short hiking trail with some of the most stunning open views in Thailand (seasonal access).',
        driveTime: '1.5 ชม.', driveTimeEn: '1.5 hrs',
        visitDuration: '2-3 ชม.', visitDurationEn: '2-3 hrs',
        bestTime: 'ฤดูหนาว (พ.ย.-ก.พ.)', bestTimeEn: 'Winter (Nov-Feb)',
        images: ['images/kew-mae-pan-1.jpg', 'images/kew-mae-pan-2.jpg', 'images/kew-mae-pan-3.jpg']
    },

    // ══════════════════════════════════════
    // โซนเชียงดาว (เชียงใหม่)
    // ══════════════════════════════════════
    {
        id: 'doi-luang-chiang-dao',
        nameTh: 'ดอยหลวงเชียงดาว',
        nameEn: 'Doi Luang Chiang Dao',
        province: 'cm-chiangdao', provinceTh: 'เชียงใหม่ · เชียงดาว', provinceEn: 'Chiang Mai · Chiang Dao',
        category: ['nature', 'adventure'],
        descTh: 'ทิวทัศน์ภูเขาหินปูนสุดอลังการระดับประเทศ เหมาะกับคนชอบถ่ายภาพ',
        descEn: 'Majestic limestone mountain with breathtaking scenery — a photographer\'s paradise.',
        driveTime: '1.5 ชม.', driveTimeEn: '1.5 hrs',
        visitDuration: '2-4 ชม.', visitDurationEn: '2-4 hrs',
        bestTime: 'เช้า', bestTimeEn: 'Morning',
        images: ['images/doi-luang-chiang-dao-1.jpg', 'images/doi-luang-chiang-dao-2.jpg', 'images/doi-luang-chiang-dao-3.jpg']
    },
    {
        id: 'wat-tham-chiang-dao',
        nameTh: 'วัดถ้ำเชียงดาว',
        nameEn: 'Wat Tham Chiang Dao',
        province: 'cm-chiangdao', provinceTh: 'เชียงใหม่ · เชียงดาว', provinceEn: 'Chiang Mai · Chiang Dao',
        category: ['culture', 'nature'],
        descTh: 'เดินชมความสวยงามของหินงอกหินย้อยในถ้ำธรรมชาติ',
        descEn: 'Explore stunning stalactites and stalagmites inside a natural cave temple.',
        driveTime: '1.5 ชม.', driveTimeEn: '1.5 hrs',
        visitDuration: '1-1.5 ชม.', visitDurationEn: '1-1.5 hrs',
        bestTime: 'เช้า-บ่าย', bestTimeEn: 'Morning-Afternoon',
        images: ['images/wat-tham-chiang-dao-1.jpg', 'images/wat-tham-chiang-dao-2.jpg', 'images/wat-tham-chiang-dao-3.jpg']
    },

    // ══════════════════════════════════════
    // โซนเชียงราย
    // ══════════════════════════════════════
    {
        id: 'white-temple',
        nameTh: 'วัดร่องขุ่น',
        nameEn: 'Wat Rong Khun (White Temple)',
        province: 'chiangrai', provinceTh: 'เชียงราย', provinceEn: 'Chiang Rai',
        category: ['culture'],
        descTh: 'สถาปัตยกรรมสีขาวระดับโลกที่วิจิตรบรรจง เป็นจุดที่ต่างชาติว้าวเสมอ',
        descEn: 'World-famous all-white temple — an intricate masterpiece that never fails to impress.',
        driveTime: '3 ชม.', driveTimeEn: '3 hrs',
        visitDuration: '1-2 ชม.', visitDurationEn: '1-2 hrs',
        bestTime: 'เช้า', bestTimeEn: 'Morning',
        images: ['images/white-temple-1.jpg', 'images/white-temple-2.jpg', 'images/white-temple-3.jpg']
    },
    {
        id: 'singha-park',
        nameTh: 'สิงห์ปาร์ค เชียงราย',
        nameEn: 'Singha Park Chiang Rai',
        province: 'chiangrai', provinceTh: 'เชียงราย', provinceEn: 'Chiang Rai',
        category: ['nature', 'cafe'],
        descTh: 'พื้นที่กว้างขวาง มีไร่ชา สวนดอกไม้ คาเฟ่ และร้านอาหาร เที่ยวได้ทั้งวัน',
        descEn: 'Vast estate with tea plantations, flower gardens, cafes, and restaurants — a full-day destination.',
        driveTime: '3 ชม.', driveTimeEn: '3 hrs',
        visitDuration: '2-4 ชม.', visitDurationEn: '2-4 hrs',
        bestTime: 'เช้า-บ่าย', bestTimeEn: 'Morning-Afternoon',
        images: ['images/singha-park-1.jpg', 'images/singha-park-2.jpg', 'images/singha-park-3.jpg']
    },

    // ══════════════════════════════════════
    // โซนปาย (แม่ฮ่องสอน)
    // ══════════════════════════════════════
    {
        id: 'pai-canyon',
        nameTh: 'ปายแคนยอน (กองแลน)',
        nameEn: 'Pai Canyon (Kong Lan)',
        province: 'pai', provinceTh: 'ปาย · แม่ฮ่องสอน', provinceEn: 'Pai · Mae Hong Son',
        category: ['nature', 'adventure'],
        descTh: 'จุดชมวิวพระอาทิตย์ตกบนสันเขาแคบๆ ยอดฮิตของชาวต่างชาติ',
        descEn: 'Dramatic narrow cliff-top viewpoint — a top sunset spot popular with international visitors.',
        driveTime: '3 ชม.', driveTimeEn: '3 hrs',
        visitDuration: '1-1.5 ชม.', visitDurationEn: '1-1.5 hrs',
        bestTime: 'เย็น (พระอาทิตย์ตก)', bestTimeEn: 'Evening (sunset)',
        images: ['images/pai-canyon-1.jpg', 'images/pai-canyon-2.jpg', 'images/pai-canyon-3.jpg']
    },
    {
        id: 'yun-lai',
        nameTh: 'จุดชมวิวทะเลหมอก หยุนไหล',
        nameEn: 'Yun Lai Viewpoint',
        province: 'pai', provinceTh: 'ปาย · แม่ฮ่องสอน', provinceEn: 'Pai · Mae Hong Son',
        category: ['nature', 'cafe'],
        descTh: 'ชมวิวเมืองปายมุมสูงยามเช้า พร้อมจิบชาสไตล์จีนยูนนาน',
        descEn: 'Hilltop morning view over Pai town, with Yunnan-style Chinese tea to sip.',
        driveTime: '3 ชม.', driveTimeEn: '3 hrs',
        visitDuration: '1-2 ชม.', visitDurationEn: '1-2 hrs',
        bestTime: 'เช้ามืด 06:00', bestTimeEn: 'Dawn 06:00 AM',
        images: ['images/yun-lai-1.jpg', 'images/yun-lai-2.jpg', 'images/yun-lai-3.jpg']
    }
];

// Province/Zone ordering & display names
const provinces = [
    { key: 'cm-muang', nameTh: 'เชียงใหม่ · อ.เมือง', nameEn: 'Chiang Mai · City' },
    { key: 'cm-maeon', nameTh: 'เชียงใหม่ · แม่ออน / แม่กำปอง', nameEn: 'Chiang Mai · Mae On' },
    { key: 'cm-maetaeng', nameTh: 'เชียงใหม่ · แม่แตง', nameEn: 'Chiang Mai · Mae Taeng' },
    { key: 'cm-maerim', nameTh: 'เชียงใหม่ · แม่ริม', nameEn: 'Chiang Mai · Mae Rim' },
    { key: 'cm-hangdong', nameTh: 'เชียงใหม่ · หางดง', nameEn: 'Chiang Mai · Hang Dong' },
    { key: 'cm-chomthong', nameTh: 'เชียงใหม่ · จอมทอง', nameEn: 'Chiang Mai · Chom Thong' },
    { key: 'cm-chiangdao', nameTh: 'เชียงใหม่ · เชียงดาว', nameEn: 'Chiang Mai · Chiang Dao' },
    { key: 'chiangrai', nameTh: 'เชียงราย', nameEn: 'Chiang Rai' },
    { key: 'pai', nameTh: 'ปาย · แม่ฮ่องสอน', nameEn: 'Pai · Mae Hong Son' }
];

// ========== STATE ==========
let currentLang = 'en';
let activeFilter = 'all';
let favorites = JSON.parse(localStorage.getItem('momtaxi_favs') || '[]');

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    applyLang(currentLang);
    renderPlaces();
    updateFavoritesUI();
    initScrollReveal();
    initTrustGallery();
    registerSW();
});

// ========== RENDER PLACES ==========
function renderPlaces() {
    const container = document.getElementById('placesContainer');
    container.innerHTML = '';

    const filteredPlaces = activeFilter === 'all'
        ? placesData
        : placesData.filter(p => p.category.includes(activeFilter));

    if (filteredPlaces.length === 0) {
        container.innerHTML = `<div class="no-results reveal"><p data-th="ไม่พบสถานที่ในหมวดนี้" data-en="No places found in this category">${currentLang === 'th' ? 'ไม่พบสถานที่ในหมวดนี้' : 'No places found in this category'}</p></div>`;
        return;
    }

    // Group by province
    provinces.forEach(prov => {
        const provPlaces = filteredPlaces.filter(p => p.province === prov.key);
        if (provPlaces.length === 0) return;

        const section = document.createElement('section');
        section.className = 'province-section reveal';
        section.innerHTML = `
            <div class="province-header">
                <span class="province-name" data-th="${prov.nameTh}" data-en="${prov.nameEn}">${currentLang === 'th' ? prov.nameTh : prov.nameEn}</span>
                <span class="province-name-en">${currentLang === 'th' ? prov.nameEn : ''}</span>
            </div>
            <div class="carousel-wrapper">
                <div class="places-carousel">
                    ${provPlaces.map(place => renderPlaceCard(place)).join('')}
                </div>
            </div>
        `;
        container.appendChild(section);
    });

    applyLang(currentLang);
    initScrollReveal();
    initCardGalleries();
}

function renderPlaceCard(place) {
    const isFav = favorites.includes(place.id);
    const lang = currentLang;
    const imgs = place.images || [];
    const gallerySlides = imgs.map((src, i) => `
        <div class="gallery-slide">
            <img src="${src}" alt="${lang === 'th' ? place.nameTh : place.nameEn}" loading="lazy"
                 onerror="this.parentElement.innerHTML='<div class=\\'img-placeholder\\'><span>${(lang === 'th' ? place.nameTh : place.nameEn).replace(/'/g, '\\&#39;')}</span></div>'">
        </div>
    `).join('');
    const dots = imgs.map((_, i) => `<span class="gallery-dot${i === 0 ? ' active' : ''}" data-index="${i}"></span>`).join('');

    return `
    <div class="place-card" data-id="${place.id}">
        <div class="place-card-img">
            <div class="card-gallery" data-card-id="${place.id}">
                <div class="gallery-track">
                    ${gallerySlides}
                </div>
                <div class="gallery-dots">${dots}</div>
                <span class="gallery-counter">1 / ${imgs.length}</span>
            </div>
            <span class="place-card-province-tag" data-th="${place.provinceTh}" data-en="${place.provinceEn}">${lang === 'th' ? place.provinceTh : place.provinceEn}</span>
            <button class="place-fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${place.id}', this)" aria-label="Save">
                <svg viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
        </div>
        <div class="place-card-body">
            <div class="place-card-name" data-th="${place.nameTh}" data-en="${place.nameEn}">${lang === 'th' ? place.nameTh : place.nameEn}</div>
            <div class="place-card-name-en" data-th="${place.nameEn}" data-en="${place.nameTh}">${lang === 'th' ? place.nameEn : place.nameTh}</div>
            <div class="place-card-desc" data-th="${escHtml(place.descTh)}" data-en="${escHtml(place.descEn)}">${lang === 'th' ? place.descTh : place.descEn}</div>
            <div class="place-card-meta">
                <span class="meta-tag" data-th="🚗 ${place.driveTime}" data-en="🚗 ${place.driveTimeEn}">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
                    ${lang === 'th' ? place.driveTime : place.driveTimeEn}
                </span>
                <span class="meta-tag" data-th="⏱ ${place.visitDuration}" data-en="⏱ ${place.visitDurationEn}">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                    ${lang === 'th' ? place.visitDuration : place.visitDurationEn}
                </span>
                <span class="meta-tag best-time" data-th="✨ ${place.bestTime}" data-en="✨ ${place.bestTimeEn}">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10S22 17.52 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"/></svg>
                    ${lang === 'th' ? place.bestTime : place.bestTimeEn}
                </span>
            </div>
        </div>
    </div>
    `;
}

function escHtml(str) {
    return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// ========== FILTER ==========
document.addEventListener('click', e => {
    if (e.target.classList.contains('filter-tab')) {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        activeFilter = e.target.dataset.filter;
        renderPlaces();
    }
});

// ========== FAVORITES ==========
function toggleFavorite(id, btn) {
    const idx = favorites.indexOf(id);
    if (idx > -1) {
        favorites.splice(idx, 1);
        btn.classList.remove('active');
        btn.querySelector('svg').setAttribute('fill', 'none');
    } else {
        favorites.push(id);
        btn.classList.add('active');
        btn.querySelector('svg').setAttribute('fill', 'currentColor');
        // Quick pulse animation
        btn.style.transform = 'scale(1.3)';
        setTimeout(() => btn.style.transform = '', 200);
    }
    localStorage.setItem('momtaxi_favs', JSON.stringify(favorites));
    updateFavoritesUI();
}

function updateFavoritesUI() {
    const section = document.getElementById('favoritesSection');
    const list = document.getElementById('favoritesList');

    if (favorites.length === 0) {
        section.style.display = 'none';
        return;
    }

    section.style.display = 'block';
    const lang = currentLang;
    list.innerHTML = favorites.map(id => {
        const place = placesData.find(p => p.id === id);
        if (!place) return '';
        return `
        <div class="fav-item">
            <div class="fav-item-img">
                <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:10px;color:#999;background:var(--surface-warm);">
                    ${(lang === 'th' ? place.nameTh : place.nameEn).substring(0, 4)}
                </div>
            </div>
            <div class="fav-item-info">
                <div class="fav-item-name">${lang === 'th' ? place.nameTh : place.nameEn}</div>
                <div class="fav-item-province">${lang === 'th' ? place.provinceTh : place.provinceEn}</div>
            </div>
            <button class="fav-item-remove" onclick="removeFavorite('${place.id}')">✕</button>
        </div>
        `;
    }).join('');
}

function removeFavorite(id) {
    favorites = favorites.filter(f => f !== id);
    localStorage.setItem('momtaxi_favs', JSON.stringify(favorites));
    // Update card button if visible
    const card = document.querySelector(`.place-card[data-id="${id}"] .place-fav-btn`);
    if (card) {
        card.classList.remove('active');
        card.querySelector('svg').setAttribute('fill', 'none');
    }
    updateFavoritesUI();
}

function clearFavorites() {
    favorites = [];
    localStorage.setItem('momtaxi_favs', JSON.stringify(favorites));
    document.querySelectorAll('.place-fav-btn.active').forEach(btn => {
        btn.classList.remove('active');
        btn.querySelector('svg').setAttribute('fill', 'none');
    });
    updateFavoritesUI();
}

function sendFavoritesToChat() {
    const lang = currentLang;
    const favPlaces = favorites.map(id => {
        const p = placesData.find(pl => pl.id === id);
        return p ? (lang === 'th' ? p.nameTh : p.nameEn) : '';
    }).filter(Boolean);

    const msg = lang === 'th'
        ? `สนใจไปเที่ยวที่:\n${favPlaces.map((n, i) => `${i + 1}. ${n}`).join('\n')}\n\nรบกวนสอบถามราคาและรายละเอียดค่ะ/ครับ`
        : `I'm interested in visiting:\n${favPlaces.map((n, i) => `${i + 1}. ${n}`).join('\n')}\n\nCould you please provide pricing and details?`;

    const waUrl = `https://wa.me/66811659268?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
}

// ========== LANGUAGE TOGGLE ==========
function toggleLang() {
    currentLang = currentLang === 'th' ? 'en' : 'th';
    applyLang(currentLang);
    renderPlaces();
    updateFavoritesUI();
}

function applyLang(lang) {
    document.querySelectorAll('[data-th][data-en]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text !== null) el.textContent = text;
    });
    // Toggle lang button label
    document.querySelector('.lang-th').style.display = lang === 'th' ? '' : 'none';
    document.querySelector('.lang-en').style.display = lang === 'en' ? '' : 'none';
    document.documentElement.lang = lang;
}

// ========== FAQ ==========
function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('open');

    // Close all others
    document.querySelectorAll('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-answer').style.maxHeight = null;
    });

    if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
}

// ========== FAB (Floating Action Button) ==========
function toggleFab() {
    const options = document.getElementById('fabOptions');
    const iconChat = document.querySelector('.fab-icon-chat');
    const iconClose = document.querySelector('.fab-icon-close');
    const isOpen = options.classList.contains('show');

    if (isOpen) {
        options.classList.remove('show');
        iconChat.style.display = '';
        iconClose.style.display = 'none';
    } else {
        options.classList.add('show');
        iconChat.style.display = 'none';
        iconClose.style.display = '';
    }
}

// Close FAB when clicking outside
document.addEventListener('click', e => {
    const fab = document.getElementById('fabContainer');
    if (!fab.contains(e.target)) {
        const options = document.getElementById('fabOptions');
        if (options.classList.contains('show')) {
            options.classList.remove('show');
            document.querySelector('.fab-icon-chat').style.display = '';
            document.querySelector('.fab-icon-close').style.display = 'none';
        }
    }
});

// ========== SHARE ==========
function shareWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(currentLang === 'th'
        ? 'ดูสถานที่เที่ยวภาคเหนือ — แท็กซี่เชียงใหม่พาเที่ยว '
        : 'Check out Northern Thailand destinations — Chiang Mai Taxi & Tours ');
    window.open(`https://wa.me/?text=${text}${url}`, '_blank');
}

function shareGeneric() {
    if (navigator.share) {
        navigator.share({
            title: currentLang === 'th' ? 'แท็กซี่เชียงใหม่ พาเที่ยวภาคเหนือ' : 'Chiang Mai Taxi & Tours',
            text: currentLang === 'th'
                ? 'บริการแท็กซี่พาเที่ยวภาคเหนือ'
                : 'Taxi tours across Northern Thailand',
            url: window.location.href
        }).catch(() => {});
    } else {
        // Fallback: copy link
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert(currentLang === 'th' ? 'คัดลอกลิงก์แล้ว!' : 'Link copied!');
        });
    }
}

// ========== SCROLL REVEAL ==========
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// ========== TRUST GALLERY (profile + car) ==========
function initTrustGallery() {
    const track = document.querySelector('.trust-gallery-track');
    const dots = document.querySelectorAll('.trust-dot');
    if (!track || dots.length === 0) return;

    let scrollTimer;
    track.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            const idx = Math.round(track.scrollLeft / track.offsetWidth);
            dots.forEach((d, i) => d.classList.toggle('active', i === idx));
        }, 50);
    }, { passive: true });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const idx = parseInt(dot.dataset.index, 10);
            track.scrollTo({ left: idx * track.offsetWidth, behavior: 'smooth' });
        });
    });
}

// ========== CARD GALLERY — scroll + dot sync ==========
function initCardGalleries() {
    document.querySelectorAll('.card-gallery').forEach(gallery => {
        const track = gallery.querySelector('.gallery-track');
        const dots = gallery.querySelectorAll('.gallery-dot');
        const counter = gallery.querySelector('.gallery-counter');
        if (!track || dots.length === 0) return;

        // Scroll → update active dot & counter
        let scrollTimer;
        track.addEventListener('scroll', () => {
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                const slideW = track.offsetWidth;
                const idx = Math.round(track.scrollLeft / slideW);
                dots.forEach((d, i) => d.classList.toggle('active', i === idx));
                if (counter) counter.textContent = `${idx + 1} / ${dots.length}`;
            }, 50);
        }, { passive: true });

        // Click dot → scroll to slide
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const idx = parseInt(dot.dataset.index, 10);
                track.scrollTo({ left: idx * track.offsetWidth, behavior: 'smooth' });
            });
        });
    });
}

// ========== PLACE DETAIL MODAL ==========
function openPlaceDetail(placeId) {
    const place = placesData.find(p => p.id === placeId);
    if (!place) return;

    const lang = currentLang;
    const isFav = favorites.includes(place.id);
    const imgs = place.images || [];

    const slides = imgs.map((src, i) => `
        <div class="gallery-slide">
            <img src="${src}" alt="${lang === 'th' ? place.nameTh : place.nameEn}" loading="lazy"
                 onerror="this.parentElement.innerHTML='<div class=\\'img-placeholder\\'><span>${(lang === 'th' ? place.nameTh : place.nameEn).replace(/'/g, '\\&#39;')}</span></div>'">
        </div>
    `).join('');
    const dots = imgs.map((_, i) => `<span class="gallery-dot${i === 0 ? ' active' : ''}" data-index="${i}"></span>`).join('');

    const modal = document.getElementById('placeModal');
    const content = document.getElementById('placeModalContent');

    content.innerHTML = `
        <div class="modal-drag-handle"></div>
        <button class="modal-close" onclick="closePlaceDetail()">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
        <div class="modal-gallery">
            <div class="gallery-track">
                ${slides}
            </div>
            <div class="gallery-dots">${dots}</div>
            <span class="gallery-counter">1 / ${imgs.length}</span>
        </div>
        <div class="modal-body">
            <span class="modal-province-tag">${lang === 'th' ? place.provinceTh : place.provinceEn}</span>
            <div class="modal-header-row">
                <div class="modal-name">${lang === 'th' ? place.nameTh : place.nameEn}</div>
                <button class="modal-fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavoriteModal('${place.id}', this)">
                    <svg viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
            </div>
            <div class="modal-name-en">${lang === 'th' ? place.nameEn : place.nameTh}</div>
            <p class="modal-desc">${lang === 'th' ? place.descTh : place.descEn}</p>
            <div class="modal-meta">
                <div class="modal-meta-item">
                    <div class="modal-meta-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
                    </div>
                    <div>
                        <div class="modal-meta-label">${lang === 'th' ? 'ระยะทางจากเชียงใหม่' : 'Drive from Chiang Mai'}</div>
                        <div class="modal-meta-value">${lang === 'th' ? place.driveTime : place.driveTimeEn}</div>
                    </div>
                </div>
                <div class="modal-meta-item">
                    <div class="modal-meta-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                    </div>
                    <div>
                        <div class="modal-meta-label">${lang === 'th' ? 'ใช้เวลาเที่ยว' : 'Visit Duration'}</div>
                        <div class="modal-meta-value">${lang === 'th' ? place.visitDuration : place.visitDurationEn}</div>
                    </div>
                </div>
                <div class="modal-meta-item">
                    <div class="modal-meta-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10S22 17.52 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"/></svg>
                    </div>
                    <div>
                        <div class="modal-meta-label">${lang === 'th' ? 'ช่วงเวลาที่ดีที่สุด' : 'Best Time to Visit'}</div>
                        <div class="modal-meta-value">${lang === 'th' ? place.bestTime : place.bestTimeEn}</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Init modal gallery
    const track = content.querySelector('.modal-gallery .gallery-track');
    const modalDots = content.querySelectorAll('.modal-gallery .gallery-dot');
    const counter = content.querySelector('.modal-gallery .gallery-counter');

    if (track && modalDots.length > 0) {
        let scrollTimer;
        track.addEventListener('scroll', () => {
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                const slideW = track.offsetWidth;
                const idx = Math.round(track.scrollLeft / slideW);
                modalDots.forEach((d, i) => d.classList.toggle('active', i === idx));
                if (counter) counter.textContent = `${idx + 1} / ${modalDots.length}`;
            }, 50);
        }, { passive: true });

        modalDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const idx = parseInt(dot.dataset.index, 10);
                track.scrollTo({ left: idx * track.offsetWidth, behavior: 'smooth' });
            });
        });
    }
}

function closePlaceDetail() {
    const modal = document.getElementById('placeModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function toggleFavoriteModal(id, btn) {
    const idx = favorites.indexOf(id);
    if (idx > -1) {
        favorites.splice(idx, 1);
        btn.classList.remove('active');
        btn.querySelector('svg').setAttribute('fill', 'none');
    } else {
        favorites.push(id);
        btn.classList.add('active');
        btn.querySelector('svg').setAttribute('fill', 'currentColor');
        btn.style.transform = 'scale(1.3)';
        setTimeout(() => btn.style.transform = '', 200);
    }
    localStorage.setItem('momtaxi_favs', JSON.stringify(favorites));

    // Sync card button if visible
    const cardBtn = document.querySelector(`.place-card[data-id="${id}"] .place-fav-btn`);
    if (cardBtn) {
        cardBtn.classList.toggle('active', favorites.includes(id));
        cardBtn.querySelector('svg').setAttribute('fill', favorites.includes(id) ? 'currentColor' : 'none');
    }
    updateFavoritesUI();
}

// Close modal on backdrop click
document.addEventListener('click', e => {
    const modal = document.getElementById('placeModal');
    if (e.target === modal) closePlaceDetail();
});

// Close modal on Escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('placeModal');
        if (modal.style.display !== 'none') closePlaceDetail();
    }
});

// ========== CARD CLICK → OPEN MODAL ==========
document.addEventListener('click', e => {
    const card = e.target.closest('.place-card');
    if (!card) return;
    // Don't open modal if clicking fav button or scrolling gallery
    if (e.target.closest('.place-fav-btn') || e.target.closest('.gallery-dot')) return;
    const placeId = card.dataset.id;
    if (placeId) openPlaceDetail(placeId);
});

// ========== IMAGE LIGHTBOX ==========
function openLightbox(src) {
    const overlay = document.getElementById('imageLightbox');
    const img = document.getElementById('lightboxImg');
    img.src = src;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const overlay = document.getElementById('imageLightbox');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
}

// Click overlay background → close
document.addEventListener('click', e => {
    const overlay = document.getElementById('imageLightbox');
    if (e.target === overlay) closeLightbox();
});

// Escape key → close lightbox
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        const overlay = document.getElementById('imageLightbox');
        if (overlay.style.display !== 'none') closeLightbox();
    }
});

// Trust gallery images → open lightbox on click
document.addEventListener('click', e => {
    const img = e.target.closest('.trust-slide img');
    if (img) {
        e.preventDefault();
        openLightbox(img.src);
    }
});

// ========== SERVICE WORKER ==========
function registerSW() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    }
}
