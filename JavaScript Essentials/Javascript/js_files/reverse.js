let n =515515
rev=0;
let num=n
while(n>0){
    let rem=n%10;
    rev=rev*10+rem;
    n=Math.floor(n/10);
    console.log(n);

}
console.log(rev);

if(num==rev)
    console.log(num," is palindrome");
else
    console.log(num,"is not palindrome")