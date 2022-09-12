function makePlusFunction(num) {
  return function (num2) {
    return num + num2;
  };
}

const plusFive = makePlusFunction(5);
console.log(plusFive(20));

const plusTen = makePlusFunction(10);
console.log(plusTen(56));
