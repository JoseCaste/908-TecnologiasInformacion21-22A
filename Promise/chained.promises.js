new Promise((resolve,reject)=>{
    let my_json;
    fetch("http://127.0.0.1:5500/Promise/user.json")
    .then(response => response.json())
    .then(json => resolve(json))
}).then(json=>{
    console.log(json)
    return json
})
.then(json=>{
    if(json.id == 1){
        console.log("1 is not allowed")
    }
    return json.id
}).then(id =>{
    if(id == 1){
        console.log("here 1 is allowed")
    }
})