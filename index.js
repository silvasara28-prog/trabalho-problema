const form = document.getElementById("form-login");
const perfil = document.getElementById("perfil");

// Cada perfil vai para a sua página inicial
form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (perfil.value === "funcionario") {
    window.location.href = "relatar.html";
  } else {
    window.location.href = "painel.html";
  }
});