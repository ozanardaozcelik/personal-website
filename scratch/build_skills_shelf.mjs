import fs from 'fs';

const sourceHtml = fs.readFileSync('public/landing-pages/complete-shelf-v2.html', 'utf8');

const BOOKS_TR = [
  {
    id: "story",
    title: "Hikayem",
    roman: "0",
    discipline: "Eskiz Defteri & 9 Dönüm Noktası",
    note: "2008 retro bilgisayardan gökyüzünde otonom SİHA'lara uzanan dokunsal eskiz defteri.",
    deck: "2008'de 3 yaşında ilk bilgisayarla başlayan dijital merak; Kırımlı Fazilet Olcay A.L., Namık Kemal Üniversitesi Bilgisayar Mühendisliği, Şahi SİHA yazılım liderliği, Çözüm Makina ISEE Vision & Robotics saha Ar-Ge'si ve Martur Fompak kurumsal yapay zekasına uzanan yaşayan bir mühendislik kaydıdır.",
    binding: "Pamuk Kağıt · 18 Şeritli Sayfa Fiziği",
    format: "ThreeUI Dokunsal Eskiz Defteri · Etkileşimli Büyüteç",
    theme: "2008'den Gökyüzüne Uzanan Mühendislik Yolculuğu",
    motif: "İç İçe Parantezler",
    motifKey: "brackets",
    paletteLabel: "Sıcak Parşömen · Deri · Bakır",
    color: "#4a3020",
    foil: "#e89f66",
    palette: {
      paper: "#faf8f5",
      paperDeep: "#f0eae0",
      paperPale: "#ffffff",
      ink: "#2b2721",
      inkSoft: "#6b6255",
      wall: "#faf8f5",
      shelf: "#442416",
      shelfDark: "#21100a",
      light: "#fff6eb",
      fill: "#b5785a"
    },
    width: 1.08,
    height: 1.56,
    depth: 0.28,
    chapters: [
      "İlk Kıvılcım: 2008 (3 Yaş) & İlk Bilgisayar",
      "Kırımlı Fazilet Olcay A.L. & Namık Kemal Üni.",
      "Şahi SİHA, Çözüm Makina & Martur Fompak"
    ],
    seed: 7
  },
  {
    id: "vision",
    title: "Bilgisayarlı Görü",
    roman: "I",
    discipline: "İSG Denetimi, Anomali & HMI Paneller",
    note: "Çözüm Makina ISEE Vision, İSG denetimi, Web/HMI paneller, PatchCore & YOLOv8.",
    deck: "Çözüm Makina ISEE Vision bünyesinde fabrikalarda, hastanelerde ve ofislerde kameralarla İSG kontrolleri yapan nesne tespiti yazılımları kurup optimize ettim; Web kontrol panelleri ve dokunmatik HMI arayüzleri tasarladım. PatchCore ve DINO ViT ile sıfır hata anomali tespiti ve Şahi SİHA'da YOLOv8 hava muharebe vizyonu geliştirdim.",
    binding: "Çözüm Makina ISEE Vision · Şahi SİHA",
    format: "YOLOv8 · PatchCore · DINO ViT · HMI · Web UI",
    theme: "Gerçek Zamanlı İSG Kontrolü, Anomali & Dokunmatik HMI",
    motif: "İç İçe Parantezler",
    motifKey: "brackets",
    paletteLabel: "Gece Mavisi · Kemik · Bakır",
    color: "#182a43",
    foil: "#c87046",
    palette: {
      paper: "#171a24",
      paperDeep: "#10131b",
      paperPale: "#f1eadf",
      ink: "#f4eee6",
      inkSoft: "#b9b4ae",
      wall: "#171a24",
      shelf: "#3a2118",
      shelfDark: "#1c0e0a",
      light: "#f4d7b9",
      fill: "#9fb3c9"
    },
    width: 1.05,
    height: 1.62,
    depth: 0.26,
    chapters: [
      "ISEE Vision: İSG Denetimi, Web Paneli & Dokunmatik HMI",
      "Endüstriyel Anomali Tespiti (PatchCore, DINO ViT)",
      "Şahi SİHA: YOLOv8 Nesne Tespiti & Optik Kilitlenme"
    ],
    seed: 11
  },
  {
    id: "robotics",
    title: "Robotik & Otonom Sistemler",
    roman: "II",
    discipline: "Robot Kol, M20, Tron 1, Gazebo & UI",
    note: "Robot kol, M20, Tron 1, Gazebo Harmonic simülasyonu, ROS 2 & kontrol arayüzleri.",
    deck: "Endüstriyel robot kolları, M20 otonom mobil platformu ve Tron 1 dinamik robotik sistemleri üzerinde çalıştım. Gazebo Harmonic fizik simülasyonu, ROS / ROS 2 düğümleri ve MQTT hatlarıyla uçtan uca kontrol mimarileri kurdum; operatörler için gerçek zamanlı robot kontrol ve telemetri takip arayüzleri geliştirdim.",
    binding: "Robot Kol · M20 AMR · Tron 1 · Şahi SİHA",
    format: "ROS 2 · Gazebo Harmonic · MQTT · Kontrol & Takip UI",
    theme: "Çoklu Robotik Platformlar, 3D Simülasyon & Telemetri UI",
    motif: "Kesişen Yollar",
    motifKey: "paths",
    paletteLabel: "Orman Yeşili · Pirinç · Krem",
    color: "#253828",
    foil: "#e2b45a",
    palette: {
      paper: "#1a2c1e",
      paperDeep: "#111f15",
      paperPale: "#f2f5e8",
      ink: "#f4f8ee",
      inkSoft: "#b5c5ab",
      wall: "#1a2c1e",
      shelf: "#3a2318",
      shelfDark: "#1c0f0a",
      light: "#f5e8b4",
      fill: "#7ea383"
    },
    width: 1.10,
    height: 1.50,
    depth: 0.28,
    chapters: [
      "Endüstriyel Robot Kolu, M20 AMR & Tron 1 Sistemleri",
      "Gazebo Harmonic 3D Fizik Simülasyonu & Dijital İkiz",
      "Robot Kontrol & Telemetri Takip Arayüzleri (HMI)"
    ],
    seed: 22
  },
  {
    id: "ai",
    title: "Yapay Zeka",
    roman: "III",
    discipline: "Agentic AI, LLM Otomasyonu & PyTorch",
    note: "Martur Fompak kurumsal yapay zeka, departman ihtiyaçları & Agentic AI iş akışları.",
    deck: "Martur Fompak International otomotiv fabrikasında şirket içi departmanların ihtiyaçları doğrultusunda yapay zeka modelleri geliştirdim; üretimi ve verimliliği artıran LLM destekli çoklu ajan (Agentic AI) otomasyon iş akışlarını hayata geçirdim. PyTorch ve Hugging Face açık kaynak ekosistemiyle kurumsal karar zekası üretiyorum.",
    binding: "Martur Fompak International · Kurumsal AI",
    format: "Agentic AI · Multi-Agent LLM · PyTorch · Hugging Face",
    theme: "Departman İhtiyaçları, Çoklu Ajanlar & Otomasyon",
    motif: "Katlanmış Çerçeveler",
    motifKey: "frames",
    paletteLabel: "Kobalt Mavisi · Şampanya Altın · Kum",
    color: "#1f3a60",
    foil: "#f9e79f",
    palette: {
      paper: "#152742",
      paperDeep: "#0d1a2c",
      paperPale: "#fcf8e8",
      ink: "#fdfdf6",
      inkSoft: "#bac7d6",
      wall: "#152742",
      shelf: "#382017",
      shelfDark: "#1a0d08",
      light: "#fef6d2",
      fill: "#638ab8"
    },
    width: 1.02,
    height: 1.62,
    depth: 0.25,
    chapters: [
      "Martur Fompak: Departman İhtiyaçları & Kurumsal AI",
      "Agentic AI & LLM Tabanlı Çoklu Ajan Otomasyonu",
      "PyTorch & Hugging Face Açık Kaynak Çözümleri"
    ],
    seed: 66
  },
  {
    id: "languages-tooling",
    title: "Diller & Araçlar",
    roman: "IV",
    discipline: "Mühendislik Dilleri, Robotik & AI Araçları",
    note: "Türkçe (Anadil), İngilizce (B2), Python, C++, ROS 2, Gazebo, Docker, Git & AGY CLI.",
    deck: "Çok yönlü mühendislik ve geliştirme yetkinliği: İletişimde Türkçe (Anadil) ve İngilizce (B2 Profesyonel). Yazılımda Python ve C++. Robotik ve vizyonda ROS 2, Gazebo Harmonic, ArduPilot, YOLOv8 ve PatchCore. Altyapıda Docker, Git, PostgreSQL ve MQTT; üretkenlikte Claude ve Google Antigravity (AGY) CLI.",
    binding: "Türkçe (Anadil) · İngilizce (B2)",
    format: "Python · C++ · ROS 2 · Gazebo · Docker · Git · AGY",
    theme: "Programlama Dilleri, Robotik Altyapısı & AI Araçları",
    motif: "Bağlantılı Modüller",
    motifKey: "modules",
    paletteLabel: "Kraliyet Mürdümü · Gül Altın · Leylak",
    color: "#4a235a",
    foil: "#f5b7b1",
    palette: {
      paper: "#32153e",
      paperDeep: "#220c2b",
      paperPale: "#faeef5",
      ink: "#fdf5fa",
      inkSoft: "#c7a6bd",
      wall: "#32153e",
      shelf: "#3c1f18",
      shelfDark: "#1c0d0a",
      light: "#fedee6",
      fill: "#9b6099"
    },
    width: 0.98,
    height: 1.54,
    depth: 0.27,
    chapters: [
      "İletişim: Türkçe (Anadil) & İngilizce (B2)",
      "Mühendislik Dilleri: Python, C++ & Web UI",
      "Altyapı & AI: ROS 2, Gazebo, Docker, Git & AGY CLI"
    ],
    seed: 55
  },
  {
    id: "interests",
    title: "İlgi Alanları",
    roman: "V",
    discipline: "Vizyon, Strateji, Sanat & Zihin",
    note: "Görüntü işleme, otonom sistemler, yapay zeka etiği, e-spor, satranç ve müzik.",
    deck: "Mühendislik merakını besleyen entelektüel, stratejik ve yaratıcı ilgi alanları: Akademik ve teknik dünyada Bilgisayarlı Görü, Otonom Sistemler ve Yapay Zeka Etiği. Zihinsel dinamizmde E-Spor (hızlı karar alma) ile Satranç (derin taktiksel planlama). Zihni dengeleyen ve odaklanmayı artıran Müzik.",
    binding: "Görüntü İşleme · Otonom Sistemler · AI Etiği",
    format: "E-Spor · Satranç · Müzik",
    theme: "Yüksek Odak, Strateji, Teknoloji Felsefesi & Yaratıcılık",
    motif: "Askıda Yörüngeler",
    motifKey: "orbits",
    paletteLabel: "Ceviz Terrakotta · Saman Altın · Amber",
    color: "#3a2118",
    foil: "#e09f67",
    palette: {
      paper: "#2c1912",
      paperDeep: "#1e100b",
      paperPale: "#faede4",
      ink: "#fcf2eb",
      inkSoft: "#c9aba0",
      wall: "#2c1912",
      shelf: "#442416",
      shelfDark: "#21100a",
      light: "#fedfc7",
      fill: "#b5785a"
    },
    width: 1.06,
    height: 1.58,
    depth: 0.24,
    chapters: [
      "Bilgisayarlı Görü & Otonom Sistemler Tutkusu",
      "Yapay Zeka Etiği & Makine Mantığı Felsefesi",
      "E-Spor, Satranç (Strateji) & Müzik (Odaklanma)"
    ],
    seed: 44
  }
];

