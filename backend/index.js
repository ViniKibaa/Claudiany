const express = require("express");
const cors = require("cors");
const app = express();
require("./config/database")();

const energiaRoutes = require("./routes/energiaRoutes");

app.use(cors());
app.use(express.json());
app.use("/energia", energiaRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});