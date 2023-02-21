import "./scss/style.scss"

let isVisible = false;

window.toggleNavbar = function () {
    isVisible = !isVisible;
    const nav = document.querySelector('.header__nav-items');
    nav.style.display = isVisible ? "flex" : "none";
}