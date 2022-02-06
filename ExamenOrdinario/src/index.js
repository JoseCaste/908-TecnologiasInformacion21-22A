'use strict';

let connectorDB= require("mongoose");
let server= require("./server");
let port=3700;


const success= (info) =>{
    console.log("Success"); 
    server.listen(port,()=>{
        console.log("Server status: listenig");
    });
}
const failure= (fail)=>{
    console.log("Error=>",fail);
}
connectorDB.Promise = global.Promise;
connectorDB.connect("mongodb://localhost:27017/articles").then(success,failure).catch(error => console.log("---",error))