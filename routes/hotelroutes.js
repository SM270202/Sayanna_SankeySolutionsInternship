const express = require ('express');
const Sequelize = require('sequelize');
const db1 = require('../config/database');
const router = express.Router();

const controller = require('../controller/hotelcontroller');

router.post('/addhotel', controller.addhotel)

router.get('/gethotel', controller.gethotel)

router.get('/payment', controller.paymentpage);

router.put('/:id', controller.updatehotel)

router.delete('/:id', controller.deletehotel)

  
module.exports = router;

