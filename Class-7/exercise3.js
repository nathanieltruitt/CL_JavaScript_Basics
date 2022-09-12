function sortDrinks(drinkList) {
  return drinkList.sort((a, b) => a.price - b.price);
}

drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
];

const sortedDrinks = sortDrinks(drinks);
console.log(sortedDrinks);
