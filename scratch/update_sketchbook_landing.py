import os, sys

with open('sketchbook_canonical.html', 'r', encoding='utf-8') as f:
    orig = f.read()

# 1. Custom CSS additions
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

/* CV & Robotics Background Layer */
.cv-robotics-bg {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  opacity: 0.82;
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

# 2. Body content with CV & Robotics background
body_html = """<body>
<div class="wash" aria-hidden="true"></div>

<!-- COMPUTER VISION & ROBOTICS BACKGROUND DECORATIONS -->
<svg class="cv-robotics-bg" viewBox="0 0 1920 1080" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <pattern id="grid-dots" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="0.8" fill="rgba(43,39,33,0.12)" />
    </pattern>
    <pattern id="calib-grid" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M0 0h120v120H0z" fill="none" stroke="rgba(154,106,62,0.06)" stroke-width="0.7" />
      <path d="M60 55v10M55 60h10" stroke="rgba(154,106,62,0.14)" stroke-width="0.8" />
    </pattern>
  </defs>

  <!-- Base calibration grid -->
  <rect width="100%" height="100%" fill="url(#calib-grid)" />
  <rect width="100%" height="100%" fill="url(#grid-dots)" />

  <!-- Corner registration marks & CV telemetry -->
  <g stroke="rgba(43,39,33,0.28)" stroke-width="1.2" fill="none">
    <!-- Top Left -->
    <path d="M40 70 V40 H70 M50 40 V50 H40" />
    <text x="40" y="88" font-family="monospace" font-size="10" fill="rgba(43,39,33,0.38)" stroke="none">FOV: 94.6° // CAM_01 [OPTICAL_RGB]</text>

    <!-- Top Right -->
    <path d="M1880 70 V40 H1850 M1870 40 V50 H1880" />
    <text x="1700" y="88" font-family="monospace" font-size="10" fill="rgba(43,39,33,0.38)" stroke="none">FPS: 120 // RES: 1920x1080</text>

    <!-- Bottom Left -->
    <path d="M40 1010 V1040 H70 M50 1040 V1030 H40" />
    <text x="40" y="1000" font-family="monospace" font-size="10" fill="rgba(43,39,33,0.38)" stroke="none">ROS2: /gazebo/harmonic/optics // ACTIVE</text>

    <!-- Bottom Right -->
    <path d="M1880 1010 V1040 H1850 M1870 1040 V1030 H1880" />
    <text x="1690" y="1000" font-family="monospace" font-size="10" fill="rgba(43,39,33,0.38)" stroke="none">GNC: PROPORTIONAL_NAV [LOCKED]</text>
  </g>

  <!-- Left Side: Polar LiDAR / Radar Range Rings -->
  <g transform="translate(180, 540)" stroke="rgba(154,106,62,0.18)" stroke-width="0.9" fill="none">
    <circle r="80" stroke-dasharray="3 3" />
    <circle r="160" />
    <circle r="240" stroke-dasharray="4 4" />
    <line x1="-260" y1="0" x2="260" y2="0" stroke="rgba(154,106,62,0.14)" />
    <line x1="0" y1="-260" x2="0" y2="260" stroke="rgba(154,106,62,0.14)" />
    <text x="165" y="-5" font-family="monospace" font-size="9" fill="rgba(154,106,62,0.35)" stroke="none">R: 15.0m</text>
    <text x="245" y="-5" font-family="monospace" font-size="9" fill="rgba(154,106,62,0.35)" stroke="none">R: 30.0m</text>
  </g>

  <!-- Right Side: 3D Coordinate Reference Frame (ROS 2) & Optical Reticle -->
  <g transform="translate(1740, 540)" stroke="rgba(154,106,62,0.22)" stroke-width="1" fill="none">
    <circle r="110" />
    <circle r="45" stroke-dasharray="2 2" />
    <line x1="-130" y1="0" x2="-50" y2="0" />
    <line x1="50" y1="0" x2="130" y2="0" />
    <line x1="0" y1="-130" x2="0" y2="-50" />
    <line x1="0" y1="50" x2="0" y2="130" />
    <path d="M-80 -80 l10 0 M-80 -80 l0 10" />
    <path d="M80 -80 l-10 0 M80 -80 l0 10" />
    <path d="M-80 80 l10 0 M-80 80 l0 -10" />
    <path d="M80 80 l-10 0 M80 80 l0 -10" />
    <text x="-40" y="128" font-family="monospace" font-size="9" fill="rgba(154,106,62,0.4)" stroke="none">OPTICAL_AXIS_Z</text>
  </g>
</svg>

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
      <span class="lang-tr">ŞAHİ OTONOM SİHA YAZILIM LİDERİ / BİLGİSAYARLI GÖRÜ, ROBOTİK &amp; MAKİNE MANTIĞI</span>
      <span class="lang-en">AUTONOMOUS UAV SOFTWARE LEAD / COMPUTER VISION, ROBOTICS &amp; MACHINE LOGIC</span>
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
          <span class="lang-tr">3 yaşında evdeki ilk masaüstü bilgisayarla başlayan çocukluk merakından; gökyüzünde otonom it dalaşı yapan SİHA algoritmaları, fabrikalarda çalışan endüstriyel robotlar ve sıfır hata kalite kontrol modellerine uzanan bir mühendislik yolculuğu.</span>
          <span class="lang-en">An engineering odyssey originating from 3-year-old childhood curiosity behind a retro CRT desktop, ascending to autonomous dogfight UAV guidance, smart factory industrial robotics, and zero-defect AI vision architectures.</span>
        </p>

        <p>
          <span class="lang-tr"><strong>İlk Kıvılcım (3 Yaş &amp; Retro Bilgisayar):</strong> Bilgisayarla aslında henüz 3 yaşımdayken tanıştım. 90'ların sonunda eve ilk bilgisayarın alınması, CRT monitör karşısında oynanan retro oyunlar ve 3.5" disketler dijital dünyayla ilk karşılaşmam oldu. Klavyenin tuşlarına basarak ekranda bir şeyleri hareket ettirebilmek, çocukluk dünyamda makinelerin nasıl çalıştığına dair silinmez bir merak ve tutku ateşi yaktı.</span>
          <span class="lang-en"><strong>The First Spark (Age 3 &amp; Retro Computing):</strong> My first encounter with computing began at age 3. The arrival of a late-90s desktop PC, CRT monitor, floppy disks, and pixel adventure games unlocked a whole digital realm. Interacting with the screen through keys sparked an indelible curiosity about the inner workings of machines.</span>
        </p>

        <p>
          <span class="lang-tr"><strong>Lise Yılları &amp; Derin Yeteneklerin Keşfi (Kırımlı Fazilet Olcay A.L.):</strong> Bilgisayarın sadece oyun oynanan bir kutu değil; arkasında dünyayı dönüştürebilecek çok daha derin yetenekler barındırdığını lisede keşfettim. Kırımlı Fazilet Olcay Anadolu Lisesi sıralarındayken kod yazmanın ve algoritmik düşüncenin gücüyle tanıştım. Karmaşık problemleri mantık adımlarına bölüp çözebilmenin getirdiği rasyonel özgürlük hayata ve olaylara bakışımı kökten değiştirdi ve beni bilgisayar mühendisliği idealiyle buluşturdu.</span>
          <span class="lang-en"><strong>High School &amp; Awakening to Deep Potential (Kırımlı Fazilet Olcay):</strong> In high school, I realized computers possessed far deeper capabilities beyond gaming. At Kırımlı Fazilet Olcay Anatolian High School, writing my first lines of code and exploring algorithms fundamentally altered how I perceived problems. Logic became a universal philosophy, setting my sights firmly on computer engineering.</span>
        </p>

        <p>
          <span class="lang-tr"><strong>Üniversite Temeli (Tekirdağ Namık Kemal Üniversitesi):</strong> Lisans eğitimime Tekirdağ Namık Kemal Üniversitesi Bilgisayar Mühendisliği bölümünde başladım ve akademik sürecimi <em>Yüksek Onur</em> derecesiyle sürdürüyorum. Veri yapıları, algoritmalar, işletim sistemleri ve sistem mimarileri üzerine sağlam temeller inşa ederken; teorik hesaplamayı pratik Ar-Ge projeleriyle buluşturdum.</span>
          <span class="lang-en"><strong>University Foundations (Tekirdağ Namık Kemal University):</strong> Pursuing Computer Engineering with <em>High Honors</em>, I built solid foundations across data structures, algorithmic complexity, and system architectures, harmonizing rigorous theory with hands-on R&amp;D.</span>
        </p>

        <p>
          <span class="lang-tr"><strong>Görüntü İşleme &amp; Gazebo Harmonic Simülasyonu:</strong> Yazılımı ekrandan çıkarıp fiziksel dünyayı algılayan bir göze dönüştürmek için Görüntü İşleme (Computer Vision) ve Gazebo Harmonic simülasyonlarına odaklandım. Kamera sensörlerinden gelen ham piksel matrislerini derin öğrenme modelleriyle işlerken; algoritmaları gerçek dünyaya indirmeden önce Gazebo Harmonic üzerinde 3D fiziksel simülasyon ortamları kurdum. Işın izleme, sanal kamera optiği ve tensör matrislerini simülasyonda doğrulayarak kusursuz bir test hattı inşa ettim.</span>
          <span class="lang-en"><strong>Computer Vision &amp; Gazebo Harmonic Simulation:</strong> To empower software with physical sight, I specialized in Computer Vision and Gazebo Harmonic 3D simulation. Before physical deployment, camera optics, sensor ray tracing, and deep neural tensors were verified in virtual physics environments for zero-defect field reliability.</span>
        </p>

        <p>
          <span class="lang-tr"><strong>Şahi Otonom SİHA Takımı (Hava-Hava Muharebe Otonomisi):</strong> Bu vizyonun en üst sahaya yansıması, <strong>Şahi Otonom SİHA Takımı Yazılım Ekip Liderliği</strong> oldu. TEKNOFEST Savaşan İHA yarışması kapsamında; yüksek hızlı hava-hava muharebe senaryolarında gerçek zamanlı YOLOv8 nesne tespiti, ByteTrack yörünge kestirimi ve oransal seyrüsefer (Proportional Navigation) kamikaze dalış güdüm mimarilerini uçtan uca yönettim.</span>
          <span class="lang-en"><strong>Şahi Autonomous UAV Team (Aerial Combat Autonomy):</strong> Directing software engineering for the Şahi Autonomous UAV Team in TEKNOFEST Fighting UAV, I architected real-time YOLOv8 target acquisition, ByteTrack trajectory forecasting, and proportional navigation kamikaze dive guidance.</span>
        </p>

        <p>
          <span class="lang-tr"><strong>Çözüm Makina Ar-Ge (ISEE Vision &amp; ISEE Robotics):</strong> Saha tecrübemi iki koldan derinleştirdim: <strong>ISEE Vision</strong> bünyesinde üretim hatlarında PatchCore ve DINO Vision Transformers mimarilerini kullanarak denetimsiz sıfır hata anomali segmentasyonu geliştirdim. <strong>ISEE Robotics</strong> bünyesinde ise endüstriyel robotlarla çalıştım; ROS (Robot Operating System) hesaplama düğümleri, MQTT IoT protokolü ve Gazebo simülasyonlarıyla fabrika zemininde otonom robot operasyonları kurdum.</span>
          <span class="lang-en"><strong>Çözüm Makina R&amp;D (ISEE Vision &amp; ISEE Robotics):</strong> Field engineering spanned dual frontiers: At <strong>ISEE Vision</strong>, I engineered unsupervised zero-defect anomaly segmentation using PatchCore and DINO Vision Transformers. At <strong>ISEE Robotics</strong>, I deployed industrial robotic arms and AGVs using ROS nodes, MQTT telemetry messaging, and Gazebo kinematics.</span>
        </p>

        <p>
          <span class="lang-tr"><strong>Martur Fompak International &amp; Huawei Topluluğu:</strong> Küresel otomotiv devi Martur Fompak International bünyesinde şirket içi kurumsal yapay zeka (Agentic AI) iş akışlarını hayata geçirdim. Paralelinde Huawei Student Developers öğrenci yazılım komite liderliğini yürüterek genç mühendislere mentorluk sundum.</span>
          <span class="lang-en"><strong>Martur Fompak &amp; Huawei Leadership:</strong> At automotive leader Martur Fompak International, I developed enterprise internal AI workflows. Concurrently, as Software Committee Lead for Huawei Student Developers, I mentored aspiring engineers.</span>
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
  {file:'marina-bay-sands.png',   title:'3 Yaş: İlk Bilgisayar & Oyunlar',    place:'90\\'ların Sonu · Dijital Dünyayla İlk Karşılaşma'},
  {file:'gardens-by-the-bay.png', title:'Kırımlı Fazilet Olcay A.L.',          place:'Lise Yılları · Makinelerin Derin Yetenekleri'},
  {file:'merlion.png',            title:'Tekirdağ Namık Kemal Üniversitesi',   place:'Bilgisayar Mühendisliği — Yüksek Onur Derecesi'},
  {file:'buddha-tooth.png',       title:'Martur Fompak International',         place:'Şirket İçi Kurumsal Yapay Zeka Sistemleri'},
  {file:'joo-chiat.png',          title:'Görüntü İşleme & Gazebo Harmonic',    place:'Piksel Mimarileri, OpenCV & 3D Simülasyon'},
  {file:'lau-pa-sat.png',         title:'Şahi Otonom SİHA Takımı',            place:'TEKNOFEST Savaşan İHA · Yazılım Ekip Lideri'},
  {file:'marina-bay-skyline.png', title:'Çözüm Makina: ISEE Vision',           place:'Endüstriyel Görüntü İşleme & Kalite Kontrol'},
  {file:'singapore-river.png',    title:'Çözüm Makina: ISEE Robotics',         place:'Endüstriyel Robotik, ROS, MQTT & Gazebo'},
  {file:'botanic-gardens.png',    title:'İnsan Formu — Makine Mantığı',        place:'Otonom Sürü Zekası & Gelecek Vizyonu'}
];

const PAGES_EN=[
  {file:'marina-bay-sands.png',   title:'Age 3: First PC & Retro Gaming',      place:'Late 90s · First Digital Awakening'},
  {file:'gardens-by-the-bay.png', title:'Kırımlı Fazilet Olcay High School',   place:'Awakening to Deep Machine Capabilities'},
  {file:'merlion.png',            title:'Tekirdağ Namık Kemal University',     place:'Computer Engineering — High Honors Degree'},
  {file:'buddha-tooth.png',       title:'Martur Fompak International',         place:'Internal Enterprise AI & Multi-Agent Systems'},
  {file:'joo-chiat.png',          title:'Computer Vision & Gazebo Harmonic',   place:'Pixel Tensors, OpenCV & 3D Simulation'},
  {file:'lau-pa-sat.png',         title:'Şahi Autonomous UAV Team',            place:'TEKNOFEST Fighting UAV · Software Team Lead'},
  {file:'marina-bay-skyline.png', title:'Çözüm Makina: ISEE Vision',           place:'Industrial Computer Vision & Zero-Defect'},
  {file:'singapore-river.png',    title:'Çözüm Makina: ISEE Robotics',         place:'Industrial Robotics, ROS, MQTT & Gazebo'},
  {file:'botanic-gardens.png',    title:'Human Form — Machine Logic',          place:'Autonomous Swarm Robotics & Future Manifesto'}
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

print('Generated', target_path, 'with CV & Robotics background successfully. Length:', len(full_html))
