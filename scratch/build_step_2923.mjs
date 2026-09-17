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
       HERO SCROLL FLOW (01 HOME FULLSCREEN SPREAD 0 -> 3D ZOOM OUT ONTO DESK -> 9 SPREADS -> 3D DOCK -> 03 SHELF)
       - Spread 0 is the Ana Sayfa (Editorial Left Page + WebGL Fluid Portrait Right Page)
       - Starts full-screen edge-to-edge
       - As user scrolls, sticky viewport stays locked while the 3D book ZOOMS OUT onto the desk
       - Ana Sayfa remains visible as the open first spread of the physical book on the desk!
       - Turning leaves 0 to 8 turn sequentially across the desk
       - Hardcover right wing claps shut into leather brown volume
       - Closed 3D volume scales down and docks into Slot 0 on 3D bookshelf!
       ========================================================================= -->
  <div class="hero-scroll-flow" id="heroScrollFlow" style="height: 540vh;">
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

      <!-- LAYER 2: 3D PHYSICAL SKETCHBOOK STAGE (ZOOMS OUT & TURNS PAGES) -->
      <div class="flow-3d-stage" id="flow3dStage">
        <div class="physical-3d-book" id="scrollDockBook">
          
          <!-- Spine -->
          <div class="sdb-spine">
            <span>00 · HİKAYEM</span>
          </div>
          <div class="sdb-spine-crease" id="sdbSpineCrease"></div>

          <!-- SPREAD BASE: LEFT WING (SPREAD 0 LEFT: ANA SAYFA EDITORIAL / SPREAD 0 BACK: LEATHER BACK COVER) -->
          <div class="sdb-wing sdb-left" id="sdbWingLeft">
            
            <!-- SPREAD 0 LEFT PAGE: ANA SAYFA EDITORIAL -->
            <div class="sdb-face sdb-home-left">
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

          <!-- LEAF 0: FRONT = SPREAD 0 RIGHT (CANVAS) | BACK = SPREAD 1 LEFT (LEVHA 01) -->
          <div class="sdb-leaf" id="sdbLeaf0">
            <div class="sdb-leaf-face front sdb-home-right">
              <canvas id="hero-fluid-canvas"></canvas>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">
                <span class="lang-tr">LEVHA 01 // 2008 · İLK KIVILCIM</span>
                <span class="lang-en">PLATE 01 // 2008 · FIRST SPARK</span>
              </div>
              <div>
                <h2 class="sdb-milestone-title">
                  <span class="lang-tr">3 Yaş: İlk Bilgisayar &amp; CD Oyunları</span>
                  <span class="lang-en">Age 3: First PC &amp; CD-ROM Games</span>
                </h2>
                <div class="sdb-milestone-place">
                  <span class="lang-tr">Windows XP, CD-ROM · Algoritmik Merak</span>
                  <span class="lang-en">Windows XP, CD-ROM · Algorithmic Awakening</span>
                </div>
                <p class="sdb-milestone-desc">
                  <span class="lang-tr">Teknolojiyle ilk temas 3 yaşında evdeki masaüstü bilgisayarla başladı. CD-ROM tabanlı oyunlar ve işletim sistemi mantığı, yazılım dünyasının temel taşlarını attı.</span>
                  <span class="lang-en">First contact with computing began at age 3 with the home desktop PC. CD-ROM era games and OS structures sparked an early curiosity for digital systems.</span>
                </p>
              </div>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">WINDOWS XP</span>
                <span class="sdb-spec-pill">CD-ROM</span>
                <span class="sdb-spec-pill">ALGORİTMA</span>
              </div>
              <div class="sdb-page-num">01 / 09 · HİKAYEM</div>
            </div>
          </div>

          <!-- LEAF 1: FRONT = SPREAD 1 RIGHT (PLATE 01 ART) | BACK = SPREAD 2 LEFT (LEVHA 02) -->
          <div class="sdb-leaf" id="sdbLeaf1">
            <div class="sdb-leaf-face front sdb-art-page">
              <div class="sdb-art-container">
                <img src="/landing-pages/meng-to-sketchbook/marina-bay-sands.png" alt="Levha 01" class="sdb-plate-img" loading="lazy" />
                <div class="sdb-art-tag">✦ LEVHA 01 · 2008 // İLK KIVILCIM</div>
              </div>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">
                <span class="lang-tr">LEVHA 02 // LİSE DÖNEMİ</span>
                <span class="lang-en">PLATE 02 // HIGH SCHOOL</span>
              </div>
              <div>
                <h2 class="sdb-milestone-title">
                  <span class="lang-tr">Kırımlı Fazilet Olcay A.L.</span>
                  <span class="lang-en">Kırımlı Fazilet Olcay High School</span>
                </h2>
                <div class="sdb-milestone-place">
                  <span class="lang-tr">Lise Yılları · C++ Temelleri &amp; Problem Çözme</span>
                  <span class="lang-en">High School Years · C++ Fundamentals &amp; Problem Solving</span>
                </div>
                <p class="sdb-milestone-desc">
                  <span class="lang-tr">Lise yıllarında programlama dilleri, algoritmik mantık ve matematiksel modelleme üzerine yoğunlaştım. Bilgisayar bilimlerine olan tutku akademik hedefe dönüştü.</span>
                  <span class="lang-en">Focused on programming languages, algorithmic foundations and mathematical modeling during high school years, solidifying passion into an engineering journey.</span>
                </p>
              </div>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">C++</span>
                <span class="sdb-spec-pill">ALGORİTMİK DÜŞÜNCE</span>
                <span class="sdb-spec-pill">MATEMATİK</span>
              </div>
              <div class="sdb-page-num">02 / 09 · HİKAYEM</div>
            </div>
          </div>

          <!-- LEAF 2: FRONT = SPREAD 2 RIGHT (PLATE 02 ART) | BACK = SPREAD 3 LEFT (LEVHA 03) -->
          <div class="sdb-leaf" id="sdbLeaf2">
            <div class="sdb-leaf-face front sdb-art-page">
              <div class="sdb-art-container">
                <img src="/landing-pages/meng-to-sketchbook/gardens-by-the-bay.png" alt="Levha 02" class="sdb-plate-img" loading="lazy" />
                <div class="sdb-art-tag">✦ LEVHA 02 · LİSE // ALGORİTMİK TEMELLER</div>
              </div>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">
                <span class="lang-tr">LEVHA 03 // LİSANS EĞİTİMİ</span>
                <span class="lang-en">PLATE 03 // UNDERGRADUATE</span>
              </div>
              <div>
                <h2 class="sdb-milestone-title">
                  <span class="lang-tr">Tekirdağ Namık Kemal Üniversitesi</span>
                  <span class="lang-en">Tekirdağ Namık Kemal University</span>
                </h2>
                <div class="sdb-milestone-place">
                  <span class="lang-tr">Bilgisayar Mühendisliği · Yüksek Onur Derecesi</span>
                  <span class="lang-en">Computer Engineering · High Honors Degree</span>
                </div>
                <p class="sdb-milestone-desc">
                  <span class="lang-tr">Gömülü sistemler, mikrodenetleyiciler ve dağıtık yazılım mimarileri üzerine uzmanlaştım. Akademik başarıyı pratik Ar-Ge projeleriyle taçlandırdım.</span>
                  <span class="lang-en">Specialized in embedded systems, microcontrollers and distributed software architectures, graduating with High Honors.</span>
                </p>
              </div>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">YÜKSEK ONUR</span>
                <span class="sdb-spec-pill">GÖMÜLÜ SİSTEMLER</span>
                <span class="sdb-spec-pill">C / C++</span>
              </div>
              <div class="sdb-page-num">03 / 09 · HİKAYEM</div>
            </div>
          </div>

          <!-- LEAF 3: FRONT = SPREAD 3 RIGHT (PLATE 03 ART) | BACK = SPREAD 4 LEFT (LEVHA 04) -->
          <div class="sdb-leaf" id="sdbLeaf3">
            <div class="sdb-leaf-face front sdb-art-page">
              <div class="sdb-art-container">
                <img src="/landing-pages/meng-to-sketchbook/merlion.png" alt="Levha 03" class="sdb-plate-img" loading="lazy" />
                <div class="sdb-art-tag">✦ LEVHA 03 · ÜNİVERSİTE // MÜHENDİSLİK FORMASYONU</div>
              </div>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">
                <span class="lang-tr">LEVHA 04 // ENDÜSTRİYEL AR-GE</span>
                <span class="lang-en">PLATE 04 // ENTERPRISE AI</span>
              </div>
              <div>
                <h2 class="sdb-milestone-title">
                  <span class="lang-tr">Martur Fompak International</span>
                  <span class="lang-en">Martur Fompak International</span>
                </h2>
                <div class="sdb-milestone-place">
                  <span class="lang-tr">Kurumsal Yapay Zeka &amp; LLM Ajanları</span>
                  <span class="lang-en">Internal Enterprise AI &amp; Multi-Agent Systems</span>
                </div>
                <p class="sdb-milestone-desc">
                  <span class="lang-tr">Otomotiv devinde büyük dil modelleri (LLM), RAG mimarileri ve şirket içi çoklu-ajan orkestrasyonu geliştirdim. Üretim süreçlerini akıllandıran sistemler kurguladım.</span>
                  <span class="lang-en">Developed internal LLM pipelines, RAG architectures and multi-agent systems for enterprise workflows in the automotive manufacturing sector.</span>
                </p>
              </div>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">LLM &amp; RAG</span>
                <span class="sdb-spec-pill">LANGCHAIN</span>
                <span class="sdb-spec-pill">MULTI-AGENT</span>
              </div>
              <div class="sdb-page-num">04 / 09 · HİKAYEM</div>
            </div>
          </div>

          <!-- LEAF 4: FRONT = SPREAD 4 RIGHT (PLATE 04 ART) | BACK = SPREAD 5 LEFT (LEVHA 05) -->
          <div class="sdb-leaf" id="sdbLeaf4">
            <div class="sdb-leaf-face front sdb-art-page">
              <div class="sdb-art-container">
                <img src="/landing-pages/meng-to-sketchbook/buddha-tooth.png" alt="Levha 04" class="sdb-plate-img" loading="lazy" />
                <div class="sdb-art-tag">✦ LEVHA 04 · MARTUR FOMPAK // YAPAY ZEKA SİSTEMLERİ</div>
              </div>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">
                <span class="lang-tr">LEVHA 05 // SİMÜLASYON &amp; GÖRÜ</span>
                <span class="lang-en">PLATE 05 // SIMULATION &amp; VISION</span>
              </div>
              <div>
                <h2 class="sdb-milestone-title">
                  <span class="lang-tr">Görüntü İşleme &amp; Gazebo Harmonic</span>
                  <span class="lang-en">Computer Vision &amp; Gazebo Harmonic</span>
                </h2>
                <div class="sdb-milestone-place">
                  <span class="lang-tr">OpenCV, CUDA &amp; 3D Robotik Simülasyonu</span>
                  <span class="lang-en">OpenCV, CUDA &amp; 3D Robotics Simulation</span>
                </div>
                <p class="sdb-milestone-desc">
                  <span class="lang-tr">Piksel matrisleri, morfolojik filtreler, optik akış ve Gazebo Harmonic üzerinde 3D fizik simülasyonları geliştirdim. Otonom robotların algı katmanını modelledim.</span>
                  <span class="lang-en">Developed real-time pixel processing pipelines, optical flow and 3D physics simulations in Gazebo Harmonic for autonomous robotic perception.</span>
                </p>
              </div>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">OPENCV</span>
                <span class="sdb-spec-pill">GAZEBO HARMONIC</span>
                <span class="sdb-spec-pill">CUDA</span>
              </div>
              <div class="sdb-page-num">05 / 09 · HİKAYEM</div>
            </div>
          </div>

          <!-- LEAF 5: FRONT = SPREAD 5 RIGHT (PLATE 05 ART) | BACK = SPREAD 6 LEFT (LEVHA 06) -->
          <div class="sdb-leaf" id="sdbLeaf5">
            <div class="sdb-leaf-face front sdb-art-page">
              <div class="sdb-art-container">
                <img src="/landing-pages/meng-to-sketchbook/joo-chiat.png" alt="Levha 05" class="sdb-plate-img" loading="lazy" />
                <div class="sdb-art-tag">✦ LEVHA 05 · ROBOTİK // 3D FİZİK &amp; GÖRÜ</div>
              </div>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">
                <span class="lang-tr">LEVHA 06 // TEKNOFEST SAVAŞAN İHA</span>
                <span class="lang-en">PLATE 06 // TEKNOFEST COMBAT UAV</span>
              </div>
              <div>
                <h2 class="sdb-milestone-title">
                  <span class="lang-tr">Şahi Otonom SİHA Takımı</span>
                  <span class="lang-en">Şahi Autonomous UAV Team</span>
                </h2>
                <div class="sdb-milestone-place">
                  <span class="lang-tr">Yazılım Ekip Liderliği · Otonom İtki &amp; Kilitlenme</span>
                  <span class="lang-en">Software Team Lead · Autonomous Guidance &amp; Tracking</span>
                </div>
                <p class="sdb-milestone-desc">
                  <span class="lang-tr">YOLOv8 nesne tespiti, ByteTrack ve Kalman filtreleme ile 120 FPS gerçek zamanlı hava muharebesi hedef takibi ve MAVLink telemetri entegrasyonunu yönettim.</span>
                  <span class="lang-en">Led the software team for autonomous combat UAV. Implemented YOLOv8 + ByteTrack + Kalman filter tracking and MAVLink telemetry at 120 FPS.</span>
                </p>
              </div>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">YOLOV8</span>
                <span class="sdb-spec-pill">BYTETRACK</span>
                <span class="sdb-spec-pill">MAVLINK</span>
                <span class="sdb-spec-pill">ROS 2</span>
              </div>
              <div class="sdb-page-num">06 / 09 · HİKAYEM</div>
            </div>
          </div>

          <!-- LEAF 6: FRONT = SPREAD 6 RIGHT (PLATE 06 ART) | BACK = SPREAD 7 LEFT (LEVHA 07) -->
          <div class="sdb-leaf" id="sdbLeaf6">
            <div class="sdb-leaf-face front sdb-art-page">
              <div class="sdb-art-container">
                <img src="/landing-pages/meng-to-sketchbook/lau-pa-sat.png" alt="Levha 06" class="sdb-plate-img" loading="lazy" />
                <div class="sdb-art-tag">✦ LEVHA 06 · ŞAHİ SİHA // OTONOM HAVA SİSTEMLERİ</div>
              </div>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">
                <span class="lang-tr">LEVHA 07 // ENDÜSTRİYEL GÖRÜNTÜ İŞLEME</span>
                <span class="lang-en">PLATE 07 // INDUSTRIAL CV</span>
              </div>
              <div>
                <h2 class="sdb-milestone-title">
                  <span class="lang-tr">Çözüm Makina: ISEE Vision</span>
                  <span class="lang-en">Çözüm Makina: ISEE Vision</span>
                </h2>
                <div class="sdb-milestone-place">
                  <span class="lang-tr">Sıfır Hata Kalite Kontrol &amp; Kamera Entegrasyonu</span>
                  <span class="lang-en">Zero-Defect Quality Control &amp; Camera Integration</span>
                </div>
                <p class="sdb-milestone-desc">
                  <span class="lang-tr">Endüstriyel üretim hatlarında mikron seviyesinde parça kalite kontrolü ve optik hata tespit algoritmaları geliştirdim. Yüksek hızlı kamera matrislerini entegre ettim.</span>
                  <span class="lang-en">Engineered micron-precision industrial inspection and defect detection pipelines with high-speed camera integration for zero-defect production lines.</span>
                </p>
              </div>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">ISEE VISION</span>
                <span class="sdb-spec-pill">KALİTE KONTROL</span>
                <span class="sdb-spec-pill">REAL-TIME CV</span>
              </div>
              <div class="sdb-page-num">07 / 09 · HİKAYEM</div>
            </div>
          </div>

          <!-- LEAF 7: FRONT = SPREAD 7 RIGHT (PLATE 07 ART) | BACK = SPREAD 8 LEFT (LEVHA 08) -->
          <div class="sdb-leaf" id="sdbLeaf7">
            <div class="sdb-leaf-face front sdb-art-page">
              <div class="sdb-art-container">
                <img src="/landing-pages/meng-to-sketchbook/marina-bay-skyline.png" alt="Levha 07" class="sdb-plate-img" loading="lazy" />
                <div class="sdb-art-tag">✦ LEVHA 07 · ÇÖZÜM MAKİNA // ISEE VISION</div>
              </div>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">
                <span class="lang-tr">LEVHA 08 // ENDÜSTRİYEL ROBOTİK</span>
                <span class="lang-en">PLATE 08 // INDUSTRIAL ROBOTICS</span>
              </div>
              <div>
                <h2 class="sdb-milestone-title">
                  <span class="lang-tr">Çözüm Makina: ISEE Robotics</span>
                  <span class="lang-en">Çözüm Makina: ISEE Robotics</span>
                </h2>
                <div class="sdb-milestone-place">
                  <span class="lang-tr">ROS 2, MQTT &amp; Kinematik Kontrol</span>
                  <span class="lang-en">ROS 2, MQTT &amp; Kinematics Control</span>
                </div>
                <p class="sdb-milestone-desc">
                  <span class="lang-tr">Otonom fabrika içi taşıma robotları (AGV/AMR) için ROS 2 navigasyon yığını, MQTT telemetri protokolleri ve gerçek zamanlı kinematik yörünge planlaması kurdum.</span>
                  <span class="lang-en">Architected ROS 2 navigation stack, MQTT telemetry and real-time kinematic motion planning for autonomous factory transport vehicles (AGV/AMR).</span>
                </p>
              </div>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">ROS 2</span>
                <span class="sdb-spec-pill">MQTT</span>
                <span class="sdb-spec-pill">KINEMATICS</span>
                <span class="sdb-spec-pill">AMR / AGV</span>
              </div>
              <div class="sdb-page-num">08 / 09 · HİKAYEM</div>
            </div>
          </div>

          <!-- LEAF 8: FRONT = SPREAD 8 RIGHT (PLATE 08 ART) | BACK = SPREAD 9 LEFT (LEVHA 09) -->
          <div class="sdb-leaf" id="sdbLeaf8">
            <div class="sdb-leaf-face front sdb-art-page">
              <div class="sdb-art-container">
                <img src="/landing-pages/meng-to-sketchbook/singapore-river.png" alt="Levha 08" class="sdb-plate-img" loading="lazy" />
                <div class="sdb-art-tag">✦ LEVHA 08 · ÇÖZÜM MAKİNA // ISEE ROBOTICS</div>
              </div>
            </div>
            <div class="sdb-leaf-face back sdb-narrative-page">
              <div class="sdb-archival-header">
                <span class="lang-tr">LEVHA 09 // 2026 MANİFESTOSU</span>
                <span class="lang-en">PLATE 09 // 2026 MANIFESTO</span>
              </div>
              <div>
                <h2 class="sdb-milestone-title">
                  <span class="lang-tr">İnsan Formu — Makine Mantığı</span>
                  <span class="lang-en">Human Form — Machine Logic</span>
                </h2>
                <div class="sdb-milestone-place">
                  <span class="lang-tr">Otonom Sürü Zekası &amp; Gelecek Vizyonu</span>
                  <span class="lang-en">Autonomous Swarm Intelligence &amp; Future Vision</span>
                </div>
                <p class="sdb-milestone-desc">
                  <span class="lang-tr">Geleceğin otonom sistemleri; biyolojik sezgi ile matematiksel kesinliğin kesişiminde yükselecek. Hedefim: otonom sistemlerde küresel ölçekte öncü mimariler inşa etmek.</span>
                  <span class="lang-en">The next horizon of autonomous intelligence emerges at the intersection of biological intuition and mathematical precision. Building scalable pioneer architectures.</span>
                </p>
              </div>
              <div class="sdb-milestone-specs">
                <span class="sdb-spec-pill">SWARM AI</span>
                <span class="sdb-spec-pill">OTONOM MANTIK</span>
                <span class="sdb-spec-pill">2026 VİZYONU</span>
              </div>
              <div class="sdb-page-num">09 / 09 · HİKAYEM</div>
            </div>
          </div>

          <!-- HARDCOVER RIGHT WING (SPREAD 9 RIGHT: PLATE 09 ART / BACK: LEATHER FRONT HARDCOVER) -->
          <div class="sdb-wing sdb-right" id="sdbWingRight">
            <div class="sdb-face sdb-art-page">
              <div class="sdb-art-container">
                <img src="/landing-pages/meng-to-sketchbook/botanic-gardens.png" alt="Levha 09" class="sdb-plate-img" loading="lazy" />
                <div class="sdb-art-tag">✦ LEVHA 09 · 2026 // İNSAN FORMU ➔ MAKİNE MANTIĞI</div>
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

    <!-- [3] 04 PROJELERİM & GITHUB SHOWCASE -->
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
          <h3 class="project-card-title">Martur Fompak Multi-Agent RAG</h3>
          <p class="project-card-desc">
            <span class="lang-tr">Otomotiv üretim ve şartname veritabanları için çoklu-ajan orkestrasyonu ve hibrit vektör arama mimarisi.</span>
            <span class="lang-en">Multi-agent orchestration and hybrid vector search architecture for automotive manufacturing intelligence.</span>
          </p>
          <div class="project-card-tags">
            <span class="project-tag">LangChain</span>
            <span class="project-tag">RAG</span>
            <span class="project-tag">ChromaDB</span>
            <span class="project-tag">Python</span>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">★ <span id="star-enterprise-ai">16</span></span>
              <span class="project-stat-item">⑂ <span id="fork-enterprise-ai">5</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub ↗</span>
            </a>
          </div>
        </article>

        <!-- Project 5: AMR Fleet Navigation -->
        <article class="project-card" data-category="robotics embedded">
          <div class="project-card-header">
            <span class="project-cat-badge">ENDÜSTRİYEL OTONOM</span>
          </div>
          <h3 class="project-card-title">ISEE Robotics AGV / AMR Fleet</h3>
          <p class="project-card-desc">
            <span class="lang-tr">Fabrika içi otonom taşıma robotları için MQTT telemetri, diferansiyel sürüş kinematiği ve rota optimizasyonu.</span>
            <span class="lang-en">MQTT telemetry, differential kinematics and trajectory planning for industrial autonomous mobile robots.</span>
          </p>
          <div class="project-card-tags">
            <span class="project-tag">ROS 2</span>
            <span class="project-tag">MQTT</span>
            <span class="project-tag">Kinematics</span>
            <span class="project-tag">C++</span>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">★ <span id="star-amr-fleet">10</span></span>
              <span class="project-stat-item">⑂ <span id="fork-amr-fleet">2</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub ↗</span>
            </a>
          </div>
        </article>

        <!-- Project 6: CUDA Optical Flow -->
        <article class="project-card" data-category="vision ai">
          <div class="project-card-header">
            <span class="project-cat-badge">GPGPU HIZLANDIRMA</span>
          </div>
          <h3 class="project-card-title">CUDA Hızlandırmalı Optik Akış</h3>
          <p class="project-card-desc">
            <span class="lang-tr">Dense Lucas-Kanade ve Farneback optik akış algoritmalarının GPU üzerinde sıfır bellek kopyalama ile hızlandırılması.</span>
            <span class="lang-en">GPU-accelerated Dense optical flow computation with zero-copy memory mapping for high-speed tracking.</span>
          </p>
          <div class="project-card-tags">
            <span class="project-tag">CUDA C++</span>
            <span class="project-tag">NVIDIA TensorRT</span>
            <span class="project-tag">OpenCV GPU</span>
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat-item">★ <span id="star-cuda-flow">21</span></span>
              <span class="project-stat-item">⑂ <span id="fork-cuda-flow">7</span></span>
            </div>
            <a href="https://github.com/ozanardaozcelik" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              <span>GitHub ↗</span>
            </a>
          </div>
        </article>

      </div>
    </section>

    <!-- [4] 05 İLETİŞİM & GÖREV TALEBİ -->
    <section class="section contact-section" id="contact" data-reveal>
      <div class="section-head">
        <div>
          <span class="section-folio"><span class="lang-tr">05 / KANALLAR &amp; İLETİŞİM</span><span class="lang-en">05 / DIRECT CHANNELS</span></span>
          <h2 class="section-title"><span class="lang-tr">İLETİŞİM</span><span class="lang-en">CONTACT</span></h2>
        </div>
        <div class="section-badge">
          <span class="dot-live"></span>
          <span><span class="lang-tr">Göreve Hazır // 2026</span><span class="lang-en">Ready for Mission // 2026</span></span>
        </div>
      </div>

      <div class="contact-single-card">
        <div class="contact-inner-content">
          <span class="contact-hero-tag">✦ <span class="lang-tr">BİRLİKTE ÇALIŞALIM</span><span class="lang-en">LET'S COLLABORATE</span> ✦</span>
          
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

      // Smart Deferred Hydration for Shelf Iframe
      let shelfIframeLoaded = false;
      function hydrateShelfIframe() {
        if (shelfIframeLoaded || !shelfIframe) return;
        shelfIframeLoaded = true;
        if (shelfIframe.dataset && shelfIframe.dataset.src) {
          shelfIframe.src = shelfIframe.dataset.src;
        }
      }

      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setTimeout(hydrateShelfIframe, 800), { timeout: 2500 });
      } else {
        setTimeout(hydrateShelfIframe, 1000);
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
      });

      // 2. Pure Scroll-Driven Continuous 3D Zoom & Docking Timeline:
      // - p = 0.00: Spread 0 (Ana Sayfa) Fullscreen Edge-to-Edge
      // - p in [0.00, 0.16]: Smooth 3D Zoom-Out onto Desk view (Ana Sayfa stays visible as the 1st spread!)
      // - p in [0.16, 0.79]: 9 Milestone Spreads turn sequentially
      // - p in [0.79, 0.86]: Hardcover right wing claps shut into brown leather book
      // - p in [0.86, 0.94]: Closed leather book scales down and docks into Slot 0 on 3D shelf
      // - p in [0.91, 1.00]: 03 Yeteneklerim (3D Shelf) active
      const flowContainer = document.getElementById('heroScrollFlow');
      const flow3dStage = document.getElementById('flow3dStage');
      const scrollDockBook = document.getElementById('scrollDockBook');
      const flowShelfLayer = document.getElementById('flowShelfLayer');
      const sdbSpineCrease = document.getElementById('sdbSpineCrease');
      const sdbWingLeft = document.getElementById('sdbWingLeft');
      const sdbWingRight = document.getElementById('sdbWingRight');

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

      // Navigation & Sections
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
        if (!flowContainer || !scrollDockBook || !flow3dStage) return;

        const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
        const winH = window.innerHeight;
        const winW = window.innerWidth;

        // Container scroll bounds
        const containerTop = getDocTop(flowContainer);
        const containerTravel = Math.max(1, flowContainer.offsetHeight - winH);
        let p = (scrollY - containerTop) / containerTravel;
        p = Math.max(0, Math.min(1, p));

        // Manage Shelf WebGL suspension
        const inShelfRange = p >= 0.85;
        setShelfActiveState(inShelfRange);

        // Calculate dynamic scales
        const scaleFull = Math.max(winW / 1000, winH / 640);
        const scaleDesk = Math.min(1.05, 0.90 * Math.min(winW / 1000, winH / 640));

        // Skip heavy recalculations if scroll hasn't moved
        if (Math.abs(p - lastP) < 0.0003 && Math.abs(scrollY - lastScrollY) < 1) return;
        lastP = p;
        lastScrollY = scrollY;

        // =========================================================================
        // 1. 3D ZOOM OUT ONTO DESK (p: 0.00 -> 0.16)
        // =========================================================================
        if (p <= 0.16) {
          const zoomT = smoothstep(p / 0.14);
          const curScale = scaleFull - zoomT * (scaleFull - scaleDesk);
          const rotateX = zoomT * 4.5;
          const shadowAlpha = zoomT * 0.24;
          const shadowY = zoomT * 28;
          const shadowBlur = zoomT * 64;
          const radius = zoomT * 4;

          flow3dStage.style.transform = 'scale(' + curScale.toFixed(4) + ')';
          scrollDockBook.style.transform = 'rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(0deg) translateY(0px)';
          scrollDockBook.style.boxShadow = '0 ' + shadowY.toFixed(1) + 'px ' + shadowBlur.toFixed(1) + 'px rgba(43, 39, 33, ' + shadowAlpha.toFixed(3) + ')';
          scrollDockBook.style.borderRadius = radius.toFixed(1) + 'px';

          if (sdbSpineCrease) {
            sdbSpineCrease.style.opacity = zoomT.toFixed(2);
          }

          // All leaves flat on right stack
          leaves.forEach((leaf, idx) => {
            if (leaf) {
              leaf.style.transform = 'rotateY(0deg)';
              leaf.style.zIndex = 20 - idx;
            }
          });
          if (sdbWingRight) {
            sdbWingRight.style.transform = 'rotateY(0deg)';
            sdbWingRight.style.zIndex = 9;
          }

          flow3dStage.style.opacity = '1';
          flow3dStage.style.visibility = 'visible';
        } else if (p <= 0.79) {
          // =========================================================================
          // 2. TURNING THE 9 MILESTONE SPREADS (p: 0.16 -> 0.79)
          // =========================================================================
          flow3dStage.style.transform = 'scale(' + scaleDesk.toFixed(4) + ')';
          scrollDockBook.style.transform = 'rotateX(4.5deg) rotateY(0deg) translateY(0px)';
          scrollDockBook.style.boxShadow = '0 28px 64px rgba(43, 39, 33, 0.24)';
          scrollDockBook.style.borderRadius = '4px';
          if (sdbSpineCrease) sdbSpineCrease.style.opacity = '1';
          flow3dStage.style.opacity = '1';
          flow3dStage.style.visibility = 'visible';

          const turnStart = 0.16;
          const turnEnd = 0.79;
          const totalTurnSpan = turnEnd - turnStart;
          const slice = totalTurnSpan / 9; // ~0.070 per leaf

          leaves.forEach((leaf, idx) => {
            if (!leaf) return;
            const lStart = turnStart + idx * slice;
            const lEnd = lStart + slice;

            if (p <= lStart) {
              leaf.style.transform = 'rotateY(0deg)';
              leaf.style.zIndex = 20 - idx;
            } else if (p >= lEnd) {
              leaf.style.transform = 'rotateY(-180deg)';
              leaf.style.zIndex = 10 + idx;
            } else {
              const leafT = smoothstep((p - lStart) / slice);
              const deg = -leafT * 180;
              leaf.style.transform = 'rotateY(' + deg.toFixed(2) + 'deg)';
              leaf.style.zIndex = 30; // in air
            }
          });

          if (sdbWingRight) {
            sdbWingRight.style.transform = 'rotateY(0deg)';
            sdbWingRight.style.zIndex = 9;
          }
        } else if (p <= 0.86) {
          // =========================================================================
          // 3. HARDCOVER CLAPS SHUT INTO LEATHER BROWN BOOK (p: 0.79 -> 0.86)
          // =========================================================================
          flow3dStage.style.transform = 'scale(' + scaleDesk.toFixed(4) + ')';
          scrollDockBook.style.transform = 'rotateX(4.5deg) rotateY(0deg) translateY(0px)';
          scrollDockBook.style.boxShadow = '0 28px 64px rgba(43, 39, 33, 0.24)';
          scrollDockBook.style.borderRadius = '4px';
          if (sdbSpineCrease) sdbSpineCrease.style.opacity = '1';
          flow3dStage.style.opacity = '1';
          flow3dStage.style.visibility = 'visible';

          // All leaves turned on left stack
          leaves.forEach((leaf, idx) => {
            if (leaf) {
              leaf.style.transform = 'rotateY(-180deg)';
              leaf.style.zIndex = 10 + idx;
            }
          });

          // Hardcover right wing folds over
          const clapT = smoothstep((p - 0.79) / 0.07);
          const rightDeg = -clapT * 180;
          if (sdbWingRight) {
            sdbWingRight.style.transform = 'rotateY(' + rightDeg.toFixed(2) + 'deg)';
            sdbWingRight.style.zIndex = clapT > 0.5 ? 40 : 9;
          }
        } else if (p <= 0.96) {
          // =========================================================================
          // 4. 3D DOCKING INTO SHELF SLOT 0 (p: 0.86 -> 0.96)
          // =========================================================================
          leaves.forEach((leaf, idx) => {
            if (leaf) {
              leaf.style.transform = 'rotateY(-180deg)';
              leaf.style.zIndex = 10 + idx;
            }
          });
          if (sdbWingRight) {
            sdbWingRight.style.transform = 'rotateY(-180deg)';
            sdbWingRight.style.zIndex = 40;
          }

          const dockT = smoothstep((p - 0.86) / 0.08);
          const scale = scaleDesk * (1 - dockT * 0.77);
          const translateY = dockT * 140;
          const rotateY = dockT * 15;
          const rotateX = 4.5 + dockT * 3;

          flow3dStage.style.transform = 'scale(' + scale.toFixed(4) + ')';
          scrollDockBook.style.transform =
            'translateY(' + translateY.toFixed(1) + 'px) ' +
            'rotateY(' + rotateY.toFixed(1) + 'deg) ' +
            'rotateX(' + rotateX.toFixed(1) + 'deg)';
          scrollDockBook.style.boxShadow = '0 ' + (28 - dockT * 20).toFixed(1) + 'px ' + (64 - dockT * 48).toFixed(1) + 'px rgba(43, 39, 33, ' + (0.24 - dockT * 0.16).toFixed(3) + ')';

          let bookFade = 1;
          if (p > 0.92) {
            bookFade = Math.max(0, 1 - (p - 0.92) / 0.03);
          }
          flow3dStage.style.opacity = bookFade.toFixed(3);
          flow3dStage.style.visibility = bookFade > 0 ? 'visible' : 'hidden';
        } else {
          flow3dStage.style.opacity = '0';
          flow3dStage.style.visibility = 'hidden';
        }

        // =========================================================================
        // 5. 03 YETENEKLERİM (3D SHELF IFRAME) (p: 0.90 -> 1.00)
        // =========================================================================
        if (flowShelfLayer) {
          let shelfFade = 0;
          if (p > 0.90) {
            shelfFade = smoothstep((p - 0.90) / 0.08);
          }
          flowShelfLayer.style.opacity = shelfFade.toFixed(3);
          flowShelfLayer.style.visibility = p > 0.88 ? 'visible' : 'hidden';
          flowShelfLayer.style.pointerEvents = p >= 0.94 ? 'auto' : 'none';
        }

        // =========================================================================
        // 6. NAV TRACKING & ACTIVE PILL HIGHLIGHT
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
        } else if (p >= 0.12) {
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
console.log('Successfully written physical 3D book Spread 0 index.html! Bytes:', html.length);
