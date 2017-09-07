/*
Return the lowest index at which a value (second argument) // should be inserted into an array (first argument) once it has been sorted. The returned value // should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) // should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) // should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.sort()
*/

function compareNums(a, b) {
    return a - b;
}

function getIndexToIns(arr, num) {
    var length = arr.length;
    var output = 0;

    arr = arr.sort(compareNums);

    if (num <= arr[0]) {
        output = 0;
    } else if (num > arr[length - 1]) {
        output = length;
    } else {
        for (var i = 1; i < length; i++) {
            if (num >= arr[i - 1] && num <= arr[i]) {
                output = i;
                break;
            }
        }
    }
    return output;
}



// Test
getIndexToIns([40, 60], 50); // should return 1
getIndexToIns([10, 20, 30, 40, 50], 35) // should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) // should return 2.
getIndexToIns([40, 60], 50) // should return 1.
getIndexToIns([3, 10, 5], 3) // should return 0.
getIndexToIns([5, 3, 20, 3], 5) // should return 2.
getIndexToIns([2, 20, 10], 19) // should return 2.
getIndexToIns([2, 5, 10], 15) // should return 3.