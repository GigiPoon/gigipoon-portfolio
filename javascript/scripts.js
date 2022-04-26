//targetting the span of typedText (the words inside)
const typedTextSpan = document.querySelector('.typedText')

//words in the array
const textArray = ["front-end web developer", "graphic designer"];
//the amount of time it takes to type out the words 
const typingDelay = 100;
//the amount of time it takes to erase the words, should be shorter than the typing delay
const erasingDelay = 50;
//delay between current and next string, first string typed then wait 2 secs before starting next
const newTextDelay = 2000;
//starting from first element of first array, reassignment of variables
let textArrayIndex = 0;
//starting from first character
let charIndex = 0;

//creating a function 

function type () {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        //erase
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(charIndex > 0) { 
        //removing last character taking substring 
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);

    } else {
        //type
        textArrayIndex++;
        if (textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}

//calling the function
document.addEventListener("DOMContentLoaded", function() {
    //delay before starting waiting for page to finish loading
    setTimeout(type, newTextDelay + 150);
})

const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navBar');

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('open');
})

const circle = document.querySelector('.circle6');
const socialNavBar = document.querySelector('.mainSocialIcons')

circle.addEventListener('click', () => {
    socialNavBar.classList.toggle('open');
})