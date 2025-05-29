const mongoose = require("mongoose");

module.exports = function () {
  mongoose.connect("mongodb+srv://vinikiba223:123lau123@calculadoravini.cbvlju5.mongodb.net/ODS7?retryWrites=true&w=majority")
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.error("Erro ao conectar ao MongoDB:", err));
};