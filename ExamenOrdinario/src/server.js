'use strict';

let express=require("express");
const bodyParser = require("body-parser");
let server=express();
let router= require("./routes/articles-routes")
let cors= require("cors");

//Archivos/Rutas

//middleware
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE', 'PUT','POST','GET');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });
//Rutas
server.use("/", router);
//exportar modulos
module.exports=server