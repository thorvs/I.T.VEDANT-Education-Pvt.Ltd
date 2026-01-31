const h1 =document.getElementById('heading');
h1.addEventListener("click",(e)=>{
    console.log(e.target);




    //alert("dont click it again ")
})


document.getElementById("link").addEventListener("click",(event)=>{
    console.log("clicked");
    event.preventDefault();

})

document.getElementById("myForm").addEventListener("submit", (su)=>{
    su.preventDefault();
    console.log(su.target.name.value);
    console.log(su.target.age.value);
    console.log(su.target.password.value);


})