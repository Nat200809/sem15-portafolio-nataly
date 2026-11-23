var secreto, intentos;
var campo = document.getElementById("intento");
var mensaje = document.getElementById("mensaje");

function nuevoJuego() {
  secreto = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
  campo.value = "";
  mensaje.textContent = "";
  document.getElementById("intentos").textContent = 0;
}

function probar() {
  var n = parseInt(campo.value, 10);
  if (isNaN(n) || n < 1 || n > 100) { mensaje.textContent = "Escribe un número del 1 al 100"; return; }
  intentos++;
  document.getElementById("intentos").textContent = intentos;
  if (n === secreto) { mensaje.textContent = "¡Correcto! Lo lograste en " + intentos + " intentos"; }
  else if (n < secreto) { mensaje.textContent = "Más alto ↑"; }
  else { mensaje.textContent = "Más bajo ↓"; }
}

document.getElementById("probar").addEventListener("click", probar);
campo.addEventListener("keydown", function (e) { if (e.key === "Enter") { probar(); } });
document.getElementById("nuevo").addEventListener("click", nuevoJuego);
nuevoJuego();
