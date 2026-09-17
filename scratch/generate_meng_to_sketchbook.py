import os, sys, re

with open('sketchbook_canonical.html', 'r', encoding='utf-8') as f:
    orig = f.read()

# 1. Custom CSS additions before </style>
custom_css = """
/* ---- Bilingual & Custom Story Additions ---- */
html[data-lang="tr"] .lang-en { display: none !important; }
html[data-lang="en"] .lang-tr { display: none !important; }

.lang-toggle-sb {
  font-family: inherit;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  padding: 3px 9px;
  border: 1px solid var(--hairline);
  border-radius: 4px;
  background: rgba(43,39,33,0.04);
  color: var(--ink);
  cursor: pointer;
  transition: all 0.2s;
}
.lang-toggle-sb:hover {
  background: var(--ink);
  color: var(--paper);
}

.story-editable-block {
  margin-top: 28px;
  padding: 20px 24px;
  border-left: 3px solid var(--earth);
  background: rgba(154, 106, 62, 0.06);
  border-radius: 0 8px 8px 0;
}
.story-editable-block em {
  color: var(--earth);
  font-style: italic;
  font-size: 1.05em;
  line-height: 1.6;
}
.bio-lead {
  font-size: clamp(20px, 1.9vw, 24px);
  line-height: 1.45;
  color: var(--ink);
  margin-bottom: 20px;
  font-family: var(--font);
}
.bio p {
  margin-bottom: 18px;
  line-height: 1.65;
}
.bio strong {
  color: var(--ink);
  font-weight: 600;
}
"""

style_end_idx = orig.find('</style>')
head_part = orig[:style_end_idx] + custom_css + '</style>\n</head>\n'

