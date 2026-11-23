var muestra = document.getElementById("muestra");
var codigo = document.getElementById("codigo");
var aviso = document.getElementById("aviso");

function ponerColor(c) {
  muestra.style.background = c;
  codigo.textContent = c.toUpperCase();
  aviso.textContent = "";
}

function alAzar() {
  var c = "#";
  for (var i = 0; i < 3; i++) {
    var n = Math.floor(Math.random() * 256).toString(16);
    c += n.length === 1 ? "0" + n : n;
  }
  ponerColor(c);
}

function tonoVino() {
  var h = 335 + Math.floor(Math.random() * 16);
  var s = 45 + Math.floor(Math.random() * 40);
  var l = 20 + Math.floor(Math.random() * 55);
  ponerColor(hslAHex(h, s, l));
}

function hslAHex(h, s, l) {
  s /= 100; l /= 100;
  var k = function (n) { return (n + h / 30) % 12; };
  var a = s * Math.min(l, 1 - l);
  var f = function (n) { return l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1))); };
  var hex = function (x) { var v = Math.round(x * 255).toString(16); return v.length === 1 ? "0" + v : v; };
  return "#" + hex(f(0)) + hex(f(8)) + hex(f(4));
}

codigo.addEventListener("click", function () {
  try { navigator.clipboard.writeText(codigo.textContent); aviso.textContent = "¡Copiado!"; }
  catch (e) { aviso.textContent = "Selecciona y copia el código"; }
});
document.getElementById("azar").addEventListener("click", alAzar);
document.getElementById("vino").addEventListener("click", tonoVino);
ponerColor("#8b2347");
