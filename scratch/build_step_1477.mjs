import fs from 'fs';

const html = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OZAN ARDA — Otonom Sistemler &amp; Makine Mantığı</title>
  <meta name="description" content="Ozan Arda Özçelik Portfolyosu — Şahi Otonom SİHA Takımı Yazılım Ekip Lideri, Bilgisayarlı Görü, Robotik &amp; Yapay Zeka Mühendisi." />
  <link rel="icon" type="image/svg+xml" href="favicon.svg" />

  <!-- Google Fonts: Righteous (Display) & DM Mono (Mono & Synthetic Italic) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Righteous&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="/styles.css" />
</head>
<body>

  <!-- FIXED TOPOGRAPHIC CONTOUR SVG: First child of body -->
  <svg class="contour-bg" viewBox="0 0 1600 1000" preserveAspectRatio="none" aria-hidden="true">
    <path d="M-50,60 C350,110 750,20 1200,90 C1450,130 1550,40 1650,70" />
    <path d="M-50,130 C300,190 800,80 1150,160 C1400,210 1520,110 1650,140" />
    <path d="M-50,200 C380,260 720,150 1250,230 C1480,270 1560,180 1650,210" />
    <path d="M-50,270 C280,330 850,210 1180,300 C1420,350 1530,250 1650,280" />
    <path d="M-50,340 C340,400 780,280 1220,370 C1460,420 1570,320 1650,350" />
    <path d="M-50,410 C260,470 820,350 1160,440 C1390,490 1510,390 1650,420" />
    <path d="M-50,480 C360,540 760,420 1240,510 C1470,560 1580,460 1650,490" />
    <path d="M-50,550 C310,610 840,490 1190,580 C1430,630 1540,530 1650,560" />
    <path d="M-50,620 C290,680 790,560 1230,650 C1450,700 1560,600 1650,630" />
    <path d="M-50,690 C370,750 740,630 1170,720 C1410,770 1520,670 1650,700" />
    <path d="M-50,760 C330,820 860,700 1260,790 C1480,840 1570,740 1650,770" />
    <path d="M-50,830 C270,890 810,770 1210,860 C1440,910 1550,810 1650,840" />
    <path d="M-50,900 C350,960 770,840 1180,930 C1420,980 1530,880 1650,910" />
    <path d="M-50,970 C300,1030 830,910 1240,1000 C1460,1050 1580,950 1650,980" />
    <path d="M-50,1040 C380,1100 790,980 1200,1070 C1450,1120 1540,1020 1650,1050" />
  </svg>

  <!-- NAVIGATION BAR (mix-blend-mode: difference) -->
  <nav class="site-nav" aria-label="Main Navigation">
    <a href="#heroScrollFlow" class="nav-brand">OZAN ARDA</a>

    <!-- 3-PILL VIEW SELECTOR: 01 HİKAYEM / 02 YETENEKLERİM / 03 PROJELERİM -->
    <div class="nav-view-switcher" id="sectionNavSwitcher">
      <a href="#heroScrollFlow" class="view-switch-pill is-active" id="btnNavStory" title="01 Hikayem (3D Eskiz Defteri)">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">01 Hikayem</span><span class="lang-en">01 My Story</span></span>
      </a>
      <a href="#heroScrollFlow" class="view-switch-pill" id="btnNavSkills" title="02 Yeteneklerim (3D Kitaplık)">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">02 Yeteneklerim</span><span class="lang-en">02 Capabilities</span></span>
      </a>
      <a href="#projects-section" class="view-switch-pill" id="btnNavProjects" title="03 Projelerim (GitHub &amp; Ar-Ge)">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">03 Projelerim</span><span class="lang-en">03 Projects</span></span>
      </a>
    </div>

    <div class="nav-actions">
      <button class="nav-lang-btn" id="lang-toggle-btn" aria-label="Dili Değiştir / Switch Language">
        <span class="lang-tr">EN</span>
        <span class="lang-en">TR</span>
      </button>
      <button class="nav-index-btn" id="menu-toggle-btn" aria-expanded="false" aria-controls="site-menu-panel">
        <span>Index</span>
        <span class="menu-icon" aria-hidden="true">
          <span></span>
          <span></span>
        </span>
      </button>
    </div>
  </nav>

  <!-- SLIDE-DOWN FULLSCREEN MENU PANEL -->
  <div class="site-menu" id="site-menu-panel" aria-hidden="true">
    <ul class="menu-nav-list">
      <li class="menu-nav-item">
        <a href="#heroScrollFlow" class="menu-nav-link" id="menu-link-story">
          <span class="menu-num">01</span>
          <span><span class="lang-tr">01 / Hikayem (Eskiz Defteri)</span><span class="lang-en">01 / My Story (Sketchbook)</span></span>
        </a>
      </li>
      <li class="menu-nav-item">
        <a href="#heroScrollFlow" class="menu-nav-link" id="menu-link-skills">
          <span class="menu-num">02</span>
          <span><span class="lang-tr">02 / Yeteneklerim (3D Kitaplık)</span><span class="lang-en">02 / Capabilities (Shelf)</span></span>
        </a>
      </li>
      <li class="menu-nav-item">
        <a href="#projects-section" class="menu-nav-link" id="menu-link-projects">
          <span class="menu-num">03</span>
          <span><span class="lang-tr">03 / Projelerim (GitHub &amp; Ar-Ge)</span><span class="lang-en">03 / Projects (GitHub &amp; R&amp;D)</span></span>
        </a>
      </li>
      <li class="menu-nav-item">
        <a href="#capabilities" class="menu-nav-link">
          <span class="menu-num">04</span>
          <span><span class="lang-tr">04 / Yetkinlik Matrisi</span><span class="lang-en">04 / Skills Matrix</span></span>
        </a>
      </li>
      <li class="menu-nav-item">
        <a href="#process" class="menu-nav-link">
          <span class="menu-num">05</span>
          <span><span class="lang-tr">05 / Süreç &amp; Metodoloji</span><span class="lang-en">05 / Process &amp; Methodology</span></span>
        </a>
      </li>
      <li class="menu-nav-item">
        <a href="#archive" class="menu-nav-link">
          <span class="menu-num">06</span>
          <span><span class="lang-tr">06 / Arşiv &amp; Deneyler</span><span class="lang-en">06 / Archive &amp; Experiments</span></span>
        </a>
      </li>
      <li class="menu-nav-item">
        <a href="#contact" class="menu-nav-link">
          <span class="menu-num">07</span>
          <span><span class="lang-tr">07 / İletişim / Görev Talebi</span><span class="lang-en">07 / Commission / Contact</span></span>
        </a>
      </li>
    </ul>
  </div>

  <!-- =========================================================================
       HERO SCROLL FLOW: 01 HİKAYEM (OPEN SKETCHBOOK) -> COVER CLOSES -> ZOOMS OUT -> DOCKS INTO 02 YETENEKLERİM (SHELF)
       Direct scroll-driven transition: zero buttons, zero intermediate text pages!
       ========================================================================= -->
  <div class="hero-scroll-flow" id="heroScrollFlow">
    <div class="hero-sticky-viewport" id="heroStickyViewport">
      
      <!-- LAYER 1: SHELF BACKGROUND & IFRAME (Fades in as book docks) -->
      <div class="flow-layer flow-shelf-layer" id="flowShelfLayer">
        <iframe
          id="shelf-interactive-frame"
          class="flow-iframe"
          src="/landing-pages/skills-shelf.html"
          title="Ozan Arda Özçelik — 02 Yeteneklerim &amp; Çalışma Kitaplığı"
          sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
          loading="eager"
          allow="fullscreen"
        ></iframe>
      </div>

      <!-- LAYER 2: 3D DOCKING BOOK (Driven by scroll progress) -->
      <div class="flow-layer flow-3d-book-layer" id="flow3dBookLayer">
        <div class="scroll-dock-book" id="scrollDockBook">
          <!-- Spine -->
          <div class="sdb-spine">
            <span>00 · HİKAYEM</span>
          </div>

          <!-- Left Wing (Back cover / left spread) -->
          <div class="sdb-wing sdb-left" id="sdbWingLeft">
            <div class="sdb-face sdb-paper">
              <div class="sdb-page-art">
                <span class="sdb-tag">LEVHA 01 // 1999</span>
                <div class="sdb-sketch-lead">3 YAŞ: İLK BİLGİSAYAR</div>
                <div class="sdb-sketch-sub">Retro Oyunlar · Dijital Kıvılcım</div>
              </div>
              <div style="font-family:var(--font-mono);font-size:9px;color:#9a6a3e;letter-spacing:0.12em;">TEORİK BİLGİ ➔ PRATİK</div>
            </div>
            <div class="sdb-face sdb-back-cover">
              <div class="sdb-cover-foil">
                <div class="sdb-roman">✦</div>
                <div>
                  <div class="sdb-title">OZAN ARDA</div>
                  <div class="sdb-sub">MAKİNE MANTIĞI</div>
                </div>
                <div class="sdb-meta">2026 EDİSYON</div>
              </div>
            </div>
          </div>

          <!-- Right Wing (Front cover that folds shut over the book) -->
          <div class="sdb-wing sdb-right" id="sdbWingRight">
            <div class="sdb-face sdb-paper">
              <div class="sdb-page-art">
                <span class="sdb-tag">LEVHA 09 // 2026</span>
                <div class="sdb-sketch-lead">İNSAN FORMU — MAKİNE MANTIĞI</div>
                <div class="sdb-sketch-sub">Şahi SİHA · Çözüm Makina · Gelecek Vizyonu</div>
              </div>
              <div style="font-family:var(--font-mono);font-size:9px;color:#9a6a3e;letter-spacing:0.12em;">SİHA YAZILIM LİDERİ</div>
            </div>
            <div class="sdb-face sdb-front-cover">
              <div class="sdb-cover-foil">
                <div class="sdb-roman">0</div>
                <div>
                  <div class="sdb-title">HİKAYEM</div>
                  <div class="sdb-sub">OZAN ARDA ÖZÇELİK</div>
                </div>
                <div class="sdb-rule"></div>
                <div class="sdb-meta">VOL. 00 // 9 DÖNÜM NOKTASI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- LAYER 3: 01 HİKAYEM INTERACTIVE SKETCHBOOK IFRAME (Visible at scroll 0) -->
      <div class="flow-layer flow-story-layer" id="flowStoryLayer">
        <iframe
          id="sketchbook-interactive-frame"
          class="flow-iframe"
          src="/landing-pages/meng-to-sketchbook.html"
          title="Ozan Arda Özçelik — 01 Hikayem &amp; Eskiz Defteri"
          sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
          loading="eager"
          allow="fullscreen"
        ></iframe>
      </div>

    </div>
  </div>

  <!-- MAIN EDITORIAL CONTENT -->
  <main class="main">

    <!-- [0] MARQUEE STRIP -->
    <div class="marquee-wrapper" aria-hidden="true">
      <div class="marquee-track">
        <div class="marquee-content">
          <span>OZAN ARDA ÖZÇELİK</span>
          <span class="marquee-bullet">•</span>
          <span><span class="lang-tr">OTONOM SİHA YAZILIM LİDERİ</span><span class="lang-en">AUTONOMOUS UAV LEAD</span></span>
          <span class="marquee-bullet">•</span>
          <span>PORTFOLIO 2025 / 2026</span>
          <span class="marquee-bullet">•</span>
          <span><span class="lang-tr">İNSAN FORMU — MAKİNE MANTIĞI</span><span class="lang-en">HUMAN FORM — MACHINE LOGIC</span></span>
          <span class="marquee-bullet">•</span>
          <span><span class="lang-tr">AR-GE &amp; ENDÜSTRİYE AÇIK</span><span class="lang-en">AVAILABLE FOR COMMISSION</span></span>
          <span class="marquee-bullet">•</span>
          <span>TEKNOFEST SAVAŞAN İHA</span>
          <span class="marquee-bullet">•</span>
          <span><span class="lang-tr">BİLGİSAYARLI GÖRÜ &amp; DERİN ÖĞRENME</span><span class="lang-en">COMPUTER VISION &amp; AI</span></span>
          <span class="marquee-bullet">•</span>
        </div>
        <div class="marquee-content">
          <span>OZAN ARDA ÖZÇELİK</span>
          <span class="marquee-bullet">•</span>
          <span><span class="lang-tr">OTONOM SİHA YAZILIM LİDERİ</span><span class="lang-en">AUTONOMOUS UAV LEAD</span></span>
          <span class="marquee-bullet">•</span>
          <span>PORTFOLIO 2025 / 2026</span>
          <span class="marquee-bullet">•</span>
          <span><span class="lang-tr">İNSAN FORMU — MAKİNE MANTIĞI</span><span class="lang-en">HUMAN FORM — MACHINE LOGIC</span></span>
          <span class="marquee-bullet">•</span>
          <span><span class="lang-tr">AR-GE &amp; ENDÜSTRİYE AÇIK</span><span class="lang-en">AVAILABLE FOR COMMISSION</span></span>
          <span class="marquee-bullet">•</span>
          <span>TEKNOFEST SAVAŞAN İHA</span>
          <span class="marquee-bullet">•</span>
          <span><span class="lang-tr">BİLGİSAYARLI GÖRÜ &amp; DERİN ÖĞRENME</span><span class="lang-en">COMPUTER VISION &amp; AI</span></span>
          <span class="marquee-bullet">•</span>
        </div>
      </div>
    </div>

    <!-- RUNNING INDEX STRIP -->
    <div class="running-index-strip">
      <span><span class="lang-tr">N — 01 · Dizin 2025 / 2026</span><span class="lang-en">N — 01 · Index 2025 / 2026</span></span>
      <span><span class="lang-tr">Edisyon 001</span><span class="lang-en">Edition 001</span></span>
      <span><span class="lang-tr">Rotasyonda</span><span class="lang-en">In rotation</span></span>
    </div>

    <!-- [2] CAPABILITIES EDITORIAL MATRIX (02) -->
    <section class="section" id="capabilities" data-reveal>
      <div class="section-head">
        <h2 class="section-title">
          <span class="lang-tr">02 / Yetkinlik Matrisi</span>
          <span class="lang-en">02 / Skills Matrix</span>
        </h2>
        <span class="section-folio">p. 042</span>
      </div>
      <div class="capabilities-grid">
        
        <div class="capability-card" data-reveal>
          <div>
            <div class="capability-index">↳ CİLT I</div>
            <h3 class="capability-title">
              <span class="lang-tr">Bilgisayarlı Görü &amp; Anomali Tespiti</span>
              <span class="lang-en">Computer Vision &amp; Anomaly Detection</span>
            </h3>
            <p class="capability-body">
              <span class="lang-tr">Çözüm Makina ISEE Vision bünyesinde sanayi tipi ana projeler, üniversite Ar-Ge temeli ve Şahi SİHA hava-hava optik takip mimarisi. Nesne tespiti (Object Detection), optik karakter tanıma (OCR) ve sıfır hata anomali tespiti (Anomaly Detection) üzerine çoklu derin öğrenme hatları.</span>
              <span class="lang-en">Primary industrial vision systems at Çözüm Makina (ISEE Vision), university R&amp;D foundations, and Şahi UAV air-to-air optical tracking. Multi-stage neural pipelines spanning Object Detection, Optical Character Recognition (OCR), and zero-defect Anomaly Detection.</span>
            </p>
          </div>
          <div class="capability-tags">PaddleOCR · DINO · PatchCore · YOLOv8 · OpenCV · TensorRT</div>
        </div>

        <div class="capability-card" data-reveal>
          <div>
            <div class="capability-index">↳ CİLT II</div>
            <h3 class="capability-title">
              <span class="lang-tr">Robotik &amp; Otonom Sistemler</span>
              <span class="lang-en">Robotics &amp; Autonomous Systems</span>
            </h3>
            <p class="capability-body">
              <span class="lang-tr">Şahi Otonom SİHA Takımı ve Çözüm Makina (ISEE Robotics) bünyesinde hem havada hem endüstriyel üretim zemininde otonom robotik mimarileri. ROS 2 düğüm dağıtımı, MQTT IoT telemetrisi, ArduPilot otonom uçuş kontrolcüleri, MAVLink seyrüsefer protokolleri ve Gazebo Harmonic 3D fizik simülasyonları.</span>
              <span class="lang-en">Autonomous robotics architectures across aerial UAVs and factory robotics at Çözüm Makina (ISEE Robotics). ROS 2 distributed nodes, industrial MQTT IoT telemetry, ArduPilot flight controllers, MAVLink navigation protocols, and high-fidelity Gazebo Harmonic 3D physics simulation.</span>
            </p>
          </div>
          <div class="capability-tags">ROS 2 · Gazebo Harmonic · MAVLink · ArduPilot · MQTT · STM32</div>
        </div>

        <div class="capability-card" data-reveal>
          <div>
            <div class="capability-index">↳ CİLT III</div>
            <h3 class="capability-title">
              <span class="lang-tr">Yapay Zeka &amp; Ajanik Sistemler</span>
              <span class="lang-en">Artificial Intelligence &amp; Agentic AI</span>
            </h3>
            <p class="capability-body">
              <span class="lang-tr">Martur Fompak International bünyesinde şirket içi yapay zeka çözümleri ve diğer mühendislik ekiplerine yardımcı olacak akıllı sistemlerin geliştirilmesi. PyTorch derin öğrenme mimarileri, Hugging Face açık kaynak modelleri ve LLM tabanlı Agentic AI çoklu ajan orkestrasyonları.</span>
              <span class="lang-en">Enterprise internal AI systems and workflows engineered at Martur Fompak International to empower cross-functional engineering teams. Custom PyTorch neural architectures, Hugging Face open-source models, and LLM-driven Agentic AI multi-agent orchestration.</span>
            </p>
          </div>
          <div class="capability-tags">PyTorch · Hugging Face · Agentic AI · LLMs · RAG · Multi-Agent</div>
        </div>

        <div class="capability-card" data-reveal>
          <div>
            <div class="capability-index">↳ CİLT IV</div>
            <h3 class="capability-title">
              <span class="lang-tr">Diller &amp; Geliştirme Araçları</span>
              <span class="lang-en">Languages &amp; Engineering Tooling</span>
            </h3>
            <p class="capability-body">
              <span class="lang-tr">İletişimde Türkçe (Anadil) ve İngilizce (B2 Profesyonel). Mühendislik geliştirmede Python ve C++. Altyapı ve veri yönetiminde Docker konteynerizasyonu, Git sürüm kontrolü ve PostgreSQL ilişkisel veritabanları. Araştırma ve geliştirmeyi hızlandıran Claude ve AGY CLI gibi gelişmiş yapay zeka modelleri.</span>
              <span class="lang-en">Linguistic fluency in Turkish (Native) and English (B2 Professional). Core engineering in Python and C++. Infrastructure with Docker, Git, and PostgreSQL. Augmented by autonomous AI coding models and tools including Claude and Google Antigravity (AGY) CLI.</span>
            </p>
          </div>
          <div class="capability-tags">Türkçe (Anadil) · İngilizce (B2) · Python · C++ · Docker · Git · PostgreSQL · Claude · AGY</div>
        </div>

        <div class="capability-card full-width" data-reveal>
          <div>
            <div class="capability-index">↳ CİLT V</div>
            <h3 class="capability-title">
              <span class="lang-tr">İlgi Alanları &amp; Zihinsel Odak</span>
              <span class="lang-en">Interests &amp; Strategic Passions</span>
            </h3>
            <p class="capability-body">
              <span class="lang-tr">Teknik ve entelektüel merak: Bilgisayarlı Görü, Otonom Sistemler ve Yapay Zeka Etiği; otonom kararların felsefi boyutları. Dinamik karar alma, refleks ve stratejide E-Spor; taktiksel derinlik ve pozisyonel analizde Satranç; zihinsel odaklanmayı, ritmi ve yaratıcılığı besleyen Müzik.</span>
              <span class="lang-en">Technical and intellectual curiosity: Computer Vision, Autonomous Systems, and AI Ethics exploring machine philosophy. High-tempo tactical decision-making through Esports; positional strategy and analytical depth in Chess; mental rhythm and creative focus via Music.</span>
            </p>
          </div>
          <div class="capability-tags">Görüntü İşleme · Otonom Sistemler · Yapay Zeka Etiği · E-Spor · Satranç · Müzik</div>
        </div>

      </div>
    </section>

    <!-- [3] PROJECTS SHOWCASE & GITHUB REPOSITORIES (03) -->
    <section class="section" id="projects-section" data-reveal>
      <div class="section-head">
        <h2 class="section-title">
          <span class="lang-tr">03 / Projelerim &amp; GitHub Depoları</span>
          <span class="lang-en">03 / Projects &amp; GitHub Repositories</span>
        </h2>
        <span class="section-folio">p. 064</span>
      </div>

      <!-- FILTER BUTTONS -->
      <div class="projects-filter-row" role="tablist">
        <button class="project-filter-btn is-active" data-filter="all" type="button">
          <span class="lang-tr">Tümü (10)</span><span class="lang-en">All (10)</span>
        </button>
        <button class="project-filter-btn" data-filter="vision" type="button">
          <span class="lang-tr">Bilgisayarlı Görü</span><span class="lang-en">Computer Vision</span>
        </button>
        <button class="project-filter-btn" data-filter="robotics" type="button">
          <span class="lang-tr">Robotik &amp; Otonom</span><span class="lang-en">Robotics &amp; Autonomy</span>
        </button>
        <button class="project-filter-btn" data-filter="ai" type="button">
          <span class="lang-tr">Yapay Zeka &amp; ML</span><span class="lang-en">AI &amp; Machine Learning</span>
        </button>
        <button class="project-filter-btn" data-filter="simulation" type="button">
          <span class="lang-tr">Simülasyon &amp; Fizik</span><span class="lang-en">Simulation &amp; Physics</span>
        </button>
      </div>

      <!-- PROJECTS GRID -->
      <div class="projects-grid" id="projectsGrid">

        <!-- Card 1: Şahi SİHA (Flagship) -->
        <article class="project-card is-flagship" data-category="robotics vision" data-repo="sahi-siha" data-reveal>
          <div>
            <div class="project-card-header">
              <span class="project-cat-badge">ROBOTİK &amp; GÖRÜ</span>
              <span class="project-flagship-tag">★ AMİRAL PROJE</span>
            </div>
            <h3 class="project-card-title">Şahi SİHA: Hava-Hava Muharebe Otonomisi</h3>
            <p class="project-card-desc">
              <span class="lang-tr">TEKNOFEST Savaşan İHA için yazılım mimarisi liderliği. YOLOv8, ByteTrack, PyMAVLink ve ROS 2 durum makineleriyle hava-hava it dalaşı hedef tespiti ve kamikaze dalış güdümü.</span>
              <span class="lang-en">Directing software architecture for TEKNOFEST Fighting UAV. Real-time air-to-air dogfight tracking and kamikaze dive attack guidance using YOLOv8, ByteTrack, PyMAVLink, and ROS 2.</span>
            </p>
            <div class="project-card-tags">
              <span class="project-tag">YOLOv8 + ByteTrack</span>
              <span class="project-tag">ArduPilot / PyMAVLink</span>
              <span class="project-tag">Proportional Nav.</span>
              <span class="project-tag">ROS 2 Humble</span>
            </div>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">⭐ <span class="stat-stars">Lead</span></span>
              <span class="project-stat-item">📍 TEKNOFEST</span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span class="lang-tr">İncele ↗</span><span class="lang-en">View ↗</span>
            </a>
          </div>
        </article>

        <!-- Card 2: Çözüm Makina ISEE Vision & Robotics (Flagship) -->
        <article class="project-card is-flagship" data-category="vision robotics" data-repo="isee-vision" data-reveal>
          <div>
            <div class="project-card-header">
              <span class="project-cat-badge">ENDÜSTRİYEL AR-GE</span>
              <span class="project-flagship-tag">★ AMİRAL PROJE</span>
            </div>
            <h3 class="project-card-title">ISEE Vision &amp; Robotics</h3>
            <p class="project-card-desc">
              <span class="lang-tr">PatchCore ve DINO tabanlı sıfır hata yüzey anomali segmentasyonu geliştirdim. Yüksek hızlı PaddleOCR ile parça takibi ve Gazebo Harmonic üzerinde endüstriyel robotik simülasyonları tasarladım.</span>
              <span class="lang-en">Sub-millimeter zero-defect anomaly segmentation with PatchCore and DINO Vision Transformers. High-speed PaddleOCR serial tracking and industrial robot kinematics in Gazebo Harmonic.</span>
            </p>
            <div class="project-card-tags">
              <span class="project-tag">PatchCore / DINO</span>
              <span class="project-tag">PaddleOCR</span>
              <span class="project-tag">Gazebo Harmonic</span>
              <span class="project-tag">ROS 2 / MQTT</span>
            </div>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">⭐ <span class="stat-stars">Ar-Ge</span></span>
              <span class="project-stat-item">📍 Çözüm Makina</span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span class="lang-tr">İncele ↗</span><span class="lang-en">View ↗</span>
            </a>
          </div>
        </article>

        <!-- Card 3: Martur Fompak Agentic AI (Flagship) -->
        <article class="project-card is-flagship" data-category="ai" data-repo="martur-ai" data-reveal>
          <div>
            <div class="project-card-header">
              <span class="project-cat-badge">KURUMSAL YZ</span>
              <span class="project-flagship-tag">★ AMİRAL PROJE</span>
            </div>
            <h3 class="project-card-title">Martur Fompak: Agentic AI Motoru</h3>
            <p class="project-card-desc">
              <span class="lang-tr">Karmaşık kurumsal operasyonları otonom alt görevlere ayıran Agentic AI mimarileri kurguladım. LangChain ve PyTorch ile şirket içi kestirimci makine öğrenmesi modellerini entegre ettim.</span>
              <span class="lang-en">Multi-agent Agentic AI systems decomposing high-level enterprise operations into autonomous sub-tasks, integrating proprietary ML forecasting with LangChain and PyTorch.</span>
            </p>
            <div class="project-card-tags">
              <span class="project-tag">Agentic AI</span>
              <span class="project-tag">LangChain</span>
              <span class="project-tag">PyTorch</span>
              <span class="project-tag">Hugging Face</span>
            </div>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">⭐ <span class="stat-stars">Enterprise</span></span>
              <span class="project-stat-item">📍 Martur Fompak</span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span class="lang-tr">İncele ↗</span><span class="lang-en">View ↗</span>
            </a>
          </div>
        </article>

        <!-- Card 4: Hand-Detector- -->
        <article class="project-card" data-category="vision" data-repo="hand-detector-" data-reveal>
          <div>
            <div class="project-card-header">
              <span class="project-cat-badge">BİLGİSAYARLI GÖRÜ</span>
            </div>
            <h3 class="project-card-title">Hand-Detector-</h3>
            <p class="project-card-desc">
              <span class="lang-tr">OpenCV ve MediaPipe tabanlı 21 3D el eklemini eşzamanlı takip eden, jest tanıma ve insan-makine etkileşimi sağlayan yüksek performanslı görüntü işleme sistemi.</span>
              <span class="lang-en">Real-time 21 3D hand landmark tracking and gesture recognition engine built with OpenCV and MediaPipe running at sub-15ms frame latency.</span>
            </p>
            <div class="project-card-tags">
              <span class="project-tag">Python</span>
              <span class="project-tag">OpenCV</span>
              <span class="project-tag">MediaPipe</span>
              <span class="project-tag">Real-Time CV</span>
            </div>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">⭐ <span class="stat-stars" id="star-Hand-Detector-">0</span></span>
              <span class="project-stat-item">⑂ <span class="stat-forks" id="fork-Hand-Detector-">0</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik/Hand-Detector-" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span class="lang-tr">GitHub ↗</span><span class="lang-en">GitHub ↗</span>
            </a>
          </div>
        </article>

        <!-- Card 5: TensileForge -->
        <article class="project-card" data-category="simulation" data-repo="tensileforge" data-reveal>
          <div>
            <div class="project-card-header">
              <span class="project-cat-badge">FİZİK SİMÜLASYONU</span>
            </div>
            <h3 class="project-card-title">TensileForge</h3>
            <p class="project-card-desc">
              <span class="lang-tr">Malzeme çekme deneylerinde gerilme-şekil değiştirme eğrilerini, elastik-plastik deformasyon tensörlerini ve akma sınırlarını simüle eden sonlu elemanlar hesaplama motoru.</span>
              <span class="lang-en">Finite element stress-strain mechanical simulation platform analyzing elastic-plastic deformation tensors and tensile fracture boundaries.</span>
            </p>
            <div class="project-card-tags">
              <span class="project-tag">C++ / Python</span>
              <span class="project-tag">Finite Element</span>
              <span class="project-tag">Stress Analysis</span>
              <span class="project-tag">NumPy</span>
            </div>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">⭐ <span class="stat-stars" id="star-TensileForge">0</span></span>
              <span class="project-stat-item">⑂ <span class="stat-forks" id="fork-TensileForge">0</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik/TensileForge" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span class="lang-tr">GitHub ↗</span><span class="lang-en">GitHub ↗</span>
            </a>
          </div>
        </article>

        <!-- Card 6: Comp2laintBox -->
        <article class="project-card" data-category="ai" data-repo="comp2laintbox" data-reveal>
          <div>
            <div class="project-card-header">
              <span class="project-cat-badge">DOĞAL DİL İŞLEME</span>
            </div>
            <h3 class="project-card-title">Comp2laintBox</h3>
            <p class="project-card-desc">
              <span class="lang-tr">Çok dilli müşteri geri bildirimlerini semantik olarak ayrıştıran, duygu analizi ve aciliyet derecelendirmesi yapan derin öğrenme tabanlı metin sınıflandırma hattı.</span>
              <span class="lang-en">Multilingual NLP transformer architecture categorizing unstructured customer feedback, performing sentiment intelligence and urgency grading.</span>
            </p>
            <div class="project-card-tags">
              <span class="project-tag">Python</span>
              <span class="project-tag">NLP / Transformers</span>
              <span class="project-tag">PyTorch</span>
              <span class="project-tag">Sentiment ML</span>
            </div>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">⭐ <span class="stat-stars" id="star-Comp2laintBox">0</span></span>
              <span class="project-stat-item">⑂ <span class="stat-forks" id="fork-Comp2laintBox">0</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik/Comp2laintBox" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span class="lang-tr">GitHub ↗</span><span class="lang-en">GitHub ↗</span>
            </a>
          </div>
        </article>

        <!-- Card 7: EmployeeLoss -->
        <article class="project-card" data-category="ai" data-repo="employeeloss" data-reveal>
          <div>
            <div class="project-card-header">
              <span class="project-cat-badge">MAKİNE ÖĞRENMESİ</span>
            </div>
            <h3 class="project-card-title">EmployeeLoss</h3>
            <p class="project-card-desc">
              <span class="lang-tr">Kurumsal insan kaynakları verileri üzerinden çalışan ayrılma riskini kestiren, SHAP analitiğiyle belirleyici faktörleri raporlayan tahminsel model.</span>
              <span class="lang-en">Predictive employee attrition forecasting system utilizing gradient boosting and SHAP explainability to pinpoint critical retention risk indicators.</span>
            </p>
            <div class="project-card-tags">
              <span class="project-tag">Python</span>
              <span class="project-tag">Scikit-Learn</span>
              <span class="project-tag">XGBoost</span>
              <span class="project-tag">SHAP Analytics</span>
            </div>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">⭐ <span class="stat-stars" id="star-EmployeeLoss">0</span></span>
              <span class="project-stat-item">⑂ <span class="stat-forks" id="fork-EmployeeLoss">0</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik/EmployeeLoss" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span class="lang-tr">GitHub ↗</span><span class="lang-en">GitHub ↗</span>
            </a>
          </div>
        </article>

        <!-- Card 8: SAWBLADES -->
        <article class="project-card" data-category="simulation" data-repo="sawblades" data-reveal>
          <div>
            <div class="project-card-header">
              <span class="project-cat-badge">FİZİK &amp; OYUN MOTORU</span>
            </div>
            <h3 class="project-card-title">SAWBLADES</h3>
            <p class="project-card-desc">
              <span class="lang-tr">Açısal momentum, elastik çarpışma tespiti ve parçacık dinamiği içeren, yüksek tempolu 2D fizik ve mekanik simülasyon motoru.</span>
              <span class="lang-en">Custom 2D physics and collision detection engine calculating rigid body dynamics, angular momentum, and kinematics under high-frequency updates.</span>
            </p>
            <div class="project-card-tags">
              <span class="project-tag">Physics Engine</span>
              <span class="project-tag">Kinematics</span>
              <span class="project-tag">2D Simulation</span>
              <span class="project-tag">Arcade Math</span>
            </div>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">⭐ <span class="stat-stars" id="star-SAWBLADES">0</span></span>
              <span class="project-stat-item">⑂ <span class="stat-forks" id="fork-SAWBLADES">0</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik/SAWBLADES" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span class="lang-tr">GitHub ↗</span><span class="lang-en">GitHub ↗</span>
            </a>
          </div>
        </article>

        <!-- Card 9: TurtleAimBot -->
        <article class="project-card" data-category="vision robotics" data-repo="turtleaimbot" data-reveal>
          <div>
            <div class="project-card-header">
              <span class="project-cat-badge">GÖRÜNTÜ İŞLEME &amp; GÜDÜM</span>
            </div>
            <h3 class="project-card-title">TurtleAimBot</h3>
            <p class="project-card-desc">
              <span class="lang-tr">Görsel hedef tespiti ve PID açı kestirimiyle hareketli hedeflere anlık kilitlenen otonom takip ve güdüm kontrolcüsü.</span>
              <span class="lang-en">Autonomous optical targeting and PID-driven proportional guidance system locking onto high-velocity dynamic targets in real-time.</span>
            </p>
            <div class="project-card-tags">
              <span class="project-tag">Computer Vision</span>
              <span class="project-tag">PID Guidance</span>
              <span class="project-tag">Target Tracking</span>
              <span class="project-tag">Python</span>
            </div>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">⭐ <span class="stat-stars" id="star-TurtleAimBot">0</span></span>
              <span class="project-stat-item">⑂ <span class="stat-forks" id="fork-TurtleAimBot">0</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik/TurtleAimBot" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span class="lang-tr">GitHub ↗</span><span class="lang-en">GitHub ↗</span>
            </a>
          </div>
        </article>

        <!-- Card 10: akilli-takvim -->
        <article class="project-card" data-category="ai" data-repo="akilli-takvim" data-reveal>
          <div>
            <div class="project-card-header">
              <span class="project-cat-badge">ALGORİTMA &amp; PLANLAMA</span>
            </div>
            <h3 class="project-card-title">akilli-takvim</h3>
            <p class="project-card-desc">
              <span class="lang-tr">Öncelik matrisleri, kısıt optimizasyonu ve sezgisel algoritmalarla kişisel ve ekip içi görev akışlarını organize eden akıllı planlama motoru.</span>
              <span class="lang-en">Algorithmic scheduling and constraint optimization engine intelligently balancing task priorities, deadlines, and resource bandwidth.</span>
            </p>
            <div class="project-card-tags">
              <span class="project-tag">Full-Stack</span>
              <span class="project-tag">Optimization</span>
              <span class="project-tag">Scheduling</span>
              <span class="project-tag">Algorithm Design</span>
            </div>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">⭐ <span class="stat-stars" id="star-akilli-takvim">0</span></span>
              <span class="project-stat-item">⑂ <span class="stat-forks" id="fork-akilli-takvim">0</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik/akilli-takvim" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span class="lang-tr">GitHub ↗</span><span class="lang-en">GitHub ↗</span>
            </a>
          </div>
        </article>

      </div>
      
      <div class="archive-cta-row" style="margin-top:2.5rem;" data-reveal>
        <a href="https://github.com/ozanardaozcelik?tab=repositories" target="_blank" rel="noopener noreferrer" class="archive-pill-btn">
          <span><span class="lang-tr">GitHub Profilindeki Tüm Depoları Aç</span><span class="lang-en">Explore All Repositories on GitHub</span></span>
          <span>↗</span>
        </a>
      </div>
    </section>

    <!-- [4] PROCESS (04) -->
    <section class="section" id="process" data-reveal>
      <div class="section-head">
        <h2 class="section-title">
          <span class="lang-tr">04 / Süreç &amp; Metodoloji</span>
          <span class="lang-en">04 / Process &amp; Methodology</span>
        </h2>
        <span class="section-folio">p. 078</span>
      </div>
      <div class="process-row">
        
        <div class="process-col" data-reveal>
          <div class="process-num">01</div>
          <div class="process-title">
            <span class="lang-tr">Telemetri &amp; Modelleme</span>
            <span class="lang-en">Telemetry &amp; Formulation</span>
          </div>
          <p class="process-body">
            <span class="lang-tr">Fiziksel uçuş parametrelerinin, hedef yakalama geometrilerinin ve sıfır hata toleranslarının matematiksel modellenmesi.</span>
            <span class="lang-en">Mathematical modeling of physical flight parameters, target acquisition geometries, and zero-defect defect tolerances before writing runtime code.</span>
          </p>
        </div>

        <div class="process-col" data-reveal>
          <div class="process-num">02</div>
          <div class="process-title">
            <span class="lang-tr">Sentetik Sim &amp; Gazebo</span>
            <span class="lang-en">Synthetic Sim &amp; Gazebo</span>
          </div>
          <p class="process-body">
            <span class="lang-tr">Aerodinamik kontrol döngülerinin ve kamera beslemelerinin 250+ saatlik Gazebo ve SITL sanal ortamlarında doğrulanması.</span>
            <span class="lang-en">Validating aerodynamic control loops and camera sensor feeds inside 250+ hours of Gazebo simulation and SITL virtual flight environments.</span>
          </p>
        </div>

        <div class="process-col" data-reveal>
          <div class="process-num">03</div>
          <div class="process-title">
            <span class="lang-tr">Nöral Uç Optimizasyonu</span>
            <span class="lang-en">Neural Edge Optimization</span>
          </div>
          <p class="process-body">
            <span class="lang-tr">PyTorch ve YOLO ağırlıklarının NVIDIA Jetson üzerinde 15ms altı çalışan FP16/INT8 TensorRT motorlarına kuantize edilmesi.</span>
            <span class="lang-en">Quantizing PyTorch and YOLO weights into FP16/INT8 TensorRT engines running sub-15ms inference loops on onboard NVIDIA Jetson platforms.</span>
          </p>
        </div>

        <div class="process-col" data-reveal>
          <div class="process-num">04</div>
          <div class="process-title">
            <span class="lang-tr">Sahada Uçuş Dağıtımı</span>
            <span class="lang-en">Field Flight Deployment</span>
          </div>
          <p class="process-body">
            <span class="lang-tr">TEKNOFEST yarışma şartlarında sahada icra: telemetri kilitlenmesi, otonom kalkış, hedef angajmanı ve kamikaze dalışı.</span>
            <span class="lang-en">Field execution under TEKNOFEST competition conditions: telemetry link lock, autonomous takeoff, target engagement, and precision kamikaze dive.</span>
          </p>
        </div>

      </div>
    </section>

    <!-- [5] EXPERIMENTS / ARCHIVE (05) -->
    <section class="section" id="archive" data-reveal>
      <div class="section-head">
        <h2 class="section-title">
          <span class="lang-tr">05 / Arşiv &amp; Deneyler</span>
          <span class="lang-en">05 / Archive &amp; Experiments</span>
        </h2>
        <span class="section-folio">p. 090</span>
      </div>
      <div class="archive-grid">
        
        <figure class="archive-figure" data-reveal>
          <div class="archive-specimen" data-pattern="lines"></div>
          <figcaption class="archive-caption">
            <span>Study #001</span>
            <span><span class="lang-tr">Güdüm / Yörünge</span><span class="lang-en">Guidance / Trajectory</span></span>
          </figcaption>
        </figure>

        <figure class="archive-figure" data-reveal>
          <div class="archive-specimen" data-pattern="rings"></div>
          <figcaption class="archive-caption">
            <span>Study #002</span>
            <span>PatchCore Latent</span>
          </figcaption>
        </figure>

        <figure class="archive-figure" data-reveal>
          <div class="archive-specimen" data-pattern="grid"></div>
          <figcaption class="archive-caption">
            <span>Study #003</span>
            <span><span class="lang-tr">Koordinat Uzayı</span><span class="lang-en">Coordinate Space</span></span>
          </figcaption>
        </figure>

        <figure class="archive-figure" data-reveal>
          <div class="archive-specimen" data-pattern="waves"></div>
          <figcaption class="archive-caption">
            <span>Study #004</span>
            <span><span class="lang-tr">Akustik Dalga Alanı</span><span class="lang-en">Acoustic Wavefield</span></span>
          </figcaption>
        </figure>

        <figure class="archive-figure" data-reveal>
          <div class="archive-specimen" data-pattern="diag"></div>
          <figcaption class="archive-caption">
            <span>Study #005</span>
            <span><span class="lang-tr">Oransal Vektör</span><span class="lang-en">Proportional Vector</span></span>
          </figcaption>
        </figure>

        <figure class="archive-figure" data-reveal>
          <div class="archive-specimen" data-pattern="dots"></div>
          <figcaption class="archive-caption">
            <span>Study #006</span>
            <span><span class="lang-tr">Nokta Bulutu Yoğunluğu</span><span class="lang-en">Point Cloud Density</span></span>
          </figcaption>
        </figure>

      </div>
      <div class="archive-cta-row" data-reveal>
        <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="archive-pill-btn">
          <span><span class="lang-tr">Tüm arşivi aç</span><span class="lang-en">Open full archive</span></span>
          <span>↗</span>
        </a>
      </div>
    </section>

    <!-- [6] CTA (06) — DARK SECTION -->
    <section class="section section-dark" id="contact" data-reveal>
      <div class="section-head" style="border-bottom-color: var(--rule-light);">
        <h2 class="section-title" style="color: #fff;">
          <span class="lang-tr">06 / İletişim</span>
          <span class="lang-en">06 / Commission</span>
        </h2>
        <span class="section-folio" style="color: var(--dim);">p. 102</span>
      </div>
      <div class="cta-wrap">
        <h2 class="cta-heading">
          <span><span class="lang-tr">GELECEĞİN</span><span class="lang-en">PIONEER</span></span>
          <span class="italic-whisper"><span class="lang-tr">otonom uçuş</span><span class="lang-en">the next autonomous</span></span>
          <span><span class="lang-tr">SİSTEMİNİ KURUN.</span><span class="lang-en">SYSTEM.</span></span>
        </h2>
        <p class="cta-sub">
          <span class="lang-tr">Otonom hava robotiği araştırmaları, bilgisayarlı görü mühendisliği ve derin öğrenme teknik iş birlikleri için doğrudan iletişime geçebilirsiniz.</span>
          <span class="lang-en">Available for autonomous aerial robotics research, computer vision engineering, and deep learning technical collaborations.</span>
        </p>
        <a href="mailto:ozan.a.ozcelik@gmail.com" class="cta-pill-button">
          <span><span class="lang-tr">İletişime Geç</span><span class="lang-en">Initiate Commission</span></span>
          <span class="cta-glyph">→</span>
        </a>
        <div class="cta-meta-row">
          <span>EMAIL // <a href="mailto:ozan.a.ozcelik@gmail.com">ozan.a.ozcelik@gmail.com</a></span>
          <span><span class="lang-tr">KONUM // PENDİK, İSTANBUL &amp; ÇORLU, TR</span><span class="lang-en">BASE // PENDIK, ISTANBUL &amp; ÇORLU, TR</span></span>
          <span>TEL // +90 537 614 41 56</span>
        </div>
      </div>
    </section>

  </main>

  <!-- [7] FOOTER — DARK SECTION -->
  <footer class="site-footer">
    <div class="footer-top-row">
      <div class="footer-brand">OZAN ARDA ÖZÇELİK</div>
      <div class="footer-tagline">
        <span class="lang-tr">İnsan formu / Makine mantığı</span>
        <span class="lang-en">Human form / Machine logic</span>
      </div>
    </div>
    <div class="footer-middle-grid">
      <div>
        <div class="footer-col-label"><span class="lang-tr">Dizin</span><span class="lang-en">Index</span></div>
        <ul class="footer-links">
          <li><a href="#heroScrollFlow" onclick="window.__scrollToStory &amp;&amp; window.__scrollToStory()"><span class="lang-tr">01 Hikayem (Eskiz Defteri)</span><span class="lang-en">01 My Story (Sketchbook)</span></a></li>
          <li><a href="#heroScrollFlow" onclick="window.__scrollToShelf &amp;&amp; window.__scrollToShelf()"><span class="lang-tr">02 Yeteneklerim (Kitaplık)</span><span class="lang-en">02 Capabilities (Shelf)</span></a></li>
          <li><a href="#projects-section"><span class="lang-tr">03 Projelerim (GitHub)</span><span class="lang-en">03 Projects (GitHub)</span></a></li>
          <li><a href="#capabilities"><span class="lang-tr">04 Yetkinlik Matrisi</span><span class="lang-en">04 Skills Matrix</span></a></li>
          <li><a href="#process"><span class="lang-tr">05 Süreç &amp; Metodoloji</span><span class="lang-en">05 Process</span></a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-label"><span class="lang-tr">Kanallar</span><span class="lang-en">Channels</span></div>
        <ul class="footer-links">
          <li><a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
          <li><a href="https://linkedin.com/in/ozanardaozcelik" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
          <li><a href="OzanArdaOZCELIK_CV.pdf" download="OzanArdaOZCELIK_CV.pdf"><span class="lang-tr">CV İndir (PDF) ↓</span><span class="lang-en">CV Download (PDF) ↓</span></a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-label"><span class="lang-tr">İletişim</span><span class="lang-en">Contact</span></div>
        <ul class="footer-links">
          <li><a href="mailto:ozan.a.ozcelik@gmail.com">ozan.a.ozcelik@gmail.com</a></li>
          <li><a href="tel:+905376144156">+90 537 614 41 56</a></li>
          <li><span>İstanbul &amp; Tekirdağ, TR</span></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-label"><span class="lang-tr">Künye No.</span><span class="lang-en">Index No.</span></div>
        <ul class="footer-links">
          <li><span>VOL. 2026 // BUILD 4.5</span></li>
          <li><span><span class="lang-tr">SİHA YAZILIM LİDERİ</span><span class="lang-en">SİHA SOFTWARE LEAD</span></span></li>
          <li><span>SYS.NOMINAL</span></li>
        </ul>
      </div>
    </div>
    <div class="footer-lockup-row">
      <div class="footer-giant-brand">OZAN ARDA</div>
    </div>
  </footer>

  <!-- Three.js ESM Application Entry -->
  <script type="module" src="/script.js"></script>

  <!-- UNIFIED MASTER INTERACTIVE SCRIPT -->
  <script>
    (function () {
      'use strict';

      // 1. Language Toggle Logic
      const langBtn = document.getElementById('lang-toggle-btn');
      let currentLang = localStorage.getItem('site_lang') || 'tr';

      const shelfIframe = document.getElementById('shelf-interactive-frame');
      const sbIframe = document.getElementById('sketchbook-interactive-frame');

      function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        localStorage.setItem('site_lang', lang);

        // Sync with both 3D iframes if loaded
        [shelfIframe, sbIframe].forEach(iframe => {
          if (iframe && iframe.contentWindow) {
            try {
              iframe.contentWindow.postMessage({ type: 'SET_LANG', lang: lang }, '*');
            } catch (e) {}
          }
        });
      }

      setLanguage(currentLang);

      [shelfIframe, sbIframe].forEach(iframe => {
        if (iframe) {
          iframe.addEventListener('load', () => {
            if (iframe.contentWindow) {
              try {
                iframe.contentWindow.postMessage({ type: 'SET_LANG', lang: currentLang }, '*');
              } catch (e) {}
            }
          });
        }
      });

      if (langBtn) {
        langBtn.addEventListener('click', () => {
          setLanguage(currentLang === 'tr' ? 'en' : 'tr');
        });
      }

      // Listen for language changes initiated from inside either iframe
      window.addEventListener('message', (e) => {
        if (e.data && e.data.type === 'SET_LANG' && (e.data.lang === 'tr' || e.data.lang === 'en')) {
          if (currentLang !== e.data.lang) {
            setLanguage(e.data.lang);
          }
        }
      });

      // 2. Pure Scroll-Driven Book Closing & Shelf Docking Effect (Zero buttons!)
      const flowContainer = document.getElementById('heroScrollFlow');
      const flowStoryLayer = document.getElementById('flowStoryLayer');
      const flowShelfLayer = document.getElementById('flowShelfLayer');
      const flow3dBookLayer = document.getElementById('flow3dBookLayer');
      const sdbWingRight = document.getElementById('sdbWingRight');
      const scrollDockBook = document.getElementById('scrollDockBook');

      const btnNavStory = document.getElementById('btnNavStory');
      const btnNavSkills = document.getElementById('btnNavSkills');
      const btnNavProjects = document.getElementById('btnNavProjects');
      const projectsSec = document.getElementById('projects-section');

      function onScrollHeroFlow() {
        if (!flowContainer || !scrollDockBook || !sdbWingRight) return;

        const rect = flowContainer.getBoundingClientRect();
        const winH = window.innerHeight;
        const totalTravel = flowContainer.offsetHeight - winH;

        if (totalTravel <= 0) return;

        // Progress p from 0 (at very top) to 1 (scroll past flow)
        let p = -rect.top / totalTravel;
        p = Math.max(0, Math.min(1, p));

        // State A: At the top (01 Hikayem open sketchbook active)
        if (p <= 0.015) {
          if (flowStoryLayer) {
            flowStoryLayer.style.opacity = '1';
            flowStoryLayer.style.pointerEvents = 'auto';
          }
          if (flow3dBookLayer) flow3dBookLayer.style.opacity = '0';
          if (flowShelfLayer) {
            flowShelfLayer.style.opacity = '0';
            flowShelfLayer.style.pointerEvents = 'none';
          }
          sdbWingRight.style.transform = 'rotateY(0deg)';
          scrollDockBook.style.transform = 'translateY(0px) scale(1) rotateY(0deg) rotateX(0deg)';
        } 
        // State B: At the bottom of flow (02 Yeteneklerim shelf active & docked)
        else if (p >= 0.95) {
          if (flowStoryLayer) {
            flowStoryLayer.style.opacity = '0';
            flowStoryLayer.style.pointerEvents = 'none';
          }
          if (flow3dBookLayer) flow3dBookLayer.style.opacity = '0';
          if (flowShelfLayer) {
            flowShelfLayer.style.opacity = '1';
            flowShelfLayer.style.pointerEvents = 'auto';
          }
        } 
        // State C: Transitioning (Scroll drives cover closing, zoom out & docking!)
        else {
          if (flowStoryLayer) {
            flowStoryLayer.style.opacity = '0';
            flowStoryLayer.style.pointerEvents = 'none';
          }
          if (flow3dBookLayer) flow3dBookLayer.style.opacity = '1';

          // 1. Cover folds shut (p: 0.02 -> 0.36)
          const foldP = Math.min(1, Math.max(0, (p - 0.02) / 0.34));
          const rightDeg = -foldP * 180;
          sdbWingRight.style.transform = 'rotateY(' + rightDeg.toFixed(2) + 'deg)';

          // 2. Zoom out in 3D perspective and glide down towards shelf slot (p: 0.30 -> 0.92)
          const zoomP = Math.min(1, Math.max(0, (p - 0.30) / 0.62));
          const scale = 1 - zoomP * 0.77; // 1.0 down to 0.23
          const translateY = zoomP * 150; // translates down
          const rotateY = zoomP * 16;
          const rotateX = zoomP * 8;

          scrollDockBook.style.transform =
            'translateY(' + translateY.toFixed(1) + 'px) ' +
            'scale(' + scale.toFixed(3) + ') ' +
            'rotateY(' + rotateY.toFixed(1) + 'deg) ' +
            'rotateX(' + rotateX.toFixed(1) + 'deg)';

          // 3. Background shelf fades in
          if (flowShelfLayer) {
            const shelfFade = Math.min(1, Math.max(0, (p - 0.28) / 0.55));
            flowShelfLayer.style.opacity = shelfFade.toFixed(3);
            flowShelfLayer.style.pointerEvents = p >= 0.90 ? 'auto' : 'none';
          }
        }

        // 3. Navigation Switcher Tab Tracking:
        // "hikayem kitabı açıldığında üst sekmeye kayacak"
        // When at top (p < 0.45) -> 01 Hikayem
        // When scrolled down (p >= 0.45) -> 02 Yeteneklerim
        // When scrolled to projects -> 03 Projelerim
        const scrollY = window.scrollY;
        const projectsTop = projectsSec ? projectsSec.offsetTop - winH * 0.4 : 999999;

        [btnNavStory, btnNavSkills, btnNavProjects].forEach(b => b && b.classList.remove('is-active'));

        if (scrollY >= projectsTop) {
          if (btnNavProjects) btnNavProjects.classList.add('is-active');
        } else if (p >= 0.45) {
          if (btnNavSkills) btnNavSkills.classList.add('is-active');
        } else {
          if (btnNavStory) btnNavStory.classList.add('is-active');
        }
      }

      window.addEventListener('scroll', onScrollHeroFlow, { passive: true });
      window.addEventListener('resize', onScrollHeroFlow, { passive: true });
      onScrollHeroFlow();

      // Smooth scroll navigation tab clicks
      function scrollToStory() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      function scrollToShelf() {
        if (flowContainer) {
          const targetY = flowContainer.offsetTop + flowContainer.offsetHeight - window.innerHeight;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }
      window.__scrollToStory = scrollToStory;
      window.__scrollToShelf = scrollToShelf;

      if (btnNavStory) {
        btnNavStory.addEventListener('click', (e) => {
          e.preventDefault();
          scrollToStory();
        });
      }

      if (btnNavSkills) {
        btnNavSkills.addEventListener('click', (e) => {
          e.preventDefault();
          scrollToShelf();
        });
      }

      if (btnNavProjects) {
        btnNavProjects.addEventListener('click', (e) => {
          e.preventDefault();
          if (projectsSec) projectsSec.scrollIntoView({ behavior: 'smooth' });
        });
      }

      const menuLinkStory = document.getElementById('menu-link-story');
      const menuLinkSkills = document.getElementById('menu-link-skills');
      const menuLinkProjects = document.getElementById('menu-link-projects');

      if (menuLinkStory) {
        menuLinkStory.addEventListener('click', (e) => {
          e.preventDefault();
          scrollToStory();
        });
      }
      if (menuLinkSkills) {
        menuLinkSkills.addEventListener('click', (e) => {
          e.preventDefault();
          scrollToShelf();
        });
      }
      if (menuLinkProjects) {
        menuLinkProjects.addEventListener('click', (e) => {
          e.preventDefault();
          if (projectsSec) projectsSec.scrollIntoView({ behavior: 'smooth' });
        });
      }

      // 4. Slide-Down Menu Logic
      const menuBtn = document.getElementById('menu-toggle-btn');
      const menuPanel = document.getElementById('site-menu-panel');

      function toggleMenu(open) {
        const isCurrentlyOpen = menuBtn.getAttribute('aria-expanded') === 'true';
        const targetState = typeof open === 'boolean' ? open : !isCurrentlyOpen;

        menuBtn.setAttribute('aria-expanded', String(targetState));
        menuPanel.setAttribute('aria-hidden', String(!targetState));

        if (targetState) {
          menuPanel.classList.add('is-open');
          document.documentElement.classList.add('menu-open');
        } else {
          menuPanel.classList.remove('is-open');
          document.documentElement.classList.remove('menu-open');
        }
      }

      if (menuBtn && menuPanel) {
        menuBtn.addEventListener('click', () => toggleMenu());

        window.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
            toggleMenu(false);
          }
        });

        menuPanel.querySelectorAll('.menu-nav-link').forEach((link) => {
          link.addEventListener('click', () => {
            toggleMenu(false);
          });
        });
      }

      // 5. Projects Category Filtering
      const filterBtns = document.querySelectorAll('.project-filter-btn');
      const projectCards = document.querySelectorAll('.project-card');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');

          const filter = btn.getAttribute('data-filter');

          projectCards.forEach(card => {
            const cats = (card.getAttribute('data-category') || '').split(' ');
            if (filter === 'all' || cats.includes(filter)) {
              card.style.display = 'flex';
              card.style.opacity = '1';
            } else {
              card.style.display = 'none';
              card.style.opacity = '0';
            }
          });
        });
      });

      // 6. Live GitHub Repositories Hydration (github.com/ozanardaozcelik)
      async function hydrateGitHubData() {
        try {
          const res = await fetch('https://api.github.com/users/ozanardaozcelik/repos?per_page=100');
          if (!res.ok) return;
          const repos = await res.json();

          repos.forEach(repo => {
            const name = repo.name;
            const starEl = document.getElementById('star-' + name);
            const forkEl = document.getElementById('fork-' + name);

            if (starEl) starEl.textContent = repo.stargazers_count;
            if (forkEl) forkEl.textContent = repo.forks_count;
          });
        } catch (e) {
          // Gracefully keep fallback defaults
        }
      }

      hydrateGitHubData();

      // 7. IntersectionObserver for [data-reveal]
      const revealTargets = document.querySelectorAll('[data-reveal]');
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReduced) {
        revealTargets.forEach((el) => el.classList.add('is-visible'));
      } else if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              obs.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.10,
          rootMargin: '0px 0px -6% 0px'
        });

        revealTargets.forEach((el) => observer.observe(el));
      } else {
        revealTargets.forEach((el) => el.classList.add('is-visible'));
      }
    })();
  </script>
</body>
</html>
`;

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully written pure scroll-flow index.html! Bytes:', html.length);
