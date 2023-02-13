let counterValue = 0;

const buttonDown = document.querySelector('[data-action="decrement"]');
const buttonUp = document.querySelector('[data-action="increment"]');
const btn = document.querySelector('button');

const buttonClickedUp = () => {
    console.log('btn clicked');
};

const buttonClickedDown = () => {
    console.log("click");
};

buttonDown.addEventListener('click', buttonClickedDown);

buttonUp.addEventListener('click', buttonClickedUp);

