/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Roman Numerals

    Array.prototype.splice()

    Array.prototype.indexOf()

    Array.prototype.join()
*/

function convertToRoman(num) {
  var output = "";
  var numArray = num
    .toString()
    .split("")
    .reverse();

  for (var i = 0; i < numArray.length; i++) {
    numArray[i] = parseInt(numArray[i]);
  }

  return output;
}

function addNumerals(options) {
  var input = options.input || 0;
  var largeNumeral = options.largeNumeral || "";
  var smallNumeral = options.smallNumeral || "";
  var output = "";

  while (input) {
    if (input !== 4) {
      output += input > 5 ? largeNumeral : smallNumeral;
    } else {
      output += smallNumeral + largeNumeral;
    }
    input--;
  }

  return output;
}

convertToRoman(36);
