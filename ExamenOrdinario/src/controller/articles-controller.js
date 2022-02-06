'use strict'

let Article = require("../models/article");

let articleController={
    home:(req, res)=>{
        return Article.find(function (err,data) {
            if(err) res.status(500).send({message:'Error al recuperar datos'});

            res.status(200).send(data);
        })
    },
    save:(req,res)=>{
        let article = new Article();
        let article_data=req.body;
        console.log(article_data);
        article.name=article_data.name;
        article.description=article_data.description;
        article.price=article_data.price;
        article.image=article_data.image;
        article.depto=article_data.depto;
        article.save((error, stored)=>{
            if(error) return res.status(500).send({message:"Error al guardar"})

            return res.status(201).send({article:stored});
        });
    },
    update: (req,res)=>{

    },
    delete:(req,res)=>{
        let id= req.query.id
        console.log("----",id);
        res.status(200).send();
    }

}
module.exports=articleController;