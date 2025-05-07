var database = require("../database/config");

function cadastrarUsuario(nome, email, senha) {
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha)
        VALUES ('${nome}', '${email}', '${senha}');
    `;
    return database.executar(instrucaoSql);
}

function buscarUsuarioPorEmail(email) {
    var instrucaoSql = `
        SELECT * FROM usuario WHERE email = '${email}';
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarUsuario,
    buscarUsuarioPorEmail
};
