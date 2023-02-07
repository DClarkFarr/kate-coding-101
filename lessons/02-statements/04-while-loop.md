## While Loop

While loops are similar to for loops. The difference, is that sometimes, we don't want to "count to ten". Sometimes, we want to keep doing something until a condition is met, and then stop.

"While" loops run until a condition is met. We have to be careful with a while loop, to give it a condition that will never be met. It will run FOREVER and freeze up your computer.

So we say "Do for" for a "for" loop. And we say "do while" for "while" loops.

**Syntax**

```js
The loop will run until the condition is no longer met.
while(/* condition here */){
  // body
  // code here executes each loop
}

// code will continue after the loop as stopped.
// If the code never stops, the loop will never break.
// This code will never run, and your app will be frozen.
```

**Example**

1. Loop over a list of names
2. Look for the name kate
3. When we find the name kate, set it to a value `found` and break the loop
4. Also break the loop after 100 iterations if never found. Always Add in a "extra backup" break so that your loop can't freeze.

```js
// start out at negative one.
// If we find kate, we'll update the index that kate is at
var foundIndex = -1;

// here's a list of names
// In this case, we know how long the array is, because the
// names are hard-code.
// In real life, we query things from a database, and we don't always know how many we are going to get.
var names = ["daniel", "bob", "george", "cassidy", "kate", "badger", "holiday"];

// Start the count at -1 because we increment it
// at the start of each loop.
// The first array index is 0.
var count = -1;

// will run until count === 1000
while (count < 1000) {
  // increment the count for each loop
  // we always want this to run
  count++;

  // count will be 0, 1, 2, 3, etc
  // So the names at those positions would be
  // daniel, bob, george, cassidy, etc
  if (names[count] === "kate") {
    // set the found index
    foundIndex = count;

    // stop the loop
    break;
  }

  // if no value exists, then count must have gone higher than
  // the last array index.
  // names.length is 7, which means the last index is 6.
  // So for count 7-1000 no value will be returned.
  // Why not just break?
  if (!names[count]) {
    break;
  }
}

// check if we found it or not
// we started foundIndex at -1
// The first array index is 0, so if we found kate,
// it would never be -1
if (foundIndex > -1) {
  console.log("We found kate at position: ", foundIndex);
} else {
  console.log("Error! We did not find kate!");
}
```

## Multiple Conditions in loop

You can treat while loop conditions like if-statement conditions.

### Special User Example

We want to find if a user has "special" status. They will be special if 2 conditions are met:

1. They have spent over $1000
2. They have spent over $500 in a single transaction.

So we will want to loop over a user's transactions. We will keep track of 2 things:

1. The transaction total
2. The largest transaction
3. The length of the transactions array.

If either of these conditions are met, we will break out of the loop.

```js
// we're keeping track of their largest transaction
var largestTransaction = 0;

// keep track of their total transaction amount
var totalTransactions = 0;

var transactions = [100, 30, 50, 200, 100, 100, 500, 300, 400, 30, 25];

// by default, user is not special
// If the conditions are met, userIsSpecial will be set to true!
var userIsSpecial = false;

// We'll count iterations
// So we can break if we go past transactions.length
var index = -1;

// breaking conditions onto multiple lines
// Because we are doing "&&", if one of these fails,
// they will all fail, and the loop will stop.
while (
  totalTransactions < 1000 &&
  largestTransaction < 500 &&
  !userIsSpecial &&
  index < transactions.length
) {
  index++;

  var amount = transactions[index];
  totalTransactions = totalTransactions + amount;

  // check if amount is greater than the largest transaction
  // so far. If it's bigger, set the new amount
  if (amount > largestTransaction) {
    largestTransaction = amount;
  }

  // if either of these reaches their target amounts, the loop
  // will stop, so we don't have to break.
  // But it won't have broken yet. So we can still check if user
  // is special.

  if (largestTransaction >= 500 || totalTransactions >= 1000) {
    // this will make the condition break, too!
    userIsSpecial = true;
  }
}
```
