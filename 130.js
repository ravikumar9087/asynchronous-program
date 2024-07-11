// synchronous programming vs asynchronous programming
// synchronous programming
// synchronous programming single threaded

// 1..

// console.log("script start")

// for (let index = 0; index < 100000; index++) {
//     console.log("inside loop");
    
// }

// console.log("script end");


// 2..
// console.log("script start");

// function hello(){
//     console.log("hello");
// }

// setTimeout(hello,100);

// console.log("script end");


// 3..
// console.log("script start");

// setTimeout(()=> console.log("hello"),1000);

// for (let index = 0; index < 100; index++) {
//     console.log("hello3");
// }

// console.log("script end");


// 4.. 
console.log("script start");

const id = setTimeout(()=> console.log("hello"),1000);

for (let index = 0; index < 100; index++) {
    console.log("hello3");
}

console.log("clear timed out");
clearTimeout(id);
console.log("script end");