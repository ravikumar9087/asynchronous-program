// function returning function



function ricePromise(){
    const bucket = ['coffee', 'chips', 'vegetables','salt',  'rice'];
    return new Promise((resolve, reject) => {
        if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
            resolve({value : "fried rice"})
        } else {
            // reject(new Error("something missing from bucket"));
            reject("could not do it");
        }
    })
}

ricePromise().then(
    // jab promise resolve hoga
    (myfriedRice) => {
    console.log("lets eat", myfriedRice);
    }
).catch((error)=>
    console.log(error)
)