function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes();
  let initialSize = 30;
  let colors = [];
  let items = [];

  for (let i = 0; i < amount; i++) {
    let color = getRandomHexColor();
    if (!colors.includes(color)) {
      colors.push(color);
    } else {
      i--;
    }
  }

  for (let i = 0; i < amount; i++) {
    const element = document.createElement("div");
    element.style.backgroundColor = colors[i];
    element.style.width = `${initialSize}px`;
    element.style.height = `${initialSize}px`;
    items.push(element);
    initialSize += 10;
  }

  boxes.append(...items);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector(`[type="number"]`);

createBtn.addEventListener("click", (event) => {
  if (input.value >= 1 && input.value <= 100) {
    createBoxes(input.value);
  }
});

destroyBtn.addEventListener("click", (event) => {
  destroyBoxes();
});
