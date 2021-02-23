const { response } = require('express');
const { generateSeed } = require('../helpers/seed');

const createSeed = async (_, res = response) => {

    try {
        const seed = await generateSeed();
        res.json(seed);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong...' });
    }

}

module.exports = { createSeed }