var test1String1 = 10;
var test1String2 = "10";

// with triple-equals, this will be false, because the variables are of different types.
// One is a string, the other a number.
console.log("test 1 strings are the same:", test1String1 === test1String2);

var test2String1 = 10;
var test2String2 = "10";

// this time we will convert the number to a string
// all numbers have a "toString()" method that will return a string
// this should be true.
console.log(
  "test 2 strings are the same:",
  test2String1.toString() === test2String2
);

// we can also use the main class method
// this should also be true.
// run 01-strings-2.js to verify
console.log(
  "test 2 strings are the same:",
  String(test2String1) === test2String2
);
