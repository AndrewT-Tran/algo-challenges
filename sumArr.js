/*

Recursion is when a function calls itself, using a different input each itteration. (I.E. Taking the original paremeter, and adding 1 to it each time you call that function again).

Recursion is used to break up more complex operations into a series of smaller tasks that are easier to interpret/read.

When building a recursive function you need to make sure it has an end condition to avoid an infinite loop/stack overflow error.


function ittNumber(num, end){

    if(num == end){
        return 'completed!';
    }

return ittNumber(num++, end)
}

*/

/*
    Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums) {
  let answer = nums.reduce((acc, x));
  return answer;
}

/*****************************************************************************/

/*
Recursive Sigma

Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1_1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2_2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3_3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {
  // EDGE CASE
  if (num < 1) {
    // if num is negative
    return 0; // return 0
  }

  // BASE CASE
  if (num == 1) {
    // if num is 1
    return 1; //        return 1
  }

  // FORWARD PROGRESS
  return num + recursiveSigma(num - 1); //    return num + recursiveSigma(num - 1)
  //  you always want to return the function call
  //  you always want to be moving towards the base case
}
console.log(recursiveSigma(num1));
/*****************************************************************************/
