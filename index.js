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
