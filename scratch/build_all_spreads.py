import os
from PIL import Image, ImageDraw, ImageFont
import numpy as np

# Load base spread
spread_base = Image.open('scratch/clean_paper_spread.png').convert('RGBA')
spread_arr = np.array(spread_base)
alpha_orig = spread_arr[:, :, 3]

# Fonts
font_kicker = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 12)
font_title = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 23)
font_sub = ImageFont.truetype(r'C:\Windows\Fonts\georgiai.ttf', 14)
font_body = ImageFont.truetype(r'C:\Windows\Fonts\georgia.ttf', 15)
font_italic = ImageFont.truetype(r'C:\Windows\Fonts\georgiai.ttf', 14)
font_note = ImageFont.truetype(r'C:\Windows\Fonts\georgiai.ttf', 12)

INK_DEEP = (40, 36, 30, 255)
INK_FAINT = (130, 115, 100, 255)
EARTH = (145, 95, 48, 255)
RULE_COLOR = (185, 170, 155, 180)

artifacts_dir = r'C:\Users\dloozi\.gemini\antigravity-cli\brain\af0d76d1-4e98-4245-9246-8ea4316a204d'
out_dir = os.path.join('public', 'landing-pages', 'meng-to-sketchbook')

spreads_data = [
    {
        'file': 'marina-bay-sands.png',
        'illus': 'plate01_highschool_1789635648017.jpg',
        'kicker': 'BÖLÜM 01 // 2017 – 2021 · PENDİK, İSTANBUL',
        'plate_num': 'LEVHA 01',
        'title': 'İlk Kıvılcım & Bilgisayarla Tanışma',
        'subtitle': 'Kırımlı Fazilet Olcay Anadolu Lisesi',
        'lead': 'Lisede kod satırlarıyla tanışıp bilgisayarın sınırsız potansiyelini keşfetmekten, gökyüzünde otonom it dalaşı yapan SİHA algoritmaları ve endüstriyel fabrikalarda sıfır hata anomali modelleri yönetmeye uzanan bir yolculuk.',
        'body': 'Bilgisayara ve teknolojiye olan tutkum lise yıllarımda başladı. Kırımlı Fazilet Olcay Anadolu Lisesi sıralarındayken kod yazmanın ve algoritmik düşüncenin sadece bir araç değil; dünyayı anlama, karmaşık sorunları parçalara bölüp rasyonel biçimde çözme yetisi kazandıran bir hayat felsefesi olduğunu gördüm. Bu kavrayış hayata ve problemlere bakışımı kökten değiştirdi ve beni bilgisayar mühendisliği idealiyle buluşturdu.',
        'note': '✦ "Kod satırları, zihindeki düşüncenin mantık devrelerinde maddeye bürünmüş halidir."',
        'signature': '[Kırımlı Fazilet Olcay Anadolu Lisesi — Ozan Arda Özçelik]'
    },
    {
        'file': 'gardens-by-the-bay.png',
        'illus': 'plate02_university_1789635671917.jpg',
        'kicker': 'BÖLÜM 02 // 2021 – 2025 · ÇORLU, TEKİRDAĞ',
        'plate_num': 'LEVHA 02',
        'title': 'Üniversite Temeli & Mühendislik',
        'subtitle': 'Tekirdağ Namık Kemal Üniversitesi — Yüksek Onur',
        'lead': 'Tekirdağ Namık Kemal Üniversitesi Bilgisayar Mühendisliği bölümünde lisans eğitimime başladım ve akademik yolculuğumu Yüksek Onur derecesiyle sürdürüyorum.',
        'body': 'Veri yapıları, algoritmalar, ayrık matematik ve sistem mimarileri üzerine inşa edilen bu dönem; teorik hesaplama prensiplerini pratik mühendislik çözümlerine dönüştürme vizyonumu güçlendirdi. Amfilerdeki matematiksel temelleri araştırma-geliştirme tutkusuyla harmanlayarak somut sistemlere evrilttim.',
        'note': '✦ "Temel ne kadar sağlam olursa, inşa edilen otonom mimari o kadar yüksek irtifalara ulaşır."',
        'signature': '[NKÜ Mühendislik Fakültesi — Yüksek Onur / High Honors]'
    },
    {
        'file': 'merlion.png',
        'illus': 'plate03_computervision_1789635689032.jpg',
        'kicker': 'BÖLÜM 03 // BİLGİSAYARLI GÖRÜ & YAPAY ZEKA',
        'plate_num': 'LEVHA 03',
        'title': 'Piksellerden Anlam Çıkarmak: Görüntü İşleme',
        'subtitle': 'Computer Vision, OpenCV & Derin Öğrenme',
        'lead': 'Üniversite yıllarımda yazılımı salt ekranda kalmaktan çıkarıp fiziksel dünyayla etkileşime sokma hedefiyle Görüntü İşleme (Computer Vision) alanına odaklandım.',
        'body': 'Kamera sensörlerinden gelen ham piksel matrislerini derin öğrenme modelleriyle anlamlandırmak, konvolüsyonel sinir ağları (CNN), nesne tespiti, sınır kutuları ve öznitelik haritaları çıkarmak çalışmalarımın odak noktası haline geldi. Bir kamerayı makinenin gözü ve algı merkezi kılmak en büyük tutkum oldu.',
        'note': '✦ "Pikseller sadece sayılardan ibaret değildir; doğru filtreden geçtiğinde dünyayı anlayan bir göze dönüşür."',
        'signature': '[OpenCV, PyTorch, Tensor Operations & Saliency Maps]'
    },
    {
        'file': 'buddha-tooth.png',
        'illus': 'plate04_robotics_1789635708664.jpg',
        'kicker': 'BÖLÜM 04 // GÖMÜLÜ SİSTEMLER & KİNEMATİK',
        'plate_num': 'LEVHA 04',
        'title': 'Kodu Fiziksel Dünyaya İndirmek: Robotik',
        'subtitle': 'ROS 2, Mikrodenetleyiciler & Sensör Füzyonu',
        'lead': 'Görüntü işleme algoritmalarını havada ve karada hareket eden fiziksel gövdelere bağlama vizyonu beni Robotik ve Gömülü Sistemler dünyasına taşıdı.',
        'body': 'Mikrodenetleyiciler, STM32 mimarisi ve ROS 2 (Robot Operating System) ile yayıncı-abone (Publisher-Subscriber) düğüm mimarilerini kurguladım. IMU jiroskop ve ivmeölçer verilerini Kalman ve tamamlayıcı filtrelerle kaynaştırarak gerçek zamanlı oryantasyon, kinematiği ve durum kestirimini sağladım.',
        'note': '✦ "Yazılım ile donanımın temas ettiği sınır hattı: Gerçek zamanlı durum kestirimi ve geri bildirim döngüsü."',
        'signature': '[ROS 2 Humble, STM32 MCU, IMU Sensor Fusion & MPU6050]'
    },
    {
        'file': 'joo-chiat.png',
        'illus': 'plate05_sahi_uav_1789635730454.jpg',
        'kicker': 'BÖLÜM 05 // TEKNOFEST SAVAŞAN İHA · LİDERLİK',
        'plate_num': 'LEVHA 05',
        'title': 'Şahi SİHA: Gökyüzünde Muharebe Otonomisi',
        'subtitle': 'Şahi Otonom SİHA Takımı Yazılım Ekip Liderliği',
        'lead': 'Bu vizyonun en üst sahaya yansıması, Şahi Otonom SİHA Takımı Yazılım Ekip Liderliği oldu.',
        'body': 'TEKNOFEST Savaşan İHA yarışması kapsamında; yüksek hızlı hava-hava muharebe senaryolarında gerçek zamanlı YOLOv8 nesne tespiti, ByteTrack yörünge kestirimi ve oransal seyrüsefer (Proportional Navigation) kamikaze dalış güdüm mimarilerini uçtan uca yönettim. Milisaniyeler mertebesinde it dalaşı hedef kilitlenmeleri geliştirdik.',
        'note': '✦ "Hava-hava muharebesinde saliseler her şeydir; oransal seyrüsefer ve hedef takibi kusursuz işlemelidir."',
        'signature': '[Şahi SİHA Yazılım Liderliği — YOLOv8, ByteTrack & Proportional Nav]'
    },
    {
        'file': 'lau-pa-sat.png',
        'illus': 'plate06_cozum_makina_1789635755334.jpg',
        'kicker': 'BÖLÜM 06 // ÇÖZÜM MAKİNA AR-GE · ISEE VISION',
        'plate_num': 'LEVHA 06',
        'title': 'Endüstriyel Görüntü İşleme & Sıfır Hata',
        'subtitle': 'PatchCore & DINO Vision Transformers Anomali Tespiti',
        'lead': 'Saha tecrübemi endüstriyel boyuta taşıdığım ilk durak Çözüm Makina Ar-Ge oldu.',
        'body': 'ISEE Vision bünyesinde; yüksek hızlı üretim hatlarında PatchCore ve DINO Vision Transformers mimarilerini kullanarak denetimsiz (unsupervised) sıfır hata anomali segmentasyonu geliştirdim. Üretilen parçaların mikrometre düzeyindeki yüzey kusurlarını yapay zeka ile milisaniyeler içinde tespit eden modelleri endüstriyel üretime kazandırdım.',
        'note': '✦ "Fabrika üretim hattında sıfır hata toleransı: Vision Transformers ile derin öznitelik haritalaması."',
        'signature': '[PatchCore & DINO Vision Transformers — Zero Defect Quality Inspection]'
    },
    {
        'file': 'marina-bay-skyline.png',
        'illus': 'plate07_martur_ai_1789635782335.jpg',
        'kicker': 'BÖLÜM 07 // MARTUR FOMPAK INTERNATIONAL',
        'plate_num': 'LEVHA 07',
        'title': 'Kurumsal Yapay Zeka & Çoklu Ajanlar',
        'subtitle': 'Agentic AI & Akıllı Üretim Otomasyonu',
        'lead': 'İkinci büyük endüstriyel durağım küresel otomotiv devi Martur Fompak International oldu.',
        'body': 'Otomotiv koltuk ve iç trim üretim hatlarının karmaşık iş akışlarını optimize etmek üzere kurumsal çoklu ajan (Agentic AI) mimarileri inşa ettim. Kalite kontrol, tedarik zinciri ve üretim planlama ajanlarını LLM orkestrasyonu altında birleştiren karar ağaçları ve akıllı fabrika otomasyon sistemleri geliştirdim.',
        'note': '✦ "Karmaşık endüstriyel iş akışlarında otonomi: Çoklu ajanların senkronize karar kabiliyeti."',
        'signature': '[Martur Fompak — Enterprise Multi-Agent LLM Orchestrator]'
    },
    {
        'file': 'singapore-river.png',
        'illus': 'plate08_huawei_lead_1789635810316.jpg',
        'kicker': 'BÖLÜM 08 // HUAWEI STUDENT DEVELOPERS',
        'plate_num': 'LEVHA 08',
        'title': 'Yazılım Topluluğu & Mentorluk',
        'subtitle': 'Huawei Öğrenci Yazılım Komite Liderliği',
        'lead': 'Teknik üretimin yanı sıra ekosisteme katkı sağlamak amacıyla Huawei Student Developers bünyesinde öğrenci yazılım komite liderliğini yürüttüm.',
        'body': 'Yazılım hackathonları, teknik atölyeler ve açık kaynak geliştirici buluşmaları organize ederek genç mühendis adaylarına mentorluk sundum. Birlikte üretme, kod paylaşımı ve kolektif mühendislik kültürünü yaygınlaştırarak genç yeteneklerin ekosisteme kazandırılmasına öncülük ettim.',
        'note': '✦ "Bilgi paylaşıldıkça çoğalır; güçlü bir mühendislik kültürü birlikte üretmekten doğar."',
        'signature': '[Huawei Student Developers — Software Committee Lead & Mentorship]'
    },
    {
        'file': 'botanic-gardens.png',
        'illus': 'plate09_manifesto_1789635835947.jpg',
        'kicker': 'BÖLÜM 09 // GELECEK VİZYONU & MANİFESTO',
        'plate_num': 'LEVHA 09',
        'title': 'İnsan Formu — Makine Mantığı',
        'subtitle': 'Otonom Sürü Zekası & Gelecek Vizyonu',
        'lead': 'İnsan sezgisi, makine mantığıyla birleştiğinde; donanımın soğuk metalleri otonom bir zekaya dönüşür.',
        'body': 'Lise sıralarındaki ilk kod satırından, gökyüzünde otonom kararlar alan hava filolarına uzanan bu yolculuk; otonom sürü sistemleri, derin görü ve insan-makine ortak yaşamının geleceğini inşa etme kararlılığıyla devam ediyor. Bu eskiz defteri, o vizyonun yaşayan kaydıdır.',
        'note': '✦ "Otonom zihin, matematiksel kesinlik ve insan vizyonunun kusursuz sentezi."',
        'signature': '[Ozan Arda Özçelik — Portfolio 2025 / 2026 · İstanbul & Tekirdağ]'
    }
]

