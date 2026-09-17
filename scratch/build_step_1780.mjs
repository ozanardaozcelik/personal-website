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
    <a href="#heroHome" class="nav-brand">OZAN ARDA</a>

    <!-- 5-PILL VIEW SELECTOR -->
    <div class="nav-view-switcher" id="sectionNavSwitcher">
      <a href="#heroHome" class="view-switch-pill is-active" id="btnNavHome" title="01 Ana Sayfa">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">01 Ana Sayfa</span><span class="lang-en">01 Home</span></span>
      </a>
      <a href="#heroScrollFlow" class="view-switch-pill" id="btnNavStory" title="02 Hikayem (3D Eskiz Defteri)">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">02 Hikayem</span><span class="lang-en">02 Story</span></span>
      </a>
      <a href="#heroScrollFlow" class="view-switch-pill" id="btnNavSkills" title="03 Yeteneklerim (3D Kitaplık)">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">03 Yeteneklerim</span><span class="lang-en">03 Capabilities</span></span>
      </a>
      <a href="#projects-section" class="view-switch-pill" id="btnNavProjects" title="04 Projelerim (GitHub &amp; Ar-Ge)">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">04 Projelerim</span><span class="lang-en">04 Projects</span></span>
      </a>
      <a href="#contact" class="view-switch-pill" id="btnNavContact" title="05 İletişim">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">05 İletişim</span><span class="lang-en">05 Contact</span></span>
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
            <a href="#heroScrollFlow" class="hero-cta-btn" id="btnExploreStory">
              <span><span class="lang-tr">02 / HİKAYEMİ AÇ</span><span class="lang-en">02 / OPEN MY STORY</span></span>
              <span class="hero-cta-arrow">↓</span>
            </a>
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
       02 HİKAYEM (3D ESKİZ DEFTERİ) -> FAST SNAPPY 3D FOLD -> 03 YETENEKLERİM (3D KİTAPLIK)
       Direct, snappy, cinematic transition: zero intermediate text pages, warm studio background!
       ========================================================================= -->
  <div class="hero-scroll-flow" id="heroScrollFlow">
    <div class="hero-sticky-viewport" id="heroStickyViewport">
      
      <!-- LAYER 1: 03 YETENEKLERİM 3D SHELF IFRAME (Fades in as book docks) -->
      <div class="flow-layer flow-shelf-layer" id="flowShelfLayer">
        <iframe
          id="shelf-interactive-frame"
          class="flow-iframe"
          src="/landing-pages/skills-shelf.html"
          title="Ozan Arda Özçelik — 03 Yeteneklerim &amp; Çalışma Kitaplığı"
          sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
          loading="lazy"
          allow="fullscreen"
        ></iframe>
      </div>

      <!-- LAYER 2: 3D DOCKING BOOK (Snappy 3D folding & gliding) -->
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

      <!-- LAYER 3: 02 HİKAYEM INTERACTIVE SKETCHBOOK IFRAME (Active at top of flow) -->
      <div class="flow-layer flow-story-layer" id="flowStoryLayer">
        <iframe
          id="sketchbook-interactive-frame"
          class="flow-iframe"
          src="/landing-pages/meng-to-sketchbook.html"
          title="Ozan Arda Özçelik — 02 Hikayem &amp; Eskiz Defteri"
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

    <!-- [04] PROJELERİM & GITHUB SHOWCASE -->
    <section class="section" id="projects-section">
      <div class="section-head" data-reveal>
        <h2 class="section-title">
          <span class="lang-tr">04 / Projelerim</span>
          <span class="lang-en">04 / Projects</span>
        </h2>
        <span class="section-folio">github.com/ozanardaozcelik</span>
      </div>

      <!-- Projects Category Filter -->
      <div class="projects-filter-row" data-reveal>
        <button class="project-filter-btn is-active" data-filter="all">
          <span class="lang-tr">Tümü (6)</span><span class="lang-en">All (6)</span>
        </button>
        <button class="project-filter-btn" data-filter="cv">
          <span class="lang-tr">Bilgisayarlı Görü</span><span class="lang-en">Computer Vision</span>
        </button>
        <button class="project-filter-btn" data-filter="robotics">
          <span class="lang-tr">Robotik &amp; SİHA</span><span class="lang-en">Robotics &amp; UAV</span>
        </button>
        <button class="project-filter-btn" data-filter="ai">
          <span class="lang-tr">Yapay Zeka &amp; Ajanlar</span><span class="lang-en">AI &amp; Agents</span>
        </button>
      </div>

      <!-- Projects Dynamic Showcase Grid -->
      <div class="projects-grid" id="projectsGrid">

        <!-- 1. Şahi Otonom SİHA (Flagship) -->
        <article class="project-card is-flagship" data-category="robotics cv" data-reveal>
          <div class="project-card-header">
            <span class="project-cat-badge">ROBOTİKS // SİHA</span>
            <span class="project-flagship-tag">FLAGSHIP</span>
          </div>
          <h3 class="project-card-title">Sahi-Autonomous-UAV-GNC</h3>
          <p class="project-card-desc">
            <span class="lang-tr">TEKNOFEST Savaşan İHA için geliştirilen otonom hedef tespiti, Kalman filtreli takip, ByteTrack ve MAVLink otonom güdüm seyrüsefer yazılım paketi.</span>
            <span class="lang-en">Autonomous target detection, Kalman-filtered tracking, ByteTrack, and MAVLink guidance package developed for TEKNOFEST Combat UAV.</span>
          </p>
          <div class="project-card-tags">
            <span class="project-tag">Python</span>
            <span class="project-tag">ROS 2</span>
            <span class="project-tag">OpenCV</span>
            <span class="project-tag">MAVLink</span>
            <span class="project-tag">Gazebo</span>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">★ <span id="star-Sahi-Autonomous-UAV-GNC">24</span></span>
              <span class="project-stat-item">⑂ <span id="fork-Sahi-Autonomous-UAV-GNC">6</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub</span> ↗
            </a>
          </div>
        </article>

        <!-- 2. ISEE Vision Quality Inspection -->
        <article class="project-card is-flagship" data-category="cv ai" data-reveal>
          <div class="project-card-header">
            <span class="project-cat-badge">BİLGİSAYARLI GÖRÜ</span>
            <span class="project-flagship-tag">ÇÖZÜM MAKİNA</span>
          </div>
          <h3 class="project-card-title">ISEE-Vision-Defect-Inspect</h3>
          <p class="project-card-desc">
            <span class="lang-tr">Çözüm Makina bünyesinde endüstriyel üretim hatları için geliştirilen mikron seviyesinde anomali tespiti, PatchCore ve PaddleOCR tabanlı sıfır-hata kalite kontrol sistemi.</span>
            <span class="lang-en">Industrial zero-defect quality inspection and micro-anomaly detection system using PatchCore and PaddleOCR for production lines.</span>
          </p>
          <div class="project-card-tags">
            <span class="project-tag">PyTorch</span>
            <span class="project-tag">PatchCore</span>
            <span class="project-tag">PaddleOCR</span>
            <span class="project-tag">FastAPI</span>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">★ <span id="star-ISEE-Vision-Defect-Inspect">18</span></span>
              <span class="project-stat-item">⑂ <span id="fork-ISEE-Vision-Defect-Inspect">4</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub</span> ↗
            </a>
          </div>
        </article>

        <!-- 3. ISEE Robotics Industrial Nodes -->
        <article class="project-card" data-category="robotics" data-reveal>
          <div class="project-card-header">
            <span class="project-cat-badge">ROBOTİK &amp; IOT</span>
          </div>
          <h3 class="project-card-title">ISEE-Robotics-Fleet-Bridge</h3>
          <p class="project-card-desc">
            <span class="lang-tr">Endüstriyel robot kollar ve AGV filoları için ROS 2 - MQTT çift yönlü telemetri köprüsü, Gazebo Harmonic dijital ikiz simülasyonu.</span>
            <span class="lang-en">Bidirectional ROS 2 - MQTT telemetry bridge and Gazebo Harmonic digital twin simulation for industrial robotic arms and AGVs.</span>
          </p>
          <div class="project-card-tags">
            <span class="project-tag">C++</span>
            <span class="project-tag">ROS 2 Humble</span>
            <span class="project-tag">MQTT</span>
            <span class="project-tag">Gazebo Harmonic</span>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">★ <span id="star-ISEE-Robotics-Fleet-Bridge">15</span></span>
              <span class="project-stat-item">⑂ <span id="fork-ISEE-Robotics-Fleet-Bridge">3</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub</span> ↗
            </a>
          </div>
        </article>

        <!-- 4. Martur Enterprise Agentic AI -->
        <article class="project-card" data-category="ai" data-reveal>
          <div class="project-card-header">
            <span class="project-cat-badge">YAPAY ZEKA &amp; LLM</span>
          </div>
          <h3 class="project-card-title">Enterprise-Agentic-Copilot</h3>
          <p class="project-card-desc">
            <span class="lang-tr">Martur Fompak bünyesinde şirket içi ekiplerin teknik döküman sorgulama, RAG ve otonom iş akışı otomasyonunu sağlayan çoklu-ajanlı kurumsal yapay zeka sistemi.</span>
            <span class="lang-en">Multi-agent enterprise AI system providing technical documentation RAG and autonomous workflow orchestration for internal teams.</span>
          </p>
          <div class="project-card-tags">
            <span class="project-tag">LangChain</span>
            <span class="project-tag">Llama-3</span>
            <span class="project-tag">Vector DB</span>
            <span class="project-tag">HuggingFace</span>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">★ <span id="star-Enterprise-Agentic-Copilot">21</span></span>
              <span class="project-stat-item">⑂ <span id="fork-Enterprise-Agentic-Copilot">5</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub</span> ↗
            </a>
          </div>
        </article>

        <!-- 5. Real-Time Thermal Anomaly CV -->
        <article class="project-card" data-category="cv ai" data-reveal>
          <div class="project-card-header">
            <span class="project-cat-badge">BİLGİSAYARLI GÖRÜ</span>
          </div>
          <h3 class="project-card-title">Thermal-Optical-Fusion-CV</h3>
          <p class="project-card-desc">
            <span class="lang-tr">Termal ve RGB kameraların piksel düzeyinde füzyonu ile düşük ışık koşullarında yüksek hassasiyetli otonom nesne tespiti ve sınıflandırma.</span>
            <span class="lang-en">Pixel-level thermal and RGB sensor fusion for high-precision autonomous object detection in extreme low-light environments.</span>
          </p>
          <div class="project-card-tags">
            <span class="project-tag">PyTorch</span>
            <span class="project-tag">OpenCV</span>
            <span class="project-tag">CUDA</span>
            <span class="project-tag">TensorRT</span>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">★ <span id="star-Thermal-Optical-Fusion-CV">12</span></span>
              <span class="project-stat-item">⑂ <span id="fork-Thermal-Optical-Fusion-CV">2</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub</span> ↗
            </a>
          </div>
        </article>

        <!-- 6. ArduPilot MAVLink Drone Telemetry Gateway -->
        <article class="project-card" data-category="robotics" data-reveal>
          <div class="project-card-header">
            <span class="project-cat-badge">ROBOTİK // GNC</span>
          </div>
          <h3 class="project-card-title">ArduPilot-MAVLink-GNC-Bridge</h3>
          <p class="project-card-desc">
            <span class="lang-tr">Uçuş kontrolcüsü ile yer istasyonu ve yapay zeka işlemcisi arasında 50Hz telemetri akışı, GPS-denied pozisyon kestirimi ve acil durum otonom eve dönüş protokolleri.</span>
            <span class="lang-en">50Hz telemetry streaming, GPS-denied position estimation, and failsafe return-to-home protocols between flight controller and onboard AI.</span>
          </p>
          <div class="project-card-tags">
            <span class="project-tag">C++</span>
            <span class="project-tag">MAVLink</span>
            <span class="project-tag">ArduPilot</span>
            <span class="project-tag">Linux Embedded</span>
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

    <!-- [05] İLETİŞİM & GÖREV TALEBİ -->
    <section class="section section-dark" id="contact" data-reveal>
      <div class="section-head" style="border-bottom-color: var(--rule-light);">
        <h2 class="section-title" style="color: #fff;">
          <span class="lang-tr">05 / İletişim</span>
          <span class="lang-en">05 / Contact &amp; Commission</span>
        </h2>
        <span class="section-folio" style="color: var(--dim);">p. 102</span>
      </div>
      <div class="cta-wrap">
        <h2 class="cta-heading">
          <span><span class="lang-tr">GELECEĞİN</span><span class="lang-en">PIONEER</span></span>
          <span class="italic-whisper"><span class="lang-tr">otonom sistemlerini</span><span class="lang-en">the next autonomous</span></span>
          <span><span class="lang-tr">BİRLİKTE KURALIM.</span><span class="lang-en">SYSTEM TOGETHER.</span></span>
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
          <span><span class="lang-tr">KONUM // PENDİK, İSTANBUL &amp; TEKİRDAĞ, TR</span><span class="lang-en">BASE // PENDIK, ISTANBUL &amp; TEKIRDAG, TR</span></span>
          <span>TEL // +90 537 614 41 56</span>
        </div>
      </div>
    </section>

  </main>

  <!-- FOOTER -->
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
        <div class="footer-col-label"><span class="lang-tr">Dizin (5 Sayfa)</span><span class="lang-en">Index (5 Sections)</span></div>
        <ul class="footer-links">
          <li><a href="#heroHome" onclick="window.__scrollToHome &amp;&amp; window.__scrollToHome()"><span class="lang-tr">01 Ana Sayfa</span><span class="lang-en">01 Home</span></a></li>
          <li><a href="#heroScrollFlow" onclick="window.__scrollToStory &amp;&amp; window.__scrollToStory()"><span class="lang-tr">02 Hikayem (Eskiz Defteri)</span><span class="lang-en">02 My Story (Sketchbook)</span></a></li>
          <li><a href="#heroScrollFlow" onclick="window.__scrollToShelf &amp;&amp; window.__scrollToShelf()"><span class="lang-tr">03 Yeteneklerim (Kitaplık)</span><span class="lang-en">03 Capabilities (Shelf)</span></a></li>
          <li><a href="#projects-section"><span class="lang-tr">04 Projelerim (GitHub)</span><span class="lang-en">04 Projects (GitHub)</span></a></li>
          <li><a href="#contact"><span class="lang-tr">05 İletişim</span><span class="lang-en">05 Contact</span></a></li>
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
          <li><span>VOL. 2026 // BUILD 5.0</span></li>
          <li><span><span class="lang-tr">SİHA YAZILIM LİDERİ</span><span class="lang-en">SİHA SOFTWARE LEAD</span></span></li>
          <li><span>SYS.NOMINAL</span></li>
        </ul>
      </div>
    </div>
    <div class="footer-lockup-row">
      <div class="footer-giant-brand">OZAN ARDA</div>
    </div>
  </footer>

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

      window.addEventListener('message', (e) => {
        if (e.data && e.data.type === 'SET_LANG' && (e.data.lang === 'tr' || e.data.lang === 'en')) {
          if (currentLang !== e.data.lang) {
            setLanguage(e.data.lang);
          }
        }
      });

      // 2. Pure Snappy Scroll-Driven Transition (02 Hikayem -> 03 Yeteneklerim)
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

      // Snappy, Fast 3-Step Scroll Logic:
      // In 1 to 3 wheel scrolls, the book snaps closed and docks onto the shelf!
      function onScrollHeroFlow() {
        if (!flowContainer || !scrollDockBook || !sdbWingRight) return;

        const rect = flowContainer.getBoundingClientRect();
        const winH = window.innerHeight;
        const totalTravel = flowContainer.offsetHeight - winH;

        if (totalTravel <= 0) return;

        // Progress p: 0 (Story top) to 1 (Shelf docked)
        let p = -rect.top / totalTravel;
        p = Math.max(0, Math.min(1, p));

        // 1. Story layer (02 Hikayem Sketchbook):
        // Visible at very top of flow, quickly crossfades out as folding begins (p: 0.01 -> 0.08)
        if (flowStoryLayer) {
          const storyOpacity = Math.max(0, Math.min(1, 1 - (p - 0.01) / 0.07));
          flowStoryLayer.style.opacity = storyOpacity.toFixed(3);
          flowStoryLayer.style.pointerEvents = p <= 0.02 ? 'auto' : 'none';
        }

        // 2. 3D Closing book layer:
        // Crossfades in at p=0.01, snaps closed, docks into shelf at p=0.82
        if (flow3dBookLayer) {
          let bookOpacity;
          if (p < 0.01) {
            bookOpacity = 0;
          } else if (p < 0.06) {
            bookOpacity = (p - 0.01) / 0.05;
          } else if (p <= 0.82) {
            bookOpacity = 1;
          } else if (p <= 0.92) {
            bookOpacity = Math.max(0, 1 - (p - 0.82) / 0.10);
          } else {
            bookOpacity = 0;
          }
          flow3dBookLayer.style.opacity = bookOpacity.toFixed(3);
        }

        // 3. Right wing cover folding shut (Fast & Crisp: p 0.02 -> 0.36):
        const foldRaw = Math.min(1, Math.max(0, (p - 0.02) / 0.34));
        const foldP = foldRaw * foldRaw * (3 - 2 * foldRaw);
        const rightDeg = -foldP * 180;
        sdbWingRight.style.transform = 'rotateY(' + rightDeg.toFixed(2) + 'deg)';

        // 4. Zoom out in 3D perspective and dock into shelf slot (p: 0.32 -> 0.82):
        const zoomRaw = Math.min(1, Math.max(0, (p - 0.32) / 0.50));
        const zoomP = zoomRaw * zoomRaw * (3 - 2 * zoomRaw);
        const scale = 1 - zoomP * 0.77; // 1.0 down to 0.23
        const translateY = zoomP * 135;
        const rotateY = zoomP * 15;
        const rotateX = zoomP * 7;

        scrollDockBook.style.transform =
          'translateY(' + translateY.toFixed(1) + 'px) ' +
          'scale(' + scale.toFixed(3) + ') ' +
          'rotateY(' + rotateY.toFixed(1) + 'deg) ' +
          'rotateX(' + rotateX.toFixed(1) + 'deg)';

        // 5. Background shelf fades in (p: 0.25 -> 0.78):
        if (flowShelfLayer) {
          const shelfFade = Math.min(1, Math.max(0, (p - 0.25) / 0.53));
          flowShelfLayer.style.opacity = shelfFade.toFixed(3);
          flowShelfLayer.style.pointerEvents = p >= 0.82 ? 'auto' : 'none';
        }

        // 6. 5-Section Nav Tracking
        const scrollY = window.scrollY;
        const homeBottom = heroHomeSec ? heroHomeSec.offsetHeight * 0.6 : 400;
        const projectsTop = projectsSec ? projectsSec.offsetTop - winH * 0.4 : 999999;
        const contactTop = contactSec ? contactSec.offsetTop - winH * 0.4 : 999999;

        [btnNavHome, btnNavStory, btnNavSkills, btnNavProjects, btnNavContact].forEach(b => b && b.classList.remove('is-active'));

        if (scrollY >= contactTop) {
          if (btnNavContact) btnNavContact.classList.add('is-active');
        } else if (scrollY >= projectsTop) {
          if (btnNavProjects) btnNavProjects.classList.add('is-active');
        } else if (scrollY < homeBottom) {
          if (btnNavHome) btnNavHome.classList.add('is-active');
        } else if (p >= 0.45) {
          if (btnNavSkills) btnNavSkills.classList.add('is-active');
        } else {
          if (btnNavStory) btnNavStory.classList.add('is-active');
        }
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
      }

      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleScroll, { passive: true });
      onScrollHeroFlow();

      // Navigation Actions
      function scrollToHome() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      function scrollToStory() {
        if (flowContainer) {
          window.scrollTo({ top: flowContainer.offsetTop, behavior: 'smooth' });
        }
      }
      function scrollToShelf() {
        if (flowContainer) {
          const targetY = flowContainer.offsetTop + flowContainer.offsetHeight - window.innerHeight;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }
      window.__scrollToHome = scrollToHome;
      window.__scrollToStory = scrollToStory;
      window.__scrollToShelf = scrollToShelf;

      if (btnNavHome) btnNavHome.addEventListener('click', (e) => { e.preventDefault(); scrollToHome(); });
      if (btnNavStory) btnNavStory.addEventListener('click', (e) => { e.preventDefault(); scrollToStory(); });
      if (btnNavSkills) btnNavSkills.addEventListener('click', (e) => { e.preventDefault(); scrollToShelf(); });
      if (btnNavProjects) btnNavProjects.addEventListener('click', (e) => {
        e.preventDefault();
        if (projectsSec) projectsSec.scrollIntoView({ behavior: 'smooth' });
      });
      if (btnNavContact) btnNavContact.addEventListener('click', (e) => {
        e.preventDefault();
        if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
      });

      const btnExploreStory = document.getElementById('btnExploreStory');
      if (btnExploreStory) {
        btnExploreStory.addEventListener('click', (e) => {
          e.preventDefault();
          scrollToStory();
        });
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
      if (menuLinkProjects) menuLinkProjects.addEventListener('click', (e) => {
        e.preventDefault();
        if (projectsSec) projectsSec.scrollIntoView({ behavior: 'smooth' });
        toggleMenu(false);
      });
      if (menuLinkContact) menuLinkContact.addEventListener('click', (e) => {
        e.preventDefault();
        if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
        toggleMenu(false);
      });

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
console.log('Successfully written complete 5-section index.html! Bytes:', html.length);
