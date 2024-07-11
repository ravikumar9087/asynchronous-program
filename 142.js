const URL = "https://jsonplaceholder.typicode.com/posts"

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method,url)
        xhr.onload = function(){
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.response)
            }else{
                reject(new Error("something went wrong"))
            }
        }

        xhr.onerror = function(){
            reject(new Error("something went wrong"))
        }
        xhr.send()
        
    })
}

sendRequest("GET",URL)
    .then(response =>{
        const data = JSON.parse(response);
        return data;
    })
    .then(data=>{
        const id = data[1].id;
        return id;
        // console.log(id);
    })
    .then(id=>{
        const url = `${URL}/${id}`;
        return sendRequest("GET",url);
        // console.log(url);
    })
    .then(newResponse=>{
        const data2 = JSON.parse(newResponse);
        console.log(data2);
        
    }) 
    .catch(error =>{
        console.log(error);
    })