/*
  Acronyms
  Create a function that, given a string, returns the string’s acronym
  (first letter of each word capitalized).
  Do it with .split first if you need to, then try to do it without
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
// function acronymize(str) {
// str = str.split(" ");
// var newStr = "";
// for (var i = 0; i < str.length; i++) {
//   newStr += str[i][0].toUpperCase();
// }
// return newStr;
// }

//without split method

function acronymize(str) {
  var newStr = "";
  newStr += str[0].toUpperCase();
  for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      newStr += str[i + 1].toUpperCase();
    }
  }
  return newStr;
}

console.log(acronymize(str1));

console.log(acronymize(str2));
//======================
/*
    Given an arr and a separator string, output a string of every item in the array separated by the separator.

  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1_1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2_1 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3_1 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4_1 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5_1 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
function join(arr, separator) {
  str = "";
  for (var i = 0; i < arr.length; i++) {
    str += arr[i] + separator;
    if (i != arr.length - 1) {
    }
  }
  return str;
}

console.log(join(arr1, separator1));
