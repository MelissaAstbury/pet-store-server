const express = require('express');
const router = express.Router();

const {
  getAllPets,
  addNewPet,
  deletePet,
  updatePet,
  petSale,
} = require('../controllers/pets');

router.get('/', getAllPets);
router.post('/', addNewPet);
router.delete('/:id', deletePet);
router.put('/:id', updatePet);
router.put('/sale/:id', petSale);

module.exports = router;
