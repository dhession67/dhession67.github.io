"use strict";

//Gets the image element by its Id
const pageIcon = document.getElementById('pageIcon')

//Add an event listener to the image to listen for a click event 
pageIcon.addEventListener('click', function() {
    
    //Check if the image source matches the specific png file
    if (pageIcon.src.includes('LetsEatLogo.png')) {

        //Redirect to the home page 
        window.location.href = '/';
    }
});

document.addEventListener('DOMContentLoaded', () => {

const image1 = document.getElementById('LemonPoppyseedPancakes');
const image2 = document.getElementById('PimentoCheeseBLT');
const image3 = document.getElementById('RedWineBraisedBeef');

if (image1) {
  image1.addEventListener('mouseenter', () => {
      image1.src = 'Lemon-Poppy-Seed-Pancake2.jpeg'; 
  });
  image1.addEventListener('mouseleave', () => {
      image1.src = 'Lemon-PoppySeed-Pancake-Skinny.jpeg'; 
  });
}

if (image2) {
  image2.addEventListener('mouseenter', () => {
      image2.src = 'pimento-cheese-blt-sandwich2.jpeg'; 
  });
  image2.addEventListener('mouseleave', () => {
      image2.src = 'pimento-cheese-blt-sandwich.jpeg'; 
  });
}

if (image3) {
  image3.addEventListener('mouseenter', () => {
      image3.src = 'Red-Wine-Braised-Beef2.jpeg'; 
  });
  image3.addEventListener('mouseleave', () => {
      image3.src = 'Red-Wine-Braised-Beef-Skinny.jpeg'; 
  });
}

});

const imagePairs = [
    { original: 'tableSpread.jpeg', hover: 'tableSpread2.jpeg' },
    { original: 'breakfast-spread.jpeg', hover: 'breakfast-spread2.jpeg' },
    { original: 'lunch-spread.jpeg', hover: 'lunch-spread2.jpg' },
    { original: 'dinner-spread.jpeg', hover: 'dinner-spread2.jpeg' },
];

const imageElements = document.querySelectorAll('.main-image');

imageElements.forEach((imageElement) => {
    const page = imageElement.getAttribute('data-page');
    const pageIndex = page - 1;

    imageElement.style.backgroundImage = `url('${imagePairs[pageIndex].original}')`;

    imageElement.addEventListener('mouseover', () => {
        imageElement.style.backgroundImage = `url('${imagePairs[pageIndex].hover}')`;
    });

    imageElement.addEventListener('mouseout', () => {
        imageElement.style.backgroundImage = `url('${imagePairs[pageIndex].original}')`;
    });
});

// Beginning of Form Section
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function() {
      // Assigning pwd and pwd2 values to variables to use for comparison.
      let pwdVal = pwd.value;
      let pwd2Val = pwd2.value;

   if (pwd.validity.patternMismatch) {
      pwd.setCustomValidity("Your password must be at least 8 characters with one letter and one number")
   } else if (pwdVal !== pwd2Val) {
      pwd.setCustomValidity("Your passwords must match")
   } else {
      pwd.setCustomValidity("");
   }
})
// End of form section.
