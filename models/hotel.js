const {Sequelize , Datatypes} = require('sequelize');
const db = require('../config/database');

const hotel = db.define('Hotel', {
    hotel_name: {
        type:Sequelize.STRING
    },
    hotel_location: {
        type:Sequelize.STRING
    },
    hotel_roomtype: {
        type:Sequelize.STRING
    },
    hotel_roomprice: {
        type:Sequelize.DOUBLE
    },
    days_of_stay: {
        type:Sequelize.INTEGER
    },
})
module.exports = hotel;