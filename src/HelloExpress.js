require('dotenv').config({path:'../.env'});
const express = require("express"); // import de express
const cors = require("cors"); // import de cors
const bodyParser =  require("body-parser"); // import de bodyParser



const port = process.env.S_PORT; // port sur lequelle notre app va écouter

const app = express(); 

app.use(bodyParser.urlencoded({extended:true}));



app.listen(port, () => {
    console.log("hello express");
});