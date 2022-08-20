let burger = document.getElementsByClassName('header__burger-menu')[0];
let header = document.getElementsByClassName('header')[0];
burger.addEventListener("click", function(e) {
    burger.classList.toggle('header__burger-menu_active')
    header.classList.toggle('header_active')
}, false);
