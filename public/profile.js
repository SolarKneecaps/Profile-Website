// mobile menu class toggle

let menuContainer = document.querySelector('.header__menu-container');
let menuIcon = document.querySelector('.header__mobile-icon');
let menuOptions = document.querySelectorAll('.header__menu-container__options')

menuIcon.addEventListener('click', ()=>{
    menuContainer.classList.toggle('menu-open');
    menuIcon.classList.toggle('menu-icon-rotate');
    menuOptions.forEach(option=>{
        option.classList.toggle('Opacity')
    })
})