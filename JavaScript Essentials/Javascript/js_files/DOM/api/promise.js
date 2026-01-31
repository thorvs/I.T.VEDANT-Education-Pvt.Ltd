const promise= new Promise ((resolve,reject)=>{
    let status=false;
    if(status){
        resolve("data found from resolve ")
    }
    else{
        reject("data not found rejected ")
    }
})

promise
.then((data)=>{return data + "hello"})
.then((data)=>data + " this is the second time data fetch hello")
.then((data)=>console.log(data))
.catch((data)=>console.log(data))