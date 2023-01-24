## Script flow

In most programming languages, JavaScript included, execute from top to bottom.

**Example**

```js
console.log("top");

console.log("bottom");

// output
// top
// bottom
```

When defining variables, its important to put them at the top.

```js
// Need to create the variable BEFORE you use it.
var name = "Daniel";

console.log("My name is: ", name);
```

**Bad example**

This will break

```js
console.log("My name is:", name);

const name = "Cassidy";
```

### Functions

As we've gone over, there are 2 types of functions.

1. Functions stored in variables
2. Function declared with the special `function` keyword.

**Functions stored in variables**
These are variables! So you must declare them before you use them.

```js
// must define it before i can call it
const sayHello = function () {
  console.log("hello!");
};

// calling it now
hello();
```

Global functions "rise to the top". As long as they are declared on the initial script load, you can use them whenever.

```js
// calling a global function before it's defined
// this is okay, because when the engine parses the file, it
// gets all the global functions and deals with them first.
sayHello();

function sayHello() {
  console.log("hello");
}
```
