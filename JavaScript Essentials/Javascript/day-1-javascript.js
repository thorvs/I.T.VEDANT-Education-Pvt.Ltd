// Document Write types
document.writeln("Hello Day 1 ,Javascript Essentials");
// alert("Hello Alerts");

// To Create or write html elements
// document.writeln("<h1>This is Heading 1 From Js file</h1>");


// Console types
console.log("This is My Console Log");
console.warn("This is Waring console");
console.error("This is Error Console !");


//  Declaring Variables
var a = 6;
var age = 18;
// var age = 20;     redeclare allow in var in all scope

let b = true;
let name = "akshay";
// let name = "hello";  cannot redeclare in same block scope !

// const = constant value to their reference
const Name = "Akshay Gohrava";



// Block Scope and Function Scope 
// block scope
{
    console.log("this is block scope !");

}


// function scope
// function in js is block of code use to again and again 

// initializing function
 // let a = 20;    // let variable will not work inside function 
function home() {
    let a = 20;   // will work here !
    console.log("Hello Function");
    alert(a);
}
// executing function
home();


