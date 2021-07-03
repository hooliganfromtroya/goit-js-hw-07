const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsContainerEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const ingredientItemEl = document.createElement("li");
  ingredientItemEl.textContent = ingredient;
  return ingredientItemEl;
});

console.log(elements);
ingredientsContainerEl.append(...elements);
