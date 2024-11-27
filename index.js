"use strict";

const pageIcon = document.getElementById('pageIcon')

pageIcon.addEventListener('click', function() {
    if (pageIcon.src.includes('LetsEatLogo.png')) {
        window.location.href = '/';
    }
});
