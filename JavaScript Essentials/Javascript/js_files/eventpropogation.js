document.querySelector(".container").addEventListener("click",()=>{
    alert("container")

})
document.querySelector(".box").addEventListener("click",()=>{
    alert("box")
})
document.querySelector("h1").addEventListener("click",()=>{
    alert("h1")
})


document.querySelector(".box1").addEventListener("click",(e)=>{
    e.stopPropagation();
    alert("box1");
    true
})
document.querySelector("h2").addEventListener("click",()=>{
    alert("h2");
    true
})