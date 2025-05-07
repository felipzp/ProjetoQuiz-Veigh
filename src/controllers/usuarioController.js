var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined || senha == undefined) {
        res.status(400).send("Campos não podem ser undefined");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(result => res.json(result))
            .catch(err => res.status(500).json(err));
    }
}

function cadastrar(req, res) {
    var { nome, email, senha, fkEmpresa } = req.body;
    if (!nome || !email || !senha || !fkEmpresa) {
        res.status(400).send("Dados incompletos");
    } else {
        usuarioModel.cadastrar(nome, email, senha, fkEmpresa)
            .then(result => res.json(result))
            .catch(err => res.status(500).json(err));
    }
}

module.exports = { autenticar, cadastrar };
