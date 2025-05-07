var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var usuarioRoutes = require("./routes/usuarioRoutes");
var resultadoRoutes = require("./routes/resultadoRoutes");
var estatisticaRoutes = require("./routes/estatisticaRoutes");

app.use(bodyParser.json());
app.use("/usuarios", usuarioRoutes);
app.use("/resultados", resultadoRoutes);
app.use("/estatisticas", estatisticaRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
