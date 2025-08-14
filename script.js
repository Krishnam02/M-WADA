// Navbar toggle
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
  }
  
  // GSAP Animations
  window.addEventListener("load", () => {
    gsap.from(".hero-title", {duration: 1.5, y: 80, opacity:0, ease:"power4.out"});
    gsap.from(".hero-sub", {duration: 1.5, y: 60, opacity:0, delay:0.5, ease:"power4.out"});
    gsap.from(".btn", {duration: 1.5, scale:0.5, opacity:0, delay:1, ease:"elastic.out(1, 0.5)"});
  });
  