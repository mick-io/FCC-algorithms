/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Permutations
RegExp
*/

function permAlone(str) {
  var indices = str.length;
  var letters = new Set(str.split("")).size;
  var permutations = calcPermutations(indices, letters);

  debugger;
}

function calcPermutations(objects, samples) {
  return factorial(objects) / factorial(objects - samples);
}

function factorial(num) {
  var output = 1;
  for (var i = num; i > 1; i--) {
    output *= i;
  }
  return output;
}

/* TEST */
permAlone("aab"); // should return 2.
// permAlone("aaa"); // should return 0.
permAlone("aabb"); // should return 8.
permAlone("abcdefa"); // should return 3600.
permAlone("abfdefa"); // should return 2640.
// permAlone("zzzzzzzz"); // should return 0.
// permAlone("a"); // should return 1.
// permAlone("aaab"); // should return 0.
permAlone("aaabb"); // should return 12.
