var cuenta = 0;
var numero = document.getElementById("numero");

function actualizar() { numero.textContent = cuenta; }

document.getElementById("mas").addEventListener("click", function () { cuenta++; actualizar(); });
document.getElementById("menos").addEventListener("click", function () { cuenta--; actualizar(); });
document.getElementById("reiniciar").addEventListener("click", function () { cuenta = 0; actualizar(); });
