const { _attributes } = require('../config/database');
const db = require('../config/database');
const Hotel = require('../models/hotel');

const addhotel = async (req,res) => {
   
    res.render('homepage', {title:"Homepage" }) ;
    
}
const gethotel = async (req,res) => {
    
    let gethotels = await Hotel.findAll({
        attributes:[
            'place',
            'vip',
            'room',
            'check_in',
            'check_out',
        ]
    })
    res.render('searchpage', {title:"Search Page" }) ;

}
const paymentpage = async (req, res) => {
    try {
      res.render('payment', { title: 'Payment Page' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Error rendering payment page' });
    }
  };
  

module.exports ={
    addhotel,
    gethotel,
    paymentpage
}
