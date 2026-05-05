let favoritos = [];

function scrollToBuscador() {
  document.getElementById("buscador").scrollIntoView({ behavior: "smooth" });
}

function buscar() {
  let valor = document.getElementById("inputBusqueda").value;
  alert("Buscando: " + valor);
}

function guardar(destino) {
  favoritos.push(destino);
  mostrarFavoritos();
}

function mostrarFavoritos() {
  let lista = document.getElementById("listaFavoritos");
  lista.innerHTML = "";

  favoritos.forEach(destino => {
    let li = document.createElement("li");
    li.textContent = destino;
    lista.appendChild(li);
  });
}
function calcularViaje() {
  let base = parseFloat(document.getElementById("base").value);
  let personas = parseInt(document.getElementById("personas").value);
  let dias = parseInt(document.getElementById("dias").value);

  if (isNaN(base) || isNaN(personas) || isNaN(dias)) {
    document.getElementById("resultado").innerText = "Completa todos los datos";
    return;
  }

  let total = base;

  // impuestos 15%
  total += base * 0.15;

  // descuento por grupo
  if (personas >= 4) {
    total *= 0.9;
  }

  // penalización
  let penalizacion = 0;
  if (dias < 3) {
    penalizacion = total * 0.5;
  } else if (dias < 7) {
    penalizacion = total * 0.2;
  }

  document.getElementById("resultado").innerText =
    "Total: $" + total.toFixed(2) +
    " | Penalización: $" + penalizacion.toFixed(2);
}