
const toggle_dyslexic_theme = () => {
  //get the state of the button from local storage
  const isActive = window.localStorage.getItem('dyslexic');

  //if not active
  if (isActive==0)
  {
    //change mode to dyslexia and update local storage
    document.getElementsByTagName("body")[0].className = 'dyslexia-mode'
    window.localStorage.setItem('dyslexic', 1)

    //log
    console.log('changing not active to active')
  }

  else
  {
    //change mode to default and update local storage
    document.getElementsByTagName("body")[0].className = 'default'
    window.localStorage.setItem('dyslexic', 0)

    //log
    console.log('changing Active to not active')

  }
};


//add event listener for the dyslexic mode
document.querySelector('#dyslexia-toggle').addEventListener('click', toggle_dyslexic_theme);

//get the state of the button from local storage
const isActive = window.localStorage.getItem('dyslexic');

//not active
if (isActive==0)
{
  //change mode to default 
  document.getElementsByTagName("body")[0].className = 'default'
}
else
{
  //change mode to dyslexia
  document.getElementsByTagName("body")[0].className = 'dyslexia-mode'
}