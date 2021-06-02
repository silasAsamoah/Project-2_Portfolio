// NAVBAR MOBILE VIEW
//nav menu show & hide
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close'),
      navLink = document.querySelectorAll('.nav__link')

//Check and Show on toggle menu
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show__menu')
    })
}

//Check and Hide on close menu
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show__menu')
    })
}

//hide menu on selection
function linkAction(){
    // remove the show__menu class when any nav__link is clicked
    navMenu.classList.remove('show__menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))