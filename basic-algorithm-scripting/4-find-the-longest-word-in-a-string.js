/*
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
String.length
*/

function findLongestWord(str) {
  var output = 0;
  str = str.split(" ");

  for (var i = 0; i < str.length; i++) {

    if (output < str[i].length) {
      output = str[i].length;
    }

  }
  return output;
}

findLongestWord("The quick brown fox jumped over the lazy dog");