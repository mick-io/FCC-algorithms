/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
*/

function fearNotLetter(str) {
  var index = str.charCodeAt(0);
  var last = str.charCodeAt(str.length - 1);
  var output = "";

  while (index < last) {
    var value = String.fromCharCode(index);

    if (str.indexOf(value) < 0) {
      output += value;
    }

    index++;
  }

  return output || undefined;
}

fearNotLetter("abce");

// fearNotLetter("abce"); // should return "d".
// fearNotLetter("abcdefghjklmno"); // should return "i".
// fearNotLetter("bcd"); // should return undefined.
// fearNotLetter("yz"); // should return undefined.
