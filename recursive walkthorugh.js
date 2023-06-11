
// MY FUNCTION
function countDown(passedArgumentNumber) {
  // MY FUNCTION SCOPE STARTS
  // OUTSIDE SCOPE DEF MATTERS
  // [DONE] I want to print the num
  // [DONE] I want to then subtract from it
  // [DONE] [this was first] and then continue to do so until i hit 0.
  console.log(passedArgumentNumber)
  console.log("🚀 ~ file: recursive walkthorugh.js:10 ~ countDown ~ passedArgumentNumber", passedArgumentNumber)

  const recursiveParamNumber = passedArgumentNumber - 1
  // number = number - 1

  // WE IDENTIFIED THE BASE CASE FIRST
  // Base Case
    // Hey, if this condition is true, continue to call myself.
  if (recursiveParamNumber >= 0) {
    countDown(recursiveParamNumber);
  }
}


function countDown(passedArgumentNumber) {
  console.log(passedArgumentNumber);
  console.log("🚀 ~ file: recursive walkthorugh.js:10 ~ countDown ~ passedArgumentNumber", passedArgumentNumber);

  const recursiveParamNumber = passedArgumentNumber - 1;

  if (recursiveParamNumber >= 0) {
    countDown(recursiveParamNumber);
  }
}



// OUTSIDE SCOPE
let originalNumber = 30
countDown(originalNumber);