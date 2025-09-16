function validarFormulario() {
  const nombre = document.getElementById("name").value.trim();
  const correo = document.getElementById("mail").value.trim();
  const mensaje = document.getElementById("msg").value.trim();

  if (!nombre || !correo || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  // Limpiar campos
  document.getElementById("name").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("msg").value = "";

  // Redirigir a la misma página
  window.location.href = "inicio.html";
  return false;
}
    
