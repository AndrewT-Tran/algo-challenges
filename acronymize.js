/*
    Acronyms

    Create a function that, given a string, returns the string’s acronym
    (first letter of each word capitalized).
    Do it with .split first if you need to, then try to do it without
    split MDN Document Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    Try to account for 'edge cases' in your function! Such as if we split the words and potentially get an empty string.
*/

const str1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
  let newStr = str.split(" "); // this will create a an array words seoerated
  // console.log("newStr: ", newStr)
  let newString = [];
  let ACRO = [];
  for (let i = 0; i < newStr.length; i++) {
    // iterates through each newStr aka each word so we can get the first of each value in array
    // console.log("newStr[i] - ", newStr[i]);
    ACRO.push(newStr[i].charAt(0)); //pushes the first letter in a new array
    // console.log("ACRO - ", ACRO);
    let string = ACRO.toString(); //creates string from array
    newString = string.split(",").join("").toUpperCase(); // trims whitespace and joins and uppercase
    // console.log("string", string);
    // console.log("newString", newString);
  }
  console.log(newString);
  return newString;
}
acronymize(str1);
acronymize(str2);
acronymize(str3);
acronymize(str4);
/*****************************************************************************/
