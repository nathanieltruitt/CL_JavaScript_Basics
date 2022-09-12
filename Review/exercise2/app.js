// running in node

function numofTrues(array) {
  let trues = array.includes(true) ? array.filter((i) => i === true) : 0;
  if (typeof trues === "object") trues = trues.length;
  return trues;
}

console.log(numofTrues([false, false, false]));
console.log(numofTrues([true, false, false, true]));
console.log(numofTrues([true, true, true, false]));
console.log(numofTrues([]));
