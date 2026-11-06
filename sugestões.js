const form = document.getElementById("form-sugestao");
const aviso = document.getElementById("aviso");

// Enviar: mostra o aviso e limpa os campos
form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  form.reset();
  aviso.hidden = false;
});