// ReparaAí – tela "Registrar problema"
const form = document.getElementById("form-problema");
const aviso = document.getElementById("aviso");
const campos = ["tipo", "local", "descricao"];
const mensagens = {
  tipo: "Informe o tipo do problema.",
  local: "Informe onde fica o problema.",
  descricao: "Descreva o que aconteceu."
};

function mostrarErro(nome, mostrar) {
  const campo = document.getElementById(nome);
  const erro = document.getElementById("erro-" + nome);
  campo.closest(".field").classList.toggle("has-error", mostrar);
  erro.textContent = mostrar ? mensagens[nome] : "";
  erro.hidden = !mostrar;
}

function validar() {
  let primeiroInvalido = null;
  campos.forEach((nome) => {
    const vazio = form.elements[nome].value.trim() === "";
    mostrarErro(nome, vazio);
    if (vazio && !primeiroInvalido) primeiroInvalido = form.elements[nome];
  });
  if (primeiroInvalido) primeiroInvalido.focus();
  return !primeiroInvalido;
}

function salvarRegistro(dados) {
  // Por enquanto os registros ficam no navegador; depois dá para trocar por um servidor.
  try {
    const lista = JSON.parse(localStorage.getItem("reparaai_registros") || "[]");
    lista.push({ ...dados, status: "Aberto", criadoEm: new Date().toISOString() });
    localStorage.setItem("reparaai_registros", JSON.stringify(lista));
  } catch (e) {
    console.error("Não foi possível salvar o registro:", e);
  }
}

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  aviso.hidden = true;
  if (!validar()) return;

  salvarRegistro({
    tipo: form.elements.tipo.value.trim(),
    local: form.elements.local.value.trim(),
    descricao: form.elements.descricao.value.trim()
  });

  form.reset();
  aviso.textContent = "Registro enviado. Você pode acompanhar em Meus registros.";
  aviso.hidden = false;
  form.elements.tipo.focus();
});

document.getElementById("btn-cancelar").addEventListener("click", () => {
  form.reset();
  campos.forEach((nome) => mostrarErro(nome, false));
  aviso.hidden = true;
});

campos.forEach((nome) => {
  form.elements[nome].addEventListener("input", () => mostrarErro(nome, false));
});