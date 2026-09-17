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
    <a href="#home" class="nav-brand" id="navBrandLink">OZAN ARDA</a>

    <!-- 5-PILL VIEW SELECTOR -->
    <div class="nav-view-switcher" id="sectionNavSwitcher">
      <button type="button" class="view-switch-pill is-active" id="btnNavHome" title="Ana Sayfa">
        <span class="view-switch-dot"></span>
        <span><span class="lang-tr">Ana Sayfa</span><span class="lang-en">Home</span></span>
      </button>
      <button type="button" class="view-switch-pill" id="btnNavStory" title="01 Hikayem (3D Eskiz Defteri)">
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
        <a href="#home" class="menu-nav-link" id="menu-link-home">
          <span class="menu-num">00</span>
          <span><span class="lang-tr">00 / Ana Sayfa (Giriş)</span><span class="lang-en">00 / Home (Overview)</span></span>
        </a>
      </li>
      <li class="menu-nav-item">
        <a href="#heroScrollFlow" class="menu-nav-link" id="menu-link-story">
          <span class="menu-num">01</span>
          <span><span class="lang-tr">01 / Hikayem (3D Eskiz Defteri)</span><span class="lang-en">01 / My Story (3D Sketchbook)</span></span>
        </a>
      </li>
      <li class="menu-nav-item">
        <a href="#heroScrollFlow" class="menu-nav-link" id="menu-link-skills">
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
       00 ANA SAYFA: EDITORIAL HERO WITH INTERACTIVE FLUID PORTRAIT
       ========================================================================= -->
  <header class="hero-home" id="home">
    <div class="hero-home-canvas-wrap">
      <canvas id="hero-fluid-canvas"></canvas>
    </div>

    <!-- Authentic Sketchbook Spread Framing on Home Hero -->
    <div class="hero-page-decorations" aria-hidden="true">
      <span class="hpd-corner tl">+</span>
      <span class="hpd-corner tr">+</span>
      <span class="hpd-corner bl">+</span>
      <span class="hpd-corner br">+</span>
      <span class="hpd-plate-tag">LEVHA 00 // GİRİŞ</span>
      <span class="hpd-archival-num">DOC. NO 2026-00</span>
    </div>

    <!-- Editorial Overlay Content -->
    <div class="hero-home-overlay">
      <div class="hero-home-container">
        <div class="hero-home-left">
          <div class="hero-home-badge">
            <span class="dot-live"></span>
            <span><span class="lang-tr">OTONOM SİSTEMLER AR-GE</span><span class="lang-en">AUTONOMOUS SYSTEMS R&amp;D</span></span>
          </div>

          <h1 class="hero-home-title">
            <span>OZAN ARDA</span>
            <span class="title-outline">ÖZÇELİK</span>
          </h1>

          <p class="hero-home-desc">
            <span class="lang-tr">İnsan formu — makine mantığı. Gerçek zamanlı bilgisayarlı görü (YOLOv8, CUDA), otonom İHA hedef kilitlenme güdümü, ROS 2 simülasyonları ve kurumsal çoklu-ajan yapay zeka mimarileri.</span>
            <span class="lang-en">Human form — machine logic. Real-time computer vision (YOLOv8, CUDA), autonomous UAV target locking &amp; guidance, ROS 2 simulations, and enterprise multi-agent AI systems.</span>
          </p>

          <!-- 3 Quick Spec Cards -->
          <div class="hero-home-specs">
            <div class="spec-card">
              <span class="spec-label"><span class="lang-tr">ROL</span><span class="lang-en">ROLE</span></span>
              <span class="spec-val"><span class="lang-tr">Yazılım Ekip Lideri</span><span class="lang-en">Software Lead</span></span>
            </div>
            <div class="spec-card">
              <span class="spec-label"><span class="lang-tr">UZMANLIK</span><span class="lang-en">FOCUS</span></span>
              <span class="spec-val">CV, ROS 2, SİHA</span>
            </div>
            <div class="spec-card">
              <span class="spec-label"><span class="lang-tr">DURUM</span><span class="lang-en">STATUS</span></span>
              <span class="spec-val"><span class="lang-tr">● Görevlere Açık</span><span class="lang-en">● Available</span></span>
            </div>
          </div>

          <div class="hero-home-actions">
            <button type="button" class="hero-cta-btn" id="heroBtnStory">
              <span><span class="lang-tr">Hikayemi Keşfet</span><span class="lang-en">Explore Story</span></span>
              <span class="hero-cta-arrow">↓</span>
            </button>
            <span class="hero-interactive-hint"><span class="lang-tr">✦ Portreye dokunun veya kaydırın</span><span class="lang-en">✦ Touch portrait to interact</span></span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- =========================================================================
       HERO SCROLL FLOW (01 HİKAYEM 3D SKETCHBOOK -> 3D DOCKING TRANSITION -> 02 YETENEKLERİM 3D SHELF)
       - Layer 3: 01 Hikayem (3D Meng-To Sketchbook iframe with 9 milestone spreads & loupe)
       - Layer 2: 3D Flutter Riffle (Closing 3D volume claps shut into leather brown book & docks into Slot 0)
       - Layer 1: 02 Yeteneklerim (3D Bookshelf on warm background)
       ========================================================================= -->
  <div class="hero-scroll-flow" id="heroScrollFlow" style="height: 480vh;">
    <div class="hero-sticky-viewport" id="heroStickyViewport">
      
      <!-- LAYER 1: 02 YETENEKLERİM 3D SHELF IFRAME (Fades in as book docks) -->
      <div class="flow-layer flow-shelf-layer" id="flowShelfLayer">
        <iframe
          id="shelf-interactive-frame"
          class="flow-iframe"
          data-src="/landing-pages/skills-shelf.html"
          title="Ozan Arda Özçelik — Yeteneklerim &amp; Çalışma Kitaplığı"
          sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
          loading="lazy"
          allow="fullscreen"
        ></iframe>
      </div>

      <!-- LAYER 2: 3D MULTI-PAGE RIFFLE & HARDCOVER DOCK TRANSITION -->
      <div class="flow-layer flow-3d-book-layer" id="flow3dBookLayer">
        <div class="scroll-dock-book" id="scrollDockBook">
          
          <!-- Spine (Vertical Leather Binding with Gold Letters) -->
          <div class="sdb-spine">
            <span>✦ VOL. 00 · HİKAYEM ✦</span>
          </div>

          <!-- SPREAD BASE: LEFT WING (Fixed base of open spread) -->
          <div class="sdb-wing sdb-left" id="sdbWingLeft">
            <div class="sdb-face sdb-paper">
              <div class="sdb-page-inner">
                <div class="sdb-archival-header">
                  <span class="sdb-tag">LEVHA 01 // 2008 · İLK KIVILCIM</span>
                  <span class="sdb-doc-num">DOC. 01/09</span>
                </div>
                <div class="sdb-body-content">
                  <div class="sdb-sketch-lead">3 Yaş: İlk Bilgisayar</div>
                  <div class="sdb-sketch-sub">Windows XP, CD-ROM · Algoritmik Merak</div>
                  <p class="sdb-desc-text">
                    Tüplü monitörün parlaklığında açılan ilk Windows XP penceresi ve işletim sisteminin dosya yapısını anlama merakı.
                  </p>
                </div>
                <div class="sdb-page-footer">
                  <span class="sdb-spec-pill">C++ TEMELİ</span>
                  <span class="sdb-spec-pill">BELLEK YÖNETİMİ</span>
                  <span class="sdb-page-num">SAYFA 01</span>
                </div>
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
                <div class="sdb-rule"></div>
                <div class="sdb-meta">2026 EDİSYON // ARŞİV KOPYASI</div>
              </div>
            </div>
          </div>

          <!-- FLUTTERING LEAF 1 (Turns P.02 -> P.03) -->
          <div class="sdb-leaf" id="sdbLeaf1">
            <div class="sdb-leaf-face front">
              <div class="sdb-paper">
                <div class="sdb-page-inner">
                  <div class="sdb-archival-header">
                    <span class="sdb-tag">LEVHA 02 // LİSE DÖNEMİ</span>
                    <span class="sdb-doc-num">DOC. 02/09</span>
                  </div>
                  <div class="sdb-body-content">
                    <div class="sdb-sketch-lead">Kırımlı Fazilet Olcay A.L.</div>
                    <div class="sdb-sketch-sub">C++ &amp; Algoritmik Problem Çözme</div>
                    <p class="sdb-desc-text">
                      Lise yıllarında C++ programlama ve veri yapıları ile başlayan mühendislik disiplini ve yazılım geliştirme aşkı.
                    </p>
                  </div>
                  <div class="sdb-page-footer">
                    <span class="sdb-spec-pill">VERİ YAPILARI</span>
                    <span class="sdb-page-num">SAYFA 02</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="sdb-leaf-face back">
              <div class="sdb-paper">
                <div class="sdb-page-inner">
                  <div class="sdb-archival-header">
                    <span class="sdb-tag">LEVHA 03 // BİLGİSAYAR MÜHENDİSLİĞİ</span>
                    <span class="sdb-doc-num">DOC. 03/09</span>
                  </div>
                  <div class="sdb-body-content">
                    <div class="sdb-sketch-lead">Tekirdağ Namık Kemal Üni.</div>
                    <div class="sdb-sketch-sub">Yüksek Onur Derecesi &amp; Gömülü Sistemler</div>
                    <p class="sdb-desc-text">
                      Bilgisayar Mühendisliği lisans programı; mikroişlemciler, donanım optimizasyonu ve gömülü yazılım mimarileri.
                    </p>
                  </div>
                  <div class="sdb-page-footer">
                    <span class="sdb-spec-pill">LİSANS DERECE</span>
                    <span class="sdb-page-num">SAYFA 03</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- FLUTTERING LEAF 2 (Turns P.04 -> P.05) -->
          <div class="sdb-leaf" id="sdbLeaf2">
            <div class="sdb-leaf-face front">
              <div class="sdb-paper">
                <div class="sdb-page-inner">
                  <div class="sdb-archival-header">
                    <span class="sdb-tag">LEVHA 04 // BİLGİSAYARLI GÖRÜ</span>
                    <span class="sdb-doc-num">DOC. 04/09</span>
                  </div>
                  <div class="sdb-body-content">
                    <div class="sdb-sketch-lead">OpenCV &amp; Piksel Matrisleri</div>
                    <div class="sdb-sketch-sub">CUDA Hızlandırma &amp; Optik Akış</div>
                    <p class="sdb-desc-text">
                      Kamera sensörlerinden gelen ham piksel akışını matris seviyesinde CUDA çekirdekleri ile işleyip anlık tespit yapma.
                    </p>
                  </div>
                  <div class="sdb-page-footer">
                    <span class="sdb-spec-pill">OPENCV / CUDA</span>
                    <span class="sdb-page-num">SAYFA 04</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="sdb-leaf-face back">
              <div class="sdb-paper">
                <div class="sdb-page-inner">
                  <div class="sdb-archival-header">
                    <span class="sdb-tag">LEVHA 05 // ŞAHİ OTONOM SİHA</span>
                    <span class="sdb-doc-num">DOC. 05/09</span>
                  </div>
                  <div class="sdb-body-content">
                    <div class="sdb-sketch-lead">Yazılım Ekip Liderliği</div>
                    <div class="sdb-sketch-sub">120 FPS YOLOv8 + Kalman &amp; MAVLink</div>
                    <p class="sdb-desc-text">
                      TEKNOFEST Savaşan İHA Yarışması için hava hedeflerine milisaniye seviyesinde otonom kilitlenme ve uçuş güdüm yazılımı.
                    </p>
                  </div>
                  <div class="sdb-page-footer">
                    <span class="sdb-spec-pill">FLAGSHIP AR-GE</span>
                    <span class="sdb-page-num">SAYFA 05</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- FLUTTERING LEAF 3 (Turns P.06 -> P.07) -->
          <div class="sdb-leaf" id="sdbLeaf3">
            <div class="sdb-leaf-face front">
              <div class="sdb-paper">
                <div class="sdb-page-inner">
                  <div class="sdb-archival-header">
                    <span class="sdb-tag">LEVHA 06 // ISEE VISION</span>
                    <span class="sdb-doc-num">DOC. 06/09</span>
                  </div>
                  <div class="sdb-body-content">
                    <div class="sdb-sketch-lead">Çözüm Makina Ar-Ge</div>
                    <div class="sdb-sketch-sub">Endüstriyel Optik Kalite Kontrol</div>
                    <p class="sdb-desc-text">
                      Yüksek hızlı üretim hatlarında mikron seviyesinde yüzey hata tespiti yapan yapay zeka destekli optik kontrol sistemi.
                    </p>
                  </div>
                  <div class="sdb-page-footer">
                    <span class="sdb-spec-pill">SANAYİ 4.0</span>
                    <span class="sdb-page-num">SAYFA 06</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="sdb-leaf-face back">
              <div class="sdb-paper">
                <div class="sdb-page-inner">
                  <div class="sdb-archival-header">
                    <span class="sdb-tag">LEVHA 07 // KURUMSAL YAPAY ZEKA</span>
                    <span class="sdb-doc-num">DOC. 07/09</span>
                  </div>
                  <div class="sdb-body-content">
                    <div class="sdb-sketch-lead">Martur Fompak AI</div>
                    <div class="sdb-sketch-sub">RAG &amp; Çoklu-Ajan Karar Destek</div>
                    <p class="sdb-desc-text">
                      Otomotiv üretim süreçlerinde kurumsal verilerle beslenen LLM ajanlarının orkestrasyonu ve karar alma mimarisi.
                    </p>
                  </div>
                  <div class="sdb-page-footer">
                    <span class="sdb-spec-pill">AGENT ORCHESTRATION</span>
                    <span class="sdb-page-num">SAYFA 07</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- HARDCOVER RIGHT WING (CLAPS SHUT INTO LEATHER FRONT COVER) -->
          <div class="sdb-wing sdb-right" id="sdbWingRight">
            <div class="sdb-face sdb-paper">
              <div class="sdb-page-inner">
                <div class="sdb-archival-header">
                  <span class="sdb-tag">LEVHA 09 // 2026 MANİFESTOSU</span>
                  <span class="sdb-doc-num">DOC. 09/09</span>
                </div>
                <div class="sdb-body-content">
                  <div class="sdb-sketch-lead">İnsan Formu — Makine Mantığı</div>
                  <div class="sdb-sketch-sub">Otonom Sürü Zekası &amp; Gelecek Vizyonu</div>
                  <p class="sdb-desc-text">
                    Yapay zeka modellerini fiziksel robotik gövdelerle buluşturan, sıfır gecikmeli otonom sistemler vizyonu.
                  </p>
                </div>
                <div class="sdb-page-footer">
                  <span class="sdb-spec-pill">MANİFESTO</span>
                  <span class="sdb-page-num">SAYFA 09</span>
                </div>
              </div>
            </div>

            <!-- Leather Front Cover (Visible when closed) -->
            <div class="sdb-face sdb-front-cover">
              <div class="sdb-cover-foil">
                <div class="sdb-roman">✦ 00 ✦</div>
                <div>
                  <div class="sdb-title">HİKAYEM</div>
                  <div class="sdb-sub">OZAN ARDA ÖZÇELİK</div>
                </div>
                <div class="sdb-rule"></div>
                <div class="sdb-meta">9 DÖNÜM NOKTASI · 2008—2026</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- LAYER 3: 01 HİKAYEM (ORIGINAL 3D MENG-TO SKETCHBOOK WITH 9 SPREADS & LOUPE) -->
      <div class="flow-layer flow-story-layer" id="flowStoryLayer">
        <iframe
          id="story-interactive-frame"
          class="flow-iframe"
          data-src="/landing-pages/meng-to-sketchbook.html"
          title="Ozan Arda Özçelik — 01 Hikayem (3D Dokunsal Eskiz Defteri)"
          sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
          loading="lazy"
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

  <!-- FLUID HERO PORTRAIT SCRIPT -->
  <script type="module" src="/script.js"></script>

  <!-- SITE LOGIC: NAVIGATION, DOCKING TIMELINE, LANGUAGE & STATS -->
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

      // Pre-hydrate Story Iframe gently in background
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setTimeout(hydrateStoryIframe, 100), { timeout: 1000 });
      } else {
        setTimeout(hydrateStoryIframe, 150);
      }

      // Pre-hydrate Shelf Iframe
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setTimeout(hydrateShelfIframe, 500), { timeout: 2000 });
      } else {
        setTimeout(hydrateShelfIframe, 600);
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

      // 2. Pure Scroll-Driven Continuous 3D Riffle & Docking Timeline:
      // - p in [0.00, 0.30]: 01 Hikayem (Original 3D Meng-To Sketchbook) active
      // - p in [0.30, 0.88]: 3D Multi-page fluttering riffle turns & hardcover clap shut into Slot 0
      // - p in [0.86, 1.00]: 02 Yeteneklerim (3D Shelf) active
      const flowContainer = document.getElementById('heroScrollFlow');
      const flowStoryLayer = document.getElementById('flowStoryLayer');
      const flow3dBookLayer = document.getElementById('flow3dBookLayer');
      const flowShelfLayer = document.getElementById('flowShelfLayer');
      const scrollDockBook = document.getElementById('scrollDockBook');

      const leaf1 = document.getElementById('sdbLeaf1');
      const leaf2 = document.getElementById('sdbLeaf2');
      const leaf3 = document.getElementById('sdbLeaf3');
      const sdbWingRight = document.getElementById('sdbWingRight');

      // Navigation & Sections
      const homeSec = document.getElementById('home');
      const btnNavHome = document.getElementById('btnNavHome');
      const btnNavStory = document.getElementById('btnNavStory');
      const btnNavSkills = document.getElementById('btnNavSkills');
      const btnNavProjects = document.getElementById('btnNavProjects');
      const btnNavContact = document.getElementById('btnNavContact');

      const projectsSec = document.getElementById('projects-section');
      const contactSec = document.getElementById('contact');

      function smoothstep(t) {
        const c = Math.max(0, Math.min(1, t));
        return c * c * (3 - 2 * c);
      }

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

      let lastP = -1;
      let lastScrollY = -1;

      function onScrollHeroFlow() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
        const winH = window.innerHeight;

        if (!flowContainer) return;

        // Container scroll bounds
        const containerTop = getDocTop(flowContainer);
        const containerTravel = Math.max(1, flowContainer.offsetHeight - winH);
        let p = (scrollY - containerTop) / containerTravel;
        p = Math.max(0, Math.min(1, p));

        // Manage Shelf WebGL suspension
        const flowTop = getDocTop(flowContainer);
        const flowH = flowContainer.offsetHeight;
        const inShelfRange = (scrollY >= flowTop + (flowH - winH) * 0.70) && (scrollY <= flowTop + flowH + 300);
        setShelfActiveState(inShelfRange);

        // Skip heavy style recalculations if scroll hasn't moved
        if (Math.abs(p - lastP) < 0.0002 && Math.abs(scrollY - lastScrollY) < 1) return;
        lastP = p;
        lastScrollY = scrollY;

        // =========================================================================
        // 1. STAGE 1: 01 HİKAYEM (ORIGINAL 3D MENG-TO SKETCHBOOK) (p: 0.00 -> 0.36)
        // =========================================================================
        if (flowStoryLayer) {
          let storyOpacity = 1;
          if (p > 0.28 && p <= 0.36) {
            storyOpacity = Math.max(0, 1 - (p - 0.28) / 0.08);
          } else if (p > 0.36) {
            storyOpacity = 0;
          }

          flowStoryLayer.style.opacity = storyOpacity.toFixed(3);
          flowStoryLayer.style.visibility = p <= 0.36 ? 'visible' : 'hidden';
          flowStoryLayer.style.pointerEvents = (scrollY >= containerTop - 50 && p <= 0.28) ? 'auto' : 'none';
        }

        // =========================================================================
        // 2. STAGE 2: 3D MULTI-PAGE RIFFLE FLUTTER & HARDCOVER CLAP (p: 0.28 -> 0.94)
        // =========================================================================
        if (flow3dBookLayer) {
          let book3dOpacity = 0;
          if (p < 0.28) {
            book3dOpacity = 0;
          } else if (p < 0.36) {
            book3dOpacity = (p - 0.28) / 0.08;
          } else if (p <= 0.88) {
            book3dOpacity = 1;
          } else if (p <= 0.94) {
            book3dOpacity = Math.max(0, 1 - (p - 0.88) / 0.06);
          } else {
            book3dOpacity = 0;
          }
          flow3dBookLayer.style.opacity = book3dOpacity.toFixed(3);
          flow3dBookLayer.style.visibility = (p >= 0.28 && p <= 0.94) ? 'visible' : 'hidden';
        }

        if (p >= 0.28 && p <= 0.94 && scrollDockBook) {
          // Leaf 1 (Turns P.02 -> P.03) (p: 0.36 -> 0.50)
          let leaf1P = 0;
          if (p >= 0.50) leaf1P = 1;
          else if (p > 0.36) leaf1P = smoothstep((p - 0.36) / 0.14);
          leaf1.style.transform = 'rotateY(' + (-leaf1P * 180).toFixed(2) + 'deg)';
          leaf1.style.zIndex = leaf1P < 0.5 ? 8 : 12;

          // Leaf 2 (Turns P.04 -> P.05) (p: 0.50 -> 0.64)
          let leaf2P = 0;
          if (p >= 0.64) leaf2P = 1;
          else if (p > 0.50) leaf2P = smoothstep((p - 0.50) / 0.14);
          leaf2.style.transform = 'rotateY(' + (-leaf2P * 180).toFixed(2) + 'deg)';
          leaf2.style.zIndex = leaf2P < 0.5 ? 7 : 13;

          // Leaf 3 (Turns P.06 -> P.07) (p: 0.64 -> 0.76)
          let leaf3P = 0;
          if (p >= 0.76) leaf3P = 1;
          else if (p > 0.64) leaf3P = smoothstep((p - 0.64) / 0.12);
          leaf3.style.transform = 'rotateY(' + (-leaf3P * 180).toFixed(2) + 'deg)';
          leaf3.style.zIndex = leaf3P < 0.5 ? 6 : 14;

          // Hardcover Right Wing Clap Shut (p: 0.76 -> 0.88)
          let foldP = 0;
          if (p >= 0.88) foldP = 1;
          else if (p > 0.76) foldP = smoothstep((p - 0.76) / 0.12);
          const rightDeg = -foldP * 180;
          sdbWingRight.style.transform = 'rotateY(' + rightDeg.toFixed(2) + 'deg)';
          sdbWingRight.style.zIndex = foldP > 0.5 ? 20 : 2;

          // Docking into Shelf Slot 0 (p: 0.88 -> 0.96)
          if (p <= 0.88) {
            scrollDockBook.style.transform = 'translateY(0px) scale(1.000) rotateY(0deg) rotateX(4deg)';
            scrollDockBook.style.boxShadow = '0 40px 80px rgba(35, 25, 15, 0.32), 0 12px 24px rgba(35, 25, 15, 0.2)';
          } else {
            let dockP = smoothstep((p - 0.88) / 0.08);
            const scale = 1 - dockP * 0.77; // 1.00 -> 0.23
            const translateY = dockP * 140;
            const rotateY = dockP * 15;
            const rotateX = 4 + dockP * 3;

            scrollDockBook.style.transform =
              'translateY(' + translateY.toFixed(1) + 'px) ' +
              'scale(' + scale.toFixed(3) + ') ' +
              'rotateY(' + rotateY.toFixed(1) + 'deg) ' +
              'rotateX(' + rotateX.toFixed(1) + 'deg)';
            scrollDockBook.style.boxShadow = '0 ' + (40 - dockP * 30).toFixed(1) + 'px ' + (80 - dockP * 60).toFixed(1) + 'px rgba(35, 25, 15, ' + (0.32 - dockP * 0.20).toFixed(3) + ')';
          }
        }

        // =========================================================================
        // 3. STAGE 3: 02 YETENEKLERİM (3D SHELF IFRAME) (p: 0.88 -> 1.00)
        // =========================================================================
        if (flowShelfLayer) {
          let shelfFade = 0;
          if (p > 0.88) {
            shelfFade = smoothstep((p - 0.88) / 0.08);
          }
          flowShelfLayer.style.opacity = shelfFade.toFixed(3);
          flowShelfLayer.style.visibility = p > 0.86 ? 'visible' : 'hidden';
          flowShelfLayer.style.pointerEvents = p >= 0.92 ? 'auto' : 'none';
        }

        // =========================================================================
        // 4. NAV TRACKING & ACTIVE PILL HIGHLIGHT
        // =========================================================================
        const projectsTop = getDocTop(projectsSec) - winH * 0.35;
        const contactTop = getDocTop(contactSec) - winH * 0.35;
        const flowStart = containerTop - winH * 0.35;

        [btnNavHome, btnNavStory, btnNavSkills, btnNavProjects, btnNavContact].forEach(b => b && b.classList.remove('is-active'));

        if (scrollY >= contactTop) {
          if (btnNavContact) btnNavContact.classList.add('is-active');
        } else if (scrollY >= projectsTop) {
          if (btnNavProjects) btnNavProjects.classList.add('is-active');
        } else if (scrollY >= flowStart && p >= 0.88) {
          if (btnNavSkills) btnNavSkills.classList.add('is-active');
        } else if (scrollY >= flowStart) {
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
      window.__scrollToHome = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      window.__scrollToStory = function () {
        const top = getDocTop(flowContainer);
        window.scrollTo({ top: top, behavior: 'smooth' });
      };

      window.__scrollToSkills = function () {
        const top = getDocTop(flowContainer);
        const winH = window.innerHeight;
        const travel = Math.max(1, flowContainer.offsetHeight - winH);
        window.scrollTo({ top: top + travel * 0.92, behavior: 'smooth' });
      };

      window.__scrollToProjects = function () {
        const top = getDocTop(projectsSec);
        window.scrollTo({ top: top - 40, behavior: 'smooth' });
      };

      window.__scrollToContact = function () {
        const top = getDocTop(contactSec);
        window.scrollTo({ top: top - 40, behavior: 'smooth' });
      };

      const navBrand = document.getElementById('navBrandLink');
      if (navBrand) navBrand.addEventListener('click', (e) => { e.preventDefault(); window.__scrollToHome(); });

      if (btnNavHome) btnNavHome.addEventListener('click', window.__scrollToHome);
      if (btnNavStory) btnNavStory.addEventListener('click', window.__scrollToStory);
      if (btnNavSkills) btnNavSkills.addEventListener('click', window.__scrollToSkills);
      if (btnNavProjects) btnNavProjects.addEventListener('click', window.__scrollToProjects);
      if (btnNavContact) btnNavContact.addEventListener('click', window.__scrollToContact);

      const heroBtnStory = document.getElementById('heroBtnStory');
      if (heroBtnStory) heroBtnStory.addEventListener('click', window.__scrollToStory);

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

        document.getElementById('menu-link-home')?.addEventListener('click', (e) => {
          e.preventDefault();
          toggleMenu(false);
          window.__scrollToHome();
        });

        document.getElementById('menu-link-story')?.addEventListener('click', (e) => {
          e.preventDefault();
          toggleMenu(false);
          window.__scrollToStory();
        });

        document.getElementById('menu-link-skills')?.addEventListener('click', (e) => {
          e.preventDefault();
          toggleMenu(false);
          window.__scrollToSkills();
        });

        document.getElementById('menu-link-projects')?.addEventListener('click', (e) => {
          e.preventDefault();
          toggleMenu(false);
          window.__scrollToProjects();
        });

        document.getElementById('menu-link-contact')?.addEventListener('click', (e) => {
          e.preventDefault();
          toggleMenu(false);
          window.__scrollToContact();
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
console.log('Successfully written rich, clearly visible 3D closing index.html! Bytes:', html.length);
