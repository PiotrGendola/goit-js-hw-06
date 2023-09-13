const registerForm = document.querySelector("form.login-form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (login === "" || password === "") {
    return console.log("Proszę wypełnić wszystkie pola!");
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
});
