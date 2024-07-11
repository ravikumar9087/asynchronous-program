//  Promise
// future value
console.log("Script start");




const bucket = ['coffee', 'chips', 'vegetables','salt',  'rice'];
const friedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve({value : "fried rice"})
    } else {
        // reject(new Error("something missing from bucket"));
        reject("could not do it");
    }
})


// produce


// consume
// how to consume
// friedRicePromise.then(
//     // jab promise resolve hoga
//     (myfriedRice) => {
//     console.log("lets eat", myfriedRice);
//     }, 
//     // jab promise reject hoga
//     (error) => {
//     console.log(error);
//     }
// )


// friedRicePromise.then(
//     // jab promise resolve hoga
//     (myfriedRice) => {
//     console.log("lets eat", myfriedRice);
//     }, null
// )


setTimeout(()=>{
    console.log("inside set timeout");
}, 0)

friedRicePromise.then(
    // jab promise resolve hoga
    (myfriedRice) => {
    console.log("lets eat", myfriedRice);
    }
).catch((error)=>
    console.log(error)
)

for(let i = 0; i<=100; i++){
    console.log(i);
}

console.log("Script end");
 