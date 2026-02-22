gsap.registerPlugin(ScrollTrigger);

// 1. SİHA UÇUŞ HİSSİ (Sahnelerin kendi içindeki hafif hareketleri)
// SİHA'nın havada süzülüyormuş gibi yukarı aşağı hafifçe oynaması
gsap.to("#scene2", {
    y: 15, 
    repeat: -1, 
    yoyo: true, 
    duration: 2, 
    ease: "sine.inOut"
});

// Sahnelerin başlangıç boyutlarını ayarlayalım (Sanki hepsi iç içe devasa boyutlarda bekliyor)
gsap.set("#scene2", { scale: 3, opacity: 0 });
gsap.set("#scene3", { scale: 5, opacity: 0 });
gsap.set("#scene4", { scale: 7, opacity: 0 });

// 2. KESİNTİSİZ ZOOM-OUT MOTORU
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Değeri 1'den 1.5'a çıkardık: Fare tekerleğini bıraksan bile yağ gibi akarak durur
    }
});

// power2.inOut: Harekete yavaş başlar, ortada hızlanır, yavaşça biter (Kamera hissi verir)

// -- 1. GEÇİŞ: Kamera lensinin içinden çıkıp SİHA'yı görme --
tl.to("#scene1", { scale: 0.3, opacity: 0, duration: 2, ease: "power2.inOut" })
  // SİHA sahnesi, 1. sahne küçülürken EŞ ZAMANLI olarak tam boyuta gelir ("<" işareti bunu sağlar)
  .to("#scene2", { scale: 1, opacity: 1, duration: 2, ease: "power2.inOut" }, "<")

// -- 2. GEÇİŞ: SİHA'dan çıkıp Ozan'ı (Seni) görme --
  // "-=0.8" : SİHA tam durmadan yarım saniye önce hemen sen gelmeye başlarsın. (Video kesilmemiş olur)
  .to("#scene2", { scale: 0.3, opacity: 0, duration: 2, ease: "power2.inOut" }, "-=0.8")
  .to("#scene3", { scale: 1, opacity: 1, duration: 2, ease: "power2.inOut" }, "<")

// -- 3. GEÇİŞ: Senden çıkıp Web Sitesine geçiş --
  .to("#scene3", { scale: 0.3, opacity: 0, duration: 2, ease: "power2.inOut" }, "-=0.8")
  .to("#scene4", { scale: 1, opacity: 1, duration: 2, ease: "power2.inOut" }, "<");
