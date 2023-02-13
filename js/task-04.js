let counterValue = 0;

const buttonDown = document.querySelector('[data-action="decrement"]');
const buttonUp = document.querySelector('[data-action="increment"]');

let display = document.getElementById('value');

const buttonClickedUp = () => {
    counterValue++
    display.textContent = counterValue;
};

const buttonClickedDown = () => {
    counterValue--
    display.textContent = counterValue;
};

buttonDown.addEventListener('click', buttonClickedDown);

buttonUp.addEventListener('click', buttonClickedUp);

