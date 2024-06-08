const express = require ('express');
const Sequelize = require('sequelize');
const db1 = require('../config/database');
const router2 = express.Router();

const controller2 = require('../controller/usercontroller');

router2.post('/adddetails', controller2.adddetails)

router2.put('updatedetails/:id', controller2.updatedetails)

router2.delete('deletedetails/:id', controller2.deletedetails)

  
module.exports = router2;
