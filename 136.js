// promise && setTimeout
// I want to resolve / reject promise after 2sec

function myPromise(){
    return new Promise((resolve, reject)=>{
        const value = true;
        setTimeout(()=>{
           if (value) {
            resolve();
           }else{
            reject();
           }
        },2000)
    })
}

myPromise().then(
    // jab promise resolve hoga
    () => {
    console.log("resolved");
    }
).catch(()=>
    console.log("rejected")
)