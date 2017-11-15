/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Roman Numerals
Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join()
*/


function convertToRoman(input) {
    var output = "";
    var romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var romanCharacters = Object.keys(romanNumerals);
    var char = "";
    var number = 0;

    for (var i = 0; i <= romanCharacters.length; i++) {
        char = romanCharacters[i];
        number = romanNumerals[romanCharacters[i]];

        while (input - number >= 0) {
            output += char;
            input -= number;
        }
    }

    return output;
}

/* Test */
// convertToRoman(2); // should return "II".
// convertToRoman(3); // should return "III".
// convertToRoman(4); // should return "IV".
// convertToRoman(5); // should return "V".
// convertToRoman(9); // should return "IX".
// convertToRoman(12); // should return "XII".
// convertToRoman(16); // should return "XVI".
// convertToRoman(29); // should return "XXIX".
// convertToRoman(44); // should return "XLIV".
// convertToRoman(45); // should return "XLV"
// convertToRoman(68); // should return "LXVIII"
// convertToRoman(83); // should return "LXXXIII"
// convertToRoman(97); // should return "XCVII"
// convertToRoman(99); // should return "XCIX"
// convertToRoman(500); // should return "D"
// convertToRoman(501); // should return "DI"
// convertToRoman(649); // should return "DCXLIX"
// convertToRoman(798); // should return "DCCXCVIII"
// convertToRoman(891); // should return "DCCCXCI"
// convertToRoman(1000); // should return "M"
// convertToRoman(1004); // should return "MIV"
// convertToRoman(1006); // should return "MVI"
// convertToRoman(1023); // should return "MXXIII"
// convertToRoman(2014); // should return "MMXIV"
// convertToRoman(3999); // should return "MMMCMXCIX"