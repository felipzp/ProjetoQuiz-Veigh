var database = require("../database/config");

function buscarUltimasMedidas(fk_usuario) {
    var instrucaoSql = `
        SELECT r.certas, r.erradas, r.idResultado
        FROM resultados_quiz r
        WHERE r.fk_usuario = ${fk_usuario}
        ORDER BY r.idResultado DESC
        LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(fk_usuario) {
    var instrucaoSql = `
        SELECT r.certas, r.erradas, r.idResultado
        FROM resultados_quiz r
        WHERE r.fk_usuario = ${fk_usuario}
        ORDER BY r.idResultado DESC
        LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarMediaAcertos(fk_usuario) {
    var instrucaoSql = `
        SELECT AVG(certas) AS media_acertos
        FROM resultados_quiz
        WHERE fk_usuario = ${fk_usuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarMediaAcertos
}
