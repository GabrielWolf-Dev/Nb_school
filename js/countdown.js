import ConfettiGenerator from './confetti.js';

const daysContainer = document.querySelector('#days');
const hoursContainer = document.querySelector('#hours');
const minutesContainer = document.querySelector('#minutes');
const secondsContainer = document.querySelector('#seconds');
const countdownContainer = document.querySelector('.countdown');
const loading = document.querySelector('.birthday__loading');
const confettiCanvas = document.querySelector('#confettiAnimate');

const confettiAnimate = () => {
    const currentday = new Date().getDate();
    const dayAniversary = 22;

    if(currentday === dayAniversary){
        confettiCanvas.style.display = 'block';
        loading.classList.remove('birthday__loading');

        let confettiSettings = { 
            target: confettiCanvas,
        };
        let confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    }else {
        confettiCanvas.style.display = 'none';
        setTimeout(countdownDisplay, 1000);
    }
};

// Countdown
const getTimeUnit = unit => unit < 10 ? '0' + unit : unit;

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
    secondsContainer.textContent = getTimeUnit(seconds);
    minutesContainer.textContent = getTimeUnit(minutes);
    hoursContainer.textContent = getTimeUnit(hours);
    daysContainer.textContent =  getTimeUnit(days);
};

const updateCountdown = () => {
    const currentday = new Date().getDate();
    const dayAniversary = 22;
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

setInterval(updateCountdown, 1000);
confettiAnimate();