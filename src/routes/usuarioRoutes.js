var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");

router.post("/autenticar", usuarioController.autenticar);
router.post("/cadastrar", usuarioController.cadastrar);

module.exports = router;
