/*
  Stable sort.

  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

  Time Complexity
	- Best case: O(n log(n)) linearithmic.
	- Average case: O(n log(n)) linearithmic.
	- Worst case: O(n log(n)) linearithmic.

  Space: O(n) linear

  steps:
	1. create a merge function to merge two already sorted arrays into a single
		sorted array.
	  - you do NOT need to work in place, ok to use a new array
	2. create mergeSort function to sort the provided array
	  - split the array in half and recursively merge the halves using the
		  previously created merge function.
	  - splitting of arrays stops when array can no longer be split.
	  - an array of 1 item is by definition sorted, so two arrays of 1 item
		  can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Go through both at the same time

//Which ever has a lower number

//Insert into an output array

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left = [], right = []) {
	// we start with two sorted arrays
	// we want to merge them into one sorted array
	let result = [];
	let i = 0;
	let j = 0;
	while (i < left.length && j < right.length) {
		// this will only iterate the length of the array with the smallest length
		// we will need another while loop to iterate over the remaining elements
		if (left[i] < right[j]) {
			result.push(left[i]);
			i++;
		} else {
			result.push(right[j]);
			j++;
		}
	}
	// these while loops will run over the remaining elements
	// in the left and right arrays after one of the arrays has been completely iterated over.
	// and push the remaining elements into the result array
	while (i < left.length) {
		result.push(left[i]);
		i++;
	}
	while (j < right.length) {
		result.push(right[j]);
		j++;
	}

	return result;
}
console.log(merge([1, 5], [2, 4]));
console.log(merge(sortedA1, sortedB1));
console.log(merge(sortedA2, sortedB2));
console.log(merge(sortedA3, sortedB3));
console.log(merge(sortedA4, sortedB4));
// mergeSort
const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given numbers being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} numbers
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(numbers = []) {

    if (numbers.length === 1){ //base case
        return numbers
    }

    const middleIdx = Math.floor(numbers.length/2)
	//split the array in half


    const left = numbers.slice(0,middleIdx)
    const right = numbers.slice(middleIdx)
//recursively merge the halves using the previously created merge function.
//splitting of arrays stops when array can no longer be split.
console.log(left, right)
    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)
//an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array.

    return merge(sortedLeft, sortedRight)
}


//End recursion if numbers only has 1 element

//Use the merge function on the result of the recursive call

//Split the numbers in half

/*****************************************************************************/
