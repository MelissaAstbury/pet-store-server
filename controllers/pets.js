const db = require('../db');

exports.getAllPets = (req, res) => {
  const sql = 'SELECT * FROM pets';
  db.query(sql, (err, pets) => {
    if (err) throw err;
    res.json(pets);
  });
};

exports.addNewPet = (req, res) => {
  const sql = `INSERT INTO pets (animal, quantity) VALUES ('${req.body.animal}', ${req.body.quantity})`;
  db.query(sql, (err, pet) => {
    if (err) {
      res.status(400).json({
        err: err,
        message: 'Pet could not be added',
      });
    } else {
      res.status(201).json({
        message: 'Pet has been added',
        pet,
      });
    }
  });
};

exports.deletePet = (req, res) => {
  const sql = `DELETE FROM pets WHERE id=${req.params.id}`;
  db.query(sql, (err, pets) => {
    if (err) throw err;
    res.status(202).json({
      message: 'Pet has been deleted',
      pets,
    });
  });
};

exports.updatePet = (req, res) => {
  const { animal, quantity } = req.body;
  const sql = `UPDATE pets SET animal='${animal}', quantity=${quantity} WHERE id=${req.params.id}`;
  db.query(sql, (err, pet) => {
    if (err) throw err;
    res.status(200).json({
      message: 'Pet has been updated',
      pet,
    });
  });
};

exports.petSale = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT quantity FROM pets WHERE id=${id}`;
  db.query(sql, (err, pet) => {
    if (err) throw err;
    const itemQty = pet[0].quantity;
    const saleAmount = req.body.quantity;
    if (itemQty - saleAmount < 0) {
      res.status(406).json({
        message: 'Unfortunetly, there is not stock left for you to purchase',
      });
    } else {
      const quantity = itemQty - saleAmount;
      const sql = `UPDATE pets SET quantity=${quantity} WHERE id=${req.params.id}`;
      db.query(sql, (err, pet) => {
        res.status(200).json({
          message: 'Purchase has been successful and stock has been updated',
        });
      });
    }
  });
};
