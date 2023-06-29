/*
Sum To One Digit
Implement a function sumToOne(num)​ that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.

Tips:
to access digits from a number, need to convert it .toString() to access each digit via index
parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */

function sumToOneDigit(num) {
	// Convert the number to a string to access each digit via index
	let numStr = num.toString();

	// Sum the digits of the number
	let sum = 0;
	for (let i = 0; i < numStr.length; i++) {
		sum += parseInt(numStr[i]);
	}

	// If the sum is greater than 9, sum the digits again
	if (sum > 9) {
		return sumToOneDigit(sum);
	}

	// Return the final sum
	return sum;
}

console.log(sumToOneDigit(num1));
/*****************************************************************************/
function sumToOneDigit(num) {
	// Base case: if the number is less than 10, return it
	if (num < 10) {
		return num;
	}

	// Convert the number to a string to access each digit via index
	let numStr = num.toString();

	// Sum the digits of the number
	let sum = 0;
	for (let i = 0; i < numStr.length; i++) {
		sum += parseInt(numStr[i]);
	}

	// Call the function recursively with the sum as the input
	return sum;
}

function sumToOneDigit(num) {
	// Base case: if the number is less than 10, return it
	if (num < 10) {
		return num;
	}

	// Convert the number to a string to access each digit via index
	//so like 1234, 1 is at index 0, 2 is at index 1, 3 is at index 2, 4 is at index 3

	let numStr = num.toString();
	console.log(numStr);
	// Sum the digits of the number
	let sum = 0;
	for (let i = 0; i < numStr.length; i++) {
		sum += parseInt(numStr[i]);
	}
	// this is the recurvsive part of the function we are calling the fuction and working towards the base cdase
	//the goal is to work towards theb basecase and then we exit if the base case is true

	// Call the function recursively with the sum as the input
	return sumToOneDigit(sum);
}
