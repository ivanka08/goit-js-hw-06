const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
const listItemElements = [];

ingredients.forEach((ingredient) => {

  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");

  listItemElements.push(listItem);
});

ingredientsList.append(...listItemElements);

