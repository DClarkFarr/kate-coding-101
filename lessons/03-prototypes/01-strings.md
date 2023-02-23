# Prototype - Strings

Every string has a prototype. This prototype is an object that contains all the methods that are available to the string. For example, the `toUpperCase` method is available to all strings. This method converts the string to uppercase.

```js
// this is a string instance, created from the String class.
// note: more on classes later
var string1 = "hello world";

// This is exactly the same thing;
// Run 03-prototypes/01-strings-1.js to verify this.
var string2 = String("hello world");
```

You might have seen this when converting potentially numbers to strings.

**Example**

```js
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
```

## Useful string methods

### Includes

Check if a string includes a substring.
For example, does "Happy birthday" include the substring "day"?
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#testing_if_a_string_contains_a_substring

```js
var string1 = "Happy birthday";
var string2 = "day";

// this is true
console.log(string1 + " includes " + string2, ":", string1.includes(string2));
```

### Starts with / ends with

Like includes, but substring must also be at the START or END of the parent string.

```js
// this is false
var string3 = "Happy birthday";
var string4 = "day";
console.log(
  string3 + " starts with " + string4 + ":",
  string1.startsWith(string2)
);

// this is true
var string5 = "Happy birthday";
var string6 = "day";
console.log(string5 + " ends with " + string6 + ":", string1.endsWith(string2));
```

Please run `03-prototypes/01-strings-3.js` to verify.

### Index Of

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#finding_the_position_of_a_substring_in_a_string

Find the position of a substring in a string. Returns a number for the position. Returns -1 if the substring is not found.

> REMEMBER: The position is 0-index based, so it will return 0 for the first character!

**Validate Email Example**
We want to make sure the email they gave of has a "@" character, and that the "@" character is not the first or last character.

```js
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
```

> Please run `03-prototypes/01-strings-4.js` to verify.

### Slice

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#extracting_a_substring_from_a_string

Slice takes a parent string and cuts out a substring from it, and returns that string.

Slice takes 2 parameters. The start position and the end position. If only one parameter is given, it will slice from the start position to the end of the string.

**Phone Example**

```js
var phone = "phone:1-435-817-6617";

// We don't want the "phone:" part, so we will slice it out.

// position 0 is the "p"
// position 1 is the "h"
// position 2 is the "o"
// position 3 is the "n"
// position 4 is the "e"
// position 5 is the ":"
// position 6 is the start of the actual phone number

// only passing in a start and not an end, because we want to slice the rest of the string!
var justThePhoneNumber = phone.slice(6);

console.log("got just the phone number", justThePhoneNumber);
```

**Get Name Example**
People write crazy things sometimes. But we just want a first name!

```js
var typedName = "Kate the Amazing";

// let's check to see if they typed "Kate"
var checkName = "Kate";

var positionAt = typedName.indexOf(checkName);

// this will be true, if "Kate" is at position 0 or greater
if (positionAt > -1) {
  // lets replace the typed name with just the first name
  // start at the position of the word
  // go for the number of characters in the word
  typedName = typedName.slice(positionAt, checkName.length);
  console.log("got first name:", typedName);
}

// please run `03-prototypes/01-strings-5.js` to verify.
```

### Replace

Replace is different than slice, because it can remove a piece, optionally add another piece in, and then return the whole string. (Slice just returns the substring)

> > _Note_ `.replace()` only changes the first match. Use `.replaceAll()` to change all matches.

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#updating_parts_of_a_string

**Basic Example**

```js
var string = "Hello, my dear friend. Look at my gun.".

// find hello, and replace it with goodbye.
var find = 'Hello';
var replace = 'Goodbye';

var newString = string.replace(find, replace);
console.log(newString);
// output: Goodbye, my dear friend. Look at my gun.
```

### Split / Join

Split lets us split a string into an array of substrings.

**Split Example**

```js
// A list of emails separated by a comment!  Let's split them into an array, so we can look at each email.
var emailsFromString =
  "email1@gmail.com,email2@gmail.com,email3@gmail.com,email4@gmail.com,email5@gmail.com";

// this says to find all the comas, and break the string into parts right there.
// NOTE: the comas will be removed.
var emails = emailsFromString.split(",");

console.log(emails);
/* 
output: 
[
  'email1@gmail.com',
  'email2@gmail.com',
  'email3@gmail.com',
  // etc...
]
*/
```

If we want to split an array into words we can split on the "space" character.

**Split Words Example**

```js
var string = "Hello, my dear friend. Look at my gun.";

var words = string.split(" ");

console.log(words);
// output: [ 'Hello,', 'my', 'dear', 'friend.', 'Look', 'at', 'my', 'gun.' ]
```

If we want to separate every single character, we can use an empty string.

**Split Characters Example**

```js
var phoneNumberString = "435-817-6617";

// let's say we want to look at each number individually
// to make sure it's a number, and not a dash.

var numbers = phoneNumberString.split("");

console.log(numbers);

// output: [ '4', '3', '5', '-', '8', '1', '7', '-', '6', '6', '1', '7' ]
```

Join is the exact opposite of split. It takes an array and joins it into a string. The "glue" will be added between each item in the array.

**Join Example**

```js
// here we have an array of 5 random emails.
// we want to join them into a coma-separated list to send to the database

var emails = ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com"];

var emailsString = emails.join(",");

console.log(emailsString);

// output: email1@gmail.com,email2@gmail.com,email3@gmail.com
```

Sometimes we may not want to add anything between the items in the array. In that case, we can just pass in an empty string.

```js
// here we have an array of 5 numbers. They are good numbers.
// We can join them into a string of only numbers. (We won't join anything between them)

var numbers = [1, 2, 3, 4, 5];

var numbersString = numbers.join("");

console.log(numbersString);

// output: 12345
```

### Trim

Sometimes people accidentally add spaces to the beginning or end of a string. We can use trim to remove those spaces.

```js
// oh no!
// this person added a space at the beginning of their email
// If we save it like this, they'll never be able to login!

var email = " cassidy@gmail.com";

// let's remove all the white space at the start/end of the string, if it exists.
var fixedEmail = email.trim();

console.log("fixed email:" + fixedEmail);

// no space at the start anymore!
// output: fixed email:cassidy@gmail.com
```
