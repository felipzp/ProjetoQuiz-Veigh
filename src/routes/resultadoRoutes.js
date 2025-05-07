var express = require("express");
var router = express.Router();
var resultadoController = require("../controllers/resultadoController");

router.post("/salvar", resultadoController.salvarResultado);
router.get("/buscar/:idUsuario", resultadoController.buscarResultados);

module.exports = router;
