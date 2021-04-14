import ConfettiGenerator from './confetti.js';
import linksListeners from './smoothScroll.js';
import menuMobile from './menuMobile.js';

const daysContainer = document.querySelector('#days');
const hoursContainer = document.querySelector('#hours');
const minutesContainer = document.querySelector('#minutes');
const secondsContainer = document.querySelector('#seconds');
const countdownContainer = document.querySelector('.countdown');
const loading = document.querySelector('.birthday__loading');
const confettiCanvas = document.querySelector('#confettiAnimate');
const phaseBirthday = document.querySelector('#phaseBirthday');
const confettiContainer = document.querySelector('.confetti');

const currentday = new Date().getDate();
const dayAniversary = 22; //22

// Confetti Animation:
const confettiAnimate = () => {
    const currentYear = new Date().getFullYear();
    const yearBirthday = '1935';
    const currentMonth = new Date().getMonth() + 1;
    const monthBirthday = 4;
    const age = currentYear - yearBirthday;

    if(currentday === dayAniversary && currentMonth === monthBirthday){
        confettiCanvas.style.display = 'block';
        confettiContainer.style.display = 'block';
        loading.classList.remove('birthday__loading');
        phaseBirthday.textContent = `${age} anos formando alunos protagonistas`;

        let confettiSettings = {
            target: confettiCanvas,
        };
        let confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    } else {
        confettiCanvas.style.display = 'none';
        setTimeout(countdownDisplay, 1000);
    }
};

// Countdown:
const getTimeUnit = unit => unit < 10 ? '0' + unit : unit;

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
    secondsContainer.textContent = getTimeUnit(seconds);
    minutesContainer.textContent = getTimeUnit(minutes);
    hoursContainer.textContent = getTimeUnit(hours);
    daysContainer.textContent =  getTimeUnit(days);
};

const updateCountdown = () => {
    let year = new Date().getFullYear();

    if(currentday >= dayAniversary){
        year =  new Date().getFullYear() + 1;
    }
    
    const birthday = new Date(`April ${dayAniversary + 1} ${year} 00:00:00`);
    const currentYear = new Date();
    const difference = birthday - currentYear;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    insertCountdownValues({ days, hours, minutes, seconds });
};

const countdownDisplay = () => {
    countdownContainer.style.display = 'flex';
    loading.classList.remove('birthday__loading');
};

// Call Functions:
setInterval(updateCountdown, 1000);
confettiAnimate();
linksListeners();
menuMobile();