# 2. Body content
body_html = """<body>
<div class="wash" aria-hidden="true"></div>
<main class="page home">

  <header class="top">
    <a class="name" href="#">OZAN ARDA ÖZÇELİK</a>
    <nav>
      <a href="#plates"><span class="lang-tr">Günlük &amp; Levhalar</span><span class="lang-en">Journal &amp; Plates</span></a>
      <a href="#about"><span class="lang-tr">Hikayem</span><span class="lang-en">About &amp; Story</span></a>
      <a href="#contact"><span class="lang-tr">İletişim</span><span class="lang-en">Contact</span></a>
      <div class="top-socials">
        <button class="lang-toggle-sb" id="sbLangBtn" aria-label="Switch Language" title="Dili Değiştir / Switch Language">
          <span class="lang-tr">EN</span><span class="lang-en">TR</span>
        </button>
        <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="icon-btn" aria-label="GitHub" title="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/ozanardaozcelik/" target="_blank" rel="noopener noreferrer" class="icon-btn" aria-label="LinkedIn" title="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.9 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.1 9.3h3.6v11.6H3.1V9.3Zm6 0h3.4v1.6h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.35 4.3 5.4v6.45h-3.6v-5.72c0-1.36-.02-3.12-1.92-3.12-1.92 0-2.22 1.48-2.22 3.02v5.82H9.1V9.3Z"/></svg>
        </a>
        <a href="mailto:ozanardaozcelik@gmail.com" class="icon-btn" aria-label="Email" title="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="2.4" y="4.6" width="19.2" height="14.8" rx="2.4"/><path d="m3.2 6.4 8.8 6.6 8.8-6.6"/></svg>
        </a>
      </div>
    </nav>
  </header>

  <section id="sketchbook" class="hero">
    <img class="botany l" src="meng-to-sketchbook/botany-left.png" alt="" aria-hidden="true">
    <img class="botany r" src="meng-to-sketchbook/botany-right.png" alt="" aria-hidden="true">

    <p class="hero-kicker" id="heroKicker">
      <span class="lang-tr">ŞAHİ OTONOM SİHA YAZILIM LİDERİ / BİLGİSAYARLI GÖRÜ &amp; MAKİNE MANTIĞI / TEKİRDAĞ &amp; İSTANBUL</span>
      <span class="lang-en">AUTONOMOUS UAV SOFTWARE LEAD / COMPUTER VISION &amp; MACHINE LOGIC / TEKIRDAĞ &amp; ISTANBUL</span>
    </p>

    <div class="sb-wrap" id="sbWrap">
      <svg width="0" height="0" style="position:absolute" aria-hidden="true">
        <filter id="sb-mblur-1"><feGaussianBlur stdDeviation="5 0"/></filter>
        <filter id="sb-mblur-2"><feGaussianBlur stdDeviation="14 0"/></filter>
      </svg>
      <div class="sb-stage" id="sbStage">
        <button class="sb-arrow left" id="sbLeft" aria-label="previous page">
          <svg viewBox="0 0 14 44" width="14" height="44" fill="none" aria-hidden="true"><polyline points="11,3 3,22 11,41" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="sb-3d" id="sb3d">
          <div class="sb-tilt" id="sbTilt">
            <div class="sb-cast ambient" aria-hidden="true"></div>
            <div class="sb-cast contact" aria-hidden="true"></div>
            <div class="sb-cast hair" aria-hidden="true"></div>
            <div class="sb-book" id="sbBook"></div>
          </div>
          <div class="zoomwrap" id="zoomWrap" aria-hidden="true"><div class="zoominner" id="zoomInner"></div></div>
          <div class="loupe" id="loupe"><span class="grip"></span><span class="ring"><span class="lens" id="loupeLens"><span class="mag" id="loupeMag"></span></span></span></div>
        </div>
        <button class="sb-arrow right" id="sbRight" aria-label="next page">
          <svg viewBox="0 0 14 44" width="14" height="44" fill="none" aria-hidden="true"><polyline points="3,3 11,22 3,41" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <div class="sb-captions" id="sbCaptions"></div>
      <div class="sb-tools" role="group" aria-label="view controls">
        <button class="tool" id="zOut" aria-label="zoom out"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="8.6" cy="8.6" r="5.6"/><path d="M12.8 12.8 17.4 17.4M6.2 8.6h4.8"/></svg></button>
        <span class="zoom-read" id="zRead">100%</span>
        <button class="tool" id="zIn" aria-label="zoom in"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="8.6" cy="8.6" r="5.6"/><path d="M12.8 12.8 17.4 17.4M6.2 8.6h4.8M8.6 6.2v4.8"/></svg></button>
        <span class="tool-sep" aria-hidden="true"></span>
        <button class="tool" id="loupeBtn" aria-label="magnifier" aria-pressed="true"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="8.8" cy="8.8" r="5.8"/><path d="M13 13l4.4 4.4"/><path d="M6.4 7.2a3.2 3.2 0 0 1 2.4-1.4" opacity=".55"/></svg></button>
      </div>
      <p class="sb-hint" id="sbHint">Sayfayı çevirmek için çekin · Büyüteci gezdirmek için sürükleyin</p>
    </div>

    <button class="hero-down" id="heroDown" aria-label="scroll to about">
      <svg viewBox="0 0 44 22" width="34" height="17" fill="none" aria-hidden="true">
        <polyline points="3,3 22,11 41,3" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="3,11 22,19 41,11" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </section>

  <div class="rule" aria-hidden="true"></div>

  <!-- ABOUT & STORY SECTION (OZAN ARDA) -->
  <section id="about" class="about">
    <div>
      <p class="section-label"><span class="lang-tr">HİKAYEM &amp; YOLCULUK</span><span class="lang-en">MY STORY &amp; JOURNEY</span></p>
      <div class="bio">
        <p class="bio-lead">
          <span class="lang-tr">Lisede kod satırlarıyla tanışıp bilgisayarın sınırsız potansiyelini keşfetmekten, gökyüzünde otonom it dalaşı yapan SİHA algoritmaları ve endüstriyel fabrikalarda sıfır hata anomali modelleri yönetmeye uzanan bir yolculuk.</span>
          <span class="lang-en">A journey spanning from high school awakening to computing and algorithmic thinking, to directing autonomous dogfight UAV guidance architectures and industrial zero-defect AI vision in smart factories.</span>
        </p>

        <p>
          <span class="lang-tr"><strong>İlk Kıvılcım &amp; Kırımlı Fazilet Olcay Anadolu Lisesi:</strong> Bilgisayara ve teknolojiye olan tutkum lise yıllarımda başladı. Kırımlı Fazilet Olcay Anadolu Lisesi sıralarındayken kod yazmanın ve algoritmik düşüncenin sadece bir araç değil; dünyayı anlama, karmaşık sorunları parçalara bölüp rasyonel biçimde çözme yetisi kazandıran bir hayat felsefesi olduğunu gördüm. Bu kavrayış hayata ve problemlere bakışımı kökten değiştirdi ve beni bilgisayar mühendisliği idealiyle buluşturdu.</span>
          <span class="lang-en"><strong>The First Spark &amp; High School Awakening:</strong> My passion for computing ignited at Kırımlı Fazilet Olcay Anatolian High School in Istanbul. Sitting behind the screen, I realized that programming and algorithmic logic were far more than tools—they were a foundational lens for deconstructing reality and solving complex real-world challenges. This insight fundamentally transformed my worldview and directed me toward computer engineering.</span>
        </p>

        <p>
          <span class="lang-tr"><strong>Üniversite Temeli &amp; Görüntü İşleme / Robotik Tutkusu:</strong> Tekirdağ Namık Kemal Üniversitesi Bilgisayar Mühendisliği bölümünde lisans eğitimime başladım ve akademik yolculuğumu <em>Yüksek Onur</em> derecesiyle sürdürüyorum. Üniversite yıllarımda yazılımı salt ekranda kalmaktan çıkarıp fiziksel dünyayla etkileşime sokma hedefiyle <strong>Görüntü İşleme (Computer Vision)</strong> ve <strong>Robotik</strong> alanlarına odaklandım. Kamera sensörlerinden gelen ham piksel matrislerini derin öğrenme modelleriyle anlamlandırmak, mikrodenetleyiciler ve ROS 2 ile gömülü sistemleri kontrol etmek çalışmalarımın odak noktası haline geldi.</span>
          <span class="lang-en"><strong>University Foundations &amp; The Passion for Vision &amp; Robotics:</strong> At Tekirdağ Namık Kemal University, pursuing Computer Engineering with <em>High Honors</em>, I resolved to push software beyond screen pixels into physical reality. I specialized in Computer Vision and Robotics—transforming raw camera sensor matrices into actionable semantic intelligence, developing ROS 2 pipelines, and fusing real-time microcontroller avionics.</span>
        </p>

        <p>
          <span class="lang-tr"><strong>Şahi Otonom SİHA Takımı — Gökyüzünde Muharebe Otonomisi:</strong> Bu vizyonun en üst sahaya yansıması, <strong>Şahi Otonom SİHA Takımı Yazılım Ekip Liderliği</strong> oldu. TEKNOFEST Savaşan İHA yarışması kapsamında; yüksek hızlı hava-hava muharebe senaryolarında gerçek zamanlı YOLOv8 nesne tespiti, ByteTrack yörünge kestirimi ve oransal seyrüsefer (Proportional Navigation) kamikaze dalış güdüm mimarilerini uçtan uca yönettim.</span>
          <span class="lang-en"><strong>Şahi Autonomous UAV Team — Aerial Combat Autonomy:</strong> Serving as Software Team Lead for the Şahi Autonomous UAV Team in TEKNOFEST Fighting UAV, I architected the end-to-end combat stack: millisecond-latency YOLOv8 target acquisition, ByteTrack trajectory forecasting, and proportional navigation kamikaze dive guidance.</span>
        </p>

        <p>
          <span class="lang-tr"><strong>Saha Deneyimi &amp; Endüstriyel Ar-Ge Stajları:</strong> Saha tecrübemi iki öncü kurumda derinleştirdim: <strong>Çözüm Makina Ar-Ge</strong>'de (ISEE Vision) üretim hatlarında PatchCore ve DINO Vision Transformers mimarilerini kullanarak denetimsiz sıfır hata anomali segmentasyonu geliştirdim. <strong>Martur Fompak International</strong> bünyesinde ise küresel otomotiv üretim süreçlerini optimize eden kurumsal çoklu ajan (Agentic AI) iş akışlarını hayata geçirdim. Paralelinde <strong>Huawei Student Developers</strong> öğrenci yazılım komite liderliğini yürüterek genç mühendislere mentorluk sundum.</span>
          <span class="lang-en"><strong>Industrial R&amp;D &amp; Enterprise Internships:</strong> Practical engineering was forged across two premier technical hubs: At <strong>Çözüm Makina R&amp;D</strong> (ISEE Vision), I developed unsupervised zero-defect anomaly segmentation for production lines using PatchCore and DINO Vision Transformers. At <strong>Martur Fompak International</strong>, I engineered enterprise Agentic AI multi-agent LLM workflows for automotive manufacturing. Concurrently, as Software Committee Lead for <strong>Huawei Student Developers</strong>, I mentored emerging engineers across technical workshops.</span>
        </p>

        <!-- BURAYA KENDİ İLAVE NOTLARINI EKLEYEBİLİRSİN -->
        <div class="story-editable-block" id="userStoryBlock">
          <p class="story-user-paragraph">
            <span class="lang-tr">✦ <em>"İnsan sezgisi, makine mantığıyla birleştiğinde; donanımın soğuk metalleri otonom bir zekaya dönüşür. Bu eskiz defteri lise sıralarından gökyüzüne uzanan o yolculuğun yaşayan kaydıdır."</em></span>
            <span class="lang-en">✦ <em>"When human intuition merges with machine logic, cold metal awakens into autonomous intelligence. This sketchbook is the living chronicle of that ascent from high school desks to the sky."</em></span>
          </p>
        </div>
      </div>
    </div>
    <img class="bloom" src="meng-to-sketchbook/bloom.png" alt="" aria-hidden="true">
  </section>

  <div class="rule short" aria-hidden="true"></div>

  <!-- PLATES SECTION -->
  <section id="plates" class="plates">
    <p class="section-label"><span class="lang-tr">DÖNÜM NOKTALARI &amp; LEVHALAR</span><span class="lang-en">PLATES &amp; MILESTONES</span></p>
    <ol class="plate-list" id="plateList"></ol>
  </section>

  <div class="rule short" aria-hidden="true"></div>
  <p class="foot" id="contact">
    <span class="lang-tr">Ozan Arda Özçelik · Eskiz Defteri &amp; Portfolyo · <a href="mailto:ozanardaozcelik@gmail.com" class="bio-link">ozanardaozcelik@gmail.com</a></span>
    <span class="lang-en">Ozan Arda Özçelik · Sketchbook &amp; Portfolio · <a href="mailto:ozanardaozcelik@gmail.com" class="bio-link">ozanardaozcelik@gmail.com</a></span>
  </p>
</main>
"""

