/*
Parens Valid

Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
	// Valid parenthesis is when we have an opening and closing pair.
	// Establishing our conditions: Finding an open parenthesis...
	// Continue the loop and look for a closing parenthesis.
	debugger;
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		//setting the count to count if parents is valid
		if (str[i] == "(") {
		} else if (str[i] == ")") {
			count--;
			//checks if closing paren is there if not decrement
		}
		if (count < 0) {
			return false;
		}
		// checks for endings if "(" wont be a match
		// console.log("count", count);
	}

	if (count == 0) {
		return true;
	} else {
		debugger;
		return false;
	}
}

console.log(parensValid(str1));
console.log(parensValid(str2));
console.log(parensValid(str3));
console.log(parensValid(str4));

/*****************************************************************************/

/*
Braces Valid

Given a string sequence of parentheses, braces and brackets, determine whether it is valid.
*/

const str1_1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1_1 = true;

const str2_1 = "D(i{a}l[ t]o)n{e";
const expected2_1 = false;

const str3_1 = "A(1)s[O (n]0{t) 0}k";
const expected3_1 = false;

//  * Determines whether the string's braces, brackets, and parenthesis are valid
//  * based on the order and amount of opening and closing pairs.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str
//  * @returns {boolean} Whether the given strings braces are valid.

function bracesValid(str) {
	var stack = [];
	var openBraces = "([{";
	var closeBraces = ")]}";
	//checks the string for opening and closing braces and if it present it pushes into the stack array
	for (var i = 0; i < str.length; i++) {
		var brace = str[i];
		if (openBraces.includes(brace)) {
			stack.push(brace);
			// if the str has the open braces it pushes it into the stack array
		} else if (closeBraces.includes(brace)) {
			var matchingOpenBrace = openBraces[closeBraces.indexOf(brace)];
			if (stack.length == 0 || stack.pop() != matchingOpenBrace) {
				// if the str has closing it pops the open out of the stack array
				return false;
			}
		}
	}
	return stack.length == 0;
}

console.log(bracesValid(str1_1));
console.log(bracesValid(str2_1));
console.log(bracesValid(str3_1));