const BOOKS_EN = [
  {
    id: "story",
    title: "My Story",
    roman: "0",
    discipline: "Sketchbook & 9 Milestones",
    note: "Tactile sketchbook journeying from 2008 retro computing to autonomous combat UAV guidance.",
    deck: "A digital journey sparked in 2008 at age 3: Kırımlı Fazilet Olcay High School, Computer Engineering at Namık Kemal University, software team lead for Şahi Autonomous UAV, Çözüm Makina ISEE Vision & Robotics R&D, and enterprise AI systems at Martur Fompak.",
    binding: "Cotton Paper · 18-Strip Leaf Physics",
    format: "ThreeUI Tactile Sketchbook · Interactive Loupe",
    theme: "Engineering Odyssey from 2008 to the Skies",
    motif: "Nested Brackets",
    motifKey: "brackets",
    paletteLabel: "Warm Parchment · Leather · Copper",
    color: "#4a3020",
    foil: "#e89f66",
    palette: {
      paper: "#faf8f5",
      paperDeep: "#f0eae0",
      paperPale: "#ffffff",
      ink: "#2b2721",
      inkSoft: "#6b6255",
      wall: "#faf8f5",
      shelf: "#442416",
      shelfDark: "#21100a",
      light: "#fff6eb",
      fill: "#b5785a"
    },
    width: 1.08,
    height: 1.56,
    depth: 0.28,
    chapters: [
      "First Spark: 2008 (Age 3) & First PC",
      "Kırımlı Fazilet High School & University",
      "Şahi UAV, Çözüm Makina & Martur Fompak"
    ],
    seed: 7
  },
  {
    id: "vision",
    title: "Computer Vision",
    roman: "I",
    discipline: "OHS Safety, Anomaly & HMI Panels",
    note: "Çözüm Makina ISEE Vision, OHS safety, Web/HMI panels, PatchCore & YOLOv8.",
    deck: "Deployed real-time object detection software for OHS (occupational health and safety) monitoring across factories, hospitals, and offices at Çözüm Makina ISEE Vision. Designed intuitive web control panels and touch HMI interfaces, alongside micron-accuracy anomaly detection via PatchCore and DINO ViT.",
    binding: "Çözüm Makina ISEE Vision · Şahi UAV",
    format: "YOLOv8 · PatchCore · DINO ViT · HMI · Web UI",
    theme: "Real-Time OHS Monitoring, Anomaly & Touch HMI",
    motif: "Nested Brackets",
    motifKey: "brackets",
    paletteLabel: "Midnight Navy · Bone · Copper",
    color: "#182a43",
    foil: "#c87046",
    palette: {
      paper: "#171a24",
      paperDeep: "#10131b",
      paperPale: "#f1eadf",
      ink: "#f4eee6",
      inkSoft: "#b9b4ae",
      wall: "#171a24",
      shelf: "#3a2118",
      shelfDark: "#1c0e0a",
      light: "#f4d7b9",
      fill: "#9fb3c9"
    },
    width: 1.05,
    height: 1.62,
    depth: 0.26,
    chapters: [
      "ISEE Vision: OHS Inspection, Web Panel & Touch HMI",
      "Industrial Surface Anomaly Detection (PatchCore, DINO)",
      "Şahi UAV: YOLOv8 Combat Target Detection & Tracking"
    ],
    seed: 11
  },
  {
    id: "robotics",
    title: "Robotics & Autonomous Systems",
    roman: "II",
    discipline: "Robot Arm, M20, Tron 1, Gazebo & UI",
    note: "Robotic arms, M20, Tron 1, Gazebo Harmonic simulation, ROS 2 & control UI.",
    deck: "Engineered multi-modal robotics spanning industrial 6-axis arms, M20 autonomous mobile robots, and Tron 1 agile biped/wheeled platforms. Developed end-to-end control architectures via Gazebo Harmonic 3D physics simulation, ROS 2, and MQTT, designing dedicated operator control and telemetry dashboards.",
    binding: "Robot Arm · M20 AMR · Tron 1 · Şahi UAV",
    format: "ROS 2 · Gazebo Harmonic · MQTT · Control & Telemetry UI",
    theme: "Multi-Robot Platforms, 3D Simulation & Telemetry UI",
    motif: "Crossing Paths",
    motifKey: "paths",
    paletteLabel: "Forest Green · Brass · Cream",
    color: "#253828",
    foil: "#e2b45a",
    palette: {
      paper: "#1a2c1e",
      paperDeep: "#111f15",
      paperPale: "#f2f5e8",
      ink: "#f4f8ee",
      inkSoft: "#b5c5ab",
      wall: "#1a2c1e",
      shelf: "#3a2318",
      shelfDark: "#1c0f0a",
      light: "#f5e8b4",
      fill: "#7ea383"
    },
    width: 1.10,
    height: 1.50,
    depth: 0.28,
    chapters: [
      "Industrial Robotic Arm, M20 AMR & Tron 1 Systems",
      "Gazebo Harmonic 3D Physics Simulation & Digital Twin",
      "Robot Control & Telemetry Tracking Interfaces (HMI)"
    ],
    seed: 22
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    roman: "III",
    discipline: "Agentic AI, LLM Automation & PyTorch",
    note: "Martur Fompak enterprise AI, department workflows & Agentic AI automation.",
    deck: "Developed internal enterprise AI models addressing departmental requirements at automotive manufacturer Martur Fompak International, implementing LLM-powered Multi-Agent (Agentic AI) automation workflows that boost production efficiency. Delivering enterprise decision intelligence with PyTorch and Hugging Face.",
    binding: "Martur Fompak International · Enterprise AI",
    format: "Agentic AI · Multi-Agent LLM · PyTorch · Hugging Face",
    theme: "Department Workflows, Multi-Agent AI & Automation",
    motif: "Folded Frames",
    motifKey: "frames",
    paletteLabel: "Cobalt Blue · Champagne Gold · Sand",
    color: "#1f3a60",
    foil: "#f9e79f",
    palette: {
      paper: "#152742",
      paperDeep: "#0d1a2c",
      paperPale: "#fcf8e8",
      ink: "#fdfdf6",
      inkSoft: "#bac7d6",
      wall: "#152742",
      shelf: "#382017",
      shelfDark: "#1a0d08",
      light: "#fef6d2",
      fill: "#638ab8"
    },
    width: 1.02,
    height: 1.62,
    depth: 0.25,
    chapters: [
      "Martur Fompak: Department Solutions & Enterprise AI",
      "Agentic AI & Multi-Agent LLM Orchestration",
      "PyTorch & Hugging Face Open-Source Pipelines"
    ],
    seed: 66
  },
  {
    id: "languages-tooling",
    title: "Languages & Tooling",
    roman: "IV",
    discipline: "Engineering Languages, Robotics & AI Tools",
    note: "Turkish (Native), English (B2), Python, C++, ROS 2, Gazebo, Docker, Git & AGY CLI.",
    deck: "Versatile engineering and development stack: Turkish (Native) and English (B2 Professional). High-performance programming in Python and C++. Robotics and vision with ROS 2, Gazebo Harmonic, ArduPilot, YOLOv8, and PatchCore. Infrastructure via Docker, Git, PostgreSQL, and MQTT, supercharged by Claude and Google Antigravity CLI.",
    binding: "Turkish (Native) · English (B2)",
    format: "Python · C++ · ROS 2 · Gazebo · Docker · Git · AGY",
    theme: "Programming Languages, Robotics Infra & AI Tooling",
    motif: "Linked Modules",
    motifKey: "modules",
    paletteLabel: "Royal Plum · Rose Gold · Lilac",
    color: "#4a235a",
    foil: "#f5b7b1",
    palette: {
      paper: "#32153e",
      paperDeep: "#220c2b",
      paperPale: "#faeef5",
      ink: "#fdf5fa",
      inkSoft: "#c7a6bd",
      wall: "#32153e",
      shelf: "#3c1f18",
      shelfDark: "#1c0d0a",
      light: "#fedee6",
      fill: "#9b6099"
    },
    width: 0.98,
    height: 1.54,
    depth: 0.27,
    chapters: [
      "Communication: Turkish (Native) & English (B2)",
      "Engineering Languages: Python, C++ & Web UI",
      "Infra & AI: ROS 2, Gazebo, Docker, Git & AGY CLI"
    ],
    seed: 55
  },
  {
    id: "interests",
    title: "Interests & Passions",
    roman: "V",
    discipline: "Vision, Strategy, Art & Mind",
    note: "Computer vision, autonomous systems, AI ethics, esports, chess and music.",
    deck: "Intellectual and creative pursuits fueling engineering excellence: Advanced Computer Vision, Autonomous Systems, and AI Ethics exploring machine logic. High-speed decision-making through Esports, deep positional tactics through Chess, and mental clarity through Music.",
    binding: "Computer Vision · Autonomous Systems · AI Ethics",
    format: "Esports · Chess · Music",
    theme: "High Focus, Strategy, Philosophy of Tech & Creativity",
    motif: "Suspended Orbits",
    motifKey: "orbits",
    paletteLabel: "Walnut Terracotta · Straw Gold · Amber",
    color: "#3a2118",
    foil: "#e09f67",
    palette: {
      paper: "#2c1912",
      paperDeep: "#1e100b",
      paperPale: "#faede4",
      ink: "#fcf2eb",
      inkSoft: "#c9aba0",
      wall: "#2c1912",
      shelf: "#442416",
      shelfDark: "#21100a",
      light: "#fedfc7",
      fill: "#b5785a"
    },
    width: 1.06,
    height: 1.58,
    depth: 0.24,
    chapters: [
      "Computer Vision & Autonomous Systems Passion",
      "AI Ethics & Philosophy of Machine Logic",
      "Esports, Chess (Strategy) & Music (Focus)"
    ],
    seed: 44
  }
];

