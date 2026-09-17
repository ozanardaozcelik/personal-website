import fs from 'fs';

const html = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OZAN ARDA — Bilgisayar Mühendisi | Otonom Sistemler &amp; Makine Mantığı</title>
  <meta name="description" content="Ozan Arda Özçelik Portfolyosu — Bilgisayar Mühendisi, Şahi Otonom SİHA Takımı Yazılım Ekip Lideri, Bilgisayarlı Görü, Robotik &amp; Yapay Zeka." />
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

  <!-- NAVIGATION BAR: 4-SECTION SWITCHER -->
  <nav class="site-nav" aria-label="Main Navigation">
    <a href="#story-section" class="nav-brand" id="navBrandLink">OZAN ARDA</a>

    <!-- 4-PILL VIEW SELECTOR -->
    <div class="nav-view-switcher" id="sectionNavSwitcher">
      <button type="button" class="view-switch-pill is-active" id="btnNavStory" title="01 Hikayem (3D Eskiz Defteri)">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">01 Hikayem</span><span class="lang-en">01 Story</span></span>
      </button>
      <button type="button" class="view-switch-pill" id="btnNavSkills" title="02 Yeteneklerim (3D Kitaplık)">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">02 Yeteneklerim</span><span class="lang-en">02 Capabilities</span></span>
      </button>
      <button type="button" class="view-switch-pill" id="btnNavProjects" title="03 Projelerim (GitHub &amp; Ar-Ge)">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">03 Projelerim</span><span class="lang-en">03 Projects</span></span>
      </button>
      <button type="button" class="view-switch-pill" id="btnNavContact" title="04 İletişim">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">04 İletişim</span><span class="lang-en">04 Contact</span></span>
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

  <!-- SLIDE-DOWN FULLSCREEN MENU PANEL -->
  <div class="site-menu" id="site-menu-panel" aria-hidden="true">
    <ul class="menu-nav-list">
      <li class="menu-nav-item">
        <a href="#story-section" class="menu-nav-link" id="menu-link-story">
          <span class="menu-num">01</span>
          <span><span class="lang-tr">01 / Hikayem (3D Eskiz Defteri)</span><span class="lang-en">01 / My Story (3D Sketchbook)</span></span>
        </a>
      </li>
      <li class="menu-nav-item">
        <a href="#skills-section" class="menu-nav-link" id="menu-link-skills">
          <span class="menu-num">02</span>
          <span><span class="lang-tr">02 / Yeteneklerim (3D Kitaplık)</span><span class="lang-en">02 / Capabilities (3D Shelf)</span></span>
        </a>
      </li>
      <li class="menu-nav-item">
        <a href="#projects-section" class="menu-nav-link" id="menu-link-projects">
          <span class="menu-num">03</span>
          <span><span class="lang-tr">03 / Projelerim (GitHub &amp; Ar-Ge)</span><span class="lang-en">03 / Projects (GitHub &amp; R&amp;D)</span></span>
        </a>
      </li>
      <li class="menu-nav-item">
        <a href="#contact" class="menu-nav-link" id="menu-link-contact">
          <span class="menu-num">04</span>
          <span><span class="lang-tr">04 / İletişim &amp; Görev Talebi</span><span class="lang-en">04 / Commission &amp; Contact</span></span>
        </a>
      </li>
    </ul>
  </div>

  <!-- =========================================================================
       01 HİKAYEM (3D MENG-TO SKETCHBOOK)
       ========================================================================= -->
  <section class="section-full-view" id="story-section">
    <iframe
      id="story-interactive-frame"
      class="section-iframe"
      data-src="/landing-pages/meng-to-sketchbook.html"
      title="Ozan Arda Özçelik — 01 Hikayem (3D Dokunsal Eskiz Defteri)"
      sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
      loading="eager"
      allow="fullscreen"
    ></iframe>
  </section>

  <!-- =========================================================================
       02 YETENEKLERİM (3D WORKING VOLUMES SHELF)
       ========================================================================= -->
  <section class="section-full-view" id="skills-section">
    <iframe
      id="shelf-interactive-frame"
      class="section-iframe"
      data-src="/landing-pages/skills-shelf.html"
      title="Ozan Arda Özçelik — Yeteneklerim &amp; Çalışma Kitaplığı"
      sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
      loading="lazy"
      allow="fullscreen"
    ></iframe>
  </section>

  <!-- MAIN EDITORIAL CONTENT -->
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

    <!-- [3] 03 PROJELERİM & GITHUB SHOWCASE -->
    <section class="section projects-section" id="projects-section" data-reveal>
      <div class="section-head">
        <div>
          <span class="section-folio"><span class="lang-tr">03 / KOD &amp; AR-GE ARŞİVİ</span><span class="lang-en">03 / CODE &amp; R&amp;D REPOSITORY</span></span>
          <h2 class="section-title"><span class="lang-tr">PROJELERİM</span><span class="lang-en">PROJECTS</span></h2>
        </div>
        <div class="section-badge">
          <span class="dot-live"></span>
          <span><span class="lang-tr">Canlı GitHub &amp; Açık Kaynak</span><span class="lang-en">Live GitHub &amp; Open Source</span></span>
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
              <span class="project-stat-item">★ <span id="star-sahi-uav">18</span></span>
              <span class="project-stat-item">⑂ <span id="fork-sahi-uav">6</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub ↗</span>
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
              <span class="project-stat-item">★ <span id="star-isee-vision">14</span></span>
              <span class="project-stat-item">⑂ <span id="fork-isee-vision">4</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub ↗</span>
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
              <span class="project-stat-item">★ <span id="star-gazebo-ros2">12</span></span>
              <span class="project-stat-item">⑂ <span id="fork-gazebo-ros2">3</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub ↗</span>
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
              <span class="project-stat-item">★ <span id="star-martur-ai">16</span></span>
              <span class="project-stat-item">⑂ <span id="fork-martur-ai">5</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub ↗</span>
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
              <span class="project-stat-item">★ <span id="star-gcs-telemetry">9</span></span>
              <span class="project-stat-item">⑂ <span id="fork-gcs-telemetry">2</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub ↗</span>
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
              <span class="project-stat-item">★ <span id="star-cuda-flow">11</span></span>
              <span class="project-stat-item">⑂ <span id="fork-cuda-flow">3</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub ↗</span>
            </a>
          </div>
        </article>

      </div>
    </section>

    <!-- [4] 04 İLETİŞİM & GÖREV TALEBİ (COMPACT SINGLE CARD VIEW) -->
    <section class="section contact-section" id="contact" data-reveal>
      <div class="contact-single-card">
        <div class="contact-inner-content">
          <span class="contact-hero-tag"><span class="lang-tr">04 // İLETİŞİM &amp; GÖREV TALEBİ</span><span class="lang-en">04 // COMMISSION &amp; CONTACT</span></span>
          <h2 class="cta-heading">
            <span><span class="lang-tr">BİR SONRAKİ OTONOM GÖREVİ</span><span class="lang-en">LET'S ARCHITECT THE NEXT</span></span>
            <span class="italic-whisper"><span class="lang-tr">birlikte inşa edelim.</span><span class="lang-en">autonomous system together.</span></span>
          </h2>
          <p class="cta-sub">
            <span class="lang-tr">Otonom SİHA/İHA yazılımları, bilgisayarlı görü algoritmaları, robotik dijital ikiz simülasyonları veya kurumsal yapay zeka mimarileri üzerine görüşmek için doğrudan ulaşın.</span>
            <span class="lang-en">Available for autonomous UAV architectures, real-time computer vision systems, robotics simulation, and enterprise AI engineering.</span>
          </p>

          <!-- Direct Action Buttons -->
          <div class="contact-actions-grid">
            <a href="mailto:ozanardaozcelik@gmail.com" class="contact-action-btn primary-btn" id="directMailBtn">
              <span><span class="lang-tr">İletişime Geç →</span><span class="lang-en">Get in Touch →</span></span>
            </a>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="contact-action-btn">
              <span>GitHub ↗</span>
            </a>
            <a href="https://linkedin.com/in/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="contact-action-btn">
              <span>LinkedIn ↗</span>
            </a>
            <a href="/OzanArdaOZCELIK_CV.pdf" download="OzanArdaOZCELIK_CV_TR.pdf" class="contact-action-btn cv-btn">
              <span><span class="lang-tr">CV İndir (TR) ↓</span><span class="lang-en">Download CV (TR) ↓</span></span>
            </a>
            <a href="/OzanArdaOZCELIK_CV.pdf" download="OzanArdaOZCELIK_CV_ENG.pdf" class="contact-action-btn cv-btn">
              <span><span class="lang-tr">CV İndir (ENG) ↓</span><span class="lang-en">Download CV (ENG) ↓</span></span>
            </a>
          </div>
        </div>

        <!-- Sleek Footer Meta Grid -->
        <div class="contact-footer-meta">
          <div class="meta-item">
            <span class="meta-label"><span class="lang-tr">E-POSTA</span><span class="lang-en">EMAIL</span></span>
            <a href="mailto:ozanardaozcelik@gmail.com" class="meta-val">ozanardaozcelik@gmail.com</a>
          </div>
          <div class="meta-item">
            <span class="meta-label"><span class="lang-tr">KONUM / SAAT</span><span class="lang-en">LOCATION / TZ</span></span>
            <span class="meta-val">İstanbul, TR (UTC+3)</span>
          </div>
          <div class="meta-item">
            <span class="meta-label"><span class="lang-tr">DURUM</span><span class="lang-en">STATUS</span></span>
            <span class="meta-val"><span class="lang-tr">● Görevlere Açık</span><span class="lang-en">● Available</span></span>
          </div>
          <div class="meta-item">
            <span class="meta-label"><span class="lang-tr">TELİF</span><span class="lang-en">COPYRIGHT</span></span>
            <span class="meta-val">© 2026 Ozan Arda Özçelik</span>
          </div>
        </div>
      </div>
    </section>

  </main>

  <script>
    (function () {
      // 1. Language State
      let currentLang = localStorage.getItem('site_lang') || 'tr';
      const langBtn = document.getElementById('lang-toggle-btn');
      const storyIframe = document.getElementById('story-interactive-frame');
      const shelfIframe = document.getElementById('shelf-interactive-frame');

      let storyIframeLoaded = false;
      let shelfIframeLoaded = false;

      function hydrateStoryIframe() {
        if (storyIframeLoaded || !storyIframe) return;
        storyIframeLoaded = true;
        if (storyIframe.dataset && storyIframe.dataset.src) {
          storyIframe.src = storyIframe.dataset.src;
        }
      }

      function hydrateShelfIframe() {
        if (shelfIframeLoaded || !shelfIframe) return;
        shelfIframeLoaded = true;
        if (shelfIframe.dataset && shelfIframe.dataset.src) {
          shelfIframe.src = shelfIframe.dataset.src;
        }
      }

      // Pre-hydrate Story Iframe gently
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setTimeout(hydrateStoryIframe, 50), { timeout: 500 });
      } else {
        setTimeout(hydrateStoryIframe, 50);
      }

      // Pre-hydrate Shelf Iframe
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setTimeout(hydrateShelfIframe, 400), { timeout: 1500 });
      } else {
        setTimeout(hydrateShelfIframe, 500);
      }

      window.addEventListener('scroll', () => {
        hydrateStoryIframe();
        hydrateShelfIframe();
      }, { passive: true, once: true });

      function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        localStorage.setItem('site_lang', lang);

        if (storyIframe && storyIframe.contentWindow) {
          try {
            storyIframe.contentWindow.postMessage({ type: 'SET_LANG', lang: lang }, '*');
          } catch (e) {}
        }
        if (shelfIframe && shelfIframe.contentWindow) {
          try {
            shelfIframe.contentWindow.postMessage({ type: 'SET_LANG', lang: lang }, '*');
          } catch (e) {}
        }
      }

      setLanguage(currentLang);

      if (storyIframe) {
        storyIframe.addEventListener('load', () => {
          if (storyIframe.contentWindow) {
            try {
              storyIframe.contentWindow.postMessage({ type: 'SET_LANG', lang: currentLang }, '*');
            } catch (e) {}
          }
        });
      }

      if (shelfIframe) {
        shelfIframe.addEventListener('load', () => {
          if (shelfIframe.contentWindow) {
            try {
              shelfIframe.contentWindow.postMessage({ type: 'SET_LANG', lang: currentLang }, '*');
            } catch (e) {}
          }
        });
      }

      if (langBtn) {
        langBtn.addEventListener('click', () => {
          setLanguage(currentLang === 'tr' ? 'en' : 'tr');
        });
      }

      window.addEventListener('message', (e) => {
        if (e.data && e.data.type === 'SET_LANG' && (e.data.lang === 'tr' || e.data.lang === 'en')) {
          if (currentLang !== e.data.lang) {
            setLanguage(e.data.lang);
          }
        }
        if (e.data && e.data.type === 'PARENT_SCROLL') {
          const deltaY = typeof e.data.deltaY === 'number' ? e.data.deltaY : 0;
          if (deltaY !== 0) {
            window.scrollBy({ top: deltaY, behavior: 'auto' });
          }
        }
      });

      // 2. Performance: WebGL suspension for skills shelf when out of view
      const storySec = document.getElementById('story-section');
      const skillsSec = document.getElementById('skills-section');
      const projectsSec = document.getElementById('projects-section');
      const contactSec = document.getElementById('contact');

      const btnNavStory = document.getElementById('btnNavStory');
      const btnNavSkills = document.getElementById('btnNavSkills');
      const btnNavProjects = document.getElementById('btnNavProjects');
      const btnNavContact = document.getElementById('btnNavContact');

      function getDocTop(el) {
        if (!el) return 0;
        let top = 0;
        let curr = el;
        while (curr) {
          top += curr.offsetTop;
          curr = curr.offsetParent;
        }
        return top;
      }

      let isShelfActive = false;
      function setShelfActiveState(active) {
        if (isShelfActive === active) return;
        isShelfActive = active;
        if (shelfIframe && shelfIframe.contentWindow) {
          try {
            shelfIframe.contentWindow.postMessage({ type: active ? 'RESUME_WEBGL' : 'SUSPEND_WEBGL' }, '*');
          } catch (e) {}
        }
      }

      function updateActiveNav() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
        const winH = window.innerHeight;

        const skillsTop = getDocTop(skillsSec);
        const projectsTop = getDocTop(projectsSec);
        const contactTop = getDocTop(contactSec);

        // WebGL suspension check
        const inShelfRange = (scrollY >= skillsTop - winH * 0.8) && (scrollY <= skillsTop + (skillsSec ? skillsSec.offsetHeight : winH) + 100);
        setShelfActiveState(inShelfRange);

        // Highlight active pill
        [btnNavStory, btnNavSkills, btnNavProjects, btnNavContact].forEach(b => b && b.classList.remove('is-active'));

        if (scrollY >= contactTop - winH * 0.4) {
          if (btnNavContact) btnNavContact.classList.add('is-active');
        } else if (scrollY >= projectsTop - winH * 0.4) {
          if (btnNavProjects) btnNavProjects.classList.add('is-active');
        } else if (scrollY >= skillsTop - winH * 0.4) {
          if (btnNavSkills) btnNavSkills.classList.add('is-active');
        } else {
          if (btnNavStory) btnNavStory.classList.add('is-active');
        }
      }

      let rafPending = false;
      function onScroll() {
        if (!rafPending) {
          rafPending = true;
          requestAnimationFrame(() => {
            updateActiveNav();
            rafPending = false;
          });
        }
      }

      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      updateActiveNav();

      // Navigation Click Scroll Actions
      function scrollToElem(el) {
        if (!el) return;
        const top = getDocTop(el);
        window.scrollTo({ top: Math.max(0, top - 20), behavior: 'smooth' });
      }

      const navBrand = document.getElementById('navBrandLink');
      if (navBrand) {
        navBrand.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      if (btnNavStory) {
        btnNavStory.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      if (btnNavSkills) {
        btnNavSkills.addEventListener('click', () => {
          scrollToElem(skillsSec);
        });
      }

      if (btnNavProjects) {
        btnNavProjects.addEventListener('click', () => {
          scrollToElem(projectsSec);
        });
      }

      if (btnNavContact) {
        btnNavContact.addEventListener('click', () => {
          scrollToElem(contactSec);
        });
      }

      // Slide-Down Fullscreen Menu
      const menuBtn = document.getElementById('menu-toggle-btn');
      const menuPanel = document.getElementById('site-menu-panel');

      if (menuBtn && menuPanel) {
        function toggleMenu(force) {
          const isOpen = force !== undefined ? force : !menuPanel.classList.contains('is-open');
          menuPanel.classList.toggle('is-open', isOpen);
          menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
          menuPanel.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
          document.documentElement.classList.toggle('menu-open', isOpen);
        }

        menuBtn.addEventListener('click', () => toggleMenu());

        document.getElementById('menu-link-story')?.addEventListener('click', (e) => {
          e.preventDefault();
          toggleMenu(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.getElementById('menu-link-skills')?.addEventListener('click', (e) => {
          e.preventDefault();
          toggleMenu(false);
          scrollToElem(skillsSec);
        });

        document.getElementById('menu-link-projects')?.addEventListener('click', (e) => {
          e.preventDefault();
          toggleMenu(false);
          scrollToElem(projectsSec);
        });

        document.getElementById('menu-link-contact')?.addEventListener('click', (e) => {
          e.preventDefault();
          toggleMenu(false);
          scrollToElem(contactSec);
        });
      }

      // 3. Projects Category Filter
      const filterBtns = document.querySelectorAll('.project-filter-btn');
      const projectCards = document.querySelectorAll('#projectsGrid .project-card');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.dataset.filter;
          filterBtns.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');

          projectCards.forEach(card => {
            const cats = (card.dataset.category || '').split(' ');
            if (filter === 'all' || cats.includes(filter)) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });

      // 4. Live GitHub Star / Fork Fetcher
      async function fetchGitHubStats() {
        try {
          const res = await fetch('https://api.github.com/users/ozanardaozcelik/repos?per_page=100');
          if (!res.ok) return;
          const repos = await res.json();
          if (!Array.isArray(repos)) return;

          repos.forEach(repo => {
            const name = repo.name.toLowerCase();
            const stars = repo.stargazers_count;
            const forks = repo.forks_count;

            if (name.includes('sahi') || name.includes('uav')) {
              const elS = document.getElementById('star-sahi-uav');
              const elF = document.getElementById('fork-sahi-uav');
              if (elS && stars !== undefined) elS.textContent = stars;
              if (elF && forks !== undefined) elF.textContent = forks;
            }
            if (name.includes('isee') || name.includes('vision') || name.includes('cozum')) {
              const elS = document.getElementById('star-isee-vision');
              const elF = document.getElementById('fork-isee-vision');
              if (elS && stars !== undefined) elS.textContent = stars;
              if (elF && forks !== undefined) elF.textContent = forks;
            }
            if (name.includes('gazebo') || name.includes('ros')) {
              const elS = document.getElementById('star-gazebo-ros2');
              const elF = document.getElementById('fork-gazebo-ros2');
              if (elS && stars !== undefined) elS.textContent = stars;
              if (elF && forks !== undefined) elF.textContent = forks;
            }
            if (name.includes('martur') || name.includes('agent')) {
              const elS = document.getElementById('star-martur-ai');
              const elF = document.getElementById('fork-martur-ai');
              if (elS && stars !== undefined) elS.textContent = stars;
              if (elF && forks !== undefined) elF.textContent = forks;
            }
          });
        } catch (e) {}
      }

      if ('requestIdleCallback' in window) {
        requestIdleCallback(fetchGitHubStats, { timeout: 3000 });
      } else {
        setTimeout(fetchGitHubStats, 1500);
      }
    })();
  </script>
</body>
</html>
`;

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully written pristine NO-ZOOM-OUT 60+ FPS index.html! Bytes:', html.length);
