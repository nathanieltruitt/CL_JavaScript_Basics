// retrieve elements from the DOM
const button = document.querySelector("button");

// functions
function changeToRandomColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
}

// event listeners
button.addEventListener("click", changeToRandomColor);
