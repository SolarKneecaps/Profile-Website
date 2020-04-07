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

// card turn interval
let cardContainer = document.querySelector('.main__card-container');
let turn = 0.5;

setInterval(handleTurn, 3500)

function handleTurn () {
    cardContainer.style.transform = `rotateY(${turn}turn)`;
    if(turn === 10){
        clearInterval(handleTurn);
        setInterval(handleTurn, 3500);
    }
    else{
        turn = turn + 0.5;
    }
}