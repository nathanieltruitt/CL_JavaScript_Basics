// Exercise 3
function product(numbers) {
  let finalAnswer = 0;
  for (num of numbers) {
    finalAnswer += num[0] * num[1];
  }
  return finalAnswer;
}

function productImproved(numbers) {
  let finalAnswer = 0;
  for (num of numbers) {
    // method with loop
    // let shortAnswer = num[0];
    // for (let i = 1; i < num.length; i++) {
    //   shortAnswer = shortAnswer * num[i];
    // }
    // finalAnswer += shortAnswer;
    let iterator = 1;
    let nextNumber = num[0];
    function multiplyNums(array) {
      if (iterator < array.length) {
        nextNumber = nextNumber * array[iterator];
        iterator += 1;
        return multiplyNums(array);
      } else {
        return nextNumber;
      }
    }
    finalAnswer += multiplyNums(num);
  }
  return finalAnswer;
}

console.log(
  productImproved([
    [3, 4],
    [5, 6],
    [7, 8],
  ])
);
