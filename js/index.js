import linksListeners from './functions/smoothScroll.js';
import menuMobile from './functions/menuMobile.js';
import countdown from './functions/countdown.js';

window.onload = () => {
    countdown();
    menuMobile();
    linksListeners();
}