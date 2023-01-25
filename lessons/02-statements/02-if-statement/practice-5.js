/**
 * Challenge
 * Add code to the function so that the code outputs the
 * correct message.
 *
 * We want to output a message to the user based on their age.
 *
 * If a user is 1-12: You are {age}. You are a child
 * If a user is 13-19: You are {age}. You are a teenager
 * If a user is 20-59: You are {age}. You are an adult
 * If a user is 60-79: You are {age}. You are a senior
 * If a user is 80+: You are {age}. You are freaky old
 */

const checkAge = function (age) {
  var message = "You are a child";

  /* Your code here */

  // I put this together to be helpful.
  // run the script right away, and everyone will be a child.
  console.log("You are " + age + ". " + message);
};

// running our test cases here
// you don't need to touch anything below

checkAge(3); // child
checkAge(12); // child
checkAge(13); // teenager
checkAge(19); // teenager
checkAge(20); // adult
checkAge(35); // adult
checkAge(60); // senior
checkAge(79); // senior
checkAge(80); // freaky old
checkAge(99); // freaky old
