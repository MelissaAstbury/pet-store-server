const express = require('express');
const router = express.Router();

const { getAllPets } = require('../controllers/pets');

router.get('/', getAllPets);

module.exports = router;
