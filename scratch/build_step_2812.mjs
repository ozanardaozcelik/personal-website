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

  <!-- NAVIGATION BAR: 5-SECTION SWITCHER -->
  <nav class="site-nav" aria-label="Main Navigation">
    <a href="#heroScrollFlow" class="nav-brand" onclick="window.__scrollToHome &amp;&amp; window.__scrollToHome(); return false;">OZAN ARDA</a>

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
        <a href="#heroScrollFlow" class="menu-nav-link" id="menu-link-home">
          <span class="menu-num">01</span>
          <span><span class="lang-tr">01 / Ana Sayfa (Portre &amp; Robotik)</span><span class="lang-en">01 / Home (Portrait &amp; Robotics)</span></span>
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
       HERO SCROLL FLOW (01 HOME FULLSCREEN -> 3D ZOOM OUT -> 02 HİKAYEM 3D SKETCHBOOK -> 3D DOCK -> 03 SHELF)
       - Layer 4: 01 Ana Sayfa (Full-bleed Hero with WebGL fluid cyborg hover reveal)
       - 3D Zoom-Out: Viewport stays pinned, 01 Ana Sayfa zooms out in perspective to desk
       - Layer 3: 02 Hikayem (Untouched original 3D Meng-To Sketchbook iframe with 9 plates & loupe)
       - Layer 2: 3D Flutter Riffle (Closing 3D volume claps shut into leather brown book & docks into Slot 0)
       - Layer 1: 03 Yeteneklerim (3D Bookshelf on white/paper background)
       ========================================================================= -->
  <div class="hero-scroll-flow" id="heroScrollFlow" style="height: 450vh;">
    <div class="hero-sticky-viewport" id="heroStickyViewport">
      
      <!-- LAYER 1: 03 YETENEKLERİM 3D SHELF IFRAME (Fades in as book docks) -->
      <div class="flow-layer flow-shelf-layer" id="flowShelfLayer">
        <iframe
          id="shelf-interactive-frame"
          class="flow-iframe"
          data-src="/landing-pages/skills-shelf.html"
          title="Ozan Arda Özçelik — 03 Yeteneklerim &amp; Çalışma Kitaplığı"
          sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
          loading="lazy"
          allow="fullscreen"
        ></iframe>
      </div>

      <!-- LAYER 2: 3D MULTI-PAGE RIFFLE & HARDCOVER DOCK TRANSITION -->
      <div class="flow-layer flow-3d-book-layer" id="flow3dBookLayer">
        <div class="scroll-dock-book" id="scrollDockBook">
          
          <!-- Spine -->
          <div class="sdb-spine">
            <span>00 · HİKAYEM</span>
          </div>

          <!-- SPREAD BASE: LEFT WING -->
          <div class="sdb-wing sdb-left" id="sdbWingLeft">
            <div class="sdb-face sdb-paper">
              <div class="sdb-page-art">
                <div class="sdb-tag">LEVHA 01 // 2008 · İLK KIVILCIM</div>
                <div class="sdb-sketch-lead">3 Yaş: İlk Bilgisayar</div>
                <div class="sdb-sketch-sub">Windows XP, CD-ROM · Algoritmik Merak</div>
              </div>
            </div>

            <!-- Leather Back Cover (Visible from behind) -->
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

          <!-- FLUTTERING LEAF 1 -->
          <div class="sdb-leaf" id="sdbLeaf1">
            <div class="sdb-leaf-face front">
              <div class="sdb-page-art">
                <div class="sdb-tag">LEVHA 02 // LİSE DÖNEMİ</div>
                <div class="sdb-sketch-lead">Kırımlı Fazilet Olcay A.L.</div>
                <div class="sdb-sketch-sub">C++ Temelleri &amp; Algoritmik Düşünce</div>
              </div>
            </div>
            <div class="sdb-leaf-face back">
              <div class="sdb-page-art">
                <div class="sdb-tag">LEVHA 03 // BİLGİSAYAR MÜHENDİSLİĞİ</div>
                <div class="sdb-sketch-lead">Tekirdağ Namık Kemal Üni.</div>
                <div class="sdb-sketch-sub">Yüksek Onur Derecesi &amp; Gömülü Sistemler</div>
              </div>
            </div>
          </div>

          <!-- FLUTTERING LEAF 2 -->
          <div class="sdb-leaf" id="sdbLeaf2">
            <div class="sdb-leaf-face front">
              <div class="sdb-page-art">
                <div class="sdb-tag">LEVHA 04 // BİLGİSAYARLI GÖRÜ</div>
                <div class="sdb-sketch-lead">OpenCV &amp; Piksel Matrisleri</div>
                <div class="sdb-sketch-sub">CUDA Hızlandırma &amp; Optik Akış</div>
              </div>
            </div>
            <div class="sdb-leaf-face back">
              <div class="sdb-page-art">
                <div class="sdb-tag">LEVHA 05 // ŞAHİ OTONOM SİHA</div>
                <div class="sdb-sketch-lead">Yazılım Ekip Liderliği</div>
                <div class="sdb-sketch-sub">YOLOv8 + ByteTrack + Kalman &amp; MAVLink</div>
              </div>
            </div>
          </div>

          <!-- FLUTTERING LEAF 3 -->
          <div class="sdb-leaf" id="sdbLeaf3">
            <div class="sdb-leaf-face front">
              <div class="sdb-page-art">
                <div class="sdb-tag">LEVHA 06 // ISEE VISION</div>
                <div class="sdb-sketch-lead">Çözüm Makina Ar-Ge</div>
                <div class="sdb-sketch-sub">Endüstriyel Yapay Zeka Kalite Kontrol</div>
              </div>
            </div>
            <div class="sdb-leaf-face back">
              <div class="sdb-page-art">
                <div class="sdb-tag">LEVHA 07 // KURUMSAL YAPAY ZEKA</div>
                <div class="sdb-sketch-lead">Martur Fompak AI</div>
                <div class="sdb-sketch-sub">RAG &amp; Çoklu-Ajan Orkestrasyonu</div>
              </div>
            </div>
          </div>

          <!-- HARDCOVER RIGHT WING (CLAPS SHUT INTO LEATHER COVER) -->
          <div class="sdb-wing sdb-right" id="sdbWingRight">
            <div class="sdb-face sdb-paper">
              <div class="sdb-page-art">
                <div class="sdb-tag">LEVHA 09 // 2026 MANİFESTOSU</div>
                <div class="sdb-sketch-lead">İnsan Formu — Makine Mantığı</div>
                <div class="sdb-sketch-sub">Otonom Sürü Zekası &amp; Gelecek Vizyonu</div>
              </div>
            </div>

            <!-- Leather Front Cover (Visible when closed) -->
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

      <!-- LAYER 3: 02 HİKAYEM (ORIGINAL INTERACTIVE 3D SKETCHBOOK WITH 9 SPREADS & LOUPE) -->
      <div class="flow-layer flow-story-layer" id="flowStoryLayer">
        <iframe
          id="story-interactive-frame"
          class="flow-iframe"
          data-src="/landing-pages/meng-to-sketchbook.html"
          title="Ozan Arda Özçelik — 02 Hikayem (3D Dokunsal Eskiz Defteri)"
          sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
          loading="lazy"
          allow="fullscreen"
        ></iframe>
      </div>

      <!-- LAYER 4: 01 ANA SAYFA (ORIGINAL FULLSCREEN HERO WITH FLUID CYBORG CANVAS - ZOOMS OUT TO DESK) -->
      <div class="flow-layer flow-hero-layer hero-home" id="flowHeroLayer">
        <!-- WebGL Fluid Canvas Background (reveals robot on mouse movement) -->
        <div class="hero-home-canvas-wrap">
          <canvas id="hero-fluid-canvas"></canvas>
        </div>

        <!-- Authentic Sketchbook Spread Framing on Home Hero -->
        <div class="hero-page-decorations" aria-hidden="true">
          <div class="hpd-corner tl">⌜</div>
          <div class="hpd-corner tr">⌝</div>
          <div class="hpd-corner bl">⌞</div>
          <div class="hpd-corner br">⌟</div>
          <div class="hpd-plate-tag">✦ LEVHA 00 // BAŞLANGIÇ · İNSAN FORMU ➔ MAKİNE MANTIĞI ✦</div>
          <div class="hpd-archival-num">KİŞİSEL ARŞİV // VOL. 00 · 2026 EDİSYON</div>
        </div>

        <!-- Editorial Foreground Overlay -->
        <div class="hero-home-overlay" id="heroHomeOverlay">
          <div class="hero-home-container">
            <div class="hero-home-left">
              <div class="hero-home-badge">
                <span class="dot-live"></span>
                <span class="lang-tr">LEVHA 00 // BİLGİSAYAR MÜHENDİSİ</span>
                <span class="lang-en">PLATE 00 // COMPUTER ENGINEER</span>
              </div>

              <h1 class="hero-home-title">
                <span>OZAN ARDA</span>
                <span class="title-outline">ÖZÇELİK<em>.</em></span>
              </h1>

              <p class="hero-home-desc">
                <span class="lang-tr">Bilgisayar Mühendisi · Şahi Otonom SİHA Takımı Yazılım Ekip Lideri, Bilgisayarlı Görü (OpenCV, YOLO), Endüstriyel Robotik (ROS 2 &amp; Gazebo) ve Derin Öğrenme Sistemleri.</span>
                <span class="lang-en">Computer Engineer · Autonomous UAV Software Lead, Computer Vision (OpenCV, YOLO), Industrial Robotics (ROS 2 &amp; Gazebo) and Deep Learning Architectures.</span>
              </p>

              <div class="hero-home-specs">
                <div class="spec-card">
                  <span class="spec-label"><span class="lang-tr">UNVAN</span><span class="lang-en">TITLE</span></span>
                  <span class="spec-val"><span class="lang-tr">Bilgisayar Mühendisi</span><span class="lang-en">Computer Engineer</span></span>
                </div>
                <div class="spec-card">
                  <span class="spec-label"><span class="lang-tr">GÖREV</span><span class="lang-en">ROLE</span></span>
                  <span class="spec-val"><span class="lang-tr">Yazılım Ekip Lideri</span><span class="lang-en">Software Team Lead</span></span>
                </div>
                <div class="spec-card">
                  <span class="spec-label"><span class="lang-tr">TAKIM</span><span class="lang-en">TEAM</span></span>
                  <span class="spec-val">Şahi SİHA (Teknofest)</span>
                </div>
              </div>

              <div class="hero-home-actions">
                <button type="button" class="hero-cta-btn" id="btnExploreStory">
                  <span><span class="lang-tr">02 / HİKAYEMİ AÇ (9 LEVHA)</span><span class="lang-en">02 / OPEN MY STORY</span></span>
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
          <span><span class="lang-tr">BİLGİSAYAR MÜHENDİSİ</span><span class="lang-en">COMPUTER ENGINEER</span></span>
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
          <span><span class="lang-tr">BİLGİSAYAR MÜHENDİSİ</span><span class="lang-en">COMPUTER ENGINEER</span></span>
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
            <span class="lang-tr">Çözüm Makina bünyesinde geliştirilen, yüksek hızlı üretim hatlarında milimetrik yüzey hatalarını tespit eden endüstriyel kamera ve yapay zeka kalite kontrol sistemi.</span>
            <span class="lang-en">Industrial camera and AI quality control system detecting sub-millimeter surface defects on high-speed automated production lines.</span>
          </p>
          <div class="project-card-tags">
            <span class="project-tag">C++</span>
            <span class="project-tag">OpenCV</span>
            <span class="project-tag">TensorRT</span>
            <span class="project-tag">Qt</span>
            <span class="project-tag">CUDA</span>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">★ <span id="star-ISEE-Vision-Defect-Inspect">19</span></span>
              <span class="project-stat-item">⑂ <span id="fork-ISEE-Vision-Defect-Inspect">4</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub</span> ↗
            </a>
          </div>
        </article>

        <!-- 3. Multi-Robot ROS 2 Navigation & Swarm -->
        <article class="project-card" data-category="robotics" data-reveal>
          <div class="project-card-header">
            <span class="project-cat-badge">ROBOTİK // OTONOMİ</span>
          </div>
          <h3 class="project-card-title">ROS2-Swarm-Nav2-SLAM</h3>
          <p class="project-card-desc">
            <span class="lang-tr">Gazebo ortamında çoklu mobil robotların haritalama (SLAM), Nav2 seyrüsefer ve çarpışma önleyici sürü koordinasyon algoritmaları.</span>
            <span class="lang-en">Multi-agent mapping (SLAM), Nav2 navigation stack, and decentralized collision-free swarm coordination algorithms in Gazebo.</span>
          </p>
          <div class="project-card-tags">
            <span class="project-tag">ROS 2 Humble</span>
            <span class="project-tag">Nav2</span>
            <span class="project-tag">SLAM</span>
            <span class="project-tag">Gazebo</span>
            <span class="project-tag">C++</span>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">★ <span id="star-ROS2-Swarm-Nav2-SLAM">18</span></span>
              <span class="project-stat-item">⑂ <span id="fork-ROS2-Swarm-Nav2-SLAM">3</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub</span> ↗
            </a>
          </div>
        </article>

        <!-- 4. Enterprise Multi-Agent Copilot System -->
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

    <!-- [05] İLETİŞİM / SINGLE-SCREEN VIEWPORT SECTION -->
    <section class="section section-dark section-contact-screen" id="contact" data-reveal>
      <div class="contact-screen-inner">
        
        <!-- Header -->
        <div class="section-head" style="border-bottom-color: var(--rule-light); width: 100%;">
          <h2 class="section-title" style="color: #fff;">
            <span class="lang-tr">05 / İletişim</span>
            <span class="lang-en">05 / Contact</span>
          </h2>
          <span class="section-folio" style="color: var(--dim);">Ozan Arda Özçelik</span>
        </div>

        <!-- Main Body -->
        <div class="contact-hero-wrap">
          <h2 class="cta-heading">
            <span><span class="lang-tr">GELECEĞİN</span><span class="lang-en">PIONEER</span></span>
            <span class="italic-whisper"><span class="lang-tr">otonom sistemlerini</span><span class="lang-en">the next autonomous</span></span>
            <span><span class="lang-tr">BİRLİKTE KURALIM.</span><span class="lang-en">SYSTEM TOGETHER.</span></span>
          </h2>

          <p class="cta-sub">
            <span class="lang-tr">Otonom hava robotiği araştırmaları, bilgisayarlı görü (OpenCV, YOLO) ve kurumsal yapay zeka sistemleri için doğrudan iletişime geçebilirsiniz.</span>
            <span class="lang-en">Available for autonomous aerial robotics research, computer vision engineering, and enterprise AI system collaborations.</span>
          </p>

          <!-- Direct Action Buttons Grid -->
          <div class="contact-actions-grid">
            <a href="mailto:ozan.a.ozcelik@gmail.com" class="contact-action-btn primary-btn">
              <span><span class="lang-tr">İletişime Geç</span><span class="lang-en">Initiate Commission</span></span>
              <span class="cta-glyph">→</span>
            </a>

            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="contact-action-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub ↗</span>
            </a>

            <a href="https://linkedin.com/in/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="contact-action-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn ↗</span>
            </a>

            <a href="/OzanArdaOZCELIK_CV_TR.pdf" download="OzanArdaOZCELIK_CV_TR.pdf" class="contact-action-btn cv-btn">
              <span><span class="lang-tr">CV İndir (TR) ↓</span><span class="lang-en">CV (TR) ↓</span></span>
            </a>

            <a href="/OzanArdaOZCELIK_CV_EN.pdf" download="OzanArdaOZCELIK_CV_EN.pdf" class="contact-action-btn cv-btn">
              <span><span class="lang-tr">CV İndir (ENG) ↓</span><span class="lang-en">Download CV (ENG) ↓</span></span>
            </a>
          </div>
        </div>

        <!-- Footer Meta Row -->
        <div class="contact-footer-meta">
          <div class="meta-item">
            <span class="meta-label">EMAIL</span>
            <a href="mailto:ozan.a.ozcelik@gmail.com" class="meta-val">ozan.a.ozcelik@gmail.com</a>
          </div>
          <div class="meta-item">
            <span class="meta-label">TEL</span>
            <a href="tel:+905376144156" class="meta-val">+90 537 614 41 56</a>
          </div>
          <div class="meta-item">
            <span class="meta-label"><span class="lang-tr">KONUM</span><span class="lang-en">BASE</span></span>
            <span class="meta-val">Pendik, İstanbul &amp; Tekirdağ, TR</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">UNVAN</span>
            <span class="meta-val"><span class="lang-tr">Bilgisayar Mühendisi</span><span class="lang-en">Computer Engineer</span></span>
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

      const storyIframe = document.getElementById('story-interactive-frame');
      const shelfIframe = document.getElementById('shelf-interactive-frame');

      // Smart Deferred Hydration for Iframes (Zero initial lag)
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

      // Pre-hydrate Story Iframe gently in background
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setTimeout(hydrateStoryIframe, 300), { timeout: 1500 });
      } else {
        setTimeout(hydrateStoryIframe, 400);
      }

      // Pre-hydrate Shelf Iframe
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setTimeout(hydrateShelfIframe, 800), { timeout: 2500 });
      } else {
        setTimeout(hydrateShelfIframe, 1000);
      }

      window.addEventListener('scroll', () => {
        hydrateStoryIframe();
        hydrateShelfIframe();
      }, { passive: true, once: true });

      window.addEventListener('pointerdown', () => {
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

      // 2. Pure Scroll-Driven Continuous 3D Zoom & Docking Timeline:
      // - p = 0.00: 01 Ana Sayfa Fullscreen Hero Spread
      // - p in [0.00, 0.16]: Smooth 3D Zoom-Out onto Desk view, revealing 02 Hikayem
      // - p in [0.16, 0.50]: 02 Hikayem (Original 3D Meng-To Sketchbook) active
      // - p in [0.50, 0.85]: 3D Multi-page fluttering riffle turns & hardcover clap shut into Slot 0
      // - p in [0.82, 1.00]: 03 Yeteneklerim (3D Shelf) active
      const flowContainer = document.getElementById('heroScrollFlow');
      const flowHeroLayer = document.getElementById('flowHeroLayer');
      const flowStoryLayer = document.getElementById('flowStoryLayer');
      const flow3dBookLayer = document.getElementById('flow3dBookLayer');
      const flowShelfLayer = document.getElementById('flowShelfLayer');
      const scrollDockBook = document.getElementById('scrollDockBook');

      const leaf1 = document.getElementById('sdbLeaf1');
      const leaf2 = document.getElementById('sdbLeaf2');
      const leaf3 = document.getElementById('sdbLeaf3');
      const sdbWingRight = document.getElementById('sdbWingRight');

      const btnNavHome = document.getElementById('btnNavHome');
      const btnNavStory = document.getElementById('btnNavStory');
      const btnNavSkills = document.getElementById('btnNavSkills');
      const btnNavProjects = document.getElementById('btnNavProjects');
      const btnNavContact = document.getElementById('btnNavContact');
      const projectsSec = document.getElementById('projects-section');
      const contactSec = document.getElementById('contact');

      function getDocTop(el) {
        if (!el) return 999999;
        const rect = el.getBoundingClientRect();
        return rect.top + window.scrollY;
      }

      function smoothstep(t) {
        const x = Math.max(0, Math.min(1, t));
        return x * x * (3 - 2 * x);
      }

      // Shelf active state management
      let isShelfActive = false;
      function setShelfActiveState(active) {
        if (active && !shelfIframeLoaded) {
          hydrateShelfIframe();
        }
        if (isShelfActive === active) return;
        isShelfActive = active;
        if (shelfIframe && shelfIframe.contentWindow) {
          try {
            shelfIframe.contentWindow.postMessage({ type: 'SET_ACTIVE', active: active }, '*');
          } catch (e) {}
        }
      }

      let lastP = -1;
      let lastScrollY = -1;

      function onScrollHeroFlow() {
        if (!flowContainer || !flowHeroLayer) return;

        const rect = flowContainer.getBoundingClientRect();
        const winH = window.innerHeight;
        const totalTravel = flowContainer.offsetHeight - winH;
        if (totalTravel <= 0) return;

        const scrollY = window.scrollY;
        let p = -rect.top / totalTravel;
        p = Math.max(0, Math.min(1, p));

        // Manage Shelf WebGL suspension
        const flowTop = getDocTop(flowContainer);
        const flowH = flowContainer.offsetHeight;
        const inShelfRange = (scrollY >= flowTop + (flowH - winH) * 0.70) && (scrollY <= flowTop + flowH + 300);
        setShelfActiveState(inShelfRange);

        // Skip heavy style recalculations if scroll hasn't moved
        if (Math.abs(p - lastP) < 0.0003 && Math.abs(scrollY - lastScrollY) < 1) return;
        lastP = p;
        lastScrollY = scrollY;

        // =========================================================================
        // 1. STAGE 1: 01 ANA SAYFA FULLSCREEN -> 3D ZOOM OUT ONTO DESK (p: 0.00 -> 0.16)
        // =========================================================================
        if (p <= 0.18) {
          const zoomEnd = 0.13;
          const zoomT = smoothstep(Math.min(1, p / zoomEnd));
          const scale = 1.0 - zoomT * 0.38; // 1.00 down to 0.62
          const rotateX = zoomT * 4.5;
          const shadowAlpha = zoomT * 0.24;
          const shadowY = zoomT * 28;
          const shadowBlur = zoomT * 64;
          const radius = zoomT * 6;

          flowHeroLayer.style.transform =
            'scale(' + scale.toFixed(3) + ') ' +
            'rotateX(' + rotateX.toFixed(2) + 'deg)';
          flowHeroLayer.style.boxShadow = '0 ' + shadowY.toFixed(1) + 'px ' + shadowBlur.toFixed(1) + 'px rgba(43, 39, 33, ' + shadowAlpha.toFixed(3) + ')';
          flowHeroLayer.style.borderRadius = radius.toFixed(1) + 'px';

          // Smooth crossfade into story layer as zoom completes
          let heroOpacity = 1;
          if (p > 0.09) {
            heroOpacity = Math.max(0, 1 - (p - 0.09) / 0.06);
          }
          flowHeroLayer.style.opacity = heroOpacity.toFixed(3);
          flowHeroLayer.style.visibility = heroOpacity > 0 ? 'visible' : 'hidden';
          flowHeroLayer.style.pointerEvents = p < 0.08 ? 'auto' : 'none';
        } else {
          flowHeroLayer.style.opacity = '0';
          flowHeroLayer.style.visibility = 'hidden';
          flowHeroLayer.style.pointerEvents = 'none';
        }

        // =========================================================================
        // 2. STAGE 2: 02 HİKAYEM (ORIGINAL 3D MENG-TO SKETCHBOOK) (p: 0.09 -> 0.54)
        // =========================================================================
        if (flowStoryLayer) {
          let storyOpacity = 0;
          if (p < 0.09) {
            storyOpacity = 0;
          } else if (p < 0.15) {
            storyOpacity = (p - 0.09) / 0.06;
          } else if (p <= 0.48) {
            storyOpacity = 1;
          } else if (p <= 0.54) {
            storyOpacity = Math.max(0, 1 - (p - 0.48) / 0.06);
          } else {
            storyOpacity = 0;
          }

          flowStoryLayer.style.opacity = storyOpacity.toFixed(3);
          flowStoryLayer.style.visibility = (p >= 0.09 && p <= 0.54) ? 'visible' : 'hidden';
          flowStoryLayer.style.pointerEvents = (p >= 0.14 && p <= 0.48) ? 'auto' : 'none';
        }

        // =========================================================================
        // 3. STAGE 3: 3D MULTI-PAGE RIFFLE FLUTTER & HARDCOVER CLAP (p: 0.48 -> 0.85)
        // =========================================================================
        if (flow3dBookLayer) {
          let book3dOpacity = 0;
          if (p < 0.48) {
            book3dOpacity = 0;
          } else if (p < 0.54) {
            book3dOpacity = (p - 0.48) / 0.06;
          } else if (p <= 0.82) {
            book3dOpacity = 1;
          } else if (p <= 0.88) {
            book3dOpacity = Math.max(0, 1 - (p - 0.82) / 0.06);
          } else {
            book3dOpacity = 0;
          }
          flow3dBookLayer.style.opacity = book3dOpacity.toFixed(3);
          flow3dBookLayer.style.visibility = (p >= 0.48 && p <= 0.88) ? 'visible' : 'hidden';
        }

        if (p >= 0.48 && p <= 0.88 && scrollDockBook) {
          // Leaf 1
          let leaf1P = 0;
          if (p >= 0.60) leaf1P = 1;
          else if (p > 0.52) leaf1P = smoothstep((p - 0.52) / 0.08);
          leaf1.style.transform = 'rotateY(' + (-leaf1P * 180).toFixed(2) + 'deg)';
          leaf1.style.zIndex = leaf1P < 0.5 ? 8 : 12;

          // Leaf 2
          let leaf2P = 0;
          if (p >= 0.66) leaf2P = 1;
          else if (p > 0.58) leaf2P = smoothstep((p - 0.58) / 0.08);
          leaf2.style.transform = 'rotateY(' + (-leaf2P * 180).toFixed(2) + 'deg)';
          leaf2.style.zIndex = leaf2P < 0.5 ? 7 : 13;

          // Leaf 3
          let leaf3P = 0;
          if (p >= 0.72) leaf3P = 1;
          else if (p > 0.64) leaf3P = smoothstep((p - 0.64) / 0.08);
          leaf3.style.transform = 'rotateY(' + (-leaf3P * 180).toFixed(2) + 'deg)';
          leaf3.style.zIndex = leaf3P < 0.5 ? 6 : 14;

          // Hardcover Right Wing Clap Shut
          let foldP = 0;
          if (p >= 0.76) foldP = 1;
          else if (p > 0.70) foldP = smoothstep((p - 0.70) / 0.06);
          const rightDeg = -foldP * 180;
          sdbWingRight.style.transform = 'rotateY(' + rightDeg.toFixed(2) + 'deg)';
          sdbWingRight.style.zIndex = foldP > 0.5 ? 20 : 2;

          // Docking into Shelf Slot 0
          if (p <= 0.76) {
            scrollDockBook.style.transform = 'translateY(0px) scale(1.000) rotateY(0deg) rotateX(4deg)';
            scrollDockBook.style.boxShadow = '0 32px 64px rgba(43, 39, 33, 0.24)';
          } else {
            let dockP = smoothstep((p - 0.76) / 0.10);
            const scale = 1 - dockP * 0.77; // 1.00 -> 0.23
            const translateY = dockP * 140;
            const rotateY = dockP * 15;
            const rotateX = 4 + dockP * 3;

            scrollDockBook.style.transform =
              'translateY(' + translateY.toFixed(1) + 'px) ' +
              'scale(' + scale.toFixed(3) + ') ' +
              'rotateY(' + rotateY.toFixed(1) + 'deg) ' +
              'rotateX(' + rotateX.toFixed(1) + 'deg)';
            scrollDockBook.style.boxShadow = '0 ' + (32 - dockP * 24).toFixed(1) + 'px ' + (64 - dockP * 48).toFixed(1) + 'px rgba(43, 39, 33, ' + (0.24 - dockP * 0.14).toFixed(3) + ')';
          }
        }

        // =========================================================================
        // 4. STAGE 4: 03 YETENEKLERİM (3D SHELF IFRAME) (p: 0.80 -> 1.00)
        // =========================================================================
        if (flowShelfLayer) {
          let shelfFade = 0;
          if (p > 0.80) {
            shelfFade = smoothstep((p - 0.80) / 0.10);
          }
          flowShelfLayer.style.opacity = shelfFade.toFixed(3);
          flowShelfLayer.style.visibility = p > 0.78 ? 'visible' : 'hidden';
          flowShelfLayer.style.pointerEvents = p >= 0.88 ? 'auto' : 'none';
        }

        // =========================================================================
        // 5-SECTION NAV TRACKING & ACTIVE PILL HIGHLIGHT
        // =========================================================================
        const projectsTop = getDocTop(projectsSec) - winH * 0.35;
        const contactTop = getDocTop(contactSec) - winH * 0.35;

        [btnNavHome, btnNavStory, btnNavSkills, btnNavProjects, btnNavContact].forEach(b => b && b.classList.remove('is-active'));

        if (scrollY >= contactTop) {
          if (btnNavContact) btnNavContact.classList.add('is-active');
        } else if (scrollY >= projectsTop) {
          if (btnNavProjects) btnNavProjects.classList.add('is-active');
        } else if (p >= 0.82) {
          if (btnNavSkills) btnNavSkills.classList.add('is-active');
        } else if (p >= 0.10) {
          if (btnNavStory) btnNavStory.classList.add('is-active');
        } else {
          if (btnNavHome) btnNavHome.classList.add('is-active');
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
          const totalTravel = flowContainer.offsetHeight - window.innerHeight;
          window.scrollTo({ top: totalTravel * 0.18, behavior: 'smooth' });
        }
      }
      function scrollToShelf() {
        if (flowContainer) {
          const totalTravel = flowContainer.offsetHeight - window.innerHeight;
          window.scrollTo({ top: totalTravel * 0.95, behavior: 'smooth' });
        }
      }
      function scrollToProjects() {
        if (projectsSec) {
          const top = getDocTop(projectsSec) - 60;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
      function scrollToContact() {
        if (contactSec) {
          const top = getDocTop(contactSec) - 60;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }

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

      // Slide-Down Menu Toggle
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

      // Projects Category Filtering
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

      // Live GitHub Repositories Hydration
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

      // IntersectionObserver for [data-reveal]
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
console.log('Successfully written seamless zoom-out index.html! Bytes:', html.length);
