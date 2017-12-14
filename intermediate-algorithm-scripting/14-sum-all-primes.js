/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops
Array.prototype.push()
*/



function sumPrimes(num) {
    var output = 0;

    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) {
            output += i;
        }
    }

    console.log(output);
    return output;
}

function isPrime(value) {
    var output = true;

    for (var i = 2; i < value; i++) {
        if (value % i === 0) {
            output = false;
            break;
        }
    }

    return output;
}

sumPrimes(10) // should return a number.
sumPrimes(10) // should return 17.
sumPrimes(977) // should return 73156.