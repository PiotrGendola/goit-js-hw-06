function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body");
const viewColor = document.querySelector("span.color");
const buttonChangeColor = document.querySelector("button.change-color");

viewColor.textContent = getRandomHexColor();
bodyColor.style.backgroundColor = viewColor.textContent;

buttonChangeColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  viewColor.textContent = color;
  bodyColor.style.backgroundColor = color;
});
