/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Comparison Operators
*/

function largestOfFour(arr) {
    var compare0 = 0;
    var compare1 = 0;
    var compare2 = 0;
    var compare3 = 0;
    var output;

    for (var i = 0; i < 4; i++) {
        compare0 += arr[0][i];
        compare1 += arr[1][i];
        compare2 += arr[2][i];
        compare3 += arr[3][i];
    }

    function findLargest(){
        
    }

    return output;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);