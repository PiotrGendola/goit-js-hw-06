const size = document.querySelector("input#font-size-control");
const font = document.querySelector("span#text");

font.style.fontSize = `${size.value}px`;

size.addEventListener("input", (event) => {
  font.style.fontSize = `${event.currentTarget.value}px`;
});
