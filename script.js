const menu = document.querySelector('#mobile-menu');

const mobileMenu = () => {
    menu.classList.toggle('active-mobile-nav');
};

menu.addEventListener('click', mobileMenu);