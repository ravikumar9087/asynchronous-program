// promise.resolve
// promise chaining

// const myPromise = Promise.resolve(5);
// Promise.resolve(5).then(value =>{
//     console.log(value);
// })

// then()  promise return krta hai

function myPromise(){
    return new Promise((resolve, reject)=>{
            resolve("foo");   
        }
    )
}

myPromise()
    .then((value )=> {
    console.log(value);
    value += "bar"
    return value;
    // inside
    // return Promise.resolve(value);
}).then((value )=> {
    console.log(value);
})
