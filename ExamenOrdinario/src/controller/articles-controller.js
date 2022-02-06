'use strict'

let Article = require("../models/article");

let articleController={
    home:(req, res)=>{
        console.log("ID",req.query.id);
        if(req.query.id != undefined){
            return Article.findById(req.query.id,(error,found)=>{
                if(error) res.status(500).send({message:'Error al recuperar el árticulo'});

                res.status(200).send(found);    
            });    
        }
        return Article.find(function (err,data) {
            if(err) res.status(500).send({message:'Error al recuperar datos'});

            res.status(200).send(data);
        })
    },
    findOne:(req,res)=>{

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
        let values= req.body;
        let article_=Article.findById(req.query.id,(error,data)=>{
            console.log(values,data);
        });
        

        Article.findByIdAndUpdate(req.query.id,values,(error, updated)=>{
            if(error) res.status(404).send({message:'Error al actualizar el árticulo'});
            console.log(updated);
            res.status(200).send(updated);
        })
    },
    delete:(req,res)=>{
        let id= req.query.id
        Article.findByIdAndDelete(id,(error,deleted)=>{
            if(error) res.status(500).send({message:'Hubo un error al eliminar el artículo'})
            res.status(200).send({message:'Eliminado'});
        })
    }

}
module.exports=articleController;