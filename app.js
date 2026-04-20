gsap.registerPlugin(ScrollTrigger);

// --- HAZIRLIK ---
// OPTİMİZASYON 1: "opacity" yerine "autoAlpha" kullanıldı. 
// autoAlpha, saydamlık 0 olduğunda elemana "visibility: hidden" ekler. 
// Bu sayede tarayıcı görünmez devasa elementleri render etmeye çalışıp sistemi yormaz.
gsap.set("#scene2", { scale: 5, autoAlpha: 0 }); 
gsap.set(".siha-img", { scale: 0.5 });

gsap.set("#scene3", { scale: 5, autoAlpha: 0 });
gsap.set(".operator-img", { scale: 0.5 });

gsap.set("#scene4", { scale: 5, autoAlpha: 0 });

// OPTİMİZASYON 2: Bento kutularının başlangıç durumunu önceden set ediyoruz.
// ScrollTrigger'a bağlı bir timeline içinde ".from()" kullanmak bazen ters yöne kaydırırken glitchlere yol açabilir.
gsap.set(".bento-container", { autoAlpha: 0 });
gsap.set(".bento-box", { y: 50, autoAlpha: 0 });

// --- SÜZÜLME EFEKTLERİ (Havada durma hissi) ---
gsap.to(".floating-element", {
    yPercent: -15, 
    rotation: 2,   
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
        scrub: 2, 
    }
});

// 1. GEÇİŞ: HUD'dan -> SİHA'ya
tl.to("#scene1", { scale: 0.2, autoAlpha: 0, duration: 5, ease: "power1.inOut" })
  .to("#scene2", { scale: 1, autoAlpha: 1, duration: 5, ease: "power1.inOut" }, "<")
  .to(".siha-img", { scale: 1.2, duration: 5, ease: "power1.inOut" }, "<")

// 2. GEÇİŞ: SİHA'dan -> Operatöre
tl.to("#scene2", { scale: 0.2, autoAlpha: 0, duration: 5, ease: "power1.inOut" }, "-=2.5")
  .to("#scene3", { scale: 1, autoAlpha: 1, duration: 5, ease: "power1.inOut" }, "<")
  .to(".operator-img", { scale: 1.2, duration: 5, ease: "power1.inOut" }, "<")

// 3. GEÇİŞ: Operatörden -> Web Sitesine
tl.to("#scene3", { scale: 0.2, autoAlpha: 0, duration: 5, ease: "power1.inOut" }, "-=2.5")
  .to("#scene4", { scale: 1, autoAlpha: 1, duration: 5, ease: "power1.inOut" }, "<")
  // Web sitesi oturduğu an, grid kutularını hızlıca ekrana "şak" diye bas:
  .to(".bento-container", { autoAlpha: 1, duration: 0.5 }, "-=1")
  // Yukarıda set ettiğimiz değerlerden gerçek konumlarına (.to ile) getiriyoruz
  .to(".bento-box", { 
      y: 0,           // Kendi orijinal y eksenine dönsün
      autoAlpha: 1,   // Görünür olsun
      duration: 0.8, 
      stagger: 0.15,  
      ease: "back.out(1.7)" 
  }, "<");
