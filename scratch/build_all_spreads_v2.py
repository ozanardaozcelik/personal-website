import os
from PIL import Image, ImageDraw, ImageFont
import numpy as np

# Load base spread
spread_base = Image.open('scratch/clean_paper_spread.png').convert('RGBA')
spread_arr = np.array(spread_base)
alpha_orig = spread_arr[:, :, 3]

# Upgraded Larger, Crisp Readable Typography
font_kicker = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 13)
font_title = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 27)
font_sub = ImageFont.truetype(r'C:\Windows\Fonts\georgiai.ttf', 17)
font_italic = ImageFont.truetype(r'C:\Windows\Fonts\georgiai.ttf', 17)
font_body = ImageFont.truetype(r'C:\Windows\Fonts\georgia.ttf', 19)
font_motto = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 15)
font_note = ImageFont.truetype(r'C:\Windows\Fonts\georgiai.ttf', 14)
font_signature = ImageFont.truetype(r'C:\Windows\Fonts\georgia.ttf', 13)

INK_DEEP = (34, 30, 25, 255)
INK_FAINT = (110, 98, 85, 255)
EARTH = (145, 95, 48, 255)
RULE_COLOR = (175, 160, 145, 180)

artifacts_dir = r'C:\Users\dloozi\.gemini\antigravity-cli\brain\af0d76d1-4e98-4245-9246-8ea4316a204d'
out_dir = os.path.join('public', 'landing-pages', 'meng-to-sketchbook')

