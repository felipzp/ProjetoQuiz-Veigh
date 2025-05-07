const express = require('express');
const router = express.Router();

router.get('/media', (req, res) => {
    const mediaFicticia = 7.3; // Substitua depois com query do banco
    res.json({ media: mediaFicticia });
});

module.exports = router;
