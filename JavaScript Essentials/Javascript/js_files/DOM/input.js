function displayName(){
    const input=document.getElementById("inputbox");
    const para=document.getElementById("para")
    para.textContent="jdjd"+input.value;
    input.value=" "
}

function changecolor(){
   const ul= document.querySelector(".list");
   const listItems=ul.children;
   for(let i of listItems){
    i.style="red";
    i.style.backgroundColor="yellow";
    i.style.margin="30px";

    
   }
}