let html = sourceHtml.replace(/\r\n/g, '\n');

// 1. Update Title and Meta
html = html.replace(
  '<title>Working Volumes — Seven Tools for Making</title>',
  '<title>Ozan Arda Özçelik — Yetenekler &amp; Yetkinlik Kütüphanesi</title>'
);
html = html.replace(
  'Seven field guides for making',
  '<span class="lang-tr">Eskiz Defterim &amp; 5 Temel Yetkinlik Cildi</span><span class="lang-en">My Sketchbook &amp; 5 Core Capabilities</span>'
);

// 2. Add bilingual CSS helper and compact no-scroll .detail-panel CSS
const bilingualCss = `
    html[data-lang="tr"] .lang-en { display: none !important; }
    html[data-lang="en"] .lang-tr { display: none !important; }
    .shelf-lang-btn {
      font-family: inherit;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.12em;
      padding: 3px 9px;
      border: 1px solid rgba(255,255,255,0.22);
      border-radius: 4px;
      background: rgba(255,255,255,0.08);
      color: #fff;
      cursor: pointer;
      transition: all 0.2s;
      margin-left: 12px;
    }
    .shelf-lang-btn:hover {
      background: rgba(255,255,255,0.25);
    }
    .open-sketchbook-dock-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 14px;
      padding: 8px 16px;
      border: 1px solid var(--accent, #e09f67);
      border-radius: 999px;
      background: rgba(224, 159, 103, 0.15);
      color: var(--ink, #f4eee6);
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.06em;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .open-sketchbook-dock-btn:hover {
      background: var(--accent, #e09f67);
      color: #121212;
    }

    /* Compact No-Scroll Story/Detail Panel: Readable at single glance without scrolling */
    .detail-panel {
      position: absolute !important;
      top: 50% !important;
      right: clamp(24px, 5vw, 84px) !important;
      z-index: 9 !important;
      width: min(42vw, 480px) !important;
      max-height: calc(100vh - 40px) !important;
      padding: clamp(18px, 2.2vw, 26px) !important;
      overflow: hidden !important;
      border: 1px solid rgba(49, 38, 28, 0.22) !important;
      background:
        linear-gradient(90deg, rgba(84, 58, 37, 0.055), transparent 6%, transparent 94%, rgba(84, 58, 37, 0.045)),
        rgba(244, 237, 220, 0.94) !important;
      box-shadow:
        0 24px 64px rgba(56, 36, 21, 0.16),
        inset 0 0 36px rgba(113, 79, 46, 0.055) !important;
      opacity: 0;
      transform: translateY(-50%) scale(0.96) !important;
      transition: opacity 520ms var(--ease-out), transform 520ms var(--ease-out) !important;
      pointer-events: none;
      backdrop-filter: blur(16px) !important;
    }

    .mode-detail .detail-panel {
      opacity: 1 !important;
      transform: translateY(-50%) scale(1) !important;
      transition-delay: 0ms, 150ms !important;
      pointer-events: auto !important;
    }

    .detail-title {
      margin: 0 0 6px 0 !important;
      font-size: clamp(1.35rem, 2.1vw, 2rem) !important;
      line-height: 1.05 !important;
    }

    .detail-deck {
      margin: 6px 0 10px 0 !important;
      font-size: clamp(0.82rem, 1.05vw, 0.9rem) !important;
      line-height: 1.42 !important;
      color: var(--ink-soft) !important;
    }

    .meta-list {
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      gap: 5px 14px !important;
      margin: 0 0 8px 0 !important;
      padding-top: 6px !important;
      border-top: 1px solid var(--rule) !important;
    }

    .meta-list dt {
      margin: 0 0 2px 0 !important;
      font-size: 0.58rem !important;
    }

    .meta-list dd {
      margin: 0 !important;
      font-size: 0.74rem !important;
      line-height: 1.25 !important;
      font-weight: 500 !important;
    }

    .page-navigation {
      margin: 6px 0 !important;
      padding-top: 6px !important;
      border-top: 1px solid var(--rule) !important;
    }

    .page-status strong {
      font-size: 0.8rem !important;
    }

    .page-status span {
      font-size: 0.65rem !important;
    }

    .detail-controls {
      margin-top: 6px !important;
      padding-top: 6px !important;
      border-top: 1px solid var(--rule) !important;
    }

    .detail-controls .microcopy {
      margin: 0 0 4px 0 !important;
      font-size: 0.58rem !important;
    }

    .reset-button {
      padding: 5px 12px !important;
      font-size: 0.72rem !important;
    }
`;
html = html.replace('</style>', `${bilingualCss}\n  </style>`);

