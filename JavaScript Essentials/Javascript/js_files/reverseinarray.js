function reverse(n){

    let rev=0;

    
    while(n>0){
    let rem=n%10;
    rev=rev*10+rem;
    n=Math.floor(n/10);
  

}
return rev;
}




let arr=[34,44,55,66,77];
console.log("this is through functoion "+arr.map((n)=>reverse(n)));

let aar2=arr.map((n)=>{
     let rev=0;

    
    while(n>0){
    let rem=n%10;
    rev=rev*10+rem;
    n=Math.floor(n/10);
  

}
return rev;

})

console.log("this is through map"+aar2);