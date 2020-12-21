const express = require('express');
const router = express.Router();

const {
  getAllPets,
  addNewPet,
  deletePet,
  updatePet,
} = require('../controllers/pets');

router.get('/', getAllPets);
router.post('/', addNewPet);
router.delete('/:id', deletePet);
router.put('/:id', updatePet);

module.exports = router;