// 3. Update Editorial Header
const newEditorialHeader = `
    <header class="editorial-header">
      <div class="editorial-title">
        <strong>OZAN ARDA ÖZÇELİK</strong>
        <span>
          <span class="lang-tr">02 Yeteneklerim &amp; Çalışma Kitaplığı</span>
          <span class="lang-en">02 Capabilities &amp; Technical Volumes</span>
        </span>
      </div>
      <div class="editorial-index" style="display:flex;align-items:center;">
        <span><span class="lang-tr">Edisyon 2026</span><span class="lang-en">Edition 2026</span></span>
        <span id="palette-label" style="margin-left:10px;">Sıcak Parşömen · Deri · Bakır</span>
        <button class="shelf-lang-btn" id="shelfLangBtn" type="button" aria-label="Dili Değiştir / Switch Language">
          <span class="lang-tr">EN</span><span class="lang-en">TR</span>
        </button>
      </div>
    </header>
`;
html = html.replace(/<header class="editorial-header"[\s\S]*?<\/header>/, newEditorialHeader);

// 4. Update hero word
html = html.replace('id="hero-word" aria-hidden="true">VOLUMES</p>', 'id="hero-word" aria-hidden="true">YETENEKLER</p>');

// 5. Update UI buttons (Open, Microcopy, Meta terms)
html = html.replace(
  '<button class="text-button" id="inspect" type="button">Open</button>',
  '<button class="text-button" id="inspect" type="button"><span class="lang-tr">İncele</span><span class="lang-en">Open</span></button>'
);
html = html.replace(
  '<p class="microcopy">Wheel · arrows · select</p>',
  '<p class="microcopy"><span class="lang-tr">Kaydır · Oklar · Seç</span><span class="lang-en">Wheel · arrows · select</span></p>'
);

