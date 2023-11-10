const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email;
  const password = form.elements.password;

  const objUser = {};

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  objUser.email = email.value;
  objUser.password = password.value;

  console.log(objUser);

  form.reset();
}
