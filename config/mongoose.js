const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/assignment");

console.log("file accessed");

const db  = mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));

db.once('open',function(){

    console.log('connected to ::DB');

});

module.exports = db;

 