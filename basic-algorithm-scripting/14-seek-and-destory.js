/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.filter()
*/

function destroyer(arr, nums) {
  for (var i = 1; i <= arguments.length; i++) {
    var value2Remove = arguments[i];
    arr = arr.filter(function(value) {
      return value !== value2Remove;
    });
  }
  return arr;
}

// Test
destroyer([1, 2, 3, 1, 2, 3], 2, 3); // should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // should return [1].
destroyer([2, 3, 2, 3], 2, 3); // should return [].
destroyer(["tree", "hamburger", 53], "tree", 53); // should return ["hamburger"].
