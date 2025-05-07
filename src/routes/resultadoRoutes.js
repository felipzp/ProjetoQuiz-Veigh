const express = require('express');
const router = express.Router();

router.post('/registrar', (req, res) => {
    const { idUsuario, pontuacao } = req.body;

    console.log(`Pontuação recebida: ${pontuacao} do usuário ${idUsuario}`);
    res.status(200).send('Resultado registrado com sucesso');
});

module.exports = router;