# 3. Script modification: replace PAGES and wire language switcher
script_idx = orig.find('<script>')
orig_script = orig[script_idx:]

pages_start = orig_script.find('const PAGES=[')
pages_end = orig_script.find('];', pages_start) + 2

new_pages_code = """
const PAGES_TR=[
  {file:'marina-bay-sands.png',   title:'Kırımlı Fazilet Olcay Anadolu Lisesi', place:'İlk Kıvılcım & Bilgisayara İlgi (Pendik, İstanbul)'},
  {file:'gardens-by-the-bay.png', title:'Tekirdağ Namık Kemal Üniversitesi',   place:'Bilgisayar Mühendisliği — Yüksek Onur Derecesi'},
  {file:'merlion.png',            title:'Görüntü İşleme & Derin Öğrenme',      place:'OpenCV, Piksel Matrisleri & CNN Öznitelik Çıkarımı'},
  {file:'buddha-tooth.png',       title:'Robotik & Gömülü Sistemler',          place:'ROS 2, Mikrodenetleyiciler & Sensör Füzyonu'},
  {file:'joo-chiat.png',          title:'Şahi Otonom SİHA — TEKNOFEST',        place:'Yazılım Ekip Liderliği & İt Dalaşı Güdümü'},
  {file:'lau-pa-sat.png',         title:'Çözüm Makina Ar-Ge Stajı',            place:'ISEE Vision — PatchCore & DINO Sıfır Hata Anomali'},
  {file:'marina-bay-skyline.png', title:'Martur Fompak International Stajı',   place:'Kurumsal Çoklu Ajan (Agentic AI) Otomasyonu'},
  {file:'singapore-river.png',    title:'Huawei Öğrenci Geliştiricileri',      place:'Yazılım Komite Liderliği & Ekosistem Mentorluğu'},
  {file:'botanic-gardens.png',    title:'İnsan Formu — Makine Mantığı',        place:'Otonom Sürü Zekası & Gelecek Vizyonu'}
];

const PAGES_EN=[
  {file:'marina-bay-sands.png',   title:'Kırımlı Fazilet Olcay High School',   place:'First Spark & Awakening to Computing (Istanbul)'},
  {file:'gardens-by-the-bay.png', title:'Tekirdağ Namık Kemal University',     place:'Computer Engineering — High Honors Degree'},
  {file:'merlion.png',            title:'Computer Vision & Deep Learning',     place:'OpenCV, Pixel Tensors & CNN Feature Extraction'},
  {file:'buddha-tooth.png',       title:'Robotics & Embedded Systems',         place:'ROS 2, Microcontrollers & Sensor Fusion'},
  {file:'joo-chiat.png',          title:'Şahi Autonomous UAV — TEKNOFEST',     place:'Software Team Lead & Combat Guidance'},
  {file:'lau-pa-sat.png',         title:'Çözüm Makina R&D Internship',         place:'ISEE Vision — PatchCore & DINO Zero-Defect Anomaly'},
  {file:'marina-bay-skyline.png', title:'Martur Fompak International Stajı',   place:'Enterprise Agentic AI Multi-Agent Workflows'},
  {file:'singapore-river.png',    title:'Huawei Student Developers',           place:'Software Committee Lead & Ecosystem Mentorship'},
  {file:'botanic-gardens.png',    title:'Human Form — Machine Logic',          place:'Autonomous Swarm Robotics & Future Vision'}
];

let currentSbLang = localStorage.getItem('site_lang') || 'tr';
const initialSource = currentSbLang === 'en' ? PAGES_EN : PAGES_TR;
const PAGES = initialSource.map(p => ({...p}));
"""

