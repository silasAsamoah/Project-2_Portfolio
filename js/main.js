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




//SKILLS -- toggle skills
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    //set current active class
    let itemClass = this.parentNode.className

    //iterate through skills content classes -3 in all
    // and close each
    for(i=0; i< skillsContent.length;i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    //if the active class is closed, open it
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}
//open active class on click.
skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})


//QUALIFICATION -- toggle 
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click',() =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qctn__active')
        })
        target.classList.add('qctn__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qctn__active')
        })
        tab.classList.add('qctn__active')
    })
})