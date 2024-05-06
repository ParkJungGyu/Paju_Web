const express = require('express');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');

const app = express()

app.use(express.json());
app.use('/users', userRoutes);

app.listen(process.env.PORT, () =>{
  console.log( process.env.PORT + ' Server Open')
});