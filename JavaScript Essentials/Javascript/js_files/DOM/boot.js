const isPrime=(n)=> {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }

  return count == 2;
}



function checkPrime(){

const in1=document.getElementById("inputbox1")
let value =parseInt(in1.value)
const p =document.getElementById("primePara")
if(isPrime(value)){
    p.textContent="number is prime "

}
else{
    p.textContent="numbwre i snot prime"
}
}





function calculate(operation){
    let a = parseInt(document.getElementById(form1))
    let b = parseInt(document.getElementById(form2))


switch (operation) {
  case "+":
    document.getElementById("cp").textContent="Addition is"+(a+b);
    break;

  case "-":
    document.getElementById("cp").textContent="substraction  is"+(a-b);
    break;
    

  case "*":
    document.getElementById("cp").textContent="multiplication is"+(a*b);
    break;

  case "/":
    document.getElementById("cp").textContent="division  is"+(a/b);
    break;

  default:
    console.log("Invalid selection");
}

}