// Detail panel labels
html = html.replace('<dt>Binding</dt>', '<dt><span class="lang-tr">Cilt / Mimariler</span><span class="lang-en">Binding / Architectures</span></dt>');
html = html.replace('<dt>Format</dt>', '<dt><span class="lang-tr">Format / Araçlar</span><span class="lang-en">Format / Tooling</span></dt>');
html = html.replace('<dt>Theme</dt>', '<dt><span class="lang-tr">Tema / Alan</span><span class="lang-en">Theme / Domain</span></dt>');
html = html.replace('<dt>Motif</dt>', '<dt><span class="lang-tr">Motif</span><span class="lang-en">Motif</span></dt>');

// 6. Replace BOOKS definition
const booksSearchStart = html.indexOf('const BOOKS = [');
const booksSearchEnd = html.indexOf('];', booksSearchStart) + 2;

const newBooksScript = `
    const BOOKS_TR = ${JSON.stringify(BOOKS_TR, null, 6)};

    const BOOKS_EN = ${JSON.stringify(BOOKS_EN, null, 6)};

    let currentShelfLang = localStorage.getItem('site_lang') || 'tr';
    document.documentElement.lang = currentShelfLang;
    document.documentElement.setAttribute('data-lang', currentShelfLang);

    let BOOKS = (currentShelfLang === 'en' ? BOOKS_EN : BOOKS_TR).map(b => ({ ...b }));
`;
html = html.slice(0, booksSearchStart) + newBooksScript + html.slice(booksSearchEnd);

// 7. Limit book inside pages to maximum 2-3 pages / spreads!
// PAGINATED_LEAF_COUNT = 2 (which gives SPREAD_COUNT = 3: Spread 0, Spread 1, Spread 2)
html = html.replace('const PAGINATED_LEAF_COUNT = 4;', 'const PAGINATED_LEAF_COUNT = 2;');

// Update leafOrder bounds in book model builder
html = html.replace(
  'const frontPageMaterial = leafOrder < 4\n          ? interiorPageMaterials[leafOrder * 2]\n          : blankPageMaterial;',
  'const frontPageMaterial = leafOrder < PAGINATED_LEAF_COUNT\n          ? interiorPageMaterials[leafOrder * 2]\n          : blankPageMaterial;'
);
html = html.replace(
  'const backPageMaterial = leafOrder < 4\n          ? interiorPageMaterials[leafOrder * 2 + 1]\n          : blankPageMaterial;',
  'const backPageMaterial = leafOrder < PAGINATED_LEAF_COUNT\n          ? interiorPageMaterials[leafOrder * 2 + 1]\n          : blankPageMaterial;'
);

// 8. Update getSpreadLabels for 3 spreads
const oldGetSpreadLabels = `    function getSpreadLabels(book) {
      return [
        "Title page",
        \`\${book.chapters[0]} · Plate\`,
        \`\${book.chapters[1]} · Notes\`,
        \`\${book.chapters[2]} · System\`,
        "Colophon"
      ];
    }`;

const newGetSpreadLabels = `    function getSpreadLabels(book) {
      const isTr = (document.documentElement.lang || 'tr') === 'tr';
      if (isTr) {
        return [
          "Giriş · Yetkinlik Özeti",
          \`\${book.chapters[0] || 'Temel Alan'} · Detaylar\`,
          "Sistem Mimarisi & Künye"
        ];
      }
      return [
        "Overview & Capabilities",
        \`\${book.chapters[0] || 'Core Domain'} · Details\`,
        "System Architecture & Colophon"
      ];
    }`;
html = html.replace(oldGetSpreadLabels, newGetSpreadLabels);

