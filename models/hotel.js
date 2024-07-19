const {Sequelize , Datatypes} = require('sequelize');
const db = require('../config/database');

const hotel = db.define('Book', {
    place: {
        type:Sequelize.STRING,
        allowNull:false
    },
    vip: {
        type:Sequelize.STRING
    },
    room: {
        type:Sequelize.STRING
    },
    check_in: {
        type:Sequelize.DATE
    },
    check_out: {
        type:Sequelize.DATE
    },
})
module.exports = hotel;