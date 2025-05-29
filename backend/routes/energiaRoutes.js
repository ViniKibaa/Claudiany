const express = require("express");
const router = express.Router();
const energiaController = require("../controllers/energiaController");

router.get("/", energiaController.getEnergia);
router.post("/", energiaController.postEnergia);
router.put("/:id", energiaController.putEnergia);
router.delete("/:id", energiaController.deleteEnergia);

module.exports = router;