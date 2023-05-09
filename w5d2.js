/*
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {
  let obj = {}; // creates empty obj
  for (let i = 0; i < nums.length; i++) {
    //iterates through nums
    if (obj.hasOwnProperty(nums[i])) {
      // checks if obj is nums
      obj[nums[i]]++; // if so increments 1
    } else {
      obj[nums[i]] = 1; // if not sets 1
    }
  }

  for (key in obj) {
    if (obj[key] % 2 != 0) {
      return key; // returns key of obj list
    }
  }
}

// function oddOccurrencesInArray(nums) {
//   var obj = {};
//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] in obj) {
//       obj[nums[i]]++;
//     } else {
//       obj[nums[i]] = 1;
//     }
//   }

//   for (key in obj) {
//     if (obj[key] % 2 != 0) {
//       return key;
//     }
//   }
// }

// function oddOccurrencesInArray(nums) {
//   let counts = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (counts.hasOwnProperty(nums[i])) {
//       counts[nums[i]]++;
//     } else {
//       counts[nums[i]] = 1;
//     }
//   }
//   console.log(counts)
//   for (key in counts) {
//     if (counts[key] % 2 != 0) {
//       return key;
//     }
//   }
// }

console.log(oddOccurrencesInArray(nums1), "should equal", expected1);
console.log(oddOccurrencesInArray(nums2), "should equal", expected2);
console.log(oddOccurrencesInArray(nums3), "should equal", expected3);
console.log(oddOccurrencesInArray(nums4), "should equal", expected4);
