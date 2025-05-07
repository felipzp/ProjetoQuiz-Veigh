var database = require("../database/config");

function buscarEstatisticas() {
    var instrucaoSql = `
        SELECT 
            u.nome, 
            COUNT(r.id) AS total_quiz, 
            AVG(r.acertos) AS media_acertos
        FROM usuario u
        LEFT JOIN resultado r ON u.id = r.fk_usuario
        GROUP BY u.id;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarEstatisticas
}
