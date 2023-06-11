//
// You are compiling a show length calculator for a recording program.
// The lengths of the shows are as follows:
//
// Simpsons: 15 minutes
// NCIS: 30 minutes
// House: 45 minutes
// Office: 60 minutes
// Star Trek: 75 minutes
//
// First, create a function called durationOfEpisodes(shows) which takes a single array
// of show titles and returns their total duration.
//
// Then, write a function shortestRunningPlaylist(showsList) that takes in
// a 2-dimensional array of show titles and returns
// the index of the sub-array with the shortest play time.

function durationOfEpisodes(shows) {
  var total = 0;
  for (var i = 0; i < shows.length; i++) {
    if (shows[i] === 'Simpsons') {
      total += 15;
    } else if (shows[i] === 'NCIS') {
      total += 30;
    } else if (shows[i] === 'House') {
      total += 45;
    } else if (shows[i] === 'Office') {
      total += 60;
    } else if (shows[i] === 'Star Trek') {
      total += 75;
    }
  }
  console.log(" " + total);
  return total;
}
function durationOfEpisodes(shows) {
  let duration = 0;

  for (let x = 0; x < shows.length; x++) {
    duration += lookupEpisode(shows[x]);
  }

  return duration;
}

function shortestRunningPlaylist(showsList) {
  var shortest = durationOfEpisodes(showsList[0]);
  var index = 0;
  for (var i = 1; i < showsList.length; i++) {
    if (durationOfEpisodes(showsList[i]) < shortest) {
      shortest = durationOfEpisodes(showsList[i]);
      index = i;
    }
  }
  console.log("index - " + index);
  return index;
}
function lookupEpisode(episode) {
  let lookup = [, "Simpsons", "NCIS", "House", "Office", "Star Trek"]

  return lookup.indexOf(episode) * 15;
}


function shortestRunningPlaylist(showsList) {

  let shortestIndex = 0;
  let shortestTime = durationOfEpisodes(showsList[0]);

  for (let x = 0; x < showsList.length; x++) {
    let thisLength = durationOfEpisodes(showsList[x]);

    if (thisLength < shortestTime) {
      shortestTime = thisLength;
      shortestIndex = x;
    }
  }

  return shortestIndex;
}

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE
//
//
//

const showsA = ['Simpsons', 'NCIS', 'House'];
const showsB = ['House', 'Office', 'Star Trek', 'Star Trek'];
const showsC = ['Simpsons', 'Star Trek', 'Simpsons'];
const showsD = ['House', 'NCIS'];

durationOfEpisodes(showsA);  // 90
durationOfEpisodes(showsB);  // 255
durationOfEpisodes(showsC);  // 105
durationOfEpisodes(showsD);  // 75

shortestRunningPlaylist([showsA, showsB, showsC, showsD]);

let score = 0;

if (durationOfEpisodes(showsA) === 90) score++;
if (durationOfEpisodes(showsB) === 255) score++;
if (durationOfEpisodes(showsC) === 105) score++;
if (durationOfEpisodes(showsD) === 75) score++;

if (shortestRunningPlaylist([showsA, showsB, showsC, showsD]) === 3) score++;
if (shortestRunningPlaylist([showsA, showsD]) === 1) score++;
if (shortestRunningPlaylist([showsA, showsD, showsC]) === 1) score++;

console.log("You have scored " + score + "/7 points.");
