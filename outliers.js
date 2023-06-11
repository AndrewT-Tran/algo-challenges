// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

// The return value should be 1-indexed, not 0-indexed.

// Examples :
// detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
// detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd

function detectOutlierValue(string) {
  // convert the string to useable form, in this case an array
  string = string.split(" ");
  // counter, odds vs evens, count all of them
  let oddEven = {};
  oddEven.even = 0;
  oddEven.odd = 0;
  let oddMarker, evenMarker;

  for (let i = 0; i < string.length; i++) {
    if(string[i] % 2 === 0) {
      oddEven.even += 1;
      evenMarker = i + 1;
    } else {
      oddEven.odd += 1;
      oddMarker = i + 1;
    }
  }

  if (oddEven.even === 1) {
    return evenMarker;
  } else {
    return oddMarker;
  }
  // 1st of the odds and 1st of the evens, we'll take note of the 1-index, 
  // whichever has only one counter, then return the saved odd (or even) 1-index marker. 
}
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 - Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("1 10 1 1"));  //=> 2 - Second number is even, while the rest of the numbers are odd