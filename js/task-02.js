const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");

let element = [];

for (const ingredient of ingredients) {
  const el = document.createElement("li");
  el.textContent = ingredient;
  el.className = "item";
  element.push(el);
}
list.append(...element);
