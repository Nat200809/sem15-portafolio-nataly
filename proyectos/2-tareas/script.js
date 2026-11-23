var lista = document.getElementById("lista");
var nueva = document.getElementById("nueva");
var tareas = [];

function guardar() { try { localStorage.setItem("tareas-nataly", JSON.stringify(tareas)); } catch (e) {} }
function leer() { try { tareas = JSON.parse(localStorage.getItem("tareas-nataly")) || []; } catch (e) { tareas = []; } }

function dibujar() {
  lista.innerHTML = "";
  tareas.forEach(function (t, i) {
    var li = document.createElement("li");
    if (t.hecha) { li.className = "hecha"; }
    var span = document.createElement("span");
    span.textContent = t.texto;
    var x = document.createElement("button");
    x.textContent = "×";
    x.setAttribute("aria-label", "Borrar tarea");
    li.addEventListener("click", function () { t.hecha = !t.hecha; guardar(); dibujar(); });
    x.addEventListener("click", function (e) { e.stopPropagation(); tareas.splice(i, 1); guardar(); dibujar(); });
    li.appendChild(span); li.appendChild(x);
    lista.appendChild(li);
  });
}

function agregar() {
  var texto = nueva.value.trim();
  if (texto === "") { return; }
  tareas.push({ texto: texto, hecha: false });
  nueva.value = "";
  guardar(); dibujar();
}

document.getElementById("agregar").addEventListener("click", agregar);
nueva.addEventListener("keydown", function (e) { if (e.key === "Enter") { agregar(); } });

leer();
if (tareas.length === 0) { tareas = [{ texto: "Terminar mi portafolio", hecha: false }, { texto: "Practicar inglés", hecha: true }]; }
dibujar();
