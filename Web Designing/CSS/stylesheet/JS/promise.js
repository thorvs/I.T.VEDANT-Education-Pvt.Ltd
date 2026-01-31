const p1=   Promise.reject("data from promise 1");
const p2 =  Promise.resolve("data from 2");
Promise.any([p1,p2]).then((data)=>console.log(data));

console.log("+++++++++++++++++++++++++++++++++++");
const p3=new    Promise((resolve)=>setTimeout(()=>{resolve("this is p3")},3000))
const p4 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("this is p4");
  }, 6000),
);

// Promise.race([p3,p4])
// .then(data=>console.log(data));

Promise.allSettled([p3,p4])
.then((data)=>console.log(data));
//function array anonymas callback promis fetch


