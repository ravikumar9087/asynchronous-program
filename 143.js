// fetch
const URL = "https://jsonplaceholder.typicode.com/posts"




// const URL = "https://jsonplaceholder.typicode.com/posts"

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





fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response=>{
        if (response.ok) {
            return response.json();
        }else{
            throw new Error("something went wrong")
        }
    })
    .then(data=> {
        console.log(data);
    }
    )
    .then()
    
    
    .catch(error =>{
        console.log(error);
    })