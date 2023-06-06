/* Code Flow - Is the Array a Palindrome
A palindrome is a word that is spelled the same if read forwards or backwards. Some excellent palindrome examples are:

racecar
tacocat
But in our case we'll be looking at some arrays, can the values in the array be read the same forwards as backward */

function isPal(arr) {
  debugger
  for (var left = 0; left < arr.length / 2; left++) {
    var right = arr.length - 1 - left;
    //gives us value at end of array
    //left is the is the first array
    //first iteration checks if the first and last same
    //if it is then it moves to return palindrome becuase cant be one if letters arent same left and right
    //if it is not it continues to iterate inward second and second to last etc
    console.log({ left, right });
    let a = arr[left];
    let b = arr[right];
    if (a != b) {
      console.table([a, b, arr]);
      console.log({ a, b });
      console.log(arr);
      return "Not a pal-indrome!";

    }
  }
debugger
  return "Pal-indrome!";
}

// var result1 = isPal([1, 1, 2, 2, 1]);
// console.log(result1);
// var result2 = isPal( [3, 2, 1, 1, 2, 3] );
// console.log(result2);
console.log(isPal("racecar"));
console.log(isPal("civic"));

console.log(isPal("Hello"));
console.log(isPal("BOB"));
console.log(isPal("racecar"));
