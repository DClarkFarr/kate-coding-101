/**
 * Challenge
 * Fix the code below so that it runs.
 *
 * User must be between 13 and 25 years old to sign up.
 *
 * Hint: The current logic is really messed up. Maybe start over.
 * Hint: Consider using multiple conditions in 1 if statement ()
 *       if ( age is greater than or equal to min age AND less than or equal to max )
 */

// its annoying to have to uncomment one line at a time
// like we did in the last practice
// this time, we'll use a local function to help us!

var checkAge = function (age) {
  var minAge = 13;
  var maxAge = 25;

  if (age > minAge) {
    // age is old enough!
    console.log(age, " correct - old enough");
  } else {
    if (age < maxAge) {
      // age is young enough
      console.log(age, " correct - young enough");
    } else {
      // age is too old
      console.log(age, " incorrect - too old");
    }
  }
};

// now we can run the function with any age we want
// you don't need to touch anything below this

var age1 = 12; // too young
var age2 = 13;
var age3 = 18;
var age4 = 20;
var age5 = 25;
var age6 = 26; // too old

checkAge(age1);
checkAge(age2);
checkAge(age3);
checkAge(age4);
checkAge(age5);
checkAge(age6);

/**
 * Current output is as follow:
 * 12  correct - young enough
 * 13  correct - young enough
 * 18  correct - old enough
 * 20  correct - old enough
 * 25  correct - old enough
 * 26  correct - old enough
 *
 * As you can see, every single age was young enough or old enough
 */
