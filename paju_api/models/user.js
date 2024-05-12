const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('paju', 'admin', '12332141', {
    host : 'paju-web.chpveeg6ishh.ap-northeast-2.rds.amazonaws.com',
    dialect : 'mysql',
  });
  
  sequelize.authenticate()
    .then(() => {
      console.log('데이터베이스에 연결되었습니다.');
    })
    .catch(err => {
      console.error('데이터베이스 연결에 실패했습니다:', err);
    });

//회원가입
const User = sequelize.define('User', {
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
    tableName : 'users',
    timestamps : false
});

module.exports = User;