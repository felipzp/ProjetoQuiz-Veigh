// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT || 3000;
var HOST_APP = process.env.APP_HOST || "localhost";

var app = express();

// Importações ajustadas conforme suas rotas reais
var usuarioRoutes = require("./src/routes/usuarioRoutes");
var resultadoRoutes = require("./src/routes/resultadoRoutes");
var estatisticaRoutes = require("./src/routes/estatisticaRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// Uso das rotas
app.use("/usuarios", usuarioRoutes);
app.use("/resultados", resultadoRoutes);
app.use("/estatisticas", estatisticaRoutes);

// Inicialização do servidor
app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  

    Servidor rodando em: http://${HOST_APP}:${PORTA_APP}
    Ambiente: ${process.env.AMBIENTE_PROCESSO}
    Banco: ${process.env.AMBIENTE_PROCESSO === 'producao' ? 'remoto' : 'local'}
    `);
});
