## For Loop

Now we're getting to the exciting stuff! Loops can be used all the time, and in a lot of ways. The `for` loop exists in almost every programming language, and it works the same way.

We use the special `for` keyword, followed by `( parameters )` and then `{ logic }` that will run on each work.

### Conditions

A for loop in JavaScript has 3 parameters.

- starting number will be the first number that runs
- The loop will run until the last number it can before reaching the breaking condition
- We then use `++` to go up or `--` to go down. Normally we go up.

```js
(startingNumber; breakingCondition; goUpOrDown)
```

### Zero-index arrays

If you remember, arrays in JavaScript are 0-index based.

So in this example, the indexes would be 0, 1, 2

```js
var names = ["daniel", "kate", "cassidy"];

console.log(names[0]); // daniel
console.log(names[1]); // kate
console.log(names[2]); // cassidy
```

It should be pointed out, that the first index is 0, not 1. The last index is 2. BUUUUUTTTTT...the LENGTH is 3! This makes looping very easy.

```js
var names = ["daniel", "kate", "cassidy"];

// i will be the name of our index variable.
// i will increase by 1 each time.
// we could call it anything, but i is a common convention.
// var i = 0; ==>> Start at 0, which is the first index
// names.length ==>> run AS LONG AS i is less than length.
// Remember, 3 is the length, but the last index is 2.
// i++ ==>> increase by 1 each time.
for (var i = 0; i < names.length; i++) {
  // loop 1, i will be 0
  // loop 2, i will be 1
  // loop 3, i will be 2
  console.log(names[i]);
}
// output
// daniel
// kate
// cassidy
```

**Increment vs Decrement**
The `++` is called an increment. It means to increase by 1. The `--` is called a decrement. It means to decrease by 1. So in the previous for loop, we were incrementing. We started at 0 and went to 2; from the start of the array, to the end.

Here's an example of a decrementing for loop:

You'll notice, all the pieces are there, but rearranged

```js
var names = ["daniel", "kate", "cassidy"];

// var i = names.length - 1 ==>> Start at the last index,
// which is 2

// i > -1 ==>> run AS LONG AS i is greater than -1.
// We want to run to the first array index, which is 0.

// i-- ==>> decrease by 1 each time.
for (var i = names.length - 1; i > -1; i--) {
  // loop 1, i will be 2
  // loop 2, i will be 1
  // loop 3, i will be 0
  console.log(names[i]);
}

// output
// cassidy
// kate
// daniel
```

### Non-zero-index loops

We don't have to loop over arrays! We can loop however we want.

Kate is 10. In 15 years she'll be 25. Let's loop over those years, and say happy birthday for each one!

```js
// var i = 11 ==>> Your next birthday age
// i < 26 ==>> run AS LONG AS i is less than 26.
// i++ ==>> increase by 1 each time.
for (var i = 11; i < 26; i++) {
  // loop 1 will be 11
  // loop 2 will be 12
  // loop 3 will be 13
  // etc...
  console.log("Happy Birthday Kate! You are now " + i + " years old!");
}

// output
// Happy Birthday Kate! You are now 11 years old!
// Happy Birthday Kate! You are now 12 years old!
// Happy Birthday Kate! You are now 13 years old!
// etc...
```

### For loop scope

Everything inside the `{}` (curly braces) of the for-loop are in their own scope. They can see values outside of the loop, but after the loop is over, any variables CREATED INSIDE the loop will not be accessible. Depending on the environment, this will throw an error.

In basic node, which we are using, it won't, but it's still best practice to create variables outside of the loop, if you will need them after the loop.

**Incorrect Example**

```js
for (var i = 0; i < 5; i++) {
  // this is bad practice to create the variable here
  var string = "String " + i;
}

// in a linted environment, this would throw an error
// it might say something like "variable string is not defined"
console.log("this is string", string);
```

**Correct Example**

```js
// create the variable outside of the loop
// it will be value undefined for now.
// which is fine, because we will set it in the loop
var string;
for (var i = 0; i < 5; i++) {
  // We don't need to use `var` again, because it's already created
  // We are setting / overriding the value of the variable
  string = "String " + i;
}

// this is now safe to use
console.log("this is string", string);
```

### Counter loops

Sometimes we want to loop over a range, or an array, and keep a count of things. We can do this with a counter.

Let's loop over a range of numbers. Say, 1 to 10. We want to see how many EVEN numbers are in that range.

```js
// start the counter at 0
var counter = 0;

// loop over the range of numbers
// start at one, break before 11, increment
for (var i = 1; i < 11; i++) {
  // % is the modulo operator
  // it returns the remainder of a division
  // 2 % 2 ==>> 0
  // 3 % 2 ==>> 1
  // 4 % 2 ==>> 0
  if (i % 2 === 0) {
    // if the number is even, increase the counter by 1
    // This will increment on 2, 4, 6, 8, 10, etc...
    counter++;
  }
}

console.log("there are " + counter + " even numbers in the range of 1 to 10");
// output
// there are 5 even numbers in the range of 1 to 10
```

### `break` and `continue`

`for` loops have two special words that can be used inside the loop. `break` and `continue`.

`break` will stop the loop immediately. It will not run any more iterations of the loop.

`continue` will stop the current iteration of the loop, and start the next one.

**Break example**
Loop over words in an array. If the word is "stop", stop the loop.

```js
var words = ["hello", "world", "stop", "again"];

for (var i = 0; i < words.length; i++) {
  if (words[i] === "stop") {
    // stop the loop immediately
    console.log("word was stop, breaking loop");

    // this will stop the loop
    // nothing more will run after break;
    break;
  }
  console.log(words[i]);
}
```

**Continue example**

Loop over words in an array. If the word is "skip", skip the current iteration.

```js
var counter = 0;
var words = ["hello", "world", "skip", "again"];

for (var i = 0; i < words.length; i++) {
  if (words[i] === "skip") {
    // skip the current iteration
    console.log("word was skip, skipping iteration");

    // this will skip the current iteration
    // and start the next one
    continue;
  }
  // counter will only be incremented if the word is not "skip"
  counter++;
  console.log(words[i]);
}

console.log("counter is now " + counter); // 3, because we skipped 1
```
