const { _attributes } = require('../config/database');
const db = require('../config/database');
const Hotel = require('../models/hotel');

const addhotel = async (req,res) => {
    let info ={
        name: req.body.hotel_name,
        location:req.body.hotel_location,
        roomtype: req.body.hotel_roomtype,
        price: req.body.hotel_roomprice,
        days: req.body.days_of_stay,
    }
    const hotell = await Hotel.create(info)
    res.status(200).send(hotell)
    console.log(hotell)
}
const gethotel = async (req,res) => {
    
    let gethotels = await Hotel.findAll({
        attributes:[
            'name',
            'location',
            'roomtype',
            'price',
        ]
    })
    res.status(200).send(gethotels) 
}
const updatehotel = async (req,res) => {
    
    let id = req.params.hotel_id

    const hotel = await Hotel.update(req.body,{where:{id: hotel_id}} )
    res.status(200).send(updatehotels) 
}
const deletehotel = async (req,res) => {
    
    let id = req.params.hotel_id

    await Hotel.destroy({where: {id:hotel_id}})
    res.status(200).send("deleted") 
    
}

module.exports ={
    addhotel,
    gethotel,
    updatehotel,
    deletehotel
}
