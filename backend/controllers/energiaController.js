const energiaService = require("../services/energiaService");

async function getEnergia(req, res) {
  try {
const dados = await energiaService.listarEnergia();
  res.json(dados);
  } catch (error) {
    res.status(500).json({ error: "Erro no método getEnergia" });
  }
}

async function postEnergia(req, res) {
  try {
const novo = await energiaService.criarEnergia(req.body);
  res.json(novo);
  } catch (error) {
    res.status(500).json({ error: "Erro no método postEnergia" });
  }
}

async function putEnergia(req, res) {
  try {
const atualizado = await energiaService.atualizarEnergia(req.params.id, req.body);
  res.json(atualizado);
  } catch (error) {
    res.status(500).json({ error: "Erro no método putEnergia" });
  }
}

async function deleteEnergia(req, res) {
  try {
const deletado = await energiaService.deletarEnergia(req.params.id);
  res.json(deletado);
  } catch (error) {
    res.status(500).json({ error: "Erro no método deleteEnergia" });
  }
}

module.exports = {
  getEnergia,
  postEnergia,
  putEnergia,
  deleteEnergia
};