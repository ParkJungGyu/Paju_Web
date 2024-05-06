const { Sequelize, DataTypes  } = require("sequelize");
require('dotenv').config();
const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPWD, {
    host : process.env.DBHOST,
    dialect : process.env.DIALECT
  });

  sequelize.authenticate()
  .then(() => {
    console.log('데이터베이스에 연결되었습니다.');
  })
  .catch(err => {
    console.error('데이터베이스 연결에 실패했습니다:', err);
  });

//회원가입
const User = sequelize.define('users', {
    id : {
        type : DataTypes.STRING,
        primaryKey : true,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    }
}, {
    tableName : 'user_info_table',
    timestamps: false // createdAt 및 updatedAt 칼럼 제거
});
module.exports = User;