// let n=54;


let count=0;
for(let i=1;i<=n;i++){
    if(n%i==0){
        console.log(i);
        count++
    }
}
console.log("==========================================")
console.log("==========================================")
console.log("==========================================")
if(count==2){
    console.log(n,"is prime ")
}
else{
    console.log(n,"is not prime ")
}