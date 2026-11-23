var reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (typeof ScrollReveal !== "undefined" && !reducir) {
  window.sr = ScrollReveal();

  sr.reveal('#logo',   { duration: 500 });
  sr.reveal('.navbar', { duration: 1000, origin: 'left',   distance: '500px' });
  sr.reveal('header',  { duration: 2000, origin: 'top',    distance: '600px' });
  sr.reveal('footer',  { duration: 3000, origin: 'bottom', distance: '500px' });
}