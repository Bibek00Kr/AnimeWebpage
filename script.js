document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-closed');
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.navigation');

    registerLink.addEventListener('click', (event) => {
        event.preventDefault();
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', (event) => {
        event.preventDefault();
        wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', (event) => {
        event.preventDefault();
        wrapper.classList.add('active-popup');
    });

    iconClose.addEventListener('click', (event) => {
        event.preventDefault();
        wrapper.classList.remove('active-popup');
    });

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });
});
