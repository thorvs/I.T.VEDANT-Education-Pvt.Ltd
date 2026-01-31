let n=4;
let fact=1;
let sum=0;

for(let i=1;i<=n;i++){
    sum=sum+i;
    fact=fact*i;
    if(n%i==0){
        console.log(i);
        
    }
}
console.log(`sum of ${n} is ${sum}`)
console.log(`fact of ${n} is ${fact}`)