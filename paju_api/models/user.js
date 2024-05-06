const { DataTypes, json } = require("sequelize");

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
    tableName : 'users'
});
module.exports = User;