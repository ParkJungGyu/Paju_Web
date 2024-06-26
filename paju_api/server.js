const express = require('express');
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const userRoutes = require('./routes/userRoutes');

const app = express()

app.use(express.json());
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
  console.log( PORT + ' Server Open')
});

