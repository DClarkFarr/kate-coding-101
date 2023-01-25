/**
 * Challenge
 *
 * Complete the following challenge.
 *
 * Loop over the list of words.
 * If word starts with "a", increment the A counter. Use continue to jump to the next iteration.
 * If word starts with "b", increment the B counter. Use continue to jump to the next iteration.
 * Otherwise, increment the other counter.
 */

var startsWithA = function (word) {
  return word[0] === "a";
};
var startsWithB = function (word) {
  return word[0] === "b";
};

var aCounter = 0;
var bCounter = 0;

var words = [
  "apple",
  "banana",
  "orange",
  "duck",
  "boat",
  "ant",
  "grandma",
  "pepper",
  "billy",
  "anticipate",
];

/* add your for loop now */

/* console.log() your counter values here */

// output: aCounter: 3, bCounter: 3, other: 5
