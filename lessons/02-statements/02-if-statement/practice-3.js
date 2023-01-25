/**
 * Challenge
 * Fix the code below so that it runs.
 *
 * A user must pick 3 colors they like. No more, no less.
 *
 * Hint: Maybe use if > else if > else
 */

// For each of the 3 "var colors" lines below,
// uncomment 1 at a time and run.
// var colors = ["red", "blue", "green"]; // this one is correct
// var colors = ["red", "blue"]; // this one should say too few
// var colors = ["red", "blue", "green", "yellow"]; // too many

if (colors.length === 3) {
  var message = "User picked the right amount!";
}

if (colors.length !== 3) {
  var message = "User picked too many colors!";
}

if (colors.length !== 3) {
  var message = "User picked too few colors!";
}

console.log(message);
