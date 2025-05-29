
document.getElementById("energiaForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const tipo = document.getElementById("tipo").value;
  const consumo = document.getElementById("consumo").value;

  const resposta = await fetch("http://localhost:3000/energia", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, tipo, consumo })
  });
  const dado = await resposta.json();
  mostrarDado(dado);
});

function mostrarDado(dado) {
  const li = document.createElement("li");
  li.textContent = `${dado.nome} - ${dado.tipo} - ${dado.consumo} kWh`;
  document.getElementById("lista").appendChild(li);
}

(async () => {
  const resposta = await fetch("http://localhost:3000/energia");
  const dados = await resposta.json();
  dados.forEach(mostrarDado);
})();
