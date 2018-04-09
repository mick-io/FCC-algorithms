/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.replace()
String.prototype.toLowerCase()
*/

function palindrome(str) {
  var output = true;
  str = str.replace(/[^0-9a-z]/gi, "").toLowerCase();

  for (var i = 0, i2d2 = str.length - 1; i <= i2d2; i++, i2d2--) {
    var element = str[i];
    var element2 = str[i2d2];

    if (element !== element2) {
      output = false;
      break;
    }
  }
  return output;
}

palindrome("_eye");
