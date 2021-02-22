const { response } = require('express');

const createSeed = (req, res = response) => {
    res.json({
        ok: 200,
        message: 'Created seed'
    });
}

module.exports = { createSeed }