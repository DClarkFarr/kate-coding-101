## Booleans

Booleans are a single bit of data. They are either `true` or `false`. Booleans are not numbers. They are not strings. In deep comparisons, there is a difference.

**Example**

```js
var person = "Kate";

var isGirl = true; // do not use strings. True is a special word.

var isFalse = false; // false is also a special word.
```

### Truthy VS Falsey

> All Values are either truthy or falsey.
> A truthy value is a value that will be treated as positive. They will trigger an `if` statement.

**If statement example**

```js
var trueValue = true;
if (testValue1) {
    console.log("This will trigger");
}

var falseValue = false;
if (testValue2) {
    console.log("This will not trigger");
}
```

**Truthy Examples**

```js
// this is truely true. And truthy.
var booleanTrue = true;

// this string has characters. It is truthy.
var booleanString = "Hello";

// Numbers greater than 1 are truthy in most languages
var positiveNumber = 1;
var positiveNumber2 = 50;

// Numbers less than 0 are truthy in javascript. It's weird.
var negativeNumber = -1;
var negativeNumber2 = -100;

// Arrays with objects are truthy.
var array = [1, 2, 3];

// Empty arrays are truthy in javascript. It's weird.
var emptyArray = []; // ??? why!!!

// Objects with values are truthy.
var object = { name: "Kate" };

// Empty objects are truthy in javascript. It's weird.
var emptyObject = {}; // ??? why!!!
```

### Falsy Values

Falsey values are treated as negative. They will not trigger an `if` statement.

**Falsy Examples**

```js
var booleanFalse = false; // this is truely false. And falsey.

var emptyString = ""; // this string has no characters. It is falsey.

var zero = 0; // zero is falsey.

var negativeZero = -0; // negative zero is falsey.

var NanValue = NaN; // NaN is falsey.

var nullValue = null; // null is falsey.
```

### Using ! (not)

The exclamation mark means "NOT" or "THE OPPOSITE".

It's very handy when we want to get into an `if` statement, when a value is false.

For example, if there is no name given, we want to abort the script and throw an error.

```js
var name = ""; // Ooops, the name is empty!

// How do we make this true?
if (name) {
    // this will not trigger

    // this is how we throw an error
    // it will kill the script
    throw new Error("No name given!");
}

// Like this...
if (!name) {
    // this will trigger. Because we take the "falsey" value and make it "truthy" with the "not" operator.

    // When reading the above we would say "If not name", which is the same as "if name is empty"

    throw new Error("No name given!");
}
```

```

```
