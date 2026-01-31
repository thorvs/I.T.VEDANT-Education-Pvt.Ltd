const b={r:1 ,p:3};
const a={t:1 ,j:3,...b};//using spread operator you can print the value of the objects diectly 
console.log(a);

//object destructuring 
const s={q:1,w:2,e:"name"}
const {q,w,e}=s;
console.log(q,w,e);

//props 
function th({id ,name}){
    console.log(id,name);
}

const student={id:1,name:"vinay"}
th(student)


let detailss={age:12,school:"ddhhhf"}
student={student , detailss}
console.log(student,detailss);
//using spread operator it merges the operator properly 
console.log(...student,...detailss);


