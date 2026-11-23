var valor = document.getElementById("valor");
var tipo = document.getElementById("tipo");
var resultado = document.getElementById("resultado");

function convertir() {
  var n = parseFloat(valor.value);
  if (isNaN(n)) { resultado.textContent = "Escribe un número"; return; }
  if (tipo.value === "cf") {
    resultado.textContent = n + " °C = " + (n * 9 / 5 + 32).toFixed(1) + " °F";
  } else {
    resultado.textContent = n + " °F = " + ((n - 32) * 5 / 9).toFixed(1) + " °C";
  }
}

document.getElementById("convertir").addEventListener("click", convertir);
convertir();
