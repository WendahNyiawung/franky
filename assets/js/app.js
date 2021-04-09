// scripts for the mobile navigator
let subNavToggler = document.querySelector('.academics');
let subNav = document.querySelector('.sub-menu');

subNavToggler.addEventListener('focusin', () => {
    subNav.style.height = '720px';
    // subNav.style.boxShadow = 'none';
});
subNavToggler.addEventListener('focusout', (e) => {
    e.preventDefault();
    subNav.style.height = '0';
});

let headerNav = document.querySelector('.header-nav');
let NavToggler = document.querySelector('.navbar-toggler');
let darkOverlay = document.querySelector('.dark-overlay');

NavToggler.addEventListener('click', () => {
    headerNav.classList.toggle('show');
    darkOverlay.classList.toggle('show');
    NavToggler.classList.toggle('show');
});
darkOverlay.addEventListener('click', () => {
    headerNav.classList.toggle('show');
    darkOverlay.classList.toggle('show');
    NavToggler.classList.toggle('show');
});

// ANIMATE HEADER ON SCROLL
const pageHeader = document.querySelector('.home-header');
window.addEventListener('scroll', () => {
    const pagePosition = window.scrollY + pageHeader.getBoundingClientRect().top;
    if (pagePosition > 56) {
        pageHeader.classList.add('scroll');
    } else {
        pageHeader.classList.remove('scroll');
    }

});