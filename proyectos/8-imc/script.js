function calcular() {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value) / 100;
  var imc = document.getElementById("imc");
  var cat = document.getElementById("categoria");

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    imc.textContent = "Completa los dos datos";
    cat.textContent = "";
    return;
  }

  var valor = peso / (altura * altura);
  imc.textContent = "Tu IMC es " + valor.toFixed(1);

  if (valor < 18.5) { cat.textContent = "Por debajo del rango saludable"; }
  else if (valor < 25) { cat.textContent = "Dentro del rango saludable"; }
  else if (valor < 30) { cat.textContent = "Por encima del rango saludable"; }
  else { cat.textContent = "Muy por encima del rango saludable"; }
}

document.getElementById("calcular").addEventListener("click", calcular);
