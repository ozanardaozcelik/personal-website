gsap.registerPlugin(ScrollTrigger);

// Tüm animasyonları tek bir zaman çizelgesine (timeline) bağlıyoruz
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Yumuşak geçiş için
    }
});

// 1. GEÇİŞ: Kamera kamerasından çıkıp -> SİHA'yı görme (Zoom Out)
tl.to("#scene1", { scale: 0.2, opacity: 0, duration: 1 }) // Kamera küçülerek kaybolur
  .to("#scene2", { scale: 1, opacity: 1, duration: 1 }, "<"); // "<" işareti animasyonların aynı anda başlamasını sağlar

// 2. GEÇİŞ: SİHA'dan çıkıp -> Pixel Ozan'ı görme
tl.to("#scene2", { scale: 0.2, opacity: 0, duration: 1 })
  .to("#scene3", { scale: 1, opacity: 1, duration: 1 }, "<");

// 3. GEÇİŞ: Ozan'dan çıkıp -> Asıl Web Sitesine geçiş
tl.to("#scene3", { scale: 0.2, opacity: 0, duration: 1 })
  .to("#scene4", { scale: 1, opacity: 1, duration: 1 }, "<");
