import fs from 'fs';

const sourceHtml = fs.readFileSync('public/landing-pages/complete-shelf-v2.html', 'utf8');

const BOOKS_TR = [
  {
    id: "story",
    title: "Hikayem",
    roman: "0",
    discipline: "Eskiz Defteri & 9 Dönüm Noktası",
    note: "2008 retro bilgisayardan gökyüzünde otonom SİHA'lara uzanan dokunsal eskiz defteri.",
    deck: "Ozan Arda Özçelik'in kişisel ve akademik serüvenini ölümsüzleştiren dokuz levhalık dokunsal eskiz defteri. 2008 yılında 3 yaşında ilk bilgisayarla tanışma, Kırımlı Fazilet Olcay Anadolu Lisesi'nde algoritmik düşünceye uyanış, Tekirdağ Namık Kemal Üniversitesi'nde Yüksek Onur derecesi, Şahi SİHA Takımı yazılım liderliği, Çözüm Makina ISEE Vision / Robotics saha Ar-Ge'si ve Martur Fompak kurumsal yapay zekasına uzanan yaşayan bir mühendislik kaydı.",
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
    discipline: "Endüstriyel Muayene, Anomali & OCR",
    note: "Çözüm Makina ISEE Vision, üniversite Ar-Ge, Şahi SİHA, nesne tespiti, OCR ve anomali tespiti.",
    deck: "Çözüm Makina bünyesinde ISEE Vision departmanında sanayi tipi ana projelerimi yürüttüm; temellerini üniversite yıllarımda attığım bilgisayarlı görü vizyonumu Şahi SİHA Takımı'nda hava-hava muharebe ortamına taşıdım. Nesne tespiti (Object Detection), optik karakter tanıma (OCR) ve görsel anomali tespiti (Anomaly Detection) üzerine çok sayıda endüstriyel ve otonom sistem geliştirdim. PaddleOCR, DINO, PatchCore, YOLO ve OpenCV başta olmak üzere geniş bir derin öğrenme ve görüntü işleme yığını üzerinde yetkinim.",
    binding: "Çözüm Makina ISEE Vision · Şahi SİHA · Üniversite",
    format: "PaddleOCR · DINO · PatchCore · YOLO · OpenCV",
    theme: "Sıfır Hata Anomali Tespiti, Nesne Tespiti & Endüstriyel OCR",
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
      "Çözüm Makina ISEE Vision & Anomali (PatchCore, DINO)",
      "Şahi SİHA: Nesne Tespiti & Hava-Hava Optik Takip (YOLO, OpenCV)",
      "Endüstriyel OCR & Yapılandırılmış Metin Okuma (PaddleOCR)"
    ],
    seed: 11
  },
  {
    id: "robotics",
    title: "Robotik & Otonom Sistemler",
    roman: "II",
    discipline: "ROS 2, GNC & Çoklu Robotik Simülasyon",
    note: "Şahi SİHA ve Çözüm Makina ISEE Robotics; ROS 2, MQTT, MAVLink, ArduPilot & Gazebo Harmonic.",
    deck: "Şahi Otonom SİHA Takımı ve Çözüm Makina (ISEE Robotics) bünyesinde hem havada hem fabrika zemininde otonom robotik mimarileri geliştirdim. ROS 2 (Robot Operating System) dağıtık hesaplama düğümleri, endüstriyel MQTT IoT telemetrisi, ArduPilot otonom uçuş kontrolcüleri ve MAVLink seyrüsefer protokolleriyle çalıştım. Algoritmaları fiziksel donanıma indirmeden önce Gazebo Harmonic üzerinde 3D dinamik fizik ve sensör simülasyonları inşa ederek kapalı çevrim test altyapıları kurdum.",
    binding: "Şahi SİHA · Çözüm Makina ISEE Robotics",
    format: "ROS 2 · Gazebo Harmonic · MAVLink · ArduPilot · MQTT",
    theme: "Otonom Uçuş Güdümü, Robotik Düğümler & 3D Simülasyon",
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
      "Çözüm Makina: ISEE Robotics (ROS 2 & Endüstriyel Robotlar)",
      "Şahi Otonom SİHA (ArduPilot & MAVLink GNC Güdüm)",
      "3D Dinamik Simülasyon (Gazebo Harmonic & MQTT Telemetri)"
    ],
    seed: 22
  },
  {
    id: "ai",
    title: "Yapay Zeka",
    roman: "III",
    discipline: "PyTorch, Agentic AI, LLM & Hugging Face",
    note: "Martur Fompak şirket içi AI, ekipler arası akıllı sistemler, PyTorch, Agentic AI & Hugging Face.",
    deck: "Küresel otomotiv lideri Martur Fompak International bünyesinde şirket içi yapay zeka sistemleri ve Agentic AI mimarileri geliştirdim; Ar-Ge, üretim ve planlama departmanlarındaki diğer ekiplerin iş akışlarını hızlandıran akıllı sistemler kurdum. PyTorch derin öğrenme çatısı, Hugging Face açık kaynak model havuzu ve LLM tabanlı çoklu ajan (multi-agent) orkestrasyonlarıyla kurumsal üretken zeka ve karar destek boru hatları inşa ediyorum.",
    binding: "Martur Fompak International · Kurumsal Yapay Zeka",
    format: "PyTorch · Hugging Face · Agentic AI · LLMs · RAG",
    theme: "Şirket İçi Kurumsal Zeka & Çoklu Ajan Orkestrasyonu",
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
      "Martur Fompak: Şirket İçi Yapay Zeka & Ekip Sistemleri",
      "Agentic AI & LLM Tabanlı Çoklu Ajan Orkestrasyonu",
      "PyTorch & Hugging Face Açık Kaynak Modelleri"
    ],
    seed: 66
  },
  {
    id: "languages-tooling",
    title: "Diller & Araçlar",
    roman: "IV",
    discipline: "Programlama, Veri Tabanı & AI Model Araçları",
    note: "Türkçe (Anadil), İngilizce (B2), Python, C++, Docker, Git, PostgreSQL, Claude & AGY CLI.",
    deck: "Modern yazılım mühendisliğinde çok yönlü dil ve araç yetkinliği: İletişimde Türkçe (Anadil) ve İngilizce (B2 Profesyonel Yetkinlik). Yazılım geliştirmede yüksek performanslı Python ve C++. Altyapı ve veri yönetiminde Docker konteynerizasyonu, Git sürüm kontrolü ve PostgreSQL ilişkisel veritabanları. Ayrıca yazılım ve araştırma süreçlerimi katbekat hızlandıran Claude ve Google Antigravity (AGY) CLI gibi gelişmiş yapay zeka modelleri ve otonom ajanik geliştirme araçları.",
    binding: "Türkçe (Anadil) · İngilizce (B2)",
    format: "Python · C++ · Docker · Git · PostgreSQL · Claude · AGY",
    theme: "Programlama Dilleri, Veri Altyapısı & AI Geliştirme Araçları",
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
      "İletişim Dilleri: Türkçe (Anadil) & İngilizce (B2)",
      "Mühendislik Dilleri: Python & C++",
      "Altyapı & AI: Docker, Git, PostgreSQL, Claude & AGY"
    ],
    seed: 55
  },
  {
    id: "interests",
    title: "İlgi Alanları",
    roman: "V",
    discipline: "Vizyon, Strateji, Sanat & Zihin",
    note: "Görüntü işleme, otonom sistemler, yapay zeka etiği, e-spor, satranç ve müzik.",
    deck: "Mühendislik merakını besleyen entelektüel, stratejik ve yaratıcı ilgi alanları: Akademik ve teknik dünyada Bilgisayarlı Görü, Otonom Sistemler ve Yapay Zeka Etiği; makinelerin karar alma mekanizmalarının insani ve felsefi boyutları. Zihinsel dinamizmde E-Spor (hızlı karar alma ve refleksler) ile Satranç (derin taktiksel planlama ve pozisyonel analiz). Zihni dengeleyen ve odaklanmayı artıran Müzik.",
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
    deck: "A nine-plate tactile sketchbook chronicling Ozan Arda Özçelik's personal and academic engineering evolution. From 2008 childhood computing at age 3, awakening to algorithmic philosophy at Kırımlı Fazilet Olcay High School, High Honors in Computer Engineering at Tekirdağ Namık Kemal University, directing software for Şahi Autonomous UAV Team, to field R&D at Çözüm Makina and enterprise AI at Martur Fompak.",
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
    discipline: "Industrial Inspection, Anomaly & OCR",
    note: "Çözüm Makina ISEE Vision, university R&D, Şahi UAV, object detection, OCR & anomaly detection.",
    deck: "Engineered primary industrial vision systems at Çözüm Makina (ISEE Vision), rooted in university academic research and deployed in aerial combat autonomy with Şahi UAV Team. Spearheaded multiple high-throughput implementations across Object Detection, Optical Character Recognition (OCR), and Anomaly Detection utilizing PaddleOCR, DINO, PatchCore, YOLO (v8/v11), and OpenCV.",
    binding: "Çözüm Makina ISEE Vision · Şahi UAV · Academia",
    format: "PaddleOCR · DINO · PatchCore · YOLO · OpenCV",
    theme: "Zero-Defect Anomaly Detection, Target Detection & Industrial OCR",
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
      "Çözüm Makina: ISEE Vision & Anomaly (PatchCore, DINO)",
      "Şahi UAV: Target Detection & Optical Tracking (YOLO, OpenCV)",
      "Industrial Character Recognition (PaddleOCR)"
    ],
    seed: 11
  },
  {
    id: "robotics",
    title: "Robotics & Autonomous Systems",
    roman: "II",
    discipline: "ROS 2, GNC & Multi-Robot Simulation",
    note: "Şahi UAV & Çözüm Makina ISEE Robotics; ROS 2, MQTT, MAVLink, ArduPilot & Gazebo Harmonic.",
    deck: "Architected autonomous robotics systems across dual frontiers: aerial combat autonomy with Şahi UAV and factory robotics at Çözüm Makina (ISEE Robotics). Deep hands-on engineering across ROS 2 nodes, industrial MQTT IoT telemetry, ArduPilot flight controllers, MAVLink navigation protocols, and high-fidelity Gazebo Harmonic 3D physics simulation.",
    binding: "Şahi UAV · Çözüm Makina ISEE Robotics",
    format: "ROS 2 · Gazebo Harmonic · MAVLink · ArduPilot · MQTT",
    theme: "Autonomous Flight Guidance, Robotics Nodes & 3D Simulation",
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
      "Çözüm Makina: ISEE Robotics (ROS 2 & Industrial Robots)",
      "Şahi Autonomous UAV (ArduPilot & MAVLink GNC Guidance)",
      "3D Physics Simulation (Gazebo Harmonic & MQTT Telemetry)"
    ],
    seed: 22
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    roman: "III",
    discipline: "PyTorch, Agentic AI, LLMs & Hugging Face",
    note: "Martur Fompak internal AI, cross-team intelligent systems, PyTorch, Agentic AI & Hugging Face.",
    deck: "Developed enterprise internal AI solutions and Agentic AI workflows at automotive manufacturer Martur Fompak International, building intelligent systems to empower cross-functional engineering teams. Specialized in PyTorch neural architectures, Hugging Face open-source models, and LLM-driven multi-agent orchestration for enterprise decision intelligence.",
    binding: "Martur Fompak International · Enterprise AI",
    format: "PyTorch · Hugging Face · Agentic AI · LLMs · RAG",
    theme: "Internal Enterprise Intelligence & Multi-Agent Orchestration",
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
      "Martur Fompak: Enterprise Internal AI & Cross-Team Systems",
      "Agentic AI & Multi-Agent LLM Orchestration",
      "PyTorch & Hugging Face Open-Source Model Pipelines"
    ],
    seed: 66
  },
  {
    id: "languages-tooling",
    title: "Languages & Tooling",
    roman: "IV",
    discipline: "Programming, Database & AI Model Tooling",
    note: "Turkish (Native), English (B2), Python, C++, Docker, Git, PostgreSQL, Claude & AGY CLI.",
    deck: "Comprehensive linguistic, programming, and tooling versatility: Turkish (Native) and English (B2 Professional Working Proficiency). Core programming in Python and C++. Infrastructure and data management with Docker, Git, and PostgreSQL. Augmented by next-generation autonomous AI models and coding agents including Claude and Google Antigravity (AGY) CLI.",
    binding: "Turkish (Native) · English (B2)",
    format: "Python · C++ · Docker · Git · PostgreSQL · Claude · AGY",
    theme: "Programming Languages, Data Infra & AI Development Tools",
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
      "Core Engineering Languages: Python & C++",
      "Infra & AI Tooling: Docker, Git, PostgreSQL, Claude & AGY"
    ],
    seed: 55
  },
  {
    id: "interests",
    title: "Interests & Passions",
    roman: "V",
    discipline: "Vision, Strategy, Art & Mind",
    note: "Computer vision, autonomous systems, AI ethics, esports, chess and music.",
    deck: "Intellectual, strategic, and creative pursuits fueling engineering excellence: Advanced Computer Vision, Autonomous Systems, and AI Ethics exploring the philosophical impact of machine autonomy. Dynamic decision-making through Esports and positional tactical depth through Chess, harmonized by Music for mental focus and creative rhythm.",
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

let html = sourceHtml;

// 1. Update Title and Meta
html = html.replace(
  '<title>Working Volumes — Seven Tools for Making</title>',
  '<title>Ozan Arda Özçelik — Yetenekler &amp; Yetkinlik Kütüphanesi</title>'
);
html = html.replace(
  'Seven field guides for making',
  '<span class="lang-tr">Eskiz Defterim &amp; 5 Temel Yetkinlik Cildi</span><span class="lang-en">My Sketchbook &amp; 5 Core Capabilities</span>'
);

// 2. Add bilingual CSS helper and drawer open button
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

// 7. Ensure coverAtlasReady stays false so it generates authentic foiled cloth covers procedurally
html = html.replace('coverAtlasReady = true;', 'coverAtlasReady = false;');

// 7b. Multiline title rendering helper for covers
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

// 8. Custom onWheel handler: Only slide books when cursor is hovering over a book; otherwise scroll parent page!
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
        return;
      }
      event.preventDefault();
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      targetPosition += clamp(delta * 0.0022, -0.72, 0.72);
      wheelIdle = 0.14;
      requestFrame();
    }`;

html = html.replace(oldOnWheel, newOnWheel);

// 9. Add language switching functions and postMessage listener
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
      if (e.data && e.data.type === 'SET_LANG' && (e.data.lang === 'tr' || e.data.lang === 'en')) {
        setShelfLanguage(e.data.lang);
      }
    });
`;

html = html.replace('updateSelection(0, false);', `${langSwitcherLogic}\n    updateSelection(0, false);`);

fs.writeFileSync('public/landing-pages/skills-shelf.html', html, 'utf8');
console.log('Successfully wrote public/landing-pages/skills-shelf.html! Bytes:', html.length);
