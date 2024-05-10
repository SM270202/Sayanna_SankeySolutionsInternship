const express = require ('express');
const path = require ('path');
const http = require('http');
const socketio = require('socket.io');


const db = require('./config/database');

db.authenticate()
    .then(() => console.log('successfully connected database'))
    .catch(err => console.log('Error in connecting Database' + err))
const app = express();
const server = http.createServer(app);
const io = socketio(server)

io.on('connection',socket =>{
    console.log('Hotel website');

    socket.emit('message','Welcome to our site')
    socket.broadcast.emit('message','A user has visited');
    socket.on('disconnect',() =>{
        io.emit('message','a user has left');
    });
});



app.get('/' ,(req , res) => res.send('INDEX'));

const router = require('./routes/hotelroutes.js');
app.use('/api/hotels', router);


const PORT = process.env.PORT || 8080 ;

server.listen(PORT, console.log(`Server is running at ${PORT}`));