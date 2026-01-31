// objets are searched by properties and name of property and arrays are searched by index

// to create a object use const onlt 

const product={
    id:101, //property name :value
    name:"laptop ",
    price:450000

}
// to shoe the data of the object
console.log(product.id);
console.log(product.name);
console.log(product.price);

//you can also acces the property through using array formate e.g product["parameters name "]
console.log(product["id"]);

//to print the objets by for loop 

for(let i in product){
    console.log(i,product[i]);
}