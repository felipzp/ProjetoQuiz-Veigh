var database = require("../database/config");

function buscarUltimasMedidas(fk_usuario) {
    console.log(fk_usuario)
    var instrucaoSql = `SELECT u.nome,    
r.certas,
r.erradas
FROM usuarios u
JOIN resultados_quiz r ON r.fk_usuario = u.idUsuario
WHERE r.idResultado IN (
SELECT MAX(idResultado)   
FROM resultados_quiz
GROUP BY fk_usuario)
and fk_usuario = ${fk_usuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(fk_usuario) {

    var instrucaoSql = `SELECT u.nome,    
r.certas,
r.erradas
FROM usuarios u
JOIN resultados_quiz r ON r.fk_usuario = u.idUsuario
WHERE r.idResultado IN (
SELECT MAX(idResultado)   
FROM resultados_quiz
GROUP BY fk_usuario)
and fk_usuario = ${fk_usuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
