## Strings

Strings are a data type that exists in every dynamic programming language. Strings start with a quote and end with a quote.

**Double-Quote Example**

```js

// a string is a sequence of characters.
// It can be any length.
var string = "hello world":

// Strings can have almost any character
var crazyCharacters = "@#$@#$J J:#@@#$ :J@#L$KJ@# $@#$@#$";

// The only character you CANT'T have in a string
// is another quote, because that's how the end strings.
// Use the \ character to "escape" a quote.
// Escaped characters are ignored by JavaScript and treated
// as text.

var escapeExample = "This is a \"quote\" inside a string.";
// This works

var badExample = "This is a "quote" inside a string.";
// This doesn't. The quotes break the string.

```

**Single Quote Example**

```js
var singleQuoteString = "This string has single-quotes";

var doubleQuoteString = "This string has double-quotes";

// they are the same in javascript.
```

**Using quotes inside quotes**

```js
// If the string uses double-quotes, single quotes are safe.
var doubleQuoteString = "This string has 'single-quotes' inside it.";

// If the string uses single-quotes, double quotes are safe.
var singleQuoteString = 'This string has "double-quotes" inside it.';
```

### Strings Should be 1-line

In JavaScript, strings with double and single quotes need to be on the same line.

**Good Example**

```js
var goodExample = "this will work";
```

**Bad Example 1**

```js
var badExample1 = "this will
not work";
```

**Bad Example 2**

```js
var badExample2 = 'this will
not work';
```

### How to do multi-line strings

There are 3 ways of doing multi-line strings in JavaScript.

**1. Use the \ (backspace)**

**Example**
This is tricky, because the backspace needs to be the last
character on the line. A space after the backspace will break the string. NOT RECOMMENDED.

```js
var multiLineString =
    "This is a string \
that spans multiple lines.";
```

**2. Use the + (plus) sign**
In javascript, strings can be joined with the + operator.
Think "gluing the strings together".
This makes it easy to format strings on different lines.

**Example**

```js
var multiLineString =
    "This is a string " +
    "that spans multiple lines. " +
    "Will join the lines together with no spaces added.";
```

> Note: There is no semi-colon ( ; ) at the end of the lines that end with +, because the statement is not complete. The statement is complete when the last line is reached and the semi-colon ( ; ) is used.

**3. Use the backtick ( ` )**
This is called a template-literal, but it's basically just a fancy of doing a string, instead of quotes.

**Example**

```js
// You can use it just like a string.
var myName = `Daniel`;

// You can also use it with multi-line strings.
var multiLineString = `This is a string
that spans multiple lines.
Which is so cool.`;

// It doesn't interfere with the single and double quotes.

// double quotes are fine
var message1 = `They said I was "crazy" for using backticks.`;

// single quotes are fine
var message2 = `They said I was 'crazy' for using backticks.`;

// double AND single quotes are fine
var message3 = `They said I was "crazy" and 'crazy' for using backticks.`;
```

### Concatenation

When you work with strings, you will often need to combine strings together. This is called concatenation. In JavaScript, you can use the + operator to concatenate strings.

**Example**

```js
var firstName = "Daniel";
var lastName = "Farr";

var fullName = firstName + " " + lastName;
// Note: You need the " " because otherwise the output
// would be "DanielFarr" instead of "Daniel Farr".

console.log("Hello, my name is " + fullName + ".");
// Output: Hello, my name is Daniel Farr.
```
