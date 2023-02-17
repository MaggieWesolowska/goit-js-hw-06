function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputSource = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');

function createBoxes(amount) {
  let boxCount = 0;
  for (i = 0; i < amount; i++) {
    const randomColor = getRandomHexColor();
    const newBox = `<div></div>`;
    newBox.style.backgroundColor = randomColor;
    newBox.style.fontSize = 30 + 10*i + 'px';
    divBoxes.insertAdjacentHTML(afterbegin, newBox);
    boxCount += addBox;
  }
};

createBtn.addEventListener('click', () => {
  const addBox = createBoxes();
  addBox = boxCount;
});

