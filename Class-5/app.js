// Grab elements from the DOM
const overlay = document.querySelector(".overlay");
const input = document.querySelector("#url");
const button = document.querySelector("button");
const linkContainer = document.querySelector(".link-container");
const apiURL = "https://opengraph.io/api/1.1/site";
// API token to OpenGraph API.
// using another js file to store this information locally outside of github. Look at line 19 on index.html
const apiKey = data.token;
let savedItems = localStorage.getItem("linksData") || [];
if (typeof savedItems === "string") {
  savedItems = JSON.parse(savedItems);
  let innerHTML = "";
  for (item of savedItems) {
    innerHTML += item;
  }
  linkContainer.innerHTML = innerHTML;
}

// functions
function toggleOverlay(event) {
  if (event.type === "focusin") {
    overlay.style.opacity = 0.5;
  } else {
    overlay.style.opacity = 0;
  }
}

function createItem() {
  fetch(
    `${apiURL}/${encodeURIComponent(
      input.value
    )}?accept_lang=auto&app_id=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const newItem = `<div class="link-item"><img src="${data.hybridGraph.image}" alt="${data.hybridGraph.title}" /><h2><a href="${input.value}">${data.hybridGraph.title}</a></h2></div>`;
      savedItems.push(newItem);
      saveItems();
      linkContainer.innerHTML = linkContainer.innerHTML + newItem;
    });

  //   const newItem = `<div class="link-item"><img src="" alt="" /><h2>${input.value}</h2></div>`;
  // savedItems.push(newItem);
  // saveItems();
  // linkContainer.innerHTML = linkContainer.innerHTML + newItem;
}

function saveItems() {
  localStorage.setItem("linksData", JSON.stringify(savedItems));
}

// event listeners
input.addEventListener("focusin", toggleOverlay);
input.addEventListener("focusout", toggleOverlay);
button.addEventListener("click", createItem);
