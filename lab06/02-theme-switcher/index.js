/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

//default theme
const theme_default = () => {
   //get the DOM element and change theme
   document.getElementsByTagName("body")[0].className = 'default'
};

//desert theme
const theme_desert = () => {
   //get the DOM element and change theme
   document.getElementsByTagName("body")[0].className = 'desert'
};

//ocean theme
const theme_ocean = () => {
   //get the DOM element and change theme
   document.getElementsByTagName("body")[0].className = 'ocean'
};

//high contrast theme
const theme_high_contrast = () => {
   //get the DOM element and change theme
   document.getElementsByTagName("body")[0].className = 'high-contrast'
};

//query selector for the buttons
//add event listner to look out for click event
document.querySelector('#default').addEventListener('click', theme_default);
document.querySelector('#desert').addEventListener('click', theme_desert);
document.querySelector('#ocean').addEventListener('click', theme_ocean);
document.querySelector('#high-contrast').addEventListener('click', theme_high_contrast);


