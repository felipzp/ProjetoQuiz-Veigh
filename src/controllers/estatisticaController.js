var estatisticaModel = require("../models/estatisticaModel");

function buscarEstatisticas(req, res) {
    estatisticaModel.buscarEstatisticas()
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
}

function calcularMediaAcertos(req, res) {
    var idUsuario = req.params.idUsuario;
    estatisticaModel.calcularMediaAcertos(idUsuario)
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
}

module.exports = { buscarEstatisticas, calcularMediaAcertos };
