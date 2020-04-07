// proj card js
const headers = document.querySelectorAll('.cards__container__header');
const containers = document.querySelectorAll('.cards__container');
let isOpen = false;


headers.forEach((head, index)=>{
    head.addEventListener('click', ()=>{
        headers[index].classList.toggle('header-less');
        containers[index].classList.toggle('container-header-less');
        isOpen = !isOpen;
    });
})

containers.forEach((container, index)=>{
    container.addEventListener('mouseleave', ()=>{
        if(!isOpen) return;
        headers[index].classList.remove('header-less');
        containers[index].classList.toggle('container-header-less');
        isOpen = !isOpen;  
    });
})

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