function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputSource = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');

let amount = 0;

function createBoxes(amount) {
  for (i = 0; i < inputSource; i++) {
    const newBox = `<div></div>`;
    divBoxes.insertAdjacentHTML(afterbegin, newBox)
    amount += newBox;
  }
}

createBtn.addEventListener('click', () => {
  const randomHexColor = getRandomHexColor();
  const addBox = createBoxes();
  addBox.style.backgroundColor = randomHexColor;
  addBox.style.fontSize = 30 + 10*i + 'px';
})

