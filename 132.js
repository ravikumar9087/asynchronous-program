// understanding callback 
//1
// function myFunc1(callback) {
//     console.log("function is doing some task 1");
//     callback();
// }

// function myFunc2() {
//     console.log("function is doing some task 2");
// }

// myFunc1(myFunc2);

//2 
// function myFunc1(callback) {
//     console.log("function is doing some task 1");
//     callback();
// }

// myFunc1(function() {
//     console.log("function is doing some task 2");
// });

//3 

function getNumberAndAdd(number1, number2, onSuccess, onFailure) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        onSuccess(number1, number2);
    } else {
        onFailure()
    }
}


getNumberAndAdd("5", 5, (num1, num2) => {
    console.log(num1 + num2);
}, () => {
    console.log("wrong data type");
    console.log("please pass number only");
})
 