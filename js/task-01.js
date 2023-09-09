const categoriesList = document.querySelector("#categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItems.length}`);


function countCategoryItems(category) {
  const categoryTitle = category.querySelector("h2").textContent;
  const itemsList = category.querySelectorAll("ul li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemsList.length}`);
}

categoryItems.forEach(countCategoryItems);