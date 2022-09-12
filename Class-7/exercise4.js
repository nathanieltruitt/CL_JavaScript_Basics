const budgetArray = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];

function getBudgets(budgetList) {
  let budgetSum = 0;
  budgetArray.forEach((budget) => {
    budgetSum += budget.budget;
  });
  return budgetSum;
}

console.log(getBudgets(budgetArray));
