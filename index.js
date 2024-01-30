const express  = require("express");
const expressLayouts = require("express-ejs-layouts");
const cookieParser = require('cookie-parser');
const app = express();
 
const port = 8000;
const path = require("path");

const db  = require("./config/mongoose")
console.log(db._connectionString);
  
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/assets',express.static(__dirname +"/assets"));
 
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('view engine','ejs');
app.set('views','./views');
 
 

app.use('/',require('./routes'));
 
app.listen(port,function(err){
    if(err){
        console.log(`server end error: ${err}`);

    }
    console.log(`sucessful at ${port}`);
    
})