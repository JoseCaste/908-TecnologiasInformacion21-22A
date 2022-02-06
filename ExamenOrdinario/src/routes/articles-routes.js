'use strict';

let express= require("express");
let articleController=require("../controller/articles-controller")
let router = express.Router();

router.get("/articles",articleController.home);
router.post("/articles",articleController.save);
router.put("/articles",articleController.update);
router.delete("/articles",articleController.delete);
module.exports=router;
