const inputSymbols = document.querySelector("#validation-input");
console.dir(inputSymbols);

inputSymbols.addEventListener("input", handleInput);

function handleInput(event) {
  // event.preventDefault();
  if (
    event.currentTarget.value.length !==
    Number.parseInt(inputSymbols.dataset.length)
  ) {
    inputSymbols.classList.add("invalid");
  } else {
    inputSymbols.classList.remove("invalid");
    inputSymbols.classList.add("valid");
  }

  // console.log(event.currentTarget.value.length);
  console.log(inputSymbols.dataset.length);
}

// inputSymbols.addEventListener("input", handleInput);
// inputSymbols.addEventListener("focus", handleInput);
// inputSymbols.addEventListener("blur", handleInput);
