/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Remainder
*/

function sumFibs(num) {
  var fib1 = 1;
  var fib2 = 1;
  var cache = 0;
  var output = 1;

  while (fib2 <= num) {
    if (fib2 % 2 !== 0) {
      output += fib2;
    }

    cache = fib2;
    fib2 = fib1 + fib2;
    fib1 = cache;
  }

  console.log(output);
  return output;
}

// sumFibs(10);
// sumFibs(4);

sumFibs(1); // should return a number.
sumFibs(1000); // should return 1785.
sumFibs(4000000); // should return 461373.
sumFibs(4); // should return 5.
sumFibs(75024); // should return 60696.
sumFibs(75025); // should return 135721.
