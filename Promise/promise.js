let promise = new Promise(function (resolve, reject) {
    //setTimeout(() => reject("Whoops!"), 1000);
    reject("Whoops")
    //resolve("success")
});
/*promise.then(resolv =>{ 
    console.log(resolv);
}).catch(value=> console.log(value))*/
/*promise.then(resolv => console.log(resolv))
    .catch(reject => console.log(reject))*/

promise.then((resolv) => console.log(resolv), 
(reject) => console.log(reject))


const resolve_ = (response) => {
    console.log("----> resolve ",response)
}
const reject_ = (response) => {
    console.log("reject ",response)
}
promise.then(resolve_, reject_)

//promise.all
const promise1 = Promise.reject(3);
const promise2 = 42;
const promise3 = new Promise((resolve,reject) => {
  setTimeout(resolve, 5000,'foo');
      //function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number
   
});

Promise.all([promise2, promise1, promise3]).then((values) => {
  console.log(values);
}).catch(response =>{
    console.log(response)
});

//promise.race()
const p1= new Promise((resolve)=>{
    setTimeout(resolve,2000,'first')
})
const p2= new Promise(resolve=>{
    setTimeout(resolve,1001,'second')
})
const p3= Promise.reject(3)

Promise.allSettled([p1,p2,p3]).then(value => {
    value.forEach(item=>console.log(item.reason,item.status,item.value))
})
//Promise.race([p1,p2]).then(value=> console.log(value))

//Promise.any([p1,p2,p3]).then((response)=> console.log(response))