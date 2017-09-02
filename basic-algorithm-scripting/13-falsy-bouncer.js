/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.prototype.filter()
*/


function bouncer(arr) {
    for (var i = 0; i < arr.length; i++) {
        var iteration = arr[i];
        if (!iteration) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

// Test
bouncer([7, "ate", "", false, 9]) // should return [7, "ate", 9].
bouncer(["a", "b", "c"]) // should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) // should return [].
bouncer([1, null, NaN, 2, undefined]) // should return [1, 2].