// 9. Update makeInteriorPageTextures for 4 pages (2 leaves = 4 pages, covering 3 spreads)
const oldMakeInteriorStart = html.indexOf('function makeInteriorPageTextures(book) {');
const oldMakeInteriorEnd = html.indexOf('return texture;\n      });\n    }', oldMakeInteriorStart) + 'return texture;\n      });\n    }'.length;

const newMakeInteriorFunction = `function makeInteriorPageTextures(book) {
      const pageCount = 4;
      const inkColor = new THREE.Color(book.color).lerp(new THREE.Color(0x211b16), 0.62);
      const ink = \`#\${inkColor.getHexString()}\`;

      return Array.from({ length: pageCount }, (_, pageIndex) => {
        const canvas = document.createElement("canvas");
        const logicalWidth = 512;
        const logicalHeight = 768;
        canvas.width = 384;
        canvas.height = 576;
        const ctx = canvas.getContext("2d");
        ctx.scale(0.75, 0.75);
        const random = seededRandom(hashSeed(\`\${book.id}-leaf-\${pageIndex}\`) + book.seed);
        drawPaperSurface(ctx, logicalWidth, logicalHeight, random);
        ctx.fillStyle = ink;
        ctx.strokeStyle = ink;
        ctx.textAlign = "left";
        ctx.textBaseline = "alphabetic";

        ctx.globalAlpha = 0.58;
        ctx.font = '500 10px Inter, "Helvetica Neue", Arial, sans-serif';
        ctx.letterSpacing = "1.8px";
        ctx.fillText(\`YETKİNLİK KİTAPLIĞI  /  \${book.roman}\`, 48, 48);
        ctx.textAlign = "right";
        ctx.fillText(pad(pageIndex + 1), logicalWidth - 48, 48);
        ctx.textAlign = "left";
        ctx.fillRect(48, 64, logicalWidth - 96, 1);
        ctx.globalAlpha = 1;

        if (pageIndex === 0) {
          // Page 0: Title & Core Overview
          ctx.font = '500 12px Inter, "Helvetica Neue", Arial, sans-serif';
          ctx.letterSpacing = "2.3px";
          ctx.fillText(book.discipline.toUpperCase(), 54, 160);
          ctx.font = \`400 \${book.title.length > 10 ? 46 : 56}px "Iowan Old Style", Baskerville, Georgia, serif\`;
          ctx.letterSpacing = "0px";
          drawWrappedCanvasText(ctx, book.title, 52, 230, 18, 54, 2);
          ctx.globalAlpha = 0.65;
          ctx.font = '400 20px "Iowan Old Style", Baskerville, Georgia, serif';
          drawWrappedCanvasText(ctx, book.note, 54, 380, 36, 28, 4);
          ctx.globalAlpha = 0.45;
          ctx.font = '500 11px Inter, "Helvetica Neue", Arial, sans-serif';
          ctx.letterSpacing = "1.8px";
          ctx.fillText(\`CİLT \${book.roman}  ·  ODAK ALANI\`, 54, 560);
          ctx.font = '400 18px "Iowan Old Style", Baskerville, Georgia, serif';
          drawWrappedCanvasText(ctx, book.theme, 54, 600, 36, 26, 3);
        } else if (pageIndex === 1) {
          // Page 1: Chapter 1 - Sektörel / Saha Ar-Ge
          ctx.font = '500 11px Inter, "Helvetica Neue", Arial, sans-serif';
          ctx.letterSpacing = "2px";
          ctx.fillText("BÖLÜM 01  /  SAHA UYGULAMASI", 54, 150);
          ctx.font = '400 40px "Iowan Old Style", Baskerville, Georgia, serif';
          ctx.letterSpacing = "0px";
          drawWrappedCanvasText(ctx, book.chapters[0], 52, 220, 18, 46, 3);
          ctx.globalAlpha = 0.58;
          ctx.font = '400 19px "Iowan Old Style", Baskerville, Georgia, serif';
          drawWrappedCanvasText(ctx, book.deck, 54, 380, 38, 28, 6);
          ctx.globalAlpha = 0.45;
          ctx.font = '500 10px Inter, "Helvetica Neue", Arial, sans-serif';
          ctx.letterSpacing = "1.5px";
          ctx.fillText(\`UYGULAMA: \${book.binding.toUpperCase()}\`, 54, 620);
        } else if (pageIndex === 2) {
          // Page 2: Chapter 2 - Sistem Mimarisi & Teknik Çözüm
          ctx.font = '500 11px Inter, "Helvetica Neue", Arial, sans-serif';
          ctx.letterSpacing = "2px";
          ctx.fillText("BÖLÜM 02  /  TEKNİK MİMARİ", 54, 150);
          ctx.font = '400 40px "Iowan Old Style", Baskerville, Georgia, serif';
          ctx.letterSpacing = "0px";
          drawWrappedCanvasText(ctx, book.chapters[1] || book.chapters[0], 52, 220, 18, 46, 3);
          ctx.save();
          ctx.globalAlpha = 0.55;
          drawMotif(ctx, { ...book, foil: ink }, logicalWidth, logicalHeight * 0.72);
          ctx.restore();
          ctx.globalAlpha = 0.58;
          ctx.font = '400 18px "Iowan Old Style", Baskerville, Georgia, serif';
          drawWrappedCanvasText(ctx, book.chapters[2] || book.format, 54, 560, 38, 26, 3);
        } else {
          // Page 3: Colophon & Technical Specimen
          ctx.font = '500 11px Inter, "Helvetica Neue", Arial, sans-serif';
          ctx.letterSpacing = "2px";
          ctx.fillText("KÜNYE & SİSTEM ÖZETİ", 54, 150);
          ctx.font = '400 32px "Iowan Old Style", Baskerville, Georgia, serif';
          ctx.letterSpacing = "0px";
          ctx.fillText(book.title, 54, 215);
          ctx.globalAlpha = 0.58;
          ctx.font = '400 18px "Iowan Old Style", Baskerville, Georgia, serif';
          drawWrappedCanvasText(
            ctx,
            \`\${book.binding}. Format: \${book.format}. Ozan Arda Özçelik portföy yetkinlikleri ve saha mühendisliği dokümanı.\`,
            54,
            280,
            40,
            26,
            6
          );
          ctx.save();
          ctx.translate(logicalWidth * 0.5, 520);
          ctx.globalAlpha = 0.45;
          for (let ring = 0; ring < 3; ring += 1) {
            ctx.beginPath();
            ctx.arc(0, 0, 24 + ring * 22, 0, Math.PI * 2);
            ctx.stroke();
          }
          ctx.restore();
          ctx.globalAlpha = 0.74;
          ctx.font = '500 10px Inter, "Helvetica Neue", Arial, sans-serif';
          ctx.letterSpacing = "1.8px";
          ctx.fillText(\`CİLT \${book.roman}  ·  OZAN ARDA ÖZÇELİK  ·  2026\`, 54, 660);
        }

        ctx.globalAlpha = 0.62;
        ctx.fillRect(48, logicalHeight - 48, logicalWidth - 96, 1);
        ctx.globalAlpha = 1;
        const texture = configureCanvasTexture(new THREE.CanvasTexture(canvas), {
          anisotropy: 16
        });
        texture.name = \`\${book.id}-interior-page-\${pageIndex + 1}\`;
        return texture;
      });
    }`;

