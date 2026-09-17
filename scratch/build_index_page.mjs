import fs from 'fs';

const html = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OZAN ARDA — Otonom Sistemler &amp; Makine Mantığı</title>
  <meta name="description" content="Ozan Arda Özçelik Portfolyosu — Şahi Otonom SİHA Takımı Yazılım Ekip Lideri, Bilgisayarlı Görü, Robotik &amp; Yapay Zeka Mühendisi." />
  <link rel="icon" type="image/svg+xml" href="favicon.svg" />

  <!-- Google Fonts: Righteous (Display) & DM Mono (Mono) & Chakra Petch -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Righteous&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="/styles.css" />
</head>
<body>

  <!-- FIXED TOPOGRAPHIC CONTOUR SVG -->
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
  </svg>

  <!-- NAVIGATION BAR: 5-SECTION SWITCHER -->
  <nav class="site-nav" aria-label="Main Navigation">
    <a href="#heroHome" class="nav-brand" onclick="window.__scrollToHome &amp;&amp; window.__scrollToHome(); return false;">OZAN ARDA</a>

    <!-- 5-PILL VIEW SELECTOR -->
    <div class="nav-view-switcher" id="sectionNavSwitcher">
      <button type="button" class="view-switch-pill is-active" id="btnNavHome" title="01 Ana Sayfa">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">01 Ana Sayfa</span><span class="lang-en">01 Home</span></span>
      </button>
      <button type="button" class="view-switch-pill" id="btnNavStory" title="02 Hikayem (3D Eskiz Defteri)">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">02 Hikayem</span><span class="lang-en">02 Story</span></span>
      </button>
      <button type="button" class="view-switch-pill" id="btnNavSkills" title="03 Yeteneklerim (3D Kitaplık)">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">03 Yeteneklerim</span><span class="lang-en">03 Capabilities</span></span>
      </button>
      <button type="button" class="view-switch-pill" id="btnNavProjects" title="04 Projelerim (GitHub &amp; Ar-Ge)">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">04 Projelerim</span><span class="lang-en">04 Projects</span></span>
      </button>
      <button type="button" class="view-switch-pill" id="btnNavContact" title="05 İletişim">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">05 İletişim</span><span class="lang-en">05 Contact</span></span>
      </button>
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

  <!-- SLIDE-DOWN FULLSCREEN MENU PANEL (5 SECTIONS) -->
  <div class="site-menu" id="site-menu-panel" aria-hidden="true">
    <ul class="menu-nav-list">
      <li class="menu-nav-item">
        <a href="#heroHome" class="menu-nav-link" id="menu-link-home">
          <span class="menu-num">01</span>
          <span><span class="lang-tr">01 / Ana Sayfa (Portre &amp; Otonom Robotik)</span><span class="lang-en">01 / Home (Portrait &amp; Robotics)</span></span>
        </a>
      </li>
      <li class="menu-nav-item">
        <a href="#heroScrollFlow" class="menu-nav-link" id="menu-link-story">
          <span class="menu-num">02</span>
          <span><span class="lang-tr">02 / Hikayem (3D Eskiz Defteri)</span><span class="lang-en">02 / My Story (3D Sketchbook)</span></span>
        </a>
      </li>
      <li class="menu-nav-item">
        <a href="#heroScrollFlow" class="menu-nav-link" id="menu-link-skills">
          <span class="menu-num">03</span>
          <span><span class="lang-tr">03 / Yeteneklerim (3D Kitaplık)</span><span class="lang-en">03 / Capabilities (3D Shelf)</span></span>
        </a>
      </li>
      <li class="menu-nav-item">
        <a href="#projects-section" class="menu-nav-link" id="menu-link-projects">
          <span class="menu-num">04</span>
          <span><span class="lang-tr">04 / Projelerim (GitHub &amp; Ar-Ge)</span><span class="lang-en">04 / Projects (GitHub &amp; R&amp;D)</span></span>
        </a>
      </li>
      <li class="menu-nav-item">
        <a href="#contact" class="menu-nav-link" id="menu-link-contact">
          <span class="menu-num">05</span>
          <span><span class="lang-tr">05 / İletişim &amp; Görev Talebi</span><span class="lang-en">05 / Commission &amp; Contact</span></span>
        </a>
      </li>
    </ul>
  </div>

  <!-- =========================================================================
       01 ANA SAYFA: INTERACTIVE FLUID PORTRAIT & ROBOT REVEAL HERO
       ========================================================================= -->
  <section class="hero-home" id="heroHome">
    <!-- WebGL Fluid Canvas Background (reveals robot on mouse movement) -->
    <div class="hero-home-canvas-wrap">
      <canvas id="hero-fluid-canvas"></canvas>
    </div>

    <!-- Editorial Foreground Overlay -->
    <div class="hero-home-overlay">
      <div class="hero-home-container">
        <div class="hero-home-left">
          <div class="hero-home-badge">
            <span class="dot-live"></span>
            <span class="lang-tr">ÇEVRİMİÇİ // SİHA YAZILIM EKİP LİDERİ</span>
            <span class="lang-en">ONLINE // AUTONOMOUS UAV SOFTWARE LEAD</span>
          </div>

          <h1 class="hero-home-title">
            <span>OZAN ARDA</span>
            <span class="title-outline">ÖZÇELİK<em>.</em></span>
          </h1>

          <p class="hero-home-desc">
            <span class="lang-tr">Şahi Otonom SİHA Takımı Yazılım Lideri · Bilgisayarlı Görü, Endüstriyel Robotik (ROS 2 &amp; Gazebo) ve Derin Öğrenme Sistemleri.</span>
            <span class="lang-en">Autonomous UAV Software Lead · Computer Vision, Industrial Robotics (ROS 2 &amp; Gazebo) and Deep Learning Architectures.</span>
          </p>

          <div class="hero-home-specs">
            <div class="spec-card">
              <span class="spec-label"><span class="lang-tr">GÖREV</span><span class="lang-en">ROLE</span></span>
              <span class="spec-val"><span class="lang-tr">Yazılım Ekip Lideri</span><span class="lang-en">Software Team Lead</span></span>
            </div>
            <div class="spec-card">
              <span class="spec-label"><span class="lang-tr">TAKIM</span><span class="lang-en">TEAM</span></span>
              <span class="spec-val">Şahi SİHA (Teknofest)</span>
            </div>
            <div class="spec-card">
              <span class="spec-label"><span class="lang-tr">ODAK</span><span class="lang-en">FOCUS</span></span>
              <span class="spec-val">CV · ROS 2 · Gazebo · AI</span>
            </div>
          </div>

          <div class="hero-home-actions">
            <button type="button" class="hero-cta-btn" id="btnExploreStory">
              <span><span class="lang-tr">02 / HİKAYEMİ AÇ</span><span class="lang-en">02 / OPEN MY STORY</span></span>
              <span class="hero-cta-arrow">↓</span>
            </button>
            <span class="hero-interactive-hint">
              <span class="lang-tr">✦ Portre üzerinde mouse'u gezdirerek makine mantığını keşfedin</span>
              <span class="lang-en">✦ Hover over portrait to reveal robotic machine logic</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- =========================================================================
       02 HİKAYEM (3D ESKİZ DEFTERİ) -> COMFORTABLE BUFFER -> 3D FOLD -> 03 YETENEKLERİM (3D KİTAPLIK)
       ========================================================================= -->
  <div class="hero-scroll-flow" id="heroScrollFlow">
    <div class="hero-sticky-viewport" id="heroStickyViewport">
      
      <!-- LAYER 1: 03 YETENEKLERİM 3D SHELF IFRAME (Lazy loaded for instant page load) -->
      <div class="flow-layer flow-shelf-layer" id="flowShelfLayer" style="visibility: hidden; opacity: 0;">
        <iframe
          id="shelf-interactive-frame"
          class="flow-iframe"
          data-src="/landing-pages/skills-shelf.html"
          src="about:blank"
          title="Ozan Arda Özçelik — 03 Yeteneklerim &amp; Çalışma Kitaplığı"
          sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
          loading="lazy"
          allow="fullscreen"
        ></iframe>
      </div>

      <!-- LAYER 2: 3D DOCKING BOOK (Authentic 3D folding & gliding on warm paper background) -->
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

      <!-- LAYER 3: 02 HİKAYEM (ORIGINAL 3D MENG-TO SKETCHBOOK) -->
      <div class="flow-layer flow-story-layer" id="flowStoryLayer">
        <iframe
          id="sketchbook-interactive-frame"
          class="flow-iframe"
          src="/landing-pages/meng-to-sketchbook.html"
          title="Ozan Arda Özçelik — 02 Hikayem (3D Dokunsal Eskiz Defteri)"
          sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
          loading="lazy"
          allow="fullscreen"
        ></iframe>
      </div>

    </div>
  </div>

  <!-- MAIN CONTENT -->
  <main class="main">

    <!-- [0] MARQUEE STRIP -->
    <div class="marquee-wrapper" aria-hidden="true">
      <div class="marquee-track">
        <div class="marquee-content">
          <span>OZAN ARDA ÖZÇELİK</span>
          <span class="marquee-bullet">•</span>
          <span><span class="lang-tr">BİLGİSAYAR MÜHENDİSİ</span><span class="lang-en">COMPUTER ENGINEER</span></span>
          <span class="marquee-bullet">•</span>
          <span>PORTFOLIO 2025 / 2026</span>
          <span class="marquee-bullet">•</span>
          <span><span class="lang-tr">İNSAN FORMU — MAKİNE MANTIĞI</span><span class="lang-en">HUMAN FORM — MACHINE LOGIC</span></span>
          <span class="marquee-bullet">•</span>
          <span>AUTONOMOUS UAV SOFTWARE LEAD</span>
          <span class="marquee-bullet">•</span>
          <span>COMPUTER VISION (OPENCV, YOLO)</span>
          <span class="marquee-bullet">•</span>
          <span>ROS 2 &amp; GAZEBO HARMONIC</span>
          <span class="marquee-bullet">•</span>
          <span>ENTERPRISE MULTI-AGENT AI</span>
          <span class="marquee-bullet">•</span>
        </div>
      </div>
    </div>

    <!-- [04] 04 PROJELERİM & GITHUB SHOWCASE -->
    <section class="section projects-section" id="projects-section" data-reveal>
      <div class="section-head">
        <div>
          <span class="section-folio"><span class="lang-tr">04 / KOD &amp; AR-GE ARŞİVİ</span><span class="lang-en">04 / CODE &amp; R&amp;D REPOSITORY</span></span>
          <h2 class="section-title"><span class="lang-tr">PROJELERİM</span><span class="lang-en">PROJECTS</span></h2>
        </div>
        <div class="section-badge">
          <span class="dot-live"></span>
          <span><span class="lang-tr">Canlı GitHub &amp; Açık Kaynak</span><span class="lang-en">Live GitHub &amp; Open Source</span></span>
        </div>
      </div>

      <!-- 3D CYLINDRICAL ORBITAL PROJECT GALLERY (ThreeUI Gallery Architecture) -->
      <div class="shader-frame gallery-shader-frame" id="projectsGalleryFrame">
        <div class="threeui-background gallery" data-mode="light" role="img" aria-label="Rotating cylindrical image gallery">
          <canvas id="gallery-3d-canvas" class="gallery__canvas" aria-hidden="true"></canvas>
        </div>

        <!-- Interactive HUD Overlay -->
        <div class="gallery-hud-overlay">
          <div class="gallery-hud-header">
            <div class="gallery-hud-badge">
              <span class="dot-live"></span>
              <span class="lang-tr">3D PROJE ŞERİDİ // CANLI GITHUB</span>
              <span class="lang-en">3D PROJECT RIBBON // LIVE GITHUB</span>
            </div>
            <div class="gallery-hud-hint">
              <span class="lang-tr">✦ Panelleri döndürmek için sürükleyin · Projeyi açmak için tıklayın</span>
              <span class="lang-en">✦ Drag to orbit panels · Click any panel to view project</span>
            </div>
          </div>

          <!-- Active Project Spotlight Card on Hover -->
          <div class="gallery-spotlight-card" id="gallerySpotlightCard">
            <div class="gsc-header">
              <span class="gsc-tag" id="gscTag">TEKNOFEST</span>
              <span class="gsc-stars" id="gscStars">★ 18  ⑂ 6</span>
            </div>
            <h4 class="gsc-title" id="gscTitle">Şahi Otonom Savaşan SİHA</h4>
            <p class="gsc-desc" id="gscDesc">YOLOv8 + ByteTrack + Kalman filtreleme ile 120 FPS gerçek zamanlı hava hedef takibi ve MAVLink otonom güdüm.</p>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="gsc-link" id="gscLink">
              <span>GitHub'da İncele</span> ↗
            </a>
          </div>

          <!-- Bottom Speed & Orbit Controls -->
          <div class="gallery-hud-controls">
            <button type="button" class="gallery-ctrl-btn is-active" id="btnGalleryAuto" title="Otomatik Akış / Auto Flow">
              <span><span class="lang-tr">Otomatik Akış</span><span class="lang-en">Auto Flow</span></span>
            </button>
            <button type="button" class="gallery-ctrl-btn" id="btnGallerySpeed" title="Hız / Speed">
              <span><span class="lang-tr">Hız: 1.0x</span><span class="lang-en">Speed: 1.0x</span></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Filter Row -->
      <div class="projects-filter-row">
        <button class="project-filter-btn is-active" data-filter="all"><span class="lang-tr">TÜMÜ (12)</span><span class="lang-en">ALL (12)</span></button>
        <button class="project-filter-btn" data-filter="uav"><span class="lang-tr">OTONOM SİHA / UAV</span><span class="lang-en">AUTONOMOUS UAV</span></button>
        <button class="project-filter-btn" data-filter="vision"><span class="lang-tr">BİLGİSAYARLI GÖRÜ</span><span class="lang-en">COMPUTER VISION</span></button>
        <button class="project-filter-btn" data-filter="robotics"><span class="lang-tr">ROBOTİK &amp; ROS 2</span><span class="lang-en">ROBOTICS &amp; ROS 2</span></button>
        <button class="project-filter-btn" data-filter="ai"><span class="lang-tr">YAPAY ZEKA &amp; DERİN ÖĞRENME</span><span class="lang-en">AI &amp; DEEP LEARNING</span></button>
        <button class="project-filter-btn" data-filter="embedded"><span class="lang-tr">GÖMÜLÜ SİSTEMLER</span><span class="lang-en">EMBEDDED SYSTEMS</span></button>
      </div>

      <div class="projects-grid" id="projectsGrid">
        
        <!-- Project 1: Flagship Sahi SİHA -->
        <article class="project-card is-flagship" data-category="uav vision ai">
          <div class="project-card-header">
            <span class="project-cat-badge">TEKNOFEST // SAVAŞAN İHA</span>
            <span class="project-flagship-tag">★ FLAGSHIP</span>
          </div>
          <h3 class="project-card-title">Şahi Otonom Savaşan SİHA Yazılımı</h3>
          <p class="project-card-desc">
            <span class="lang-tr">YOLOv8 + ByteTrack + Kalman filtreleme ile 120 FPS gerçek zamanlı hava hedef takibi ve MAVLink otonom itki/kilitlenme yönlendirmesi.</span>
            <span class="lang-en">120 FPS real-time aerial target tracking using YOLOv8 + ByteTrack + Kalman filtering, integrated with MAVLink guidance.</span>
          </p>
          <div class="project-card-tags">
            <span class="project-tag">YOLOv8</span>
            <span class="project-tag">ByteTrack</span>
            <span class="project-tag">Kalman Filter</span>
            <span class="project-tag">MAVLink</span>
            <span class="project-tag">C++ / Python</span>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">★ <span id="star-Sahi-Otonom-Savasan-IHA">18</span></span>
              <span class="project-stat-item">⑂ <span id="fork-Sahi-Otonom-Savasan-IHA">6</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub</span> ↗
            </a>
          </div>
        </article>

        <!-- Project 2: ISEE Vision -->
        <article class="project-card is-flagship" data-category="vision ai">
          <div class="project-card-header">
            <span class="project-cat-badge">ENDÜSTRİYEL AR-GE</span>
            <span class="project-flagship-tag">★ FLAGSHIP</span>
          </div>
          <h3 class="project-card-title">Çözüm Makina: ISEE Vision</h3>
          <p class="project-card-desc">
            <span class="lang-tr">Endüstriyel üretim hatları için mikron hassasiyetinde optik kalite kontrol ve yüzey hata tespit mimarisi.</span>
            <span class="lang-en">Industrial zero-defect optical quality inspection and high-speed surface defect detection pipeline.</span>
          </p>
          <div class="project-card-tags">
            <span class="project-tag">OpenCV</span>
            <span class="project-tag">CUDA</span>
            <span class="project-tag">Industrial CV</span>
            <span class="project-tag">C++</span>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">★ <span id="star-ISEE-Vision-Core">14</span></span>
              <span class="project-stat-item">⑂ <span id="fork-ISEE-Vision-Core">4</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub</span> ↗
            </a>
          </div>
        </article>

        <!-- Project 3: Gazebo Harmonic & ROS 2 -->
        <article class="project-card" data-category="robotics vision">
          <div class="project-card-header">
            <span class="project-cat-badge">ROBOTİK SİMÜLASYONU</span>
          </div>
          <h3 class="project-card-title">Gazebo Harmonic 3D Digital Twin</h3>
          <p class="project-card-desc">
            <span class="lang-tr">ROS 2 entegrasyonlu 3D fizik simülasyonu, LiDAR nokta bulutu haritalama ve otonom navigasyon test ortamı.</span>
            <span class="lang-en">3D physics simulation with ROS 2, LiDAR point cloud mapping, and autonomous navigation benchmarking.</span>
          </p>
          <div class="project-card-tags">
            <span class="project-tag">Gazebo Harmonic</span>
            <span class="project-tag">ROS 2</span>
            <span class="project-tag">LiDAR 3D</span>
            <span class="project-tag">Nav2</span>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">★ <span id="star-Gazebo-ROS2-DigitalTwin">12</span></span>
              <span class="project-stat-item">⑂ <span id="fork-Gazebo-ROS2-DigitalTwin">3</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub</span> ↗
            </a>
          </div>
        </article>

        <!-- Project 4: Martur Fompak Multi-Agent -->
        <article class="project-card" data-category="ai">
          <div class="project-card-header">
            <span class="project-cat-badge">KURUMSAL YAPAY ZEKA</span>
          </div>
          <h3 class="project-card-title">Martur AI: Çoklu-Ajan Orkestrasyonu</h3>
          <p class="project-card-desc">
            <span class="lang-tr">Otomotiv parça üretim hatları için RAG destekli, mikroservis mimarili otonom LLM ajan karar destek sistemi.</span>
            <span class="lang-en">RAG-powered autonomous LLM agent orchestration and production line decision support system.</span>
          </p>
          <div class="project-card-tags">
            <span class="project-tag">LangChain</span>
            <span class="project-tag">RAG</span>
            <span class="project-tag">FastAPI</span>
            <span class="project-tag">PostgreSQL</span>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">★ <span id="star-Martur-AI-Agent-Orchestrator">16</span></span>
              <span class="project-stat-item">⑂ <span id="fork-Martur-AI-Agent-Orchestrator">5</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub</span> ↗
            </a>
          </div>
        </article>

        <!-- Project 5: SİHA Uçuş Kontrol Yer İstasyonu -->
        <article class="project-card" data-category="uav embedded">
          <div class="project-card-header">
            <span class="project-cat-badge">TELEMETRİ &amp; GCS</span>
          </div>
          <h3 class="project-card-title">SİHA Telemetri &amp; Yer Kontrol İstasyonu</h3>
          <p class="project-card-desc">
            <span class="lang-tr">433/868 MHz RF telemetri veri ayrıştırma, gerçek zamanlı yapay ufuk ve MAVLink telemetri arayüzü.</span>
            <span class="lang-en">Real-time artificial horizon, RF telemetry stream parsing, and custom MAVLink ground control dashboard.</span>
          </p>
          <div class="project-card-tags">
            <span class="project-tag">Qt / C++</span>
            <span class="project-tag">MAVLink</span>
            <span class="project-tag">RF Telemetry</span>
            <span class="project-tag">Python</span>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">★ <span id="star-UAV-GroundControl-Station">9</span></span>
              <span class="project-stat-item">⑂ <span id="fork-UAV-GroundControl-Station">2</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub</span> ↗
            </a>
          </div>
        </article>

        <!-- Project 6: CUDA GPU Optical Flow -->
        <article class="project-card" data-category="vision ai embedded">
          <div class="project-card-header">
            <span class="project-cat-badge">GPGPU HIZLANDIRMA</span>
          </div>
          <h3 class="project-card-title">CUDA Hızlandırmalı Optik Akış</h3>
          <p class="project-card-desc">
            <span class="lang-tr">NVIDIA Jetson mimarisinde sıfır gecikmeli Lucas-Kanade optik akış ve hareket vektör kestirimi.</span>
            <span class="lang-en">Zero-latency Lucas-Kanade optical flow and dense motion field estimation on NVIDIA Jetson GPU.</span>
          </p>
          <div class="project-card-tags">
            <span class="project-tag">CUDA C++</span>
            <span class="project-tag">Jetson Orin</span>
            <span class="project-tag">TensorRT</span>
            <span class="project-tag">OpenCV</span>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">★ <span id="star-ArduPilot-MAVLink-GNC-Bridge">16</span></span>
              <span class="project-stat-item">⑂ <span id="fork-ArduPilot-MAVLink-GNC-Bridge">4</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub</span> ↗
            </a>
          </div>
        </article>

      </div>
    </section>

    <!-- [05] 05 İLETİŞİM & GÖREV TALEBİ (MIRA SOLVANG RETRO CRT MONITOR WALL) -->
    <section class="section contact-section" id="contact" data-reveal>
      <div class="contact-crt-experience" id="crtWallContainer">
        
        <!-- Header Strip -->
        <div class="contact-crt-head">
          <div>
            <span class="contact-hero-tag">
              <span class="dot-live"></span>
              <span class="lang-tr">05 // KONTROL &amp; YAYIN İSTASYONU</span>
              <span class="lang-en">05 // BROADCAST &amp; CONTACT STATION</span>
            </span>
            <h2 class="crt-section-title">
              <span><span class="lang-tr">BİR SONRAKİ OTONOM GÖREVİ</span><span class="lang-en">LET'S ARCHITECT THE NEXT</span></span>
              <span class="italic-whisper"><span class="lang-tr">birlikte başlatalım.</span><span class="lang-en">autonomous system together.</span></span>
            </h2>
          </div>
          <div class="crt-status-panel">
            <span class="crt-tally-light active"></span>
            <span class="lang-tr">3 KANAL YAYINDA · SİNYAL KİLİTLİ</span>
            <span class="lang-en">3 CHANNELS ONLINE · CARRIER LOCKED</span>
          </div>
        </div>

        <!-- 3D CRT MONITOR WALL RACK -->
        <div class="crt-monitor-rack">

          <!-- TV 1: LINKEDIN -->
          <div class="crt-tv-unit crt-theme-blue" id="crtTvLinkedin" data-action-url="https://linkedin.com/in/ozanardaozcelik" role="button" tabindex="0" title="LinkedIn">
            <div class="crt-bezel">
              <div class="crt-bezel-top">
                <span class="crt-channel-badge">CH 01</span>
                <span class="crt-brand-stamp">SONY PVM // TRINITRON</span>
                <div class="crt-tally-dot blue"></div>
              </div>
              <div class="crt-screen-frame">
                <canvas id="crt-canvas-linkedin" class="crt-canvas"></canvas>
                <div class="crt-scanlines"></div>
                <div class="crt-glass-reflection"></div>
                <div class="crt-vignette"></div>
              </div>
              <div class="crt-bezel-bottom">
                <div class="crt-speaker-grille"><span></span><span></span><span></span><span></span></div>
                <div class="crt-unit-info">
                  <span class="crt-ch-label"><span class="lang-tr">LINKEDIN BAĞLANTISI</span><span class="lang-en">LINKEDIN UPLINK</span></span>
                  <span class="crt-ch-hint"><span class="lang-tr">Ağa Bağlan ↗</span><span class="lang-en">Connect ↗</span></span>
                </div>
                <div class="crt-knobs">
                  <span class="crt-knob"></span>
                  <span class="crt-knob small"></span>
                </div>
              </div>
            </div>
          </div>

          <!-- TV 2: GITHUB -->
          <div class="crt-tv-unit crt-theme-green" id="crtTvGithub" data-action-url="https://github.com/ozanardaozcelik" role="button" tabindex="0" title="GitHub">
            <div class="crt-bezel">
              <div class="crt-bezel-top">
                <span class="crt-channel-badge">CH 02</span>
                <span class="crt-brand-stamp">IKARI TELEMETRY // 120 FPS</span>
                <div class="crt-tally-dot green"></div>
              </div>
              <div class="crt-screen-frame">
                <canvas id="crt-canvas-github" class="crt-canvas"></canvas>
                <div class="crt-scanlines"></div>
                <div class="crt-glass-reflection"></div>
                <div class="crt-vignette"></div>
              </div>
              <div class="crt-bezel-bottom">
                <div class="crt-speaker-grille"><span></span><span></span><span></span><span></span></div>
                <div class="crt-unit-info">
                  <span class="crt-ch-label"><span class="lang-tr">GITHUB KOD ARŞİVİ</span><span class="lang-en">GITHUB CODEBASE</span></span>
                  <span class="crt-ch-hint"><span class="lang-tr">Repoları İncele ↗</span><span class="lang-en">Browse Repos ↗</span></span>
                </div>
                <div class="crt-knobs">
                  <span class="crt-knob"></span>
                  <span class="crt-knob small"></span>
                </div>
              </div>
            </div>
          </div>

          <!-- TV 3: EMAIL -->
          <div class="crt-tv-unit crt-theme-amber" id="crtTvEmail" data-action-url="mailto:ozan.a.ozcelik@gmail.com" role="button" tabindex="0" title="E-Posta">
            <div class="crt-bezel">
              <div class="crt-bezel-top">
                <span class="crt-channel-badge">CH 03</span>
                <span class="crt-brand-stamp">JVC BROADCAST // SECURE</span>
                <div class="crt-tally-dot amber"></div>
              </div>
              <div class="crt-screen-frame">
                <canvas id="crt-canvas-email" class="crt-canvas"></canvas>
                <div class="crt-scanlines"></div>
                <div class="crt-glass-reflection"></div>
                <div class="crt-vignette"></div>
              </div>
              <div class="crt-bezel-bottom">
                <div class="crt-speaker-grille"><span></span><span></span><span></span><span></span></div>
                <div class="crt-unit-info">
                  <span class="crt-ch-label"><span class="lang-tr">E-POSTA TRANSMITTER</span><span class="lang-en">EMAIL TRANSMITTER</span></span>
                  <span class="crt-ch-hint"><span class="lang-tr">İletişime Geç ↗</span><span class="lang-en">Send Dispatch ↗</span></span>
                </div>
                <div class="crt-knobs">
                  <span class="crt-knob"></span>
                  <span class="crt-knob small"></span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Master Console Deck Underneath (Channel Switcher & Direct Action Buttons) -->
        <div class="crt-master-deck">
          <div class="crt-ch-selector-bar">
            <button type="button" class="crt-ch-btn is-active" data-target-unit="crtTvLinkedin">
              <span class="ch-num">01</span>
              <span class="ch-name">LinkedIn</span>
            </button>
            <button type="button" class="crt-ch-btn" data-target-unit="crtTvGithub">
              <span class="ch-num">02</span>
              <span class="ch-name">GitHub</span>
            </button>
            <button type="button" class="crt-ch-btn" data-target-unit="crtTvEmail">
              <span class="ch-num">03</span>
              <span class="ch-name"><span class="lang-tr">E-Posta</span><span class="lang-en">Email</span></span>
            </button>
          </div>

          <div class="crt-direct-actions">
            <a href="mailto:ozan.a.ozcelik@gmail.com" class="contact-action-btn primary-btn">
              <span><span class="lang-tr">E-Posta Gönder →</span><span class="lang-en">Send Email →</span></span>
            </a>
            <a href="https://linkedin.com/in/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="contact-action-btn">
              <span>LinkedIn ↗</span>
            </a>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="contact-action-btn">
              <span>GitHub ↗</span>
            </a>
          </div>
        </div>

        <!-- Sleek Studio Footer Meta -->
        <div class="contact-footer-meta">
          <div class="meta-item">
            <span class="meta-label"><span class="lang-tr">E-POSTA</span><span class="lang-en">EMAIL</span></span>
            <a href="mailto:ozan.a.ozcelik@gmail.com" class="meta-val">ozan.a.ozcelik@gmail.com</a>
          </div>
          <div class="meta-item">
            <span class="meta-label">LINKEDIN</span>
            <a href="https://linkedin.com/in/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="meta-val">linkedin.com/in/ozanardaozcelik</a>
          </div>
          <div class="meta-item">
            <span class="meta-label">GITHUB</span>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="meta-val">github.com/ozanardaozcelik</a>
          </div>
          <div class="meta-item">
            <span class="meta-label"><span class="lang-tr">UNVAN / DURUM</span><span class="lang-en">TITLE / STATUS</span></span>
            <span class="meta-val"><span class="lang-tr">Bilgisayar Müh. · ● Görevlere Açık</span><span class="lang-en">Comp. Eng. · ● Available</span></span>
          </div>
        </div>

      </div>
    </section>

  </main>

  <!-- Three.js ESM Application Entry for Hero Fluid Robot Reveal -->
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



      // 2. Pure Scroll-Driven Transition (02 Hikayem -> Reading Zone -> 3D Fold -> 03 Yeteneklerim)
      const heroHomeSec = document.getElementById('heroHome');
      const flowContainer = document.getElementById('heroScrollFlow');
      const flowStoryLayer = document.getElementById('flowStoryLayer');
      const flowShelfLayer = document.getElementById('flowShelfLayer');
      const flow3dBookLayer = document.getElementById('flow3dBookLayer');
      const sdbWingRight = document.getElementById('sdbWingRight');
      const scrollDockBook = document.getElementById('scrollDockBook');

      const btnNavHome = document.getElementById('btnNavHome');
      const btnNavStory = document.getElementById('btnNavStory');
      const btnNavSkills = document.getElementById('btnNavSkills');
      const btnNavProjects = document.getElementById('btnNavProjects');
      const btnNavContact = document.getElementById('btnNavContact');
      const projectsSec = document.getElementById('projects-section');
      const contactSec = document.getElementById('contact');

      // Helper to calculate true document-relative Y
      function getDocTop(el) {
        if (!el) return 999999;
        const rect = el.getBoundingClientRect();
        return rect.top + window.scrollY;
      }

      function smoothstep(t) {
        const x = Math.max(0, Math.min(1, t));
        return x * x * (3 - 2 * x);
      }

      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      function getSnapTargets() {
        const winH = window.innerHeight;
        const flowTop = getDocTop(flowContainer);
        const flowH = flowContainer ? flowContainer.offsetHeight : winH;
        const shelfY = Math.max(0, flowTop + flowH - winH);
        const storyY = flowTop + 2;
        const homeY = 0;
        const projectsY = projectsSec ? Math.max(0, getDocTop(projectsSec) - 60) : shelfY + winH;
        const contactY = contactSec ? Math.max(0, getDocTop(contactSec) - 60) : projectsY + winH;
        return { homeY, storyY, shelfY, projectsY, contactY, flowTop, flowH, winH };
      }

      let isAutoScrolling = false;
      let autoScrollAnimId = null;

      function customSmoothScrollTo(targetY, duration, onComplete) {
        if (autoScrollAnimId) {
          cancelAnimationFrame(autoScrollAnimId);
          autoScrollAnimId = null;
        }

        const startY = window.pageYOffset || document.documentElement.scrollTop || 0;
        const diff = targetY - startY;
        if (Math.abs(diff) < 2) {
          window.scrollTo({ top: targetY, behavior: 'auto' });
          isAutoScrolling = false;
          if (typeof onComplete === 'function') onComplete();
          return;
        }

        isAutoScrolling = true;
        const startTime = performance.now();
        // Luxurious, cinematic 4-5x slower duration (1400ms - 1900ms)
        const actualDuration = duration || Math.min(1900, Math.max(1350, Math.abs(diff) * 1.15));

        function step(now) {
          const elapsed = now - startTime;
          const progress = Math.min(1, elapsed / actualDuration);
          const eased = easeInOutCubic(progress);
          const currentY = startY + diff * eased;

          window.scrollTo({ top: currentY, behavior: 'auto' });
          onScrollHeroFlow();

          if (progress < 1) {
            autoScrollAnimId = requestAnimationFrame(step);
          } else {
            window.scrollTo({ top: targetY, behavior: 'auto' });
            onScrollHeroFlow();
            autoScrollAnimId = null;
            setTimeout(() => {
              isAutoScrolling = false;
              if (typeof onComplete === 'function') onComplete();
            }, 80);
          }
        }

        autoScrollAnimId = requestAnimationFrame(step);
      }

      let isShelfActive = false;
      let shelfLoaded = false;

      function ensureShelfLoaded() {
        if (shelfLoaded || !shelfIframe) return;
        const dSrc = shelfIframe.getAttribute('data-src');
        if (dSrc && (!shelfIframe.src || shelfIframe.src === 'about:blank' || !shelfIframe.src.includes('skills-shelf'))) {
          shelfIframe.src = dSrc;
          shelfLoaded = true;
        }
      }

      function setShelfActiveState(active) {
        if (isShelfActive === active) return;
        isShelfActive = active;
        if (active) ensureShelfLoaded();
        if (shelfIframe && shelfIframe.contentWindow) {
          try {
            shelfIframe.contentWindow.postMessage({ type: active ? 'RESUME_WEBGL' : 'SUSPEND_WEBGL' }, '*');
          } catch (e) {}
        }
      }

      // Scroll Handler with Generous Dedicated Reading Buffer before Book Folding
      let lastRenderedP = -999;

      function onScrollHeroFlow() {
        if (!flowContainer || !scrollDockBook || !sdbWingRight) return;

        const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
        const winH = window.innerHeight;
        const flowTop = getDocTop(flowContainer);
        const flowH = flowContainer.offsetHeight;
        const totalTravel = Math.max(1, flowH - winH);

        // Progress p: 0.00 (Story top) to 1.00 (Shelf docked)
        let p = (scrollY - flowTop) / totalTravel;
        p = Math.max(0, Math.min(1, p));

        // Skip micro-jitter
        if (Math.abs(p - lastRenderedP) < 0.0008 && scrollY > flowTop && scrollY < flowTop + totalTravel) {
          return;
        }
        lastRenderedP = p;

        // Lazy load shelf when user approaches folding (p > 0.20)
        if (p > 0.20) {
          ensureShelfLoaded();
        }

        // Manage Shelf WebGL suspension (only active when visible)
        const shouldShelfBeActive = p >= 0.65 && p <= 1.05;
        setShelfActiveState(shouldShelfBeActive);

        // 1. Story layer (02 Hikayem Sketchbook):
        // 100% Solid & fully interactive reading zone (p: 0.00 -> 0.30)
        // Gentle crossfade out only after intentional scrolling past reading zone (p: 0.30 -> 0.42)
        if (flowStoryLayer) {
          let storyOpacity = 1;
          if (p > 0.30) {
            storyOpacity = Math.max(0, 1 - (p - 0.30) / 0.12);
          }
          flowStoryLayer.style.opacity = storyOpacity.toFixed(3);
          flowStoryLayer.style.pointerEvents = (scrollY >= flowTop - 50 && p <= 0.34) ? 'auto' : 'none';
          flowStoryLayer.style.visibility = storyOpacity <= 0 ? 'hidden' : 'visible';
        }

        // 2. 3D Closing book layer:
        // Stays hidden during reading (p < 0.30), crossfades in (p: 0.30 -> 0.38), folds shut (p: 0.36 -> 0.68), fades out before shelf (p: 0.72 -> 0.86)
        if (flow3dBookLayer) {
          let bookOpacity = 0;
          if (p < 0.30) {
            bookOpacity = 0;
          } else if (p < 0.38) {
            bookOpacity = (p - 0.30) / 0.08;
          } else if (p <= 0.72) {
            bookOpacity = 1;
          } else if (p <= 0.86) {
            bookOpacity = Math.max(0, 1 - (p - 0.72) / 0.14);
          } else {
            bookOpacity = 0;
          }
          flow3dBookLayer.style.opacity = bookOpacity.toFixed(3);
          flow3dBookLayer.style.visibility = bookOpacity <= 0 ? 'hidden' : 'visible';
        }

        // 3. Right wing cover folding shut in 3D perspective (p: 0.34 -> 0.68):
        let foldP = 0;
        if (p > 0.34) {
          foldP = smoothstep((p - 0.34) / 0.34);
        }
        const rightDeg = -foldP * 180;
        sdbWingRight.style.transform = 'rotateY(' + rightDeg.toFixed(2) + 'deg)';
        sdbWingRight.style.zIndex = foldP > 0.5 ? 20 : 2;

        // 4. Zoom out in 3D perspective and glide (p: 0.58 -> 0.84):
        let zoomP = 0;
        if (p > 0.58) {
          zoomP = smoothstep((p - 0.58) / 0.26);
        }
        const scale = 1 - zoomP * 0.77; // 1.0 down to 0.23
        const translateY = zoomP * 140;
        const rotateY = zoomP * 15;
        const rotateX = zoomP * 7;

        scrollDockBook.style.transform =
          'translateY(' + translateY.toFixed(1) + 'px) ' +
          'scale(' + scale.toFixed(3) + ') ' +
          'rotateY(' + rotateY.toFixed(1) + 'deg) ' +
          'rotateX(' + rotateX.toFixed(1) + 'deg)';

        // 5. Background shelf fades in cleanly as the book docks (p: 0.70 -> 0.94):
        if (flowShelfLayer) {
          let shelfFade = 0;
          if (p > 0.70) {
            shelfFade = smoothstep((p - 0.70) / 0.24);
          }
          flowShelfLayer.style.opacity = shelfFade.toFixed(3);
          flowShelfLayer.style.pointerEvents = p >= 0.88 ? 'auto' : 'none';
          flowShelfLayer.style.visibility = shelfFade <= 0 ? 'hidden' : 'visible';
        }

        // 6. 5-Section Nav Tracking & Story Riffle Trigger
        const shelfThreshold = flowTop + (flowH - winH) * 0.60;
        const projectsTop = getDocTop(projectsSec) - winH * 0.35;
        const contactTop = getDocTop(contactSec) - winH * 0.35;

        [btnNavHome, btnNavStory, btnNavSkills, btnNavProjects, btnNavContact].forEach(b => b && b.classList.remove('is-active'));

        if (scrollY >= contactTop) {
          if (btnNavContact) btnNavContact.classList.add('is-active');
        } else if (scrollY >= projectsTop) {
          if (btnNavProjects) btnNavProjects.classList.add('is-active');
        } else if (scrollY >= shelfThreshold) {
          if (btnNavSkills) btnNavSkills.classList.add('is-active');
        } else if (scrollY >= flowTop - 120) {
          if (btnNavStory) btnNavStory.classList.add('is-active');
          if (!storyRiffled) {
            storyRiffled = true;
            triggerStoryRiffle();
          }
        } else {
          if (btnNavHome) btnNavHome.classList.add('is-active');
          storyRiffled = false;
        }
      }

      let storyRiffled = false;
      function triggerStoryRiffle() {
        if (sbIframe && sbIframe.contentWindow) {
          try {
            sbIframe.contentWindow.postMessage({ type: 'TRIGGER_RIFFLE' }, '*');
          } catch (e) {}
        }
      }

      // Smooth Navigation Actions (Luxurious, Cinematic ~1500ms - 1800ms)
      function scrollToHome() {
        customSmoothScrollTo(0, 1500);
      }
      function scrollToStory() {
        const { storyY } = getSnapTargets();
        customSmoothScrollTo(storyY, 1600, () => {
          setTimeout(triggerStoryRiffle, 100);
        });
      }
      function scrollToShelf() {
        ensureShelfLoaded();
        const { shelfY } = getSnapTargets();
        customSmoothScrollTo(shelfY, 1800);
      }
      function scrollToProjects() {
        const { projectsY } = getSnapTargets();
        customSmoothScrollTo(projectsY, 1600);
      }
      function scrollToContact() {
        const { contactY } = getSnapTargets();
        customSmoothScrollTo(contactY, 1500);
      }

      window.__scrollToHome = scrollToHome;
      window.__scrollToStory = scrollToStory;
      window.__scrollToShelf = scrollToShelf;
      window.__scrollToProjects = scrollToProjects;
      window.__scrollToContact = scrollToContact;

      // Handle postMessages from iframes for smooth scrolling & auto-snap
      window.addEventListener('message', (e) => {
        if (e.data && e.data.type === 'SET_LANG' && (e.data.lang === 'tr' || e.data.lang === 'en')) {
          if (currentLang !== e.data.lang) {
            setLanguage(e.data.lang);
          }
        }
        if (e.data && e.data.type === 'PARENT_SCROLL') {
          if (isAutoScrolling) return;
          const deltaY = typeof e.data.deltaY === 'number' ? e.data.deltaY : 0;
          if (Math.abs(deltaY) < 3) return;

          // Normal natural scroll - no premature hijacking while reading!
          window.scrollBy({ top: deltaY, behavior: 'auto' });
        }
      });

      // Settle Debounce: Only settle if user stopped in the middle of active folding
      let snapDebounceTimer = null;
      function checkScrollSettling() {
        if (isAutoScrolling) return;
        clearTimeout(snapDebounceTimer);
        snapDebounceTimer = setTimeout(() => {
          if (isAutoScrolling) return;
          const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
          const { flowTop, flowH, winH } = getSnapTargets();
          const totalTravel = Math.max(1, flowH - winH);
          const p = (scrollY - flowTop) / totalTravel;

          // Only settle if left mid-way through folding (0.42 < p < 0.88)
          if (p > 0.42 && p < 0.88) {
            if (p >= 0.65) {
              scrollToShelf();
            } else {
              scrollToStory();
            }
          }
        }, 320);
      }

      // RAF-throttled scroll
      let rafPending = false;
      function handleScroll() {
        if (!rafPending) {
          rafPending = true;
          requestAnimationFrame(() => {
            onScrollHeroFlow();
            rafPending = false;
          });
        }
        checkScrollSettling();
      }

      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleScroll, { passive: true });
      onScrollHeroFlow();

      window.__scrollToHome = scrollToHome;
      window.__scrollToStory = scrollToStory;
      window.__scrollToShelf = scrollToShelf;
      window.__scrollToProjects = scrollToProjects;
      window.__scrollToContact = scrollToContact;

      if (btnNavHome) btnNavHome.addEventListener('click', scrollToHome);
      if (btnNavStory) btnNavStory.addEventListener('click', scrollToStory);
      if (btnNavSkills) btnNavSkills.addEventListener('click', scrollToShelf);
      if (btnNavProjects) btnNavProjects.addEventListener('click', scrollToProjects);
      if (btnNavContact) btnNavContact.addEventListener('click', scrollToContact);

      const btnExploreStory = document.getElementById('btnExploreStory');
      if (btnExploreStory) {
        btnExploreStory.addEventListener('click', scrollToStory);
      }

      // Menu Panel Navigation Links
      const menuLinkHome = document.getElementById('menu-link-home');
      const menuLinkStory = document.getElementById('menu-link-story');
      const menuLinkSkills = document.getElementById('menu-link-skills');
      const menuLinkProjects = document.getElementById('menu-link-projects');
      const menuLinkContact = document.getElementById('menu-link-contact');

      if (menuLinkHome) menuLinkHome.addEventListener('click', (e) => { e.preventDefault(); scrollToHome(); toggleMenu(false); });
      if (menuLinkStory) menuLinkStory.addEventListener('click', (e) => { e.preventDefault(); scrollToStory(); toggleMenu(false); });
      if (menuLinkSkills) menuLinkSkills.addEventListener('click', (e) => { e.preventDefault(); scrollToShelf(); toggleMenu(false); });
      if (menuLinkProjects) menuLinkProjects.addEventListener('click', (e) => { e.preventDefault(); scrollToProjects(); toggleMenu(false); });
      if (menuLinkContact) menuLinkContact.addEventListener('click', (e) => { e.preventDefault(); scrollToContact(); toggleMenu(false); });

      // 4. Slide-Down Menu Toggle
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

      // 6. Live GitHub Repositories Hydration
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
        } catch (e) {}
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
console.log('Successfully written restored pristine Step 2410 index.html! Bytes:', html.length);
