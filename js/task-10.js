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
//using innerHTML: -->
// divBox.innerHTML += `<div style="background-color: ${getRandomHexColor() or: randomColor}; width: ${newBoxSize}; height: ${newBoxSize}"></div>`;

createBtn.addEventListener('click', () => {
  let counter = Number(input.value); // or: +(input.value);
  createBoxes(counter);
});

destroyBtn.addEventListener('click', () => {
  container.innerHTML = '';
});

// using declarative approach: -->
// const qs = (s) => document.querySelector(s);
// const boxes = qs('#boxes');
// const createBtn = qs('button[data-create');
// const destroyBtn = document.querySelector('button[data-destroy]');
// const input = qs('#controls input');

// const createBoxes = amount => {
//   let boxesArray = [];
//   for (let i = 0; i <= amount; i++) {
//     /* rest as above */
//   }
// }