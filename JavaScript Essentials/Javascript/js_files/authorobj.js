const book={
    id:992,
    name : "charle ",
    author:"roldhal"
}
// 
console.log(book);
book["author"]="pty";
// you can add another property also 
book["prise"]=50;
console.log(book);
 

const school={
    id:38,
    name:"vinay",
    location:"mumbai ",
    fees:50000,
    daetails:function(){
       this.id,this.name,this.location
       
    },
    discount:function (f){
        return f-20
    }
}
school.daetails()
console.log(school.discount(f))





  