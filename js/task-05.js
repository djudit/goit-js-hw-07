const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

const handleInput = (event) => {
  inputName.value = inputName.value.trim();
  if (inputName.value === "") {
    spanName.textContent = "Anonymous";
  } else {
    spanName.textContent = event.currentTarget.value;
  }
};

inputName.addEventListener("input", handleInput);
