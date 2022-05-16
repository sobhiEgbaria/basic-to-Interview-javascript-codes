const biggestNumber = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  } else {
    if (b > c) {
      return b;
    }
    return c;
  }
};

console.log(biggestNumber(1, 4, 1));
