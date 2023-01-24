## Variables

Variables are pointers to values. You store data/information in a variable, so that you can acess it later.

**Example**

```js
// This stores my name. I can acess it later.
var name = "Daniel Farr";

// here is how I could access it.
console.log("I said that my name is: ", name);
// ouput: I said that my name is: Daniel Farr
```

### Defining Variables

Assignments always to from right to left. The variable name is on the left, and the value being assigned is on the right.

**Example Format**

```js
var [variable name here] = [value here];
```

### Quick Variable Naming Rules

In JavaScript, and most languages, variable names cannot start with a number. They can start with a letter, or an underscore. They can also contain numbers, letters, and underscores.

**Correct Variable Names**

```js
var StartWithUppdate; // this is good!

var startWithLowerCase; // this is good!

var _startWithUnderScore; // this is good!

var containNumbers001; // this is good!

var have_multiple__underscores__; // this is good!

// $ safe in JS, but not in PHP
var have$signs; // this is weird, but possible!
```

**Incorrect Variable Names**

```js
var 1StartWithNumber; // this is bad!

var contain with spaces; // this is bad!

var have-hyphens; // this is bad!
```

### Naming Conventions

In general, coders use three naming conventions:

-   camelCase
-   snake_case
-   PascalCase

**camelCase** starts with a lower case letter, and then every word has an upper-case letter. This is the most common naming convention in JavaScript. It is used for variables and functions.

**snake_case** is all lower case, and words are separated by underscores. This is the most common naming convention in PHP. It is used for variables and functions.

**PascalCase** is like camelCase, but the first letter is also upper case. It is used for classes and global singletons. We'll learn more about that later. For now, get in the habit of using camelCase for everything.
