let cupos = {
  Cartagena: 5,
  Paris: 3
};

let reservas = [];

function reservar(destino) {
  if (cupos[destino] > 0) {
    cupos[destino]--;
    reservas.push(destino);
    mostrarReservas();
    actualizarCupos();
  } else {
    alert("No hay cupos disponibles");
  }
}

function mostrarReservas() {
  let lista = document.getElementById("listaReservas");
  lista.innerHTML = "";

  reservas.forEach(r => {
    let li = document.createElement("li");
    li.textContent = r;
    lista.appendChild(li);
  });
}

function actualizarCupos() {
  document.getElementById("cuposCartagena").innerText = cupos.Cartagena;
  document.getElementById("cuposParis").innerText = cupos.Paris;
}