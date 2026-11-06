const filtroStatus = document.getElementById("filtro-status");
const filtroLocal = document.getElementById("filtro-local");
const linhas = document.querySelectorAll("tbody tr");

// Mostra só as linhas que combinam com os filtros
function filtrar() {
  const status = filtroStatus.value;
  const local = filtroLocal.value.toLowerCase();

  linhas.forEach(function (linha) {
    const statusDaLinha = linha.querySelector(".status").textContent;
    const localDaLinha = linha.cells[1].textContent.toLowerCase();

    const combinaStatus = status === "Todos" || status === statusDaLinha;
    const combinaLocal = localDaLinha.includes(local);

    linha.hidden = !(combinaStatus && combinaLocal);
  });
}

filtroStatus.addEventListener("change", filtrar);
filtroLocal.addEventListener("input", filtrar);