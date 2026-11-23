function dos(n) { return n < 10 ? "0" + n : n; }

function actualizar() {
  var ahora = new Date();
  document.getElementById("hora").textContent =
    dos(ahora.getHours()) + ":" + dos(ahora.getMinutes()) + ":" + dos(ahora.getSeconds());
  document.getElementById("fecha").textContent =
    ahora.toLocaleDateString("es-PE", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

actualizar();
setInterval(actualizar, 1000);
