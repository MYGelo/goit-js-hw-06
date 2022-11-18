const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const newIngredients = ingredients
  .map(item => `<li class='item'>${item}</li>`)
  .join('');

ingredientsEl.innerHTML = newIngredients;

console.log(ingredientsEl);
