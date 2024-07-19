const { Sequelize } = require('sequelize');

module.exports = new Sequelize('hotel_booking', 'root', 'localhost12345678', {
  host: 'localhost',
  dialect: 'mysql'
});
