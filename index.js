const express  = require("express");
const expressLayouts = require("express-ejs-layouts");
const cookieParser = require('cookie-parser');
const session = require('express-session'); 
const app = express();
 
const port = 8000;
const path = require("path");

const db  = require("./config/mongoose");
// const jwtAuthMW = require('./config/jwtLogin');
console.log(db._connectionString);
  
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
// app.use(jwtAuthMW.authenticateToken);

app.use('/assets',express.static(__dirname +"/assets"));
 
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('view engine','ejs');
app.set('views','./views');
 
app.use(session({
    secret: 'PheobeBuffay',
    resave: false,
    saveUninitialized: false,
  }));


app.use('/',require('./routes'));
 
app.listen(port,function(err){
    if(err){
        console.log(`server end error: ${err}`);

    }
    console.log(`sucessful at ${port}`);
    
})