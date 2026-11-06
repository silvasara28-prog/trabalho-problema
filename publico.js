const filtroStatus = document.getElementById("filtro-status");
const linhas = document.querySelectorAll("tbody tr");

// Mostra só as linhas com o status escolhido
filtroStatus.addEventListener("change", function () {
  linhas.forEach(function (linha) {
    const status = linha.querySelector(".status").textContent;
    linha.hidden = filtroStatus.value !== "Todos" && filtroStatus.value !== status;
  });
});