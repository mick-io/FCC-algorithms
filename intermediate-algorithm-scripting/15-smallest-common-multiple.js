/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Smallest Common Multiple
*/


function smallestCommons(arr) {
<<<<<<< HEAD
    var smallerNumber = arr[0] > arr[1] ? arr[1] : arr[0];
    var largerNumber = smallerNumber === arr[0] ? arr[1] : arr[0];
    var index = smallerNumber;
    var output = 0;

    while (index > largerNumber) {
        output = index * index + 1;
        index++;
    }

    output = output / 2;

    console.log(output);

    return output;
=======
  var largestNumber = 0;
  var smallestNumber = 0;
  var multiple = 0;
  var multiplier = 2;
  var isLcm = false;

  if (arr[0] > arr[1]) {
    largestNumber = arr[0];
    smallestNumber = arr[1];
  } else {
    largestNumber = arr[1];
    smallestNumber = arr[0];
  }

  do {
    multiple = largestNumber * multiplier;
    multiplier++;
  } while (!checkIfLcm(smallestNumber, largestNumber, multiple));

  return multiple;
}


function checkIfLcm(smallestNumber, largestNumber, multiple) {
  var isLcm = true;

  for (var i = smallestNumber; i < largestNumber; i++) {
    if (multiple % i !== 0) {
      isLcm = false;
      break;
    }
  }
  return isLcm;
>>>>>>> 33f6f53f56c085f0a02d017dfb895878379cac30
}

smallestCommons([1, 5]) // should return 60.
smallestCommons([5, 1]) // should return 60.
smallestCommons([1, 13]) // should return 360360.
smallestCommons([23, 18]) // should return 6056820.