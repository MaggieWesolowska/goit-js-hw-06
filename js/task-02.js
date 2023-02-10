const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector("#ingredients");

const addItems = ingredients
  .map((ingredients) => `<li class="item">${ingredients}</li>`)
  .join(" ");

  console.log(addItems);

  ingredientList.innerHTML = addItems;
  console.log(ingredientList);

