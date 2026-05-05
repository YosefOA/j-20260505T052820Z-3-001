function validarUsuario() {
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;

  if (nombre === "" || correo === "") {
    document.getElementById("mensajeUsuario").innerText = "Completa todos los datos";
    return;
  }

  document.getElementById("mensajeUsuario").innerText = "Datos válidos ✔";
}

function cancelar() {
  let dias = parseInt(document.getElementById("diasCancelacion").value);

  let mensaje = "";

  if (dias < 3) {
    mensaje = "Penalización del 50%";
  } else if (dias < 7) {
    mensaje = "Penalización del 20%";
  } else {
    mensaje = "Sin penalización";
  }

  document.getElementById("resultadoCancelacion").innerText = mensaje;
}