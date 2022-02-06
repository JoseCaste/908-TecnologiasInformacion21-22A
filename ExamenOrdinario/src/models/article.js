'use strict'
let mongoose=require("mongoose");
let Schema= mongoose.Schema;
let articleSchema=new Schema({
    name:String,
    description:String,
    depto:String,
    image:String,
    price: Number
});

module.exports=mongoose.model('Article',articleSchema);