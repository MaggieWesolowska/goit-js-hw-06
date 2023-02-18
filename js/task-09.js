const bodyColor = document.body; // or: document.querySelector('body');
const spanColor = document.querySelector('.color');
const button = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

button.addEventListener('click', () => {
  const randomHexColor = getRandomHexColor();
  spanColor.textContent = randomHexColor;
  bodyColor.style.backgroundColor = randomHexColor;
});