## Functions

Functions let us execute a piece of code, a collection of statements, over and over.

In JavaScript, there are several ways to define and invoke/call functions.

**Basic Function Definition**

Instead of `var`, we use the special keyword `function` followed by the function name, which must follow variable rules, and then `( ... parameters in here... )` and then the body between `{}` (curly braces)

```js
// this is what a basic function definition looks like
function functionName() {
  /**
   * Anything in here will execute when the function is called.
   */
}
```

**Say Hello Example**

Let's say we want a function that outputs "Hello world" every time it is called. It might look like this:

```js
function sayHello() {
  console.log("hello world");
}
```

**Multiple Lines**

Short functions can be written on a single line.

```js
// prettier-ignore
function shortFunction() { console.log("you called shorty"); }
```

However, it's clearer and better practice, to put the function on multiple lines.

```js
function makeTwoLogs() {
  console.log("log one");
  console.log("log two");
}
```

### Function Parameters

Function can have 0, 1, or infinite parameters.

Let's take a function that takes a first name, a last name, and combines them.

```js
function makeFullName(firstName, lastName) {
  var fullName = firstName + " " + lastName;

  console.log("made a full name:", fullName);
}
```

## Calling functions

To call a function, we use the name and then `()`. This executes the logic in the function.

```js
function sayDaddy() {
  console.log("daddy!");
}

console.log("kate");
sayDaddy();
sayDaddy();
console.log("cassidy");
// output
// kate
// daddy!
// daddy!
// cassidy
```

**Calling functions with parameters**

We need to pass parameters into functions IN THE order that the function expects. The name of the variable doesn't matter. The VALUE matters.

Let's do the full name example again.

```js
function sayFullName(firstName, lastName) {
  var fullName = firstName + " " + lastName;

  console.log("full name: ", fullName);
}

// these variables have different names
// but the VALUE is the same
var firstName = "Kate";
var fName = "Kate";
var first_name = "Kate";

var lastName = "Farr";

// all of these will output the same VALUE
sayFullName(firstName, lastName);
sayFullName(fName, lastName);
sayFullName(first_name, lastName);

// Again, the variable names DO NOT MATTER
// The function just cares about the value.
```

### Function Return Value

Functions can optionally return a response value. We can assign the return value of a function to a new variable, the same way we assign any value to a variable.

To do this, we use the special `return` keyword, followed by a value or a variable that represents the value we wish to return.

Functions in JavaScript can only return ONE value.

Anything AFTER the return will not fire. `return` ends the execution of the function.

```js
function makeFullName(firstName, lastName) {
  var fullName = firstName + " " + lastName;

  // This value will be returned
  return fullName;
}

// Here we are passing the values in directly.
// 'Daniel' could also be saved to a variable first.
// We save the response to daddysName and katesName
var daddysName = makeFullName("Daniel", "Farr");
var katesName = makeFullName("Kate", "Farr");

console.log(daddysName);
console.log(katesName);
```

## Global functions VS local functions

So far, we've been looking at global functions. Defined like this:

```js
function exampleFunction() {}
```

Global functions become available anywhere in the scope of the script.

However, we can also assign the logic of a function to a variable. The variable will have local scope, the same as any other variable.

**Definition**

```js
// define the variable with var
// on the right of the = (equal sign) we have the function
// this is a local function
// it exits at the time it is defined
// it does not "float to the top" like a global function
var makeFullName = function (firstName, lastName) {
  return firstName + " " + lastName;
};
```

**Bad usage**

```js
var firstName = "Kate";
var lastName = "Farr";

// this will break
// makeFullVar is stored in a variable
// it must be defined first
makeFullName(firstName, lastName);

var makeFullName = function (firstName, lastName) {
  return firstName + " " + lastName;
};
```

### Functions inside functions

Sometimes, it makes sense to have a function for use inside a function!
Let's make a function that takes a first and last name, and makes sure that the first letter of each are uppercase.

```js
function makeFullName(firstName, lastName) {
  // this takes the first letter and converts it to uppercase
  // then it concatenates all the other characters
  // prettier-ignore
  var updatedFirstName =firstName.slice(0, 1).toUpperCase() + firstName.slice(1);

  // do the same thing for last name
  // annoying to have to do the same thing, right?
  var updatedLastName = lastName.slice(0, 1).toUpperCase() + lastName.slice(1);

  // return the full name
  return updatedFirstName + " " + updatedLastName;
}
```

Maybe we can take that same function, but make it a little better.

```js
function makeFullName(firstName, lastName) {
  // let's make a local function
  // it will not exist outside of it's parent function makeFullName
  // but inside makeFullName we can use it as much as we want!
  var upperFirst = function (word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  }; // this is the end of the statement, so we add a ;

  // Isn't this so much better!
  return upperFirst(firstName) + " " + upperFirst(lastName);
} // we don't add a semicolon here, because a function definition isn't a statement
```
