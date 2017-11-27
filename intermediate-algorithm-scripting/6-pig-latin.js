/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()
*/

function translatePigLatin(str) {
    var vowelIndex = firstVowelIndex(str);
    var frontSlice = str.slice(vowelIndex, str.length);
    var backSlice = str.slice(0, vowelIndex);
    var suffix = vowelIndex === 0 ? "way" : "ay";

    console.log(frontSlice + backSlice + suffix);
    return frontSlice + backSlice + suffix;
}

function firstVowelIndex(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var len = str.length;
    var i = 0;
    var output = -1;
    var char = "";

    while (i < len) {
        char = str.charAt(i);
        if (vowels.indexOf(char) > -1) {
            output = i;
            break;
        }
        i++;
    }
    return output;
}

translatePigLatin("consonant");

translatePigLatin("california") // should return "aliforniacay".
translatePigLatin("paragraphs") // should return "aragraphspay".
translatePigLatin("glove") // should return "oveglay".
translatePigLatin("algorithm") // should return "algorithmway".
translatePigLatin("eight") // should return "eightway".