// Task 1
const listArray = document.querySelectorAll("li.item");
console.log(`У списку ${listArray.length} категорії.`);
for (const list of listArray) {
  const itemCount = list.lastElementChild.children.length;
  const listTitle = list.firstElementChild.textContent;
  console.log(`Категорія: ${listTitle}\n Кількість елементів: ${itemCount}`);
}
// \n я знайшов на якомусь сайті, коли шукав як пренести рядок на новий рядок в консолі
// Task 2

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const ingredientsList = document.querySelector("#ingredients");
const items = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  return listItem;
});
ingredientsList.append(...items);
// Task 3
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listElement = document.querySelector("#gallery");

const imagesList = images.map(({ url, alt }) =>
    `<li>
    <img src="${url}" alt="${alt}" width="300">
    </li>`
);

listElement.insertAdjacentHTML("beforeend", imagesList);
// Task 4
let currentCount = 0;
const valueDisplay = document.querySelector("#value");

const decrement = function () {
    currentCount -= 1;
    valueDisplay.textContent = currentCount;
};

const increment = function () {
    currentCount += 1;
    valueDisplay.textContent = currentCount;
};

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);