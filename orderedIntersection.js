/*
  Efficiently combine two already sorted multiset arrays
  into an array containing the sorted set intersection of the two.

  Output: only the shared values between the two arrays (de-duped).

  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numbersA1 = [0, 1, 2, 2, 2, 7];
const numbersB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numbersA2 = [0, 1, 2, 2, 2, 7];
const numbersB2 = [2, 2];
const expected2 = [2];

const numbersA3 = [0, 1, 2, 2, 2, 7];
const numbersB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multi-sets (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is sorted and contains only the shared values
 *    between the two arrays de-duped.
 */
// function orderedIntersection(sortedA, sortedB) {
//     let result = [];
//     for (let i = 0; i < sortedA.length; i++) {
//         for (let j = 0; j < sortedB.length; j++) {
//             if (sortedA[i] == sortedB[j]) {
//                 result.push(sortedA[i])
//             }
//         }
//     }

//     let result2 = []
//     result.forEach((num) => {
//         if (!result2.includes(num)) {
//             result2.push(num);
//         }
//     });
//     return result2;
// }

function orderedIntersection(sortedA, sortedB) {
    let result = [];
    for (let i = 0, j = 0; i < sortedA.length && j < sortedB.length;) {
        if (sortedA[i] === sortedB[j]) {
            if (result[result.length - 1] !== sortedA[i]) {
                result.push(sortedA[i]);
            }
            i++;
            j++;
        } else if (sortedA[i] < sortedB[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
}


// function orderedIntersection(sortedA, sortedB) {
//     let result = [];
//     let i = 0;
//     let j = 0;
//     while (i < sortedA.length && j < sortedB.length) {
//         if (sortedA[i] === sortedB[j]) {
//             if (result[result.length - 1] !== sortedA[i]) {
//                 result.push(sortedA[i]);
//             }
//             i++;
//             j++;
//         } else if (sortedA[i] < sortedB[j]) {
//             i++;
//         } else {
//             j++;
//         }
//     }
//     return result;
// }

console.log(orderedIntersection(numbersA1, numbersB1));
console.log(orderedIntersection(numbersA2, numbersB2));
console.log(orderedIntersection(numbersA3, numbersB3));

