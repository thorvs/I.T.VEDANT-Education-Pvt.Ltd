function addTask(){
    const value =document.getElementById('inputbox').value; //fetch the input text data 
    const ul=document.getElementById('list');//fetch the list
    const li=document.createElement('li') //create a new li 
    li.textContent=value; // merge the new li to the value 
    ul.appendChild(li) //and appent to the ul 
    document.getElementById('inputbox').value=" "
    
    


}