// async / wait
const URL = "https://jsonplaceholder.typicode.com/posts"

async function getPosts(){
   const response = await fetch(URL);
   if(!response.ok){
    throw new Error("something went wrong")
   }
   const data = await response.json()
  return data;
}

getPosts().then(myData =>{
    console.log(myData);
})
.catch((error) =>{
    console.log("inside error");
    console.log(error);
})
// fetch(URL)
//     .then(response=>{
//         if (response.ok) {
//             return response.json();
//         }else{
//             throw new Error("something went wrong")
//         }
//     })
//     .then(data=> {
//         console.log(data);
//     }
//     )
//     .then()
    
    
//     .catch(error =>{
//         console.log(error);
//     })