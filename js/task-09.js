const bodyColor = document.qetElementByTagName(body);
const randomColor = document.querySelector('.color');
const button = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener('click', (getRandomHexColor) => {
  bodyColor === randomColor;
})

