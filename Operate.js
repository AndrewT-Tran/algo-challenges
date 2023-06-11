// Operate
// This problem is worth 5 points. 
// You may receive partial credit.
//  Build a function that takes in three arguments: num1, num2,
// and a string operation. Each number will be an integer and the operation will
// be greater than, less than, equal to or not equal to. Your function will
// perform the operation between the two numbers and return the answer. 

// If the operation is invalid, return the string "Invalid Operation".


function operate(num1, num2, operation) {
    if (operation === 'greater than') {
        return num1 > num2;
    }
    else if (operation === 'less than') {
        return num1 < num2;
    }
    else if (operation === 'equal to') {
        return num1 === num2;
    }
    else if (operation === 'not equal to') {
        return num1 != num2;
    }
    else {
        return 'Invalid Operation'
    }
}
console.log(operate(6, 7, 'equal to'))
// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (operate(456, 123, "greater than") === true) score++;
if (operate(654, 654, "less than") === false) score++;
if (operate(99, 3, "equal to") === false) score++;
if (operate(111, 3, "not equal to") === true) score++;

if (operate(42, 42, "opposite to") === "Invalid Operation") score++;

console.log("You have scored " + score + "/5 points.");