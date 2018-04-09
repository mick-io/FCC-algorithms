/*
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()
*/

function steamrollArray(arr) {
  var outputArr = [];
  var pushNestedContents = function(arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
      outputArr.push(arr[i]);
    }
  };

  for (var i = 0, len = arr.length; i < len; i++) {
    var value = arr.shift();
    if (Array.isArray(value)) {
      pushNestedContents(value);
    } else {
      outputArr.push(value);
    }
  }

  var hasNoNestedArrays = outputArr.every(function() {
    return Array.isArray(value) === false;
  });

  return hasNoNestedArrays ? outputArr : steamrollArray(outputArr);
}

steamrollArray([[["a"]], [["b"]]]); // should return ["a", "b"];
steamrollArray([1, [2], [3, [[4]]]]); // should return [1, 2, 3, 4];
steamrollArray([1, [], [3, [[4]]]]); // should return [1, 3, 4];
steamrollArray([1, {}, [3, [[4]]]]); // should return [1, {}, 3, 4];
