// for in and for of 
// for each 
// arrow function

let a=[12,5,55,888,66,47];
// forEach(parameters , index,array printing) eg : forEach(n,i,a)
a.forEach((n,i,a)=>
    {
        console.log(n,i);
    });


// to print all the number with square root 
// map retuns a new array
// let arr=a.map((n)=>n); element ,index and element are the parametes need to be remember 
let arr=a.map((n)=>[[n]*n]+4);
console.log(arr);

// to print all the prime number in the array 
// filter prints the value only that is comming true 
// filter gives you the new array based on your condition (works on the yor condition )
let arr2=a.filter((n)=>n%2==0);
console.log(arr2);

let aar3 =[56,66,78,99,21,4,5]
.map((n)=>n*2)
.filter((n)=>n<55)
console.log(aar3);


