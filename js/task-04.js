let counterValue = 0;

const button = document.querySelectorAll("button");

const value = document.querySelector("span#value");

button[0].addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

button[1].addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
