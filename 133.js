// callbacks, callback hell, pyramid of doom
// asynchronous programming


// task1
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

//1..
// setTimeout(()=>{
//     heading1.textContent = "Heading one";;
//     heading1.style.backgroundColor = "red"
// },1000)
// setTimeout(()=>{
//     heading2.textContent = "Heading two";
//     heading2.style.backgroundColor = "green"
// },2000)
// setTimeout(()=>{
//     heading3.textContent = "Heading three";
//     heading3.style.backgroundColor = "blue"
// },3000)
// setTimeout(()=>{
//     heading4.textContent = "Heading four";
//     heading4.style.backgroundColor = "violet"
// },4000)
// setTimeout(()=>{
//     heading5.textContent = "Heading five";
//     heading5.style.backgroundColor = "cyan"
// },5000)
// setTimeout(()=>{
//     heading6.textContent = "Heading six";
//     heading6.style.backgroundColor = "orange"
// },6000)
// setTimeout(()=>{
//     heading7.textContent = "Heading seven";
//     heading7.style.backgroundColor = "yellow"
// },7000)





//2..

// callback hell
// setTimeout(() => {
//     heading1.textContent = "one";;
//     heading1.style.backgroundColor = "red"
//     setTimeout(() => {
//         heading2.textContent = "two";
//         heading2.style.backgroundColor = "green"
//         setTimeout(() => {
//             heading3.textContent = "three";
//             heading3.style.backgroundColor = "blue"
//             setTimeout(() => {
//                 heading4.textContent = "four";
//                 heading4.style.backgroundColor = "violet"
//                 setTimeout(() => {
//                     heading5.textContent = "five";
//                     heading5.style.backgroundColor = "cyan"
//                     setTimeout(() => {
//                         heading6.textContent = "six";
//                         heading6.style.backgroundColor = "orange"
//                         setTimeout(() => {
//                             heading7.textContent = "seven";
//                             heading7.style.backgroundColor = "yellow"
//                         },1000)
//                     }, 3000)
//                 },2000)
//             },1000)
//         },2000)
//     }, 2000)
// }, 1000)
  

// pyramid of doom
function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.backgroundColor = color;
            if (onSuccessCallback) {
                onSuccessCallback();
            }
        } else {
            // console.log("Your element doesn`t exist ");
            if(onFailureCallback){
                onFailureCallback();
            }
        }
    }, time);
}


// pyramid of doom
changeText(heading1, "one", "violet", 1000,()=>{
    changeText(heading2, "two", "yellow", 1000,()=>{
        changeText(heading3, "three", "green", 1000,()=>{
            changeText(heading4, "four", "blue", 1000,()=>{
                changeText(heading5, "five", "purple", 1000,()=>{
                    changeText(heading6, "six", "red", 1000,()=>{
                        changeText(heading7, "seven", "cyan", 1000,()=>{
                        },()=>{console.log("heading6 does not exist")})
                    },()=>{console.log("heading6 does not exist")})
                },()=>{console.log("heading5 does not exist")})
            },()=>{console.log("heading4 does not exist")})
        },()=>{console.log("heading3 does not exist")})
    },()=>{console.log("heading2 does not exist")})
},()=>{console.log("heading1 does not exist")})
