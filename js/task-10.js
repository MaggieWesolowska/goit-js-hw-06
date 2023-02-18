function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6,0)}`;
}
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const container = document.querySelector('#boxes');

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const randomColor = getRandomHexColor();
    const newBox = document.createElement('div');
    newBox.style.backgroundColor = randomColor;
    const newBoxSize = 30 + 10*i + 'px';
    newBox.style.width = newBoxSize;
    newBox.style.height = newBoxSize;
    container.append(newBox);
  }
};
//using innerHTML:
// divBox.innerHTML += `<div style="background-color: ${getRandomHexColor() or: randomColor}; width: ${newBoxSize}; height: ${newBoxSize}"></div>`;

createBtn.addEventListener('click', () => {
  let counter = Number(input.value); // or: +(input.value);
  createBoxes(counter);
});

destroyBtn.addEventListener('click', () => {
  container.innerHTML = '';
});