const numFactorial = (num) => {
  let N = 1;

  for (let i = 1; i <= num; i++) {
    N *= i;
  }
  return N;
};

console.log(numFactorial(5));
