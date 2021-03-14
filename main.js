const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Hard","Fun","Lit","A Journey"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

function type(){
    if(charIndex < textArray[textArrayIndex].length){
        if(!cursor.classList.contains("typing")) {
            cursor.classList.add("typing");
        };
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++ ;
        setTimeout(type , typingDelay);
    }
    else{
        cursor.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase(){
    if(charIndex > 0){
        if(!cursor.classList.contains("typing")) {
            cursor.classList.add("typing");
        };
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex-- ;
        setTimeout(erase, erasingDelay);
    }
    else{
        cursor.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length){
            textArrayIndex=0;
        }
        setTimeout(type, newTextDelay);
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    if(textArray.length){
        setTimeout(type, newTextDelay);
    }
})
