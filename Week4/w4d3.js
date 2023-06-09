/*
    String Encode
    You are given a string that may contain sequences of consecutive characters.
    Create a function to shorten a string by including the character,
    then the number of times it appears.

    If final result is not shorter (such as "bb" => "b2" ),
    return the original string.
  */

const { encode } = require("punycode");

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc"; // b2c2
const expected4 = "bbcc";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
function encodeStr(str) {
  // code here
  var newStr = "";
  var count = 1;
  if (str == "") {
    return str;
  }
  for (var i = 0; i < str.length; i++) {
    let now = str[i];
    let next = str[i + 1];
    if (now == next) {
      count++;
      //   console.log("now: " + now, "next: " + next)
    } else {
      newStr += str[i] + count;
      count = 1;
      //   console.log("newStr: ", newStr);
    }
  }
  if (newStr.length < str.length) {
    // sanity check
    // console.log("newStr: " + newStr, "str: " + str)
    // newstr should be shorter than original because it gets condensed
    return newStr;
  } else {
    return str;
  }
}
console.log(encodeStr(str1));
console.log(encodeStr(str2));
console.log(encodeStr(str3));
console.log(encodeStr(str4));
/*****************************************************************************/
