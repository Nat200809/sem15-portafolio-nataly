var pantalla = document.getElementById("pantalla");
var texto = "";

function mostrar() { pantalla.value = texto === "" ? "0" : texto; }

function calcular() {
  if (!/^[0-9+\-*/. ]+$/.test(texto)) { return; }
  try {
    var r = Function("return " + texto)();
    texto = isFinite(r) ? String(Math.round(r * 1e8) / 1e8) : "";
    if (!isFinite(r)) { pantalla.value = "Error"; return; }
  } catch (e) { pantalla.value = "Error"; texto = ""; return; }
  mostrar();
}

document.querySelectorAll(".teclas button").forEach(function (b) {
  b.addEventListener("click", function () {
    var t = b.dataset.t;
    if (t === "C") { texto = ""; }
    else if (t === "←") { texto = texto.slice(0, -1); }
    else if (t === "=") { calcular(); return; }
    else { texto += t; }
    mostrar();
  });
});
