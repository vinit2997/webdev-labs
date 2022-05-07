const makeBigger = () => {

   //get the DOM element and its length
   p_dom = document.getElementsByTagName('p')[0];
   p_len = parseFloat(window.getComputedStyle(p_dom, null).getPropertyValue('font-size'));

   //increase length
   document.querySelector('p').style.fontSize = p_len * 1.1 +'px';

   //get the DOM element and its length
   h1_dom = document.getElementsByTagName('h1')[0];
   h1_len = parseFloat(window.getComputedStyle(h1_dom, null).getPropertyValue('font-size'));

   //increase length
   document.querySelector('h1').style.fontSize = h1_len * 1.1 +'px';
   
};

const makeSmaller = () => {
   //get the DOM element and its length
   p_dom = document.getElementsByTagName('p')[0];
   p_len = parseFloat(window.getComputedStyle(p_dom, null).getPropertyValue('font-size'));

   //decrease length
   document.querySelector('p').style.fontSize = p_len * 0.9 +'px';

    //get the DOM element and its length
   h1_dom = document.getElementsByTagName('h1')[0];
   h1_len = parseFloat(window.getComputedStyle(h1_dom, null).getPropertyValue('font-size'));

   //decrease length
   document.querySelector('h1').style.fontSize = h1_len * 0.9 +'px';
};



document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

