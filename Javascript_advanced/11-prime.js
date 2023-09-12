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
let interations = 100;
let completedIterations = 0;

function calculation() {
  for (let i = 1; i <= 10 && completedIterations < interations; i++) {
    countPrimeNumbers();
    completedIterations += 1;
  }

  if (completedIterations < interations) {
    setTimeout(calculation, 0);
  } else {
    let timeTaken = performance.now() - start;
    console.log(
      "Execution time of calculating prime numbers 100 times was " +
        timeTaken +
        " milliseconds."
    );
  }
}

calculation();
