## Arrays

Arrays are a useful data type. They are a list of data. They can contain a series of itmes. These items can be ANYTHING. They can even be other arrays!

### Array syntax

Like all values, we initiate arrays with a variable name.

We wrap the array with an opening `[` (square bracket) and a closing `]` (square bracket).

We separate values in the array with comas `,`.

```js
// This is an empty array.
var myArray = [];

// this is an array of strings
var strings = ["Daniel", "Kate", "John"];

// this is an array of numbers
var numbers = [1, 2, 3, 4, 5];
```

Arrays can be multi-line. This is just a formatting preference, but it's especially useful against large arrays or arrays with long strings.

```js
var bigStrings = [
    "This is a long string",
    "This is another long string",
    "This is a third long string",
];
```

### Mixed values

Arrays can have mixed values.

> **Note** The last item in an array doesn't need a comma. It can have one. It is optional.

```js
var mixedArray = ["a string", true, 1, ["another", "array"]];
```

### Array length

In most programming languages, arrays have a `length`. In javascript, we get this with simple property access syntax.

```js
var lengthOfNames = ["Daniel", "Kate", "Cassidy"];

var itemsInArray = lengthOfNames.length;

// the value of itemsInArray is the number 3

var emptyArray = [];

var itemsInArray = emptyArray.length;
// the value of itemsInArray is the number 0
```

### Accessing array values

Each array item has an index. Arrays always have numerical indexes. And the indexes always progress in order. If you mess up the order, your array will instantly stop being an array and start being an object.

The first array is always 0. This is called a zero-based index.

**Indexes example**

```js
var names = [
    "Daniel", // position 0
    "Kate", // position 1
    "Cassidy", // position 2
];
```

We access array values with square bracket syntax. We use the index number to access the value.

```js
var names = [
    "Daniel", // position 0
    "Kate", // position 1
    "Cassidy", // position 2
];

var getDaniel = names[0];
console.log(getDaniel); // Daniel

var getKate = names[1];
console.log(getKate); // Kate

var getCassidy = names[2];
console.log(getCassidy); // Cassidy

var getNothing = names[3];
console.log(getNothing); // undefined
```
