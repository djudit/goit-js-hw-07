const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

function createProducts(arr) {
  const markup = arr.map((ingredient) => {
    const itemElem = document.createElement("li");
    itemElem.textContent = ingredient;

    itemElem.classList.add("item");
    return itemElem;
  });
  listIngredients.append(...markup);
}
createProducts(ingredients);

// AI-mentor
// const listIngredients = document.querySelector("#ingredients");

// function createProducts(arr, container) {
//   const fragment = document.createDocumentFragment(); // Створюємо фрагмент
//   arr.forEach((ingredient) => {
//     const itemElem = document.createElement("li");
//     itemElem.textContent = ingredient; // Встановлюємо текст елемента
//     itemElem.classList.add("item"); // Додаємо клас
//     fragment.append(itemElem); // Додаємо елемент до фрагменту
//   });
//   container.append(fragment); // Вставляємо фрагмент в контейнер
// }

// createProducts(ingredients, listIngredients);
