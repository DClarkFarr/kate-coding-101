/**
 * Challenge
 * Complete the function below so that the code
 * outputs the correct messages.
 *
 * A user must have a firstName, lastName, email,
 * and password to signup.
 *
 * Sometimes, it's annoying to have a big if statement like:
 *  if(user.firstName
 *    && user.lastName
 *    && user.email
 *    && user.password) { ... }
 * Especially, because in the real world, we might be checking more
 * than just "does the email exist?". We might want to see
 * if the email is a valid email. And does the password have a number?
 *
 * We can use the return value of a function, to trigger an if-statement
 * or not! Pretty cool, huh?
 */

// valid user
var user1 = {
  firstName: "Kate",
  lastName: "Farr",
  email: "katetheamazing@gmail.com",
  password: "123456",
};

// invalid user
var user2 = {
  firstName: "Cassidy",
  lastName: "", // no email
  email: "", // no email
  password: "123456",
};

// invalid user
var user3 = {
  firstName: "Freddy",
  lastName: "Fazbear",
  email: "ilike@jumpscares.com",
  password: false, // no password
};

const isValidUser = function (user) {
  // Let's use a loop to check the values!  Here's how:
  // 1. create a variable called "status" and set it to true;
  // 2. create an array with each of the fields we want to check,
  //    called "fields"
  // 3. loop through the array
  // 4. get the current field by doing var field = fields[i]
  // 5. check if the user has that field by doing user[field]
  // 6. if the user doesn't have that field, set status to false
  // 7. return status
};

console.log("User 1 is valid:", isValidUser(user1)); // true
console.log("User 2 is valid:", isValidUser(user2)); // false
console.log("User 3 is valid:", isValidUser(user3)); // false
