const { response } = require('express');
const { generateSeed } = require('../helpers/seed');

const createSeed = async (req, res = response) => {

    try {
        const seed = await generateSeed();

        res.json({
            ok: true,
            seed: seed,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            ok: false,
            message: 'Something went wrong...'
        });
    }

}

module.exports = { createSeed }