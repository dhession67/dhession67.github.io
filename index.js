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
