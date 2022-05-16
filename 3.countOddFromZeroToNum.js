const countOddFromZeroToNum = (num) => {
  let counter = 0;
  let numbers = [];

  for (let i = 0; i <= num; i++) {
    if (i % 2 != 0) {
      counter++;
      numbers.push(i);
    }
  }
  const res = `total num is ${counter} and the number is ${numbers}`;
  return res;
};

console.log(countOddFromZeroToNum(10));
