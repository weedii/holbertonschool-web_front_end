const { performance } = require("perf_hooks");

let count = 0;
function countPrimeNumbers() {
  for (let i = 2; i <= 100; i++) {
    let check = 1;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        check = 0;
        break;
      }
    }
    if (check == 1) {
      count += 1;
    }
  }
  return count;
}

let start = performance.now();

for (let i = 1; i <= 100; i++) {
  countPrimeNumbers();
}

let timeTaken = performance.now() - start;

console.log(
  "Execution time of printing countPrimeNumbers was " +
    timeTaken +
    " milliseconds."
);
