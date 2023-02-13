/**
 * Challenge
 * Below, are a list of all guests that COULD attend.
 * However, we only want `guestsWanted` to attend.`(In this case, 7)
 * Also, guests must be between 18 and 40 years old. 18 and 40 are included/accepted.
 *
 * 1. Create an empty array for accepted guests
 * 2. Create a counter variable for the while loop
 * 3. Create a while loop, in that loop:
 *   3.A. Check if the guest is between 18 and 40 years old
 *   3.B. If they are, add them to the accepted guests array
 * 4. Break the loop for either of the following conditions:
 *   4.A. The counter is greater than the length of the allGuests array
 *   4.B. The accepted guests array is equal to the guestsWanted
 *
 * 5. Console log the accepted guests array
 */

// do not change this variable
var guestsWanted = 7;

// do not change this variable
var allGuests = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Mike",
    age: 27,
  },
  {
    name: "Nancy",
    age: 54,
  },
  {
    name: "Adam",
    age: 40,
  },
  {
    name: "Jenny",
    age: 24,
  },
  {
    name: "Carl",
    age: 32,
  },
  {
    name: "Penny",
    age: 15,
  },
  {
    name: "Jasper",
    age: 30,
  },
  {
    name: "Beverly",
    age: 16,
  },
  {
    name: "Veronica",
    age: 25,
  },
  {
    name: "Robert",
    age: 29,
  },
  {
    name: "Johnny",
    age: 57,
  },
  {
    name: "Karen",
    age: 34,
  },
  {
    name: "Tim",
    age: 17,
  },
];
