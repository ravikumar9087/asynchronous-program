const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading");


function changeText(element, text, color, time, ) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.backgroundColor = color;
                resolve();   
            } else{
                reject("Element not found");
            }
        }, time);
    })
}


const returnPromise = changeText(heading1, "one", "violet", 1000,);
returnPromise.then(() => changeText(heading2, "two", "yellow", 1000,))
.then(()=> changeText(heading3, "three", "green", 1000))
.then(()=> changeText(heading4, "four", "blue", 1000,))
.then(()=> changeText(heading5, "five", "purple", 1000))
.then(()=> changeText(heading6, "six", "red", 1000))
.then(()=> changeText(heading7, "seven", "cyan", 1000))
.catch((error)=> alert(error));
