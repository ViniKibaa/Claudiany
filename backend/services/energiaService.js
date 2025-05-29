const Energia = require("../models/Energia");

async function listarEnergia() {
  return await Energia.find();
}

async function criarEnergia(dados) {
  const novo = new Energia(dados);
  return await novo.save();
}

async function atualizarEnergia(id, dados) {
  return await Energia.findByIdAndUpdate(id, dados, { new: true });
}

async function deletarEnergia(id) {
  return await Energia.findByIdAndDelete(id);
}

module.exports = {
  listarEnergia,
  criarEnergia,
  atualizarEnergia,
  deletarEnergia
};