/*
  - validarNombre(cadenaNombre) responde boolean
  - validarEmail(cadenaEmail) responde boolean
  - validarSelector(valorSeleccionado) responde boolean
  - validarCheck(nodoCheck) responde boolean */
  
function validarNombre(cadenaNombre) {
  const expresionNombre = /([[a-z]+\s*)+\s*/i;
  if (!expresionNombre.test(cadenaNombre)) {
    return false;
  }
  return true;
}

function validarEmail(cadenaEmail) {
  const expresionEmail = /[a-z0-9_\.]+@[a-z]+\.[a-z]{2,4}(\.[a-z]{0,2})*/i;
  if (!expresionEmail.test(cadenaEmail)) {
    return false;
  }
  return true;
}

function validarSelector(valorSeleccionado) {
  if (valorSeleccionado.length > 2) {
    return false;
  }
  return true;
}

function validarCheck(nodoCheck) {
  if (!nodoCheck.checked) {
    return false;
  }
  return true;
}
