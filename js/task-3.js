const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const inputHandler = (event) => {
  const value = event.currentTarget.value.trim();
  output.textContent = value !== "" ? value : "Anonymous";
};

input.addEventListener("input", inputHandler);
