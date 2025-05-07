var resultadoModel = require("../models/resultadoModel");

function salvarResultado(req, res) {
    var { idUsuario, resultadoQuiz } = req.body;
    if (idUsuario == undefined || resultadoQuiz == undefined) {
        res.status(400).send("Dados não podem ser undefined");
    } else {
        resultadoModel.salvarResultado(idUsuario, resultadoQuiz)
            .then(result => res.json(result))
            .catch(err => res.status(500).json(err));
    }
}

function buscarResultados(req, res) {
    var idUsuario = req.params.idUsuario;
    resultadoModel.buscarResultados(idUsuario)
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
}

module.exports = { salvarResultado, buscarResultados };
