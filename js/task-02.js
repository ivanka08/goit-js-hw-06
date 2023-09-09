const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const listItem = document.createElement("li");
listItem.textContent = ingredients;
listItem.classList.add("item");

ingredientsList.append(listItem);