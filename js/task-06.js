const inputText = document.querySelector("input#validation-input");
const inputValidColor = document.querySelector("input#validation-input.valid");
const validLength = parseInt(inputText.getAttribute("data-length"));
console.log(inputText);
inputText.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === validLength) {
    console.log("OK");
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
  } else {
    console.log("Please enter 6 symbols!");
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  }
});
