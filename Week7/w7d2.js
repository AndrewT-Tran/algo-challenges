/* 
    Recursive Factorial
    Input: integer
    Output: integer, product of ints from 1 up to given integer
    
    If less than zero, treat as zero.
    Bonus: If not integer, truncate (remove decimals).
    
    Experts tell us 0! is 1.
    
    rFact(3) = 6 (1*2*3)
    rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;

/**
 * Recursively multiples 1 to the given int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} n The int to factorial. Treat negatives as zero and
 *    floor decimals.
 * @returns {number} The result of !n.
 */
function factorial(n) {


 }

/*****************************************************************************/


/* 
    Return the fibonacci number at the nth position, recursively.
    
    Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

    The next number is found by adding up the two numbers before it,
    starting with 0 and 1 as the first two numbers of the sequence.
*/

const num4 = 0;
const expected4 = 0;

const num5 = 1;
const expected5 = 1;

const num6 = 2;
const expected6 = 1;

const num7 = 3;
const expected7 = 2;

const num8 = 4;
const expected8 = 3;

const num9 = 8;
const expected9 = 21;

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */
// function fibonacci(num) { 
//   if (num <= 1) {  // base case 
//      // 0, 1 
//     // we are checking to see if the value is gonnan be less than 0 cause that would break the case 
//         return num;
//   }


//   return fibonacci(num - 1) + fibonacci(num - 2); //  2, 3, 4, 5, 6, 7, 8 
//   //recursive step  

// }




function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(8));
/*****************************************************************************/