script_after_pages = orig_script[:pages_start] + new_pages_code + orig_script[pages_end:]

# Replace plateList rendering
old_platelist_block = """const plateList=document.getElementById('plateList');
PAGES.forEach((p,i)=>{
  const li=el('li');
  const b=el('button','plate');
  b.innerHTML='<span class="n">'+String(i+1).padStart(2,'0')+'</span>'+
              '<span class="t"></span><span class="p"></span>';
  b.querySelector('.t').textContent=p.title;
  b.querySelector('.p').textContent=p.place;
  b.onclick=()=>{goTo(i);document.getElementById('sketchbook').scrollIntoView({behavior:'smooth',block:'center'});};
  li.appendChild(b);plateList.appendChild(li);
});"""

new_platelist_block = """const plateList=document.getElementById('plateList');
function renderPlateList(){
  plateList.textContent='';
  PAGES.forEach((p,i)=>{
    const li=el('li');
    const b=el('button','plate');
    b.innerHTML='<span class="n">'+String(i+1).padStart(2,'0')+'</span>'+
                '<span class="t"></span><span class="p"></span>';
    b.querySelector('.t').textContent=p.title;
    b.querySelector('.p').textContent=p.place;
    b.onclick=()=>{goTo(i);document.getElementById('sketchbook').scrollIntoView({behavior:'smooth',block:'center'});};
    li.appendChild(b);plateList.appendChild(li);
  });
  marks();
}
renderPlateList();

function setSbLanguage(lang){
  currentSbLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang;
  const src = lang === 'en' ? PAGES_EN : PAGES_TR;
  for(let i=0; i<PAGES.length; i++){
    PAGES[i].title = src[i].title;
    PAGES[i].place = src[i].place;
  }
  caption();
  renderPlateList();
  if(hint){
    hint.textContent = lang === 'en'
      ? 'Drag the page to turn · Drag the glass across it'
      : 'Sayfayı çevirmek için çekin · Büyüteci gezdirmek için sürükleyin';
  }
}

const sbLangBtn = document.getElementById('sbLangBtn');
if(sbLangBtn){
  sbLangBtn.addEventListener('click', ()=>{
    const nextLang = currentSbLang === 'tr' ? 'en' : 'tr';
    localStorage.setItem('site_lang', nextLang);
    setSbLanguage(nextLang);
  });
}

window.addEventListener('message', (e)=>{
  if(e.data && e.data.type === 'SET_LANG' && (e.data.lang === 'tr' || e.data.lang === 'en')){
    setSbLanguage(e.data.lang);
  }
});
setSbLanguage(currentSbLang);"""

script_final = script_after_pages.replace(old_platelist_block, new_platelist_block)

full_html = head_part + body_html + '\n' + script_final

target_path = os.path.join('public', 'landing-pages', 'meng-to-sketchbook.html')
with open(target_path, 'w', encoding='utf-8') as f:
    f.write(full_html)

print('Generated', target_path, 'successfully. Length:', len(full_html))
