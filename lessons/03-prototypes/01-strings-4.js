function validateEmail(email) {
  var atPosition = email.indexOf("@");

  // -1 means it was not found
  if (atPosition === -1) {
    return false;
  }

  // check if it is the last character
  // remember, we do length - 1 because of 0-index.
  if (atPosition === email.length - 1) {
    return false;
  }

  // check if it is the first character
  if (atPosition === 0) {
    return false;
  }

  // it passed all our tests, so it must be valid!
  return true;
}

// good
var email1 = "daniel@goodemail.com";

// bad
var email2 = "danielbademail.com";

// bad
var email3 = "@bademail.com";

// bad
var email4 = "daniel@";

console.log(email1, "is valid:", validateEmail(email1));
console.log(email2, "is valid:", validateEmail(email2));
console.log(email3, "is valid:", validateEmail(email3));
console.log(email4, "is valid:", validateEmail(email4));
