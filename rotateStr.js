/* 
    String: Rotate String

    Create a standalone function that accepts a string and an integer,
    and rotates the characters in the string to the right by that given
    integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/*
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */
function rotateStr(str, amnt) {
  amnt = amnt % str.length; // in case the amnt is greater than the length of the string
  if (amnt == 0) {        // if the amnt is 0, return the string
    return str;     
  } else {
    return str.slice(-amnt) + str.slice(0, str.length - amnt);  // slice the string from the end to the amnt and concatenate it to the slice from the beginning to the length of the string minus the amnt
  }
}

console.log(rotateStr(str, rotateAmnt1));
console.log(rotateStr(str, rotateAmnt2));
console.log(rotateStr(str, rotateAmnt3));
console.log(rotateStr(str, rotateAmnt4));
console.log(rotateStr(str, rotateAmnt5));
/*****************************************************************************/

/* 
    Create the function isRotation(str1,str2) that
    returns whether the second string is a rotation of the first.

    If you get stuck: Look up .includes()!
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const expected6 = true;

const strA2 = "ABCD";
const strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const expected7 = false;

const strA3 = "ABCD";
const strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const expected8 = false;

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */
function isRotation(s1, s2) {
  if (s1.length != s2.length || s1 === s2) {    // if the strings are not the same length or if they are the same string, return false
    return false;
  }
  full_string = s1 + s1;                    // concatenate the first string to itself
  return full_string.includes(s2);
}
console.log(isRotation(strA1, strB1));
/*****************************************************************************/
