/*
    String: Reverse
    Given a string,
    return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str) {
  let newStr = str.length,
    result = "";
  for (var i = 0; i <= newStr - 1; i++) {
    let result2 = str[newStr - i - 1]
    // we are indexing the length-current(i)-1
    result = result + result2;
    // we are adding result2 to result which is kind of building the string
    console.log("result", result);
    console.log("result2", result2)
  }
  return result;
}

// function reverseString(str) {
//     var newArr = "";

//     for (var i = 0; i <= str.length; i++) {
//         newArr = str[i];
//         str[i] = str[str.length - 1 - i]
//         str[str.length - 1 - i] = newArr;
//         console.log(newArr);
//     }
//     return newArr;
// }

//TEST CODE FOR REVERSE
console.log(reverseString(str1)); // Expected: erutaerc
// console.log(reverseString(str2)); // Expected: god
// console.log(reverseString(str3)); // Expected: olleh
// console.log(reverseString(str4)); // Expected: ""

// try to do it without any built in methods!
// try to do it looping forwards only!
