const {Sequelize , Datatypes} = require('sequelize');
const dbb = require('../config/database');

const user = dbb.define('User', {
    fname: {
        type:Sequelize.STRING,
        allowNull:false
    },
    mname: {
        type:Sequelize.STRING
    },
    lname: {
        type:Sequelize.STRING,
        allowNull:false
    },
    email: {
        type:Sequelize.STRING,
        allowNull:false
    },
    phoneno: {
        type:Sequelize.INTEGER,
        allowNull:false
    },
    nameoncard: {
        type:Sequelize.STRING,
        allowNull:false
    },
    cardno: {
        type:Sequelize.STRING,
        allowNull:false
    },
    expdate:{
        type:Sequelize.DATE,
        allowNull:false
    },
    cvv: {
        type:Sequelize.INNTEGER,
        allowNull:false
    },
    country: {
        type:Sequelize.STRING,
        allowNull:false
    },
})
module.exports = user;