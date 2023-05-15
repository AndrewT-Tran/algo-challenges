/*
    Balance Index

    Here, a balance point is ON an index, not between indices.

    Return the balance index where sums are equal on either side
    (exclude its own value).

    Return -1 if none exist.
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
  for (let i = 0; i < nums.length; i++) {
    // loop through array
    // counter
    let leftSum = 0; // left side of index
    let rightSum = 0; // right side of index
    for (let j = 0; j < i; j++) { //we start this loop at 0 because we want to include the index itself (j i K) during the first iteration the left side will be 0
      leftSum += nums[j]; // left side of index
    }
    for (let k = i + 1; k < nums.length; k++) { // we start at i + 1 because we don't want to include the index itself
      // right side of index
      rightSum += nums[k]; // right side of index
    }
    if (leftSum === rightSum) {
      return i; // gives us when index when both sides equal
    }
  }
  return -1;
}

console.log(balanceIndex(nums1));
console.log(balanceIndex(nums2));

/*****************************************************************************/
