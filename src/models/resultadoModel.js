var database = require("../database/config");

// Cadastrar resultado do usuário
function registrarResultado(fk_usuario, total_perguntas, acertos) {
    var instrucaoSql = `
        INSERT INTO resultado (fk_usuario, total_perguntas, acertos)
        VALUES (${fk_usuario}, ${total_perguntas}, ${acertos});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Buscar resultados de um usuário
function buscarResultadosPorUsuario(fk_usuario) {
    var instrucaoSql = `
        SELECT * FROM resultado WHERE fk_usuario = ${fk_usuario};
    `;
    return database.executar(instrucaoSql);
}

// Calcular média geral de acertos
function calcularMediaGeral() {
    var instrucaoSql = `
        SELECT AVG(acertos) as media_acertos FROM resultado;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarResultado,
    buscarResultadosPorUsuario,
    calcularMediaGeral
}
