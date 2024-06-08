const express = require ('express');
const path = require ('path');
const http = require('http');
const socketio = require('socket.io');
const session = require('express-session');

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

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.set("view engine","ejs");

app.get('/' ,(req , res) =>   res.render('homepage', {title:"Homepage" }) );
app.use(express.static('public'));

app.get('/gethotel', (req, res) => res.render('searchpage',{ title: 'Search Page' }));
app.use(express.static('public'));

app.get('/paymentpage' ,(req , res) =>   res.render('payment', {title:"Payment Page" }) );
app.use(express.static('public'));

app.post('/adddetails' , (req,res) => {
    let sql = 'INSERT INTO usertransaction SET ?';
    let user = {
          fname: req.body.fname,
          mname: req.body.mname,
          lname: req.body.lname,
          email: req.body.email,
          phoneno: req.body.phoneno,
          country: req.body.country,
          nameoncard: req.body.nameoncard,
          cardno: req.body.cardno,
          expdate: req.body.expdate,
          cvv: req.body.cvv
  };
});

app.put('/updatedetails/:id', (req, res) => {
    let sql = 'UPDATE usertransaction SET ? WHERE userid = ?';
    lconnection.query(sql, [req.body, req.params.userid], (err, result) => {
        if (err) throw err;
        res.send('User updated successfully');
    });
});

app.delete('/deletedetails/:id', (req, res) => {
    let sql = 'DELETE FROM usertransaction WHERE userid = ?';
    connection.query(sql, req.params.id, (err, result) => {
      if (err) throw err;
      res.send('User deleted successfully');
    });
  });  




const PORT = process.env.PORT || 4411 ;

server.listen(PORT, console.log(`Server is running at ${PORT}`));