const express = require('express');
const app = express();

const petsRoutes = require('./routes/petsRoutes');

app.use(express.json());

app.use('/api/pets', petsRoutes);

module.exports = app;
