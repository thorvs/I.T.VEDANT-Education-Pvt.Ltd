function onBtnOnclic(){
    alert("hello")
}

function onBtnCl(){
    const h1 =document.getElementsByTagName("h1")[0];
    h1.style.color="red";
    h1.style.backgroundColor="orange";
    h1.style.textAlign="center";
    h1.style.fontStyle="italic"

}

function pChange(){
    document.getElementById("para").textContent="Good Night : Time To go TO Sleep "

}

function gChange(msg){
    document.getElementById("para2").textContent=msg;

}