const db = require('../db');

exports.getAllPets = (req, res) => {
  const sql = 'SELECT * FROM pets';
  db.query(sql, (err, pets) => {
    if (err) throw err;
    res.json(pets);
  });
};
