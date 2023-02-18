const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// using document.createElement

const ingredientList = [];

for (const ingredient of ingredients) {
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;
  liItem.classList.add('item');
  ingredientList.push(liItem);
}

const ulList = document.querySelector("#ingredients");
ulList.append(...ingredientList);
// console.log(ulList);

// using innerHTML
// const ingredientList = document.querySelector("#ingredients");
// const addItems = ingredients
//   .map((ingredients) => `<li class="item">${ingredients}</li>`)
//   .join(" ");
//   console.log(addItems);

//   ingredientList.innerHTML = addItems;
//   console.log(ingredientList);
