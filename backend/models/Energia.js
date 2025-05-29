const mongoose = require("mongoose");

const EnergiaSchema = new mongoose.Schema({
  nome: String,
  tipo: String,
  consumo: Number
});

module.exports = mongoose.model("Energia", EnergiaSchema);