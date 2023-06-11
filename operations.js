
//  Build a function that takes in three arguments: num1, num2,
// and a string operation. Each number will be an integer and the operation will
// be add, subtract, multipl, divide. Your function will
// perform the operation between the two numbers and return the answer. 

// If the operation is invalid, return the string "Invalid Operation".

let operate = function (num1, num2, operation) {
    if (operation === 'add') {
        return num1 + num2
    }
    else if (operation === 'subtract') {
        return num1 - num2;
    }
    else if (operation === 'divide') {
        return num1 / num2
    }
    else if (operation === 'multiply') {
        return num1 * num2
    }
    else {
        return ' Invalid Input '
    }
}

console.log(operate(5,2,'add'))
console.log(operate(98,2,'divide'))
console.log(operate(44,25,'subtract'))