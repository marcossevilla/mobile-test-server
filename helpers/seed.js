const rand = require('random-seed');
const Seed = require('../models/Seed');

const generateSeed = async () => {
    let randomSeed = rand.create();
    randomSeed = randomSeed.string(20);

    let targetDate = new Date();
    targetDate.setMinutes(targetDate.getMinutes() + 10);

    const seed = Seed({
        seed: randomSeed,
        expiresAt: targetDate.toLocaleString('en-US', {
            timeZone: 'America/Managua'
        })
    });

    await seed.save();

    return seed;
}

module.exports = { generateSeed }