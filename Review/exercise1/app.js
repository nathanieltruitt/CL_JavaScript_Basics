button = document.querySelector("button");

function changeColor() {
  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}

button.addEventListener("click", changeColor);
