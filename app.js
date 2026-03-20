gsap.registerPlugin(ScrollTrigger);

// --- HAZIRLIK ---
// Alt katmanları başlangıçta devasa yapıyoruz ki zoom-out yapınca normale dönsünler.
gsap.set("#scene2", { scale: 5, opacity: 0 }); 
gsap.set(".siha-img", { scale: 0.5 }); // SİHA başlangıçta küçük görünsün

gsap.set("#scene3", { scale: 5, opacity: 0 });
gsap.set(".operator-img", { scale: 0.5 }); // Operatör başlangıçta küçük görünsün

gsap.set("#scene4", { scale: 5, opacity: 0 });

// --- SÜZÜLME EFEKTLERİ (Havada durma hissi) ---
gsap.to(".floating-element", {
    yPercent: -15, // Yüzde 15 yukarı aşağı oyna
    rotation: 2,   // Hafifçe sağa sola yat
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// --- ANA ZOOM-OUT ZAMAN ÇİZELGESİ ---
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 2, // Kaydırmayı bırakınca durma süresi (Daha yumuşak)
    }
});

// power1.inOut: Daha lineer, daha robotik bir kamera hareketi hissi verir.

// 1. GEÇİŞ: HUD'dan -> SİHA'ya
tl.to("#scene1", { scale: 0.2, opacity: 0, duration: 5, ease: "power1.inOut" })
  // SİHA sahnesi gelirken, içindeki SİHA görseli de büyüsün (Derinlik hissi)
  .to("#scene2", { scale: 1, opacity: 1, duration: 5, ease: "power1.inOut" }, "<")
  .to(".siha-img", { scale: 1.2, duration: 5, ease: "power1.inOut" }, "<")

// 2. GEÇİŞ: SİHA'dan -> Operatöre
// Overlap (Biri bitmeden diğeri başlasın): "-=2.5"
tl.to("#scene2", { scale: 0.2, opacity: 0, duration: 5, ease: "power1.inOut" }, "-=2.5")
  .to("#scene3", { scale: 1, opacity: 1, duration: 5, ease: "power1.inOut" }, "<")
  .to(".operator-img", { scale: 1.2, duration: 5, ease: "power1.inOut" }, "<")

// 3. GEÇİŞ: Operatörden -> Web Sitesine
tl.to("#scene3", { scale: 0.2, opacity: 0, duration: 5, ease: "power1.inOut" }, "-=2.5")
  .to("#scene4", { scale: 1, opacity: 1, duration: 5, ease: "power1.inOut" }, "<")
  // Web sitesi oturduğu an, grid kutularını hızlıca ekrana "şak" diye bas:
  .to(".bento-container", { opacity: 1, duration: 0.5 }, "-=1") // Konteyneri görünür yap
  .from(".bento-box", { 
      y: 50,          // Aşağıdan gelsin
      opacity: 0,     // Görünmezden görünür olsun
      duration: 0.8, 
      stagger: 0.15,  // Kutular 0.15 saniye arayla sırayla gelsin (Şak-şak-şak)
      ease: "back.out(1.7)" // Hafifçe zıplayarak otursun
  }, "<");