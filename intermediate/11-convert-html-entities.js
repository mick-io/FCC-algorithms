/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:

RegExp
HTML Entities
String.prototype.replace()
*/

function convertHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

convertHTML("Dolce & Gabbana"); // should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos"); // should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve"); // should return Sixty &​gt; twelve.
// eslint-disable-next-line
convertHTML('Stuff in "quotation marks"'); // should return Stuff in &​quot;quotation marks&​quot;
convertHTML("Schindler's List"); // should return Schindler&​apos;s List.
convertHTML("<>"); // should return &​lt;&​gt;.
convertHTML("abc"); // should return abc.
