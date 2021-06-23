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


//SERVICES --modal
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__btn'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active__modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click',() =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active__modal')
        })
    })
})


// PORTFOLIO --swiper
let swiperPort = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });



// TESTIMONIAL --swiper
let swiperTest = new Swiper(".testimonial__container", {
    // cssMode: true,
    loop: true,
    grabCursor: true,
    spaceBetween:48,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
      dynamicBullets: true,
    },
    breakpoints:{   //make responsive
        568:{
            slidesPerView:2,
        }
    }
  });



//   SCROLL SECTIONS ACTIVE LINK  --change color on active [reuseable]
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
     
    sections.forEach(current=> {
        const sectionHeight = current.offsetHeight
        const sectionTop= current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active__link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active__link')
        }
    })
}
window.addEventListener('scroll', scrollActive)




// ADD HEADER BORDER FADE ON SCROLL
function scrollHeader(){
    const nav =document.getElementById('header')
    //when the scroll is greater than 80vh, add the scroll header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll__header');
    else nav.classList.remove('scroll__header')
}
window.addEventListener('scroll', scrollHeader)




//SHOW SCROLL UP
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is higher than xxvh, add the scroll class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp)



//=============================================================
//CHANGE THEME -DARK THEME  ===================================
const themeButton = document.getElementById('theme-btn'),
      darkTheme = 'dark-theme',
      iconTheme = 'uil-sun'

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme'),
      selectedIcon = localStorage.getItem('selected-icon')

// obtain current theme by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// validate if user previously chose a topic
if(selectedTheme){
    //after validation, check if darkmode was previously activated or deactivated.
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// activate or deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //save current chosen theme & icon
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

