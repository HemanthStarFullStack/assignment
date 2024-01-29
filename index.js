const express  = require("express");
const expressLayouts = require("express-ejs-layouts");
 
const app = express();
const port = 8000;
const path = require("path");
const db = require('./config/mongoose')
 
app.use(express.urlencoded({extended:false}));
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./routes'));
app.use('/assets',express.static(__dirname +"/assets"));
app.listen(port,function(err){
    if(err){
        console.log(`server end error: ${err}`);

    }
    console.log(`sucessful at ${port}`);
    
})