spreads_data = [
    {
        'file': 'marina-bay-sands.png',
        'illus': 'plate01_first_pc_1789636973056.jpg',
        'kicker': 'BÖLÜM 01 // İLK KIVILCIM · 3 YAŞINDA İLK BİLGİSAYAR',
        'plate_num': 'LEVHA 01',
        'title': '3 Yaş: İlk Bilgisayar & Oyunlar',
        'subtitle': '90\'ların Sonu · Dijital Dünyayla İlk Karşılaşma',
        'lead': 'Bilgisayarla aslında henüz 3 yaşımdayken tanıştım; eve gelen ilk bilgisayar ve ekrandaki renkli pikseller dijital dünyaya açılan ilk kapım oldu.',
        'body': '90\'ların sonunda eve ilk masaüstü bilgisayarın alınmasıyla başlayan bu serüven; saatlerce başında oturduğum retro oyunlar, disketler ve CRT monitörün karşısındaki saf çocukluk merakıyla filizlendi. Klavyenin tuşlarına basarak ekranda bir şeyleri hareket ettirebilmek, komutlar vermek ve sanal dünyalarda dolaşmak bende makinelerin nasıl çalıştığına dair silinmez bir merak uyandırdı.',
        'note': '✦ "Makinelere duyulan tutku, bir çocuğun ekrandaki ilk pikselleri hareket ettirdiği an başlar."',
        'signature': '[Ozan Arda Özçelik — 3 Yaş & İlk Bilgisayar Deneyimi]'
    },
    {
        'file': 'gardens-by-the-bay.png',
        'illus': 'plate01_highschool_1789635648017.jpg',
        'kicker': 'BÖLÜM 02 // LİSE DÖNEMİ · KIRIMLI FAZİLET OLCAY A.L.',
        'plate_num': 'LEVHA 02',
        'title': 'Makinelerin Derin Yeteneklerini Keşfetmek',
        'subtitle': 'Kırımlı Fazilet Olcay Anadolu Lisesi · Pendik, İstanbul',
        'lead': 'Bilgisayarın sadece bir oyun aracı değil; arkasında dünyayı dönüştürebilecek çok daha derin yetenekler barındırdığını lisede keşfettim.',
        'body': 'Kırımlı Fazilet Olcay Anadolu Lisesi sıralarındayken kod yazmanın, algoritmaların ve mantıksal düşüncenin gücüyle tanıştım. Karmaşık problemleri mantık adımlarına bölüp rasyonel biçimde çözebilmenin getirdiği özgürlük hayata ve olaylara bakışımı kökten değiştirdi. Bilgisayar artık bir merak değil; hayatımı adayacağım bir mühendislik ideali haline geldi.',
        'note': '✦ "Algoritmik düşünce bir programlama becerisinden öte; dünyayı rasyonel anlama felsefesidir."',
        'signature': '[Kırımlı Fazilet Olcay Anadolu Lisesi — Ozan Arda Özçelik]'
    },
    {
        'file': 'merlion.png',
        'illus': 'plate02_university_1789635671917.jpg',
        'kicker': 'BÖLÜM 03 // LİSANS EĞİTİMİ · TEKİRDAĞ NKÜ',
        'plate_num': 'LEVHA 03',
        'title': 'Mühendislik Temeli & Akademik Disiplin',
        'subtitle': 'Tekirdağ Namık Kemal Üniversitesi — Bilgisayar Mühendisliği',
        'lead': 'Tekirdağ Namık Kemal Üniversitesi Bilgisayar Mühendisliği bölümünde lisans eğitimime başladım ve akademik yolculuğumu Yüksek Onur derecesiyle sürdürüyorum.',
        'body': 'Veri yapıları, algoritmalar, ayrık matematik, işletim sistemleri ve sistem mimarileri üzerine inşa edilen bu dönem; teorik hesaplama prensiplerini pratik mühendislik çözümlerine dönüştürme vizyonumu güçlendirdi. Amfilerdeki matematiksel temelleri araştırma-geliştirme disipliniyle harmanladım.',
        'note': '✦ "Temel matematik ve veri yapıları ne kadar sağlam olursa, inşa edilen otonom mimari o kadar yüksek irtifalara ulaşır."',
        'signature': '[NKÜ Mühendislik Fakültesi — Yüksek Onur / High Honors]'
    },
    {
        'file': 'buddha-tooth.png',
        'illus': 'plate07_martur_ai_1789635782335.jpg',
        'kicker': 'BÖLÜM 04 // KURUMSAL AR-GE · MARTUR FOMPAK',
        'plate_num': 'LEVHA 04',
        'title': 'Şirket İçi Kurumsal Yapay Zeka',
        'subtitle': 'Martur Fompak International Stajı & Projeleri',
        'lead': 'Küresel otomotiv devi Martur Fompak International bünyesinde şirket içi yapay zeka sistemleri ve karar mimarileri geliştirdim.',
        'body': 'Otomotiv koltuk ve iç donanım üretim süreçlerinin karmaşık operasyonel akışlarını optimize etmek amacıyla kurumsal yapay zeka modelleri inşa ettim. Şirket içi bilgi akışını, kalite kontrol denetimlerini ve üretim verimliliğini artıran LLM destekli çoklu ajan (Agentic AI) otomasyon iş akışlarını hayata geçirdim.',
        'note': '✦ "Endüstriyel devlerde otonomi: Veri akışlarının kurumsal yapay zeka ajanlarıyla hızlandırılması."',
        'signature': '[Martur Fompak International — Şirket İçi Kurumsal Yapay Zeka]'
    },
    {
        'file': 'joo-chiat.png',
        'illus': 'plate05_gazebo_cv_1789637005941.jpg',
        'kicker': 'BÖLÜM 05 // BİLGİSAYARLI GÖRÜ & GAZEBO HARMONIC',
        'plate_num': 'LEVHA 05',
        'title': 'Pikseller ve Simülasyon: Gazebo Harmonic',
        'subtitle': 'Piksel Mimarileri, OpenCV & 3D Simülasyon',
        'lead': 'Yazılımı ekrandan çıkarıp fiziksel dünyayı algılayan bir göze dönüştürmek için Görüntü İşleme ve Gazebo Harmonic simülasyonlarına odaklandım.',
        'body': 'Kamera sensörlerinden gelen ham piksel matrislerini derin öğrenme modelleriyle işlerken; algoritmaları gerçek dünyaya indirmeden önce Gazebo Harmonic üzerinde 3D fiziksel simülasyon ortamları kurdum. Işın izleme, sanal kamera optiği, çarpışma testleri ve tensör matrislerini simülasyonda doğrulayarak kusursuz bir test hattı inşa ettim.',
        'note': '✦ "Gerçek dünya fiziğini sanal ortamda Gazebo Harmonic ile simüle etmek; sahada sıfır hata demektir."',
        'signature': '[Gazebo Harmonic 3D World Simulation & OpenCV Vision Tensors]'
    },
    {
        'file': 'lau-pa-sat.png',
        'illus': 'plate05_sahi_uav_1789635730454.jpg',
        'kicker': 'BÖLÜM 06 // TEKNOFEST SAVAŞAN İHA · YAZILIM LİDERİ',
        'plate_num': 'LEVHA 06',
        'title': 'Şahi SİHA: Gökyüzünde Muharebe Otonomisi',
        'subtitle': 'Şahi Otonom SİHA Takımı Yazılım Ekip Liderliği',
        'lead': 'Görüntü işleme ve otonomi vizyonumun en üst sahaya yansıması, Şahi Otonom SİHA Takımı Yazılım Ekip Liderliği oldu.',
        'body': 'TEKNOFEST Savaşan İHA yarışması kapsamında; yüksek hızlı hava-hava muharebe senaryolarında gerçek zamanlı YOLOv8 nesne tespiti, ByteTrack yörünge kestirimi ve oransal seyrüsefer (Proportional Navigation) kamikaze dalış güdüm mimarilerini uçtan uca yönettim. Milisaniyeler mertebesinde hedef kilitlenmesi yapan otonom durum makineleri geliştirdik.',
        'note': '✦ "Hava muharebesinde saliseler her şeydir; oransal seyrüsefer ve hedef takibi kusursuz işlemelidir."',
        'signature': '[Şahi SİHA Yazılım Liderliği — YOLOv8, ByteTrack & Proportional Nav]'
    },
    {
        'file': 'marina-bay-skyline.png',
        'illus': 'plate06_cozum_makina_1789635755334.jpg',
        'kicker': 'BÖLÜM 07 // ÇÖZÜM MAKİNA AR-GE · ISEE VISION',
        'plate_num': 'LEVHA 07',
        'title': 'Çözüm Makina: ISEE Vision Kalite Kontrol',
        'subtitle': 'Endüstriyel Görüntü İşleme & Sıfır Hata Anomali',
        'lead': 'Çözüm Makina Ar-Ge bünyesinde ISEE Vision ile endüstriyel üretim hatlarında görüntü işlemeyle sıfır hata kalite kontrol modelleri geliştirdim.',
        'body': 'Konveyör bantlar üzerinde mikrometre düzeyindeki yüzey anomalilerini yakalamak için PatchCore ve DINO Vision Transformers mimarilerini kullandım. Denetimsiz (unsupervised) derin öznitelik haritalaması sayesinde eğitim verisinde bulunmayan beklenmedik üretim kusurlarını gerçek zamanlı yakalayan endüstriyel yapay zeka sistemini hayata geçirdim.',
        'note': '✦ "Fabrika hattında sıfır hata toleransı: Vision Transformers ile derin anomali segmentasyonu."',
        'signature': '[Çözüm Makina ISEE Vision — PatchCore & DINO Anomaly Segmentation]'
    },
    {
        'file': 'singapore-river.png',
        'illus': 'plate04_robotics_1789635708664.jpg',
        'kicker': 'BÖLÜM 08 // ÇÖZÜM MAKİNA · ISEE ROBOTICS',
        'plate_num': 'LEVHA 08',
        'title': 'Çözüm Makina: ISEE Robotics',
        'subtitle': 'Endüstriyel Robotik, ROS, MQTT & Gazebo',
        'lead': 'Çözüm Makina bünyesinde ISEE Robotics çatısı altında endüstriyel robotlarla çalıştım; ROS ve MQTT ile otonom operasyonlar kurdum.',
        'body': 'Endüstriyel robot kollarının ve otonom fabrika araçlarının koordinasyonu için ROS (Robot Operating System) hesaplama düğümlerini ve MQTT protokolü üzerinden IoT donanım telemetri haberleşmesini geliştirdim. Robot kinematiğini ve yol planlamalarını Gazebo ortamında modelleyerek sahaya fiziksel olarak entegre ettim.',
        'note': '✦ "Endüstriyel robotik, ROS ve MQTT\'nin senkronize dansı: Fabrika zemininde gerçek otonomi."',
        'signature': '[Çözüm Makina ISEE Robotics — ROS, MQTT, Gazebo & Industrial Robots]'
    },
    {
        'file': 'botanic-gardens.png',
        'illus': 'plate09_manifesto_1789635835947.jpg',
        'kicker': 'BÖLÜM 09 // GELECEK VİZYONU & MANİFESTO',
        'plate_num': 'LEVHA 09',
        'title': 'İnsan Formu — Makine Mantığı',
        'subtitle': 'Otonom Sürü Zekası & Gelecek Vizyonu',
        'lead': 'İnsan sezgisi, makine mantığıyla birleştiğinde; donanımın soğuk metalleri otonom bir zekaya dönüşür.',
        'body': '3 yaşında evdeki ilk bilgisayarın tuşlarına dokunmaktan; gökyüzünde otonom kararlar alan İHA filolarına, fabrikalarda sıfır hata denetleyen vizyon modellerine ve çalışan endüstriyel robotlara uzanan bu yolculuk devam ediyor. Otonom sürü sistemleri, derin görü ve insan-makine birlikteliğinin geleceğini inşa etme vizyonuyla.',
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
    
    # Left page area: X: 145 to 815 (Width: 670)
    LX = 145
    LY = 285
    MAX_W = 670
    
    is_last_page = (s['file'] == 'botanic-gardens.png')
    
    if is_last_page:
        # Vision page: ONLY write "Teorik bilgilerimi pratiğe çeviriyorum." — NOTHING ELSE!
        vision_lines = ["Teorik bilgilerimi", "pratiğe çeviriyorum."]
        font_vision = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 36)
        
        line_height = 56
        total_h = len(vision_lines) * line_height
        start_y = LY + (660 - total_h) // 2
        
        for i, vline in enumerate(vision_lines):
            bbox = draw.textbbox((0, 0), vline, font=font_vision)
            lw = bbox[2] - bbox[0]
            lx = LX + (MAX_W - lw) // 2
            ly = start_y + i * line_height
            draw.text((lx, ly), vline, font=font_vision, fill=INK_DEEP)
            
        # Subtle elegant accent divider line beneath
        acc_y = start_y + total_h + 20
        draw.line([(LX + MAX_W // 2 - 40, acc_y), (LX + MAX_W // 2 + 40, acc_y)], fill=EARTH, width=2)
    else:
        # Kicker & Plate Number
        draw.text((LX, LY), s['kicker'], font=font_kicker, fill=EARTH)
        draw.text((LX + MAX_W - 70, LY), s['plate_num'], font=font_kicker, fill=INK_FAINT)
        
        # Hairline divider
        draw.line([(LX, LY + 22), (LX + MAX_W, LY + 22)], fill=RULE_COLOR, width=1)
        
        # Title & Subtitle (Larger, more readable)
        draw.text((LX, LY + 32), s['title'], font=font_title, fill=INK_DEEP)
        draw.text((LX, LY + 68), s['subtitle'], font=font_sub, fill=EARTH)
        
        curr_y = LY + 102
        
        # Lead text (Italic, size 17)
        for line in wrap_text(s['lead'], font_italic, MAX_W, draw):
            if line == '':
                curr_y += 8
            else:
                draw.text((LX, curr_y), line, font=font_italic, fill=EARTH)
                curr_y += 24
                
        curr_y += 10
        draw.line([(LX, curr_y), (LX + 120, curr_y)], fill=EARTH, width=1)
        curr_y += 14
        
        # Body text (Size 19, crisp and easily readable!)
        for line in wrap_text(s['body'], font_body, MAX_W, draw):
            if line == '':
                curr_y += 10
            else:
                draw.text((LX, curr_y), line, font=font_body, fill=INK_DEEP)
                curr_y += 27
                
        curr_y += 16
        draw.text((LX, curr_y), s['note'], font=font_note, fill=INK_FAINT)
        curr_y += 20

        # Signature / Provenance
        draw.text((LX, curr_y), s['signature'], font=font_signature, fill=INK_FAINT)
    
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
    print(f'Rendered Spread {s["plate_num"]} ({dest_file}) - Left: Text (Large + Motto) | Right: Illustration ({os.path.getsize(dest_path)} bytes)')

print('ALL 9 SPREADS RE-RENDERED WITH LARGER FONTS & MOTTO!')
