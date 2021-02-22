const rand = require('random-seed');
const Seed = require('../models/Seed');

const generateSeed = async () => {

    let randomSeed = rand.create();
    randomSeed = randomSeed.string(20);

    let targetDate = new Date();
    targetDate.setMinutes(targetDate.getMinutes() + 5);

    const seed = Seed({
        seed: randomSeed,
        expiresAt: targetDate
    });

    await seed.save();

    return seed;
}

module.exports = { generateSeed }