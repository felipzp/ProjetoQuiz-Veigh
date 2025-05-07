var express = require("express");
var router = express.Router();
var estatisticaController = require("../controllers/estatisticaController");

router.get("/estatisticas", estatisticaController.buscarEstatisticas);
router.get("/media/:idUsuario", estatisticaController.calcularMediaAcertos);

module.exports = router;