html = html.slice(0, oldMakeInteriorStart) + newMakeInteriorFunction + html.slice(oldMakeInteriorEnd);

// 10. Ensure coverAtlasReady stays false so it generates authentic foiled cloth covers procedurally
html = html.replace('coverAtlasReady = true;', 'coverAtlasReady = false;');

// 11. Multiline title rendering helper for covers
const drawCoverTitleHelper = `
    function drawCoverTitle(ctx, title, x, y, maxWidth, isCenter = true) {
      let lines = [title];
      if (title.includes(" & ") && ctx.measureText(title).width > maxWidth) {
        const parts = title.split(" & ");
        lines = [parts[0] + " &", parts.slice(1).join(" & ")];
      } else if (title.includes(" and ") && ctx.measureText(title).width > maxWidth) {
        const parts = title.split(" and ");
        lines = [parts[0] + " and", parts.slice(1).join(" and ")];
      } else if (ctx.measureText(title).width > maxWidth) {
        const words = title.split(" ");
        if (words.length >= 2) {
          const mid = Math.ceil(words.length / 2);
          lines = [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
        }
      }

      const fontSize = parseInt(ctx.font, 10) || 58;
      const lineHeight = fontSize * 1.16;
      if (lines.length > 1) {
        const startY = isCenter ? y - (lineHeight * (lines.length - 1)) / 2 : y - (lineHeight * (lines.length - 1));
        lines.forEach((line, idx) => {
          ctx.fillText(line, x, startY + idx * lineHeight);
        });
      } else {
        ctx.fillText(title, x, y);
      }
    }
`;

html = html.replace('function makeCoverTexture(book) {', `${drawCoverTitleHelper}\n    function makeCoverTexture(book) {`);

// In makeCoverTexture:
const oldCoverTitleBlock = `      const titleSize = book.title.length > 10 ? 72 : 88;
      ctx.font = \`400 \${titleSize}px "Iowan Old Style", Baskerville, Georgia, serif\`;
      ctx.fillText(book.title, canvasTexture.width / 2, canvasTexture.height * 0.72);
      ctx.font = '500 16px Inter, "Helvetica Neue", Arial, sans-serif';
      ctx.fillText(book.discipline.toUpperCase(), canvasTexture.width / 2, canvasTexture.height * 0.79);`;

const newCoverTitleBlock = `      const titleSize = book.title.length > 18 ? 58 : (book.title.length > 10 ? 68 : 84);
      ctx.font = \`400 \${titleSize}px "Iowan Old Style", Baskerville, Georgia, serif\`;
      drawCoverTitle(ctx, book.title, canvasTexture.width / 2, canvasTexture.height * 0.72, canvasTexture.width - 140, true);
      ctx.font = '500 16px Inter, "Helvetica Neue", Arial, sans-serif';
      ctx.fillText(book.discipline.toUpperCase(), canvasTexture.width / 2, canvasTexture.height * 0.81);`;

html = html.replace(oldCoverTitleBlock, newCoverTitleBlock);

// In makeFoilTexture:
const oldFoilTitleBlock = `      const titleSize = book.title.length > 10 ? 64 : 78;
      ctx.font = \`400 \${titleSize}px "Iowan Old Style", Baskerville, Georgia, serif\`;
      ctx.fillText(book.title, 58, 1020);
      ctx.font = '500 14px Inter, "Helvetica Neue", Arial, sans-serif';
      ctx.letterSpacing = "2.4px";
      ctx.fillText(book.discipline.toUpperCase(), 60, 1066);`;

const newFoilTitleBlock = `      const titleSize = book.title.length > 18 ? 52 : (book.title.length > 10 ? 62 : 76);
      ctx.font = \`400 \${titleSize}px "Iowan Old Style", Baskerville, Georgia, serif\`;
      drawCoverTitle(ctx, book.title, 58, 1010, foilCanvas.width - 120, false);
      ctx.font = '500 14px Inter, "Helvetica Neue", Arial, sans-serif';
      ctx.letterSpacing = "2.4px";
      ctx.fillText(book.discipline.toUpperCase(), 60, 1070);`;

html = html.replace(oldFoilTitleBlock, newFoilTitleBlock);

// In makeSpineFoilTexture:
const oldSpineTitleBlock = `      ctx.font = \`400 \${book.title.length > 10 ? 58 : 68}px "Iowan Old Style", Baskerville, Georgia, serif\`;
      ctx.letterSpacing = "0px";
      ctx.fillText(book.title, 0, 0);`;

const newSpineTitleBlock = `      const spineTitleSize = book.title.length > 18 ? 48 : (book.title.length > 10 ? 56 : 66);
      ctx.font = \`400 \${spineTitleSize}px "Iowan Old Style", Baskerville, Georgia, serif\`;
      ctx.letterSpacing = "0px";
      ctx.fillText(book.title, 0, 0);`;

html = html.replace(oldSpineTitleBlock, newSpineTitleBlock);

// In makeBackFoilTexture:
const oldBackFoilTitleBlock = `      ctx.font = \`400 \${book.title.length > 10 ? 52 : 62}px "Iowan Old Style", Baskerville, Georgia, serif\`;
      ctx.letterSpacing = "0px";
      ctx.fillText(book.title, 68, 956);
      ctx.font = '500 15px Inter, "Helvetica Neue", Arial, sans-serif';
      ctx.letterSpacing = "2.6px";
      ctx.fillText(book.discipline.toUpperCase(), 70, 1004);`;

