const express = require('express');
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const userRoutes = require('./routes/userRoutes');

const app = express()

const sequelize = new Sequelize(DBNAME, DBUSER, DBPWD, {
  host : DBHOST,
  dialect : DIALECT
});

sequelize.authenticate()
  .then(() => {
    console.log('데이터베이스에 연결되었습니다.');
  })
  .catch(err => {
    console.error('데이터베이스 연결에 실패했습니다:', err);
  });


app.use(express.json());
app.use('/users', userRoutes);

app.listen(PORT, () =>{
  console.log( port + ' Server Open')
});