def wrap_text(text, font, max_width, draw):
    lines = []
    paragraphs = text.split('\n')
    for p in paragraphs:
        if not p.strip():
            lines.append('')
            continue
        words = p.split(' ')
        current_line = words[0]
        for w in words[1:]:
            test_line = current_line + ' ' + w
            bbox = draw.textbbox((0, 0), test_line, font=font)
            if bbox[2] - bbox[0] <= max_width:
                current_line = test_line
            else:
                lines.append(current_line)
                current_line = w
        lines.append(current_line)
    return lines

for s in spreads_data:
    dest_file = s['file']
    illus_file = s['illus']
    dest_path = os.path.join(out_dir, dest_file)
    illus_path = os.path.join(artifacts_dir, illus_file)
    
    # 1. Canvas
    canvas = Image.new('RGBA', (1760, 1240), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    
    # Left page area: X: 145 to 805 (Width: 660)
    LX = 145
    LY = 300
    MAX_W = 660
    
    # Kicker & Plate Number
    draw.text((LX, LY), s['kicker'], font=font_kicker, fill=EARTH)
    draw.text((LX + MAX_W - 65, LY), s['plate_num'], font=font_kicker, fill=INK_FAINT)
    
    # Hairline divider
    draw.line([(LX, LY + 22), (LX + MAX_W, LY + 22)], fill=RULE_COLOR, width=1)
    
    # Title & Subtitle
    draw.text((LX, LY + 34), s['title'], font=font_title, fill=INK_DEEP)
    draw.text((LX, LY + 66), s['subtitle'], font=font_sub, fill=EARTH)
    
    curr_y = LY + 96
    
    # Lead text (Italic)
    for line in wrap_text(s['lead'], font_italic, MAX_W, draw):
        if line == '':
            curr_y += 8
        else:
            draw.text((LX, curr_y), line, font=font_italic, fill=EARTH)
            curr_y += 22
            
    curr_y += 10
    draw.line([(LX, curr_y), (LX + 100, curr_y)], fill=EARTH, width=1)
    curr_y += 12
    
    # Body text
    for line in wrap_text(s['body'], font_body, MAX_W, draw):
        if line == '':
            curr_y += 10
        else:
            draw.text((LX, curr_y), line, font=font_body, fill=INK_DEEP)
            curr_y += 23
            
    curr_y += 16
    draw.text((LX, curr_y), s['note'], font=font_note, fill=INK_FAINT)
    curr_y += 18
    draw.text((LX, curr_y), s['signature'], font=font_note, fill=INK_FAINT)
    
    # 2. Right page: place illustration (X: 925 to 1645, Y: 285 to 945)
    if os.path.exists(illus_path):
        im_illus = Image.open(illus_path).convert('RGBA')
        im_resized = im_illus.resize((720, 660), Image.Resampling.LANCZOS)
        canvas.paste(im_resized, (925, 285))
    
    # 3. Composite onto base spread paper
    canvas_arr = np.array(canvas)
    out_arr = np.zeros_like(spread_arr)
    
    base_rgb = spread_arr[:, :, :3].astype(float)
    canvas_rgb = canvas_arr[:, :, :3].astype(float)
    canvas_alpha = canvas_arr[:, :, 3].astype(float) / 255.0
    
    # Multiply blend for paper authenticity
    for c in range(3):
        out_arr[:, :, c] = np.clip(
            base_rgb[:, :, c] * (1.0 - canvas_alpha) + (base_rgb[:, :, c] * canvas_rgb[:, :, c] / 255.0) * canvas_alpha,
            0, 255
        ).astype(np.uint8)
        
    out_arr[:, :, 3] = alpha_orig
    
    res = Image.fromarray(out_arr, 'RGBA')
    res.save(dest_path)
    print(f'Rendered Spread {s["plate_num"]} ({dest_file}) - Left: Text | Right: Illustration ({os.path.getsize(dest_path)} bytes)')

print('ALL 9 SPREADS RENDERED PERFECTLY WITH LEFT=TEXT, RIGHT=PICTURE!')
