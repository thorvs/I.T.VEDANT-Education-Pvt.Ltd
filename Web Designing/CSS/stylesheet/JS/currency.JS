const form=document.getElementById("currencyform");
const answer=document.getElementById("answer")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const from=e.target.from.value
    const to =e.target.to.value;
    const amount=e.target.amount.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
    .then((response)=>response.json())
    .then((data)=>{
      
        answer.textContent=`this is the amount ${amount} ${from} =${data["rates"][to]*amount} ${to}`
    })

})








const btn1=document.getElementById("btn1")
const box =document.getElementById("div1")

btn1.addEventListener("click",(e)=>{
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then(data);
      box.style.backgroundColor=`url(`${data.message}`)`;
})
















