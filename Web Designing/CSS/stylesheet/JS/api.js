async function getProdut() {
    try{
          const response=await fetch("https://fakestoreapi.com/products/1");
          const data =await response.json()
          console.log(data)

    }
    catch(error){
        console.log("SoMtHiNg WeNt Wrong")
    };
}



getProdut();

async function getUsers() {
    try {
        const response = await fetch("https://fakestoreapi.com/users");
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log("something went wrong fetching user data");

    }
    

}
getUsers();

async function mydata() {
    const response =await fetch("https://fakestoreapi.com/carts");
    const data=await response.json();
    console.log(data)

    
}
mydata();
