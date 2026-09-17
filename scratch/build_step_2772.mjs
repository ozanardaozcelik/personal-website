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
       HERO SCROLL FLOW (01 HOME FULLSCREEN -> 3D ZOOM OUT ONTO DESK -> 9 SPREADS -> 3D DOCK -> 03 SHELF)
       - Starts full-screen edge-to-edge as the open first spread of the physical sketchbook
       - As user scrolls, the sticky viewport stays pinned while the 3D book ZOOMS OUT onto the desk
       - Turning leaves 0 to 8 turn sequentially across the desk
       - Right hardcover wing claps shut into the leather brown volume
       - Closed 3D volume scales down and docks right into 3D bookshelf Slot 0!
       ========================================================================= -->
  <div class="hero-scroll-flow" id="heroScrollFlow" style="height: 520vh;">
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

      <!-- LAYER 2: 3D PHYSICAL SKETCHBOOK STAGE (ZOOMS OUT & FLIPS 9 MILESTONES) -->
      <div class="flow-3d-stage" id="flow3dStage">
        <div class="physical-3d-book" id="physical3dBook">
          
          <!-- Central Spine & Fold Crease -->
          <div class="sdb-spine" id="sdbSpine">
            <span>00 · HİKAYEM</span>
          </div>
          <div class="sdb-spine-crease" id="sdbSpineCrease"></div>

          <!-- SPREAD 0 LEFT: BASE LEFT WING (Home Left Page / Opening Editorial) -->
          <div class="sdb-wing sdb-left" id="sdbWingLeft">
            <div class="sdb-face sdb-home-left">
              <div class="hero-home-badge">
                <span class="dot-live"></span>
                <span class="lang-tr">LEVHA 00 // BİLGİSAYAR MÜHENDİSİ</span>
                <span class="lang-en">PLATE 00 // COMPUTER ENGINEER</span>
              </div>

              <h1 class="hero-home-title" style="font-size: clamp(2rem, 3.8vw, 3.6rem); margin: 0.5rem 0;">
                <span>OZAN ARDA</span>
                <span class="title-outline">ÖZÇELİK<em>.</em></span>
              </h1>

              <p class="hero-home-desc" style="font-size: clamp(0.78rem, 1.1vw, 0.92rem); line-height: 1.55;">
                <span class="lang-tr">Bilgisayar Mühendisi · Şahi Otonom SİHA Takımı Yazılım Ekip Lideri, Bilgisayarlı Görü (OpenCV, YOLO), Endüstriyel Robotik (ROS 2 &amp; Gazebo) ve Derin Öğrenme Sistemleri.</span>
                <span class="lang-en">Computer Engineer · Autonomous UAV Software Lead, Computer Vision (OpenCV, YOLO), Industrial Robotics (ROS 2 &amp; Gazebo) and Deep Learning Architectures.</span>
              </p>

              <div class="hero-home-specs" style="margin: 0.4rem 0;">
                <div class="spec-card" style="padding: 6px 10px;">
                  <span class="spec-label" style="font-size: 0.6rem;"><span class="lang-tr">UNVAN</span><span class="lang-en">TITLE</span></span>
                  <span class="spec-val" style="font-size: 0.74rem;"><span class="lang-tr">Bilgisayar Müh.</span><span class="lang-en">Computer Eng.</span></span>
                </div>
                <div class="spec-card" style="padding: 6px 10px;">
                  <span class="spec-label" style="font-size: 0.6rem;"><span class="lang-tr">GÖREV</span><span class="lang-en">ROLE</span></span>
                  <span class="spec-val" style="font-size: 0.74rem;"><span class="lang-tr">Yazılım Lideri</span><span class="lang-en">Software Lead</span></span>
                </div>
                <div class="spec-card" style="padding: 6px 10px;">
                  <span class="spec-label" style="font-size: 0.6rem;"><span class="lang-tr">TAKIM</span><span class="lang-en">TEAM</span></span>
                  <span class="spec-val" style="font-size: 0.74rem;">Şahi SİHA</span>
                </div>
              </div>

              <div class="hero-home-actions" style="margin-top: 0.4rem; gap: 0.8rem;">
                <button type="button" class="hero-cta-btn" id="btnExploreStory" style="padding: 0.65rem 1.3rem; font-size: 0.76rem;">
                  <span><span class="lang-tr">02 / HİKAYEMİ AÇ (9 LEVHA)</span><span class="lang-en">02 / OPEN MY STORY</span></span>
                  <span class="hero-cta-arrow">↓</span>
                </button>
                <span class="hero-interactive-hint" style="font-size: 0.65rem;">
                  <span class="lang-tr">✦ Portre üzerinde mouse'u gezdirin &amp; aşağı kaydırın</span>
                  <span class="lang-en">✦ Hover over portrait &amp; scroll down</span>
                </span>
              </div>

              <div class="hpd-archival-num" style="position: static; margin-top: 0.5rem; font-size: 8px;">
                KİŞİSEL ARŞİV // VOL. 00 · 2026 EDİSYON
              </div>
            </div>

            <!-- Leather Back Cover (Visible from behind when book is closed) -->
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

          <!-- LEAF 0: Front = Home Right Page (WebGL Fluid Canvas) -> Back = Spread 1 Left (Plate 01 Narrative) -->
          <div class="sdb-leaf" id="sdbLeaf0">
            <div class="sdb-leaf-face front sdb-home-right">
              <canvas id="hero-fluid-canvas"></canvas>
              
              <div class="hero-page-decorations" aria-hidden="true">
                <div class="hpd-corner tl">⌜</div>
                <div class="hpd-corner tr">⌝</div>
                <div class="hpd-corner bl">⌞</div>
                <div class="hpd-corner br">⌟</div>
                <div class="hpd-plate-tag">✦ LEVHA 00 // BAŞLANGIÇ · İNSAN FORMU ➔ MAKİNE MANTIĞI ✦</div>
              </div>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">LEVHA 01 // 2008 · İLK KIVILCIM</div>
              <h3 class="sdb-milestone-title">
                <span class="lang-tr">3 Yaş: İlk Bilgisayar &amp; CD Oyunları</span>
                <span class="lang-en">Age 3: First PC &amp; CD-ROM Games</span>
              </h3>
              <div class="sdb-milestone-place">
                <span class="lang-tr">2008 · CD-ROM, Windows XP · Dijital Dünyayla İlk Karşılaşma</span>
                <span class="lang-en">2008 · CD-ROM Era, Windows XP &amp; First Digital Awakening</span>
              </div>
              <p class="sdb-milestone-desc">
                <span class="lang-tr">Henüz 3 yaşındayken Windows XP ve CD-ROM oyunlarıyla başlayan etkileşim, bilgisayarların yalnızca birer araç değil, mantık ve matematik üzerine kurulu büyüleyici birer evren olduğunu fark ettirdi.</span>
                <span class="lang-en">Starting with Windows XP and CD-ROM games at age 3, this early encounter sparked a lifelong curiosity into computer architecture and algorithmic logic.</span>
              </p>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">Windows XP</span>
                <span class="sdb-spec-pill">BIOS &amp; CD-ROM</span>
                <span class="sdb-spec-pill">İlk Mantık</span>
              </div>
              <div class="sdb-page-num">SAYFA 01 / 09</div>
            </div>
          </div>

          <!-- LEAF 1: Front = Spread 1 Right (Plate 01 Art) -> Back = Spread 2 Left (Plate 02 Narrative) -->
          <div class="sdb-leaf" id="sdbLeaf1">
            <div class="sdb-leaf-face front sdb-art-page">
              <div class="sdb-art-container">
                <img src="/plates/plate01.jpg" alt="Plate 01" class="sdb-plate-img" />
                <div class="sdb-art-tag">LEVHA 01 // 2008 · İLK BİLGİSAYAR</div>
              </div>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">LEVHA 02 // 2016-2020 · LİSE DÖNEMİ</div>
              <h3 class="sdb-milestone-title">
                <span class="lang-tr">Kırımlı Fazilet Olcay Anadolu Lisesi</span>
                <span class="lang-en">Kırımlı Fazilet Olcay High School</span>
              </h3>
              <div class="sdb-milestone-place">
                <span class="lang-tr">Lise Yılları · Makinelerin Derin Yetenekleri &amp; Temel Kodlama</span>
                <span class="lang-en">High School · Awakening to Machine Logic &amp; Algorithms</span>
              </div>
              <p class="sdb-milestone-desc">
                <span class="lang-tr">Lise yıllarında bilgisayar biliminin temel algoritmaları, veri yapıları ve analitik problem çözme metodolojileri üzerine yoğunlaşıldı; teorik temeller inşa edildi.</span>
                <span class="lang-en">Focused on foundational computer science algorithms, data structures, and mathematical modeling, building the groundwork for engineering.</span>
              </p>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">Algoritmalar</span>
                <span class="sdb-spec-pill">C++ Temelleri</span>
                <span class="sdb-spec-pill">Analitik Mantık</span>
              </div>
              <div class="sdb-page-num">SAYFA 02 / 09</div>
            </div>
          </div>

          <!-- LEAF 2: Front = Spread 2 Right (Plate 02 Art) -> Back = Spread 3 Left (Plate 03 Narrative) -->
          <div class="sdb-leaf" id="sdbLeaf2">
            <div class="sdb-leaf-face front sdb-art-page">
              <div class="sdb-art-container">
                <img src="/plates/plate02.jpg" alt="Plate 02" class="sdb-plate-img" />
                <div class="sdb-art-tag">LEVHA 02 // 2016-2020 · LİSE YILLARI</div>
              </div>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">LEVHA 03 // 2020-2024 · BİLGİSAYAR MÜHENDİSLİĞİ</div>
              <h3 class="sdb-milestone-title">
                <span class="lang-tr">Tekirdağ Namık Kemal Üniversitesi</span>
                <span class="lang-en">Tekirdağ Namık Kemal University</span>
              </h3>
              <div class="sdb-milestone-place">
                <span class="lang-tr">Bilgisayar Mühendisliği — Yüksek Onur Derecesi</span>
                <span class="lang-en">Computer Engineering — High Honors Degree</span>
              </div>
              <p class="sdb-milestone-desc">
                <span class="lang-tr">Bilgisayar Mühendisliği lisans eğitimi Yüksek Onur Derecesi ile tamamlandı. İşletim sistemleri, gömülü yazılım, robotik kinematik ve yapay zeka alanında projeler üretildi.</span>
                <span class="lang-en">Graduated with High Honors in Computer Engineering. Researched embedded architectures, robotic kinematics, and real-time vision pipelines.</span>
              </p>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">Yüksek Onur</span>
                <span class="sdb-spec-pill">Gömülü Sistemler</span>
                <span class="sdb-spec-pill">Robotik Kinematik</span>
              </div>
              <div class="sdb-page-num">SAYFA 03 / 09</div>
            </div>
          </div>

          <!-- LEAF 3: Front = Spread 3 Right (Plate 03 Art) -> Back = Spread 4 Left (Plate 04 Narrative) -->
          <div class="sdb-leaf" id="sdbLeaf3">
            <div class="sdb-leaf-face front sdb-art-page">
              <div class="sdb-art-container">
                <img src="/plates/plate03.jpg" alt="Plate 03" class="sdb-plate-img" />
                <div class="sdb-art-tag">LEVHA 03 // 2020-2024 · MÜHENDİSLİK</div>
              </div>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">LEVHA 04 // 2021 · BİLGİSAYARLI GÖRÜ</div>
              <h3 class="sdb-milestone-title">
                <span class="lang-tr">Bilgisayarlı Görüye İlk Adım</span>
                <span class="lang-en">First Steps in Computer Vision</span>
              </h3>
              <div class="sdb-milestone-place">
                <span class="lang-tr">Piksel Mimarileri, OpenCV, C++ &amp; 3D Simülasyon</span>
                <span class="lang-en">Pixel Tensors, OpenCV, C++ &amp; 3D Simulation</span>
              </div>
              <p class="sdb-milestone-desc">
                <span class="lang-tr">Piksellerin matris matematiği olarak işlenmesi, kenar tespiti, homografi, optik akış ve CUDA hızlandırmalı gerçek zamanlı görüntü işleme sistemleri kuruldu.</span>
                <span class="lang-en">Developed real-time optical tensor pipelines, matrix transformations, feature extraction, and CUDA-accelerated vision algorithms with OpenCV.</span>
              </p>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">OpenCV C++</span>
                <span class="sdb-spec-pill">CUDA</span>
                <span class="sdb-spec-pill">Optik Akış</span>
              </div>
              <div class="sdb-page-num">SAYFA 04 / 09</div>
            </div>
          </div>

          <!-- LEAF 4: Front = Spread 4 Right (Plate 04 Art) -> Back = Spread 5 Left (Plate 05 Narrative) -->
          <div class="sdb-leaf" id="sdbLeaf4">
            <div class="sdb-leaf-face front sdb-art-page">
              <div class="sdb-art-container">
                <img src="/plates/plate04.jpg" alt="Plate 04" class="sdb-plate-img" />
                <div class="sdb-art-tag">LEVHA 04 // 2021 · BİLGİSAYARLI GÖRÜ</div>
              </div>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">LEVHA 05 // 2022-2023 · SİHA &amp; OTONOMİ</div>
              <h3 class="sdb-milestone-title">
                <span class="lang-tr">Şahi Otonom SİHA Takımı</span>
                <span class="lang-en">Şahi Autonomous UAV Team</span>
              </h3>
              <div class="sdb-milestone-place">
                <span class="lang-tr">TEKNOFEST Savaşan İHA · Yazılım Ekip Lideri</span>
                <span class="lang-en">TEKNOFEST Combat UAV · Software Team Lead</span>
              </div>
              <p class="sdb-milestone-desc">
                <span class="lang-tr">Takım yazılım lideri olarak, otonom hedef tespiti (YOLOv8), Kalman filtreli takip, ByteTrack ve MAVLink otonom güdüm seyrüsefer (GNC) yazılım paketini bizzat geliştirdi.</span>
                <span class="lang-en">Served as Software Team Lead, architecting autonomous target tracking, Kalman filters, ByteTrack, and MAVLink guidance navigation control in ROS 2.</span>
              </p>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">ROS 2</span>
                <span class="sdb-spec-pill">YOLOv8</span>
                <span class="sdb-spec-pill">Kalman Takip</span>
                <span class="sdb-spec-pill">MAVLink</span>
              </div>
              <div class="sdb-page-num">SAYFA 05 / 09</div>
            </div>
          </div>

          <!-- LEAF 5: Front = Spread 5 Right (Plate 05 Art) -> Back = Spread 6 Left (Plate 06 Narrative) -->
          <div class="sdb-leaf" id="sdbLeaf5">
            <div class="sdb-leaf-face front sdb-art-page">
              <div class="sdb-art-container">
                <img src="/plates/plate05.jpg" alt="Plate 05" class="sdb-plate-img" />
                <div class="sdb-art-tag">LEVHA 05 // 2022-2023 · ŞAHİ SİHA</div>
              </div>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">LEVHA 06 // 2023 · ENDÜSTRİYEL AR-GE</div>
              <h3 class="sdb-milestone-title">
                <span class="lang-tr">Çözüm Makina: ISEE Vision</span>
                <span class="lang-en">Çözüm Makina: ISEE Vision</span>
              </h3>
              <div class="sdb-milestone-place">
                <span class="lang-tr">Endüstriyel Görüntü İşleme &amp; Sıfır Hata Kalite Kontrol</span>
                <span class="lang-en">Industrial Computer Vision &amp; Zero-Defect QA</span>
              </div>
              <p class="sdb-milestone-desc">
                <span class="lang-tr">Yüksek hızlı otomatik üretim hatlarında çalışan, mikrometre hassasiyetinde yüzey defektlerini tespit eden endüstriyel kamera ve yapay zeka denetim sistemi tasarlandı.</span>
                <span class="lang-en">Engineered an automated industrial machine vision inspection pipeline with TensorRT and Qt, detecting micro-defects in high-speed manufacturing lines.</span>
              </p>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">TensorRT</span>
                <span class="sdb-spec-pill">Qt C++</span>
                <span class="sdb-spec-pill">Endüstriyel CV</span>
              </div>
              <div class="sdb-page-num">SAYFA 06 / 09</div>
            </div>
          </div>

          <!-- LEAF 6: Front = Spread 6 Right (Plate 06 Art) -> Back = Spread 7 Left (Plate 07 Narrative) -->
          <div class="sdb-leaf" id="sdbLeaf6">
            <div class="sdb-leaf-face front sdb-art-page">
              <div class="sdb-art-container">
                <img src="/plates/plate06.jpg" alt="Plate 06" class="sdb-plate-img" />
                <div class="sdb-art-tag">LEVHA 06 // 2023 · ISEE VISION</div>
              </div>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">LEVHA 07 // 2024 · KURUMSAL YAPAY ZEKA</div>
              <h3 class="sdb-milestone-title">
                <span class="lang-tr">Martur Fompak International</span>
                <span class="lang-en">Martur Fompak International</span>
              </h3>
              <div class="sdb-milestone-place">
                <span class="lang-tr">Şirket İçi Kurumsal Yapay Zeka &amp; Çoklu-Ajan Sistemleri</span>
                <span class="lang-en">Enterprise AI &amp; Multi-Agent Orchestration</span>
              </div>
              <p class="sdb-milestone-desc">
                <span class="lang-tr">Mühendislik ve üretim süreçlerindeki teknik dokümanları analiz eden, RAG mimarisi ve çoklu yapay zeka ajanları ile donatılmış kurumsal copilot platformu geliştirildi.</span>
                <span class="lang-en">Architected a multi-agent enterprise AI copilot with LangChain, Llama-3, and vector embeddings for real-time technical document reasoning and automation.</span>
              </p>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">LangChain</span>
                <span class="sdb-spec-pill">Llama-3</span>
                <span class="sdb-spec-pill">RAG Ajanları</span>
              </div>
              <div class="sdb-page-num">SAYFA 07 / 09</div>
            </div>
          </div>

          <!-- LEAF 7: Front = Spread 7 Right (Plate 07 Art) -> Back = Spread 8 Left (Plate 08 Narrative) -->
          <div class="sdb-leaf" id="sdbLeaf7">
            <div class="sdb-leaf-face front sdb-art-page">
              <div class="sdb-art-container">
                <img src="/plates/plate07.jpg" alt="Plate 07" class="sdb-plate-img" />
                <div class="sdb-art-tag">LEVHA 07 // 2024 · MARTUR FOMPAK AI</div>
              </div>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">LEVHA 08 // 2025 · OTONOM ROBOTİK</div>
              <h3 class="sdb-milestone-title">
                <span class="lang-tr">Huawei Ar-Ge &amp; Otonom Sistemler</span>
                <span class="lang-en">Huawei R&amp;D &amp; Autonomous Systems</span>
              </h3>
              <div class="sdb-milestone-place">
                <span class="lang-tr">Endüstriyel Robotik, ROS 2, MQTT &amp; Gazebo Simülasyonu</span>
                <span class="lang-en">Industrial Robotics, ROS 2, MQTT &amp; Gazebo Simulation</span>
              </div>
              <p class="sdb-milestone-desc">
                <span class="lang-tr">Çoklu mobil robot sürüleri için Nav2 SLAM haritalama, çarpışma önleyici seyrüsefer ve gömülü Linux platformlarında 50Hz telemetri köprüleri kuruldu.</span>
                <span class="lang-en">Implemented multi-robot swarm SLAM, Nav2 decentralized navigation, and 50Hz telemetry streaming across embedded Linux and Gazebo simulation.</span>
              </p>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">ROS 2 Swarm</span>
                <span class="sdb-spec-pill">Nav2 SLAM</span>
                <span class="sdb-spec-pill">Gazebo 3D</span>
              </div>
              <div class="sdb-page-num">SAYFA 08 / 09</div>
            </div>
          </div>

          <!-- LEAF 8: Front = Spread 8 Right (Plate 08 Art) -> Back = Spread 9 Left (Plate 09 Narrative) -->
          <div class="sdb-leaf" id="sdbLeaf8">
            <div class="sdb-leaf-face front sdb-art-page">
              <div class="sdb-art-container">
                <img src="/plates/plate08.jpg" alt="Plate 08" class="sdb-plate-img" />
                <div class="sdb-art-tag">LEVHA 08 // 2025 · OTONOM SİSTEMLER</div>
              </div>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">LEVHA 09 // 2026 · GELECEK VİZYONU</div>
              <h3 class="sdb-milestone-title">
                <span class="lang-tr">İnsan Formu — Makine Mantığı</span>
                <span class="lang-en">Human Form — Machine Logic</span>
              </h3>
              <div class="sdb-milestone-place">
                <span class="lang-tr">Otonom Sürü Zekası &amp; Gelecek Manifestosu</span>
                <span class="lang-en">Autonomous Swarm Robotics &amp; Future Manifesto</span>
              </div>
              <p class="sdb-milestone-desc">
                <span class="lang-tr">"Teorik bilgimi pratiğe çeviriyorum." İnsan karar alma mekanizmaları ile otonom makinelerin hesaplama gücünü birleştiren, gökyüzünden fabrikalara uzanan yapay zeka vizyonu.</span>
                <span class="lang-en">"Transforming theoretical knowledge into practice." Unifying human decision-making with machine reasoning across aerospace and robotics.</span>
              </p>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">Otonomi</span>
                <span class="sdb-spec-pill">Bilgisayar Mühendisi</span>
                <span class="sdb-spec-pill">2026 Edisyon</span>
              </div>
              <div class="sdb-page-num">SAYFA 09 / 09</div>
            </div>
          </div>

          <!-- SPREAD 9 RIGHT & HARDCOVER CLAP: RIGHT WING -->
          <div class="sdb-wing sdb-right" id="sdbWingRight">
            <div class="sdb-face sdb-art-page">
              <div class="sdb-art-container">
                <img src="/plates/plate09.jpg" alt="Plate 09" class="sdb-plate-img" />
                <div class="sdb-art-tag">LEVHA 09 // 2026 · MANİFESTO</div>
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

      const shelfIframe = document.getElementById('shelf-interactive-frame');

      // Smart Deferred Hydration for 3D Bookshelf (Zero initial lag)
      let shelfIframeLoaded = false;
      function hydrateShelfIframe() {
        if (shelfIframeLoaded || !shelfIframe) return;
        shelfIframeLoaded = true;
        if (shelfIframe.dataset && shelfIframe.dataset.src) {
          shelfIframe.src = shelfIframe.dataset.src;
        }
      }

      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setTimeout(hydrateShelfIframe, 600), { timeout: 2500 });
      } else {
        setTimeout(hydrateShelfIframe, 800);
      }

      window.addEventListener('scroll', hydrateShelfIframe, { passive: true, once: true });
      window.addEventListener('pointerdown', hydrateShelfIframe, { passive: true, once: true });

      function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        localStorage.setItem('site_lang', lang);

        if (shelfIframe && shelfIframe.contentWindow) {
          try {
            shelfIframe.contentWindow.postMessage({ type: 'SET_LANG', lang: lang }, '*');
          } catch (e) {}
        }
      }

      setLanguage(currentLang);

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

      // 2. Pure Scroll-Driven Continuous 3D Zoom & Multi-Page Flip Timeline:
      // - p = 0.00: Full-screen opening spread (Home Hero)
      // - p in [0.00, 0.14]: Smooth 3D Zoom-Out onto Desk view
      // - p in [0.14, 0.77]: Leaves 0 through 8 turn in 3D perspective
      // - p in [0.77, 0.84]: Hardcover right wing claps shut
      // - p in [0.84, 0.92]: Closed 3D leather volume docks into Slot 0 on bookshelf
      // - p in [0.90, 1.00]: 3D Bookshelf layer becomes fully interactive
      const flowContainer = document.getElementById('heroScrollFlow');
      const flow3dStage = document.getElementById('flow3dStage');
      const physical3dBook = document.getElementById('physical3dBook');
      const sdbSpineCrease = document.getElementById('sdbSpineCrease');
      const flowShelfLayer = document.getElementById('flowShelfLayer');

      const leaves = [
        document.getElementById('sdbLeaf0'),
        document.getElementById('sdbLeaf1'),
        document.getElementById('sdbLeaf2'),
        document.getElementById('sdbLeaf3'),
        document.getElementById('sdbLeaf4'),
        document.getElementById('sdbLeaf5'),
        document.getElementById('sdbLeaf6'),
        document.getElementById('sdbLeaf7'),
        document.getElementById('sdbLeaf8')
      ];
      const sdbWingRight = document.getElementById('sdbWingRight');

      const btnNavHome = document.getElementById('btnNavHome');
      const btnNavStory = document.getElementById('btnNavStory');
      const btnNavSkills = document.getElementById('btnNavSkills');
      const btnNavProjects = document.getElementById('btnNavProjects');
      const btnNavContact = document.getElementById('btnNavContact');
      const projectsSec = document.getElementById('projects-section');
      const contactSec = document.getElementById('contact');

      const BOOK_BASE_W = 980;
      const BOOK_BASE_H = 620;

      function getDocTop(el) {
        if (!el) return 999999;
        const rect = el.getBoundingClientRect();
        return rect.top + window.scrollY;
      }

      function smoothstep(t) {
        const x = Math.max(0, Math.min(1, t));
        return x * x * (3 - 2 * x);
      }

      function computeZoomScales() {
        const winW = window.innerWidth;
        const winH = window.innerHeight;
        const fullScaleX = winW / BOOK_BASE_W;
        const fullScaleY = winH / BOOK_BASE_H;
        const fullScale = Math.max(fullScaleX, fullScaleY);

        const deskScaleX = (winW * 0.88) / BOOK_BASE_W;
        const deskScaleY = (winH * 0.80) / BOOK_BASE_H;
        const deskScale = Math.min(1.0, deskScaleX, deskScaleY);

        return { fullScale, deskScale };
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
        if (!flowContainer || !flow3dStage || !physical3dBook) return;

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

        const { fullScale, deskScale } = computeZoomScales();

        // =========================================================================
        // 1. STAGE 1: FULLSCREEN HERO SPREAD -> 3D ZOOM OUT ONTO DESK (p: 0.00 -> 0.14)
        // =========================================================================
        const zoomEnd = 0.14;
        let zoomT = 0;
        if (p >= zoomEnd) {
          zoomT = 1;
        } else if (p > 0) {
          zoomT = smoothstep(p / zoomEnd);
        }

        const currentScale = fullScale - zoomT * (fullScale - deskScale);
        const rotateX = zoomT * 4.5;
        const shadowAlpha = zoomT * 0.22;
        const shadowY = zoomT * 28;
        const shadowBlur = zoomT * 64;

        if (sdbSpineCrease) {
          sdbSpineCrease.style.opacity = zoomT.toFixed(3);
        }

        // =========================================================================
        // 2. STAGE 2: 9 CHRONOLOGICAL 3D PAGE TURNS (p: 0.14 -> 0.77)
        // =========================================================================
        const turnStart = 0.14;
        const turnEnd = 0.77;
        const numLeaves = leaves.length; // 9
        const step = (turnEnd - turnStart) / numLeaves; // ~0.07 per leaf

        leaves.forEach((leaf, idx) => {
          if (!leaf) return;
          const leafStart = turnStart + idx * step;
          const leafEnd = leafStart + step;

          let leafP = 0;
          if (p >= leafEnd) {
            leafP = 1;
          } else if (p > leafStart) {
            leafP = smoothstep((p - leafStart) / step);
          }

          const deg = -leafP * 180;
          leaf.style.transform = 'rotateY(' + deg.toFixed(2) + 'deg)';

          if (leafP < 0.5) {
            leaf.style.zIndex = (18 - idx);
          } else {
            leaf.style.zIndex = (10 + idx);
          }
        });

        // =========================================================================
        // 3. STAGE 3: HARDCOVER RIGHT WING CLAPS SHUT (p: 0.77 -> 0.84)
        // =========================================================================
        const foldStart = 0.77;
        const foldEnd = 0.84;
        let foldP = 0;
        if (p >= foldEnd) {
          foldP = 1;
        } else if (p > foldStart) {
          foldP = smoothstep((p - foldStart) / (foldEnd - foldStart));
        }

        if (sdbWingRight) {
          const rightDeg = -foldP * 180;
          sdbWingRight.style.transform = 'rotateY(' + rightDeg.toFixed(2) + 'deg)';
          sdbWingRight.style.zIndex = foldP > 0.5 ? 25 : 3;
        }

        // =========================================================================
        // 4. STAGE 4: CLOSED 3D LEATHER BOOK DOCKS INTO 3D SHELF (p: 0.84 -> 0.92)
        // =========================================================================
        if (p <= 0.84) {
          flow3dStage.style.transform =
            'scale(' + currentScale.toFixed(4) + ') ' +
            'rotateX(' + rotateX.toFixed(2) + 'deg) ' +
            'rotateY(0deg) ' +
            'translateY(0px)';
          physical3dBook.style.boxShadow = '0 ' + shadowY.toFixed(1) + 'px ' + shadowBlur.toFixed(1) + 'px rgba(43, 39, 33, ' + shadowAlpha.toFixed(3) + ')';
        } else {
          let dockP = smoothstep((p - 0.84) / 0.08);
          const scale = deskScale * (1 - dockP * 0.76); // Scales down to ~0.24
          const translateY = dockP * 150;
          const rotateY = dockP * 15;
          const rotateXDock = 4.5 + dockP * 3;

          flow3dStage.style.transform =
            'translateY(' + translateY.toFixed(1) + 'px) ' +
            'scale(' + scale.toFixed(4) + ') ' +
            'rotateY(' + rotateY.toFixed(1) + 'deg) ' +
            'rotateX(' + rotateXDock.toFixed(1) + 'deg)';
          physical3dBook.style.boxShadow = '0 ' + (shadowY - dockP * 20).toFixed(1) + 'px ' + (shadowBlur - dockP * 48).toFixed(1) + 'px rgba(43, 39, 33, ' + (shadowAlpha - dockP * 0.12).toFixed(3) + ')';
        }

        // Visibility of 3D stage
        if (p > 0.94) {
          let stageFade = Math.max(0, 1 - (p - 0.94) / 0.04);
          flow3dStage.style.opacity = stageFade.toFixed(3);
          flow3dStage.style.visibility = stageFade > 0 ? 'visible' : 'hidden';
        } else {
          flow3dStage.style.opacity = '1';
          flow3dStage.style.visibility = 'visible';
        }

        // =========================================================================
        // 5. STAGE 5: 03 YETENEKLERİM 3D SHELF (p: 0.88 -> 1.00)
        // =========================================================================
        if (flowShelfLayer) {
          let shelfFade = 0;
          if (p > 0.86) {
            shelfFade = smoothstep((p - 0.86) / 0.10);
          }
          flowShelfLayer.style.opacity = shelfFade.toFixed(3);
          flowShelfLayer.style.visibility = p > 0.84 ? 'visible' : 'hidden';
          flowShelfLayer.style.pointerEvents = p >= 0.92 ? 'auto' : 'none';
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
        } else if (p >= 0.88) {
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
          window.scrollTo({ top: totalTravel * 0.16, behavior: 'smooth' });
        }
      }
      function scrollToShelf() {
        if (flowContainer) {
          const totalTravel = flowContainer.offsetHeight - window.innerHeight;
          window.scrollTo({ top: totalTravel * 0.96, behavior: 'smooth' });
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
console.log('Successfully written 3D zoom-out index.html! Bytes:', html.length);
