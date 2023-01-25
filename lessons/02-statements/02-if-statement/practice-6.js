// @ts-nocheck
/**
 * Challenge
 * Complete the function below so that the code
 * outputs the correct messages.
 *
 * A user must have a firstName, lastName, email,
 * and password to signup.
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
  /* your code here */
  // return true or false
};

// true
if (isValidUser(user1)) {
  console.log("User 1 is valid:");
} else {
  console.log("User 1 is not valid:");
}

// false
if (isValidUser(user2)) {
  console.log("User 2 is valid:");
} else {
  console.log("User 2 is not valid:");
}

// false
if (isValidUser(user3)) {
  console.log("User 3 is valid:");
} else {
  console.log("User 3 is not valid:");
}
