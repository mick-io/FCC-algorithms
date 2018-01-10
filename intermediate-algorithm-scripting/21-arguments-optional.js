/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Arguments object
*/

function addTogether() {
    var firstArg = arguments[0];
    var secondArg = arguments[1];

    var condition1 = typeof firstArg === "number";
    var condition2 = typeof secondArg === "number";
    var condition3 = typeof secondArg === undefined;

    var noSecondArgFunc = function(value){
        return value + firstArg;
    }

    if (condition1 && condition2) {
        return firstArg + secondArg;
    }

    if (condition1 && condition3) {
        return noSecondArgFunc;
    }
    return undefined;
}



addTogether(2, 3) // should return 5.
// addTogether(2)(3) // should return 5.
addTogether("http://bit.ly/IqT6zt") // should return undefined.
addTogether(2, "3") // should return undefined.
// addTogether(2)([3]) // should return undefined.