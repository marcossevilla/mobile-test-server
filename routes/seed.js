/*
 *  path: api/seed
*/

const { Router } = require('express');
const { createSeed } = require('../controllers/seed');

const router = Router();

router.get('/', createSeed);

module.exports = router;