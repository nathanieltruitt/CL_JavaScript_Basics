// Exercise 1: making variables
// using const by default unless I need to change the value later
const stringVariable = "Nathan";
const numberVariable = 1;
const booleanVariable = true;
const nullVariable = null;
let undefinedVariable = undefined;
const objectVariable = {
  name: "Nathan Truitt",
  password: "hello123",
};
const arrayVariable = [1, 2, 3];
let noDeclarationVariable = undefined;

// Excercise 2: create li items on html page
const unorderedList = document.querySelector("ul");

const foodItems = [
  {
    name: "tomato",
    price: 2.0,
  },
  {
    name: "orange",
    price: 3.0,
  },
  {
    name: "pineapple",
    price: 4.0,
  },
];

for (foodItem of foodItems) {
  const listItem = document.createElement("li");
  listItem.innerText = `${foodItem.name}`;
  unorderedList.appendChild(listItem);
}

// Exercise 3:
function arrayOfMultiples(num, len) {
  let arr = [];
  for (let i = 1; i <= len; i++) {
    arr.push(num * i);
  }
  return arr;
}

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));
