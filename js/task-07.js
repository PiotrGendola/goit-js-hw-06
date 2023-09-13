const size = document.querySelector("input#font-size-control");
const font = document.querySelector("span#text");

size.addEventListener("input", (event) => {
  font.style.fontSize = `${event.currentTarget.value}px`;
});
