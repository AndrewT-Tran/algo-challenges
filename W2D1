var floor = Math.floor(1.8); // returns largest integer
var ceiling = Math.ceil(Math.PI); //reounds up and returns the smaller integer
var random = Math.random();

console.log(floor);
console.log(ceiling);
console.log(random);
/* 
// Dice Roller
Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random. */
function d6(min, max) {
  var roll = Math.random();
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log({ min, max });
  return Math.floor(roll * (max - min) + min);
}

var playerRoll = d6(1, 6);
console.log("The player rolled: " + playerRoll);

/* Consult the Oracle
Using the following array, write a function that will answer all of our questions by randomly choosing a response */
var lifesAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes – definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];
function needAnswers(arr) {
  min = Math.ceil(0);
  max = Math.floor(arr.length);
  console.log(arr.length); //20
  let randomMNum = Math.floor(Math.random() * (max - min) + min); // gives us a random number between 0 and length of array
  console.log({ randomMNum });

  return "The Oracle says: " + arr[randomMNum];
}
console.log(needAnswers(lifesAnswers));