const newBackFoilTitleBlock = `      const titleSize = book.title.length > 18 ? 44 : (book.title.length > 10 ? 52 : 62);
      ctx.font = \`400 \${titleSize}px "Iowan Old Style", Baskerville, Georgia, serif\`;
      ctx.letterSpacing = "0px";
      drawCoverTitle(ctx, book.title, 68, 946, foilCanvas.width - 140, false);
      ctx.font = '500 15px Inter, "Helvetica Neue", Arial, sans-serif';
      ctx.letterSpacing = "2.6px";
      ctx.fillText(book.discipline.toUpperCase(), 70, 1010);`;

html = html.replace(oldBackFoilTitleBlock, newBackFoilTitleBlock);

// 12. Custom onWheel handler: Only slide books when cursor is hovering over a book; otherwise scroll parent page!
const oldOnWheel = `    function onWheel(event) {
      if (mode !== "hero") return;
      event.preventDefault();
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      targetPosition += clamp(delta * 0.0022, -0.72, 0.72);
      wheelIdle = 0.14;
      requestFrame();
    }`;

const newOnWheel = `    function forwardScrollToParent(event) {
      if (window.parent && window.parent !== window) {
        try {
          window.parent.postMessage({
            type: 'PARENT_SCROLL',
            deltaY: event.deltaY,
            deltaX: event.deltaX
          }, '*');
        } catch (e) {}
      }
    }

    function onWheel(event) {
      if (mode !== "hero") {
        forwardScrollToParent(event);
        return;
      }
      setPointerFromEvent(event);
      const isOverBook = (bookIndexAtPointer() >= 0 || hoveredIndex >= 0);
      if (!isOverBook) {
        forwardScrollToParent(event);
        // Rapidly snap shelf books back to Book 0 (Hikayem) when scrolling off-book
        if (Math.abs(targetPosition) > 0.02 || selectedIndex !== 0) {
          targetPosition = 0;
          updateSelection(0, true);
          requestFrame();
        }
        return;
      }
      event.preventDefault();
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      targetPosition += clamp(delta * 0.0022, -0.72, 0.72);
      wheelIdle = 0.14;
      requestFrame();
    }`;

html = html.replace(oldOnWheel, newOnWheel);

// 13. Intercept openDetail for Book 0 ("Hikayem"):
const oldOpenDetail = `    function openDetail(origin = inspectButton) {
      if (mode !== "hero") return;`;

const newOpenDetail = `    function openDetail(origin = inspectButton) {
      if (mode !== "hero") return;
      if (selectedIndex === 0 || (BOOKS[selectedIndex] && BOOKS[selectedIndex].id === "story")) {
        if (window.parent && window.parent !== window) {
          try {
            window.parent.postMessage({ type: 'NAVIGATE_TO_STORY' }, '*');
            return;
          } catch(e) {}
        }
      }`;

html = html.replace(oldOpenDetail, newOpenDetail);

// 14. Idle render loop optimization
const oldShouldContinue = `      const shouldContinue = !reducedMotion
        || mode === "opening"
        || mode === "closing"
        || shelfMoving
        || themeIsMoving;`;

const newShouldContinue = `      const isHovering = (hoveredIndex >= 0 || (typeof bookIndexAtPointer === 'function' && bookIndexAtPointer() >= 0));
      const shouldContinue = mode === "opening"
        || mode === "closing"
        || mode === "detail"
        || shelfMoving
        || isHovering
        || themeIsMoving
        || wheelIdle > 0;`;

html = html.replace(oldShouldContinue, newShouldContinue);

// 15. Add language switching functions and postMessage listener
const langSwitcherLogic = `
    function setShelfLanguage(lang) {
      currentShelfLang = lang;
      document.documentElement.lang = lang;
      document.documentElement.setAttribute('data-lang', lang);
      localStorage.setItem('site_lang', lang);
      const source = lang === 'en' ? BOOKS_EN : BOOKS_TR;
      
      source.forEach((srcBook, i) => {
        if (BOOKS[i]) {
          BOOKS[i].title = srcBook.title;
          BOOKS[i].discipline = srcBook.discipline;
          BOOKS[i].note = srcBook.note;
          BOOKS[i].deck = srcBook.deck;
          BOOKS[i].binding = srcBook.binding;
          BOOKS[i].format = srcBook.format;
          BOOKS[i].theme = srcBook.theme;
          BOOKS[i].motif = srcBook.motif;
          BOOKS[i].paletteLabel = srcBook.paletteLabel;
          BOOKS[i].chapters = [...srcBook.chapters];
        }
      });

      const heroWord = document.getElementById('hero-word');
      if (heroWord) {
        heroWord.textContent = lang === 'en' ? 'CAPABILITIES' : 'YETENEKLER';
      }

      if (typeof updateSelection === 'function') {
        updateSelection(selectedIndex, false);
      }
      if (typeof populateDetail === 'function' && BOOKS[selectedIndex]) {
        populateDetail(BOOKS[selectedIndex]);
      }
    }

    const shelfLangBtn = document.getElementById('shelfLangBtn');
    if (shelfLangBtn) {
      shelfLangBtn.addEventListener('click', () => {
        const nextLang = currentShelfLang === 'tr' ? 'en' : 'tr';
        setShelfLanguage(nextLang);
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({ type: 'SET_LANG', lang: nextLang }, '*');
        }
      });
    }

    window.addEventListener('message', (e) => {
      if (!e.data) return;
      if (e.data.type === 'SET_LANG' && (e.data.lang === 'tr' || e.data.lang === 'en')) {
        setShelfLanguage(e.data.lang);
      }
      if (e.data.type === 'SNAP_TO_STORY_BOOK') {
        if (mode === "detail") {
          try { closeDetail(); } catch(err) {}
        }
        targetPosition = 0;
        updateSelection(0, true);
        requestFrame();
      }
      if (e.data.type === 'SUSPEND_WEBGL') {
        suspended = true;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = 0;
        }
      }
      if (e.data.type === 'RESUME_WEBGL') {
        if (suspended) {
          suspended = false;
          lastTime = performance.now();
          requestFrame();
        }
      }
    });
`;

html = html.replace('updateSelection(0, true);', `${langSwitcherLogic}\n    updateSelection(0, true);`);

fs.writeFileSync('public/landing-pages/skills-shelf.html', html, 'utf8');
console.log('Successfully wrote public/landing-pages/skills-shelf.html! Bytes:', html.length);
