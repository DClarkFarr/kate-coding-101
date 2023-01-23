## Integers (Numbers)

Numbers are a special type of data in JavaScript. They are not strings. We use numbers for doing....wait for it...MATH!

**Example**

```js
// Don't put quotes around it.
var age = 40;

// Quotes would make it a string.
// Math functions will break if you make them a string.
var year = "2016";
```

### Addition +

Use the + character for addition.

**Example**

```js
var product1 = 5;
var product2 = 10;

var total = product1 + product2;

console.log("Your total is:", total);
// ouput: Your total is: 15
```

### Subtraction -

Use the - character for subtraction.

**Example**

```js
var totalPeople = 100;
var peopleWhoLeft = 10;

var peopleRemaining = totalPeople - peopleWhoLeft;

console.log("There are", peopleRemaining, "people remaining.");
// output: There are 90 people remaining.
```

### Multiplication \*

Use the \* character for multiplication.

**Example**

```js
var dollPrice = 10;
var dollQuantity = 7;

var totalCost = dollPrice * dollQuantity;
console.log("Your total cost is:", totalCost);
// output: Your total cost is: 70
```

### Division /

Use / for division.

**Example**

```js
var amountSpent = 100;
var hamburgersBought = 4;

var pricePerBurger = amountSpent / hamburgersBought;
console.log("Each hamburger cost:", pricePerBurger);
// output: Each hamburger cost: 25
```

## Working with Strings and Integers

Sometimes, we need to combine strings and integers.
This gets confusing in JavaScript. Because we use + for concatenation, and we use + for addition.

**Example**

```js
// concatenate
var myName = "Daniel" + "Farr"; // DanielFarr

// addition
var myAge = 40 + 1; // 41
```

**Combining them both**

```js
// When a string + number happens, the number will be
// converted to a string
var age = 40;
var message = "My name is daniel, and I am " + age;

console.log(message);
// output: My name is daniel, and I am 40
```

**Convert Strings to Numbers**
There are two ways to convert a string to a number.

1. Use the Number() function

```js
var myAge = "40";
var myAgeAsNumber = Number(myAge);

var yourAge = 20;

/**
 * This will not throw an error.
 * But it will not work as expected.
 * Because we have a string and a number, the number will be
 * converted to a string.
 */
var wrongTotalAge = myAge + yourAge;
console.log("Total Age:", wrongTotalAge);
// output: Total Age: 4020
// Because we had "40" + "20". Strings!  Not numbers!

var rightTotalAge = myAgeAsNumber + yourAge;
console.log("Total Age:", rightTotalAge);
// output: Total Age: 60
```

2. Use the parseInt() function
   More about functions later. For now, it's easy to use.

-   Put the string that you want to convert in the parentheses.
-   The converted number will come out of the function, moving to the left.

```js
var myAge = "40";
var myAgeAsNumber = parseInt(myAge);

var yourAge = 20;

// this will work correctly
var ourAge = myAgeAsNumber + yourAge;
console.log("Total Age:", ourAge);
// output: Total Age: 60
```

### Decimals

Often, we need to work with decimals. This is also called a "floating number", don't ask me why.

We use the `.` (period) character, the same as you would write it.

**Example**

```js
var exactPrice = 19.95;
```

**Example 1**

```js
// Math with floating numbers is the same
var product1 = 5.5;
var product2 = 10.5;

var total = product1 + product2;
console.log("Total:", total);
// output: Total: 16
```

### Strings to Floating Numbers

There are two ways to convert a string to a floating number.

1. Use the Number() function

```js
// Number() works with integers AND floats.
var myAge = "40.5"; // will be parsed as a float
var yourAge = "20"; // will be parsed as an integer

var ourAge = Number(myAge) + Number(yourAge);
console.log("Total Age:", ourAge);
// output: Total Age: 60.5
```

2. Use the parseFloat() function.

```js
var myAge = "40.5"; // will be parsed as a float
var yourAge = "20"; // will be parsed as an integer

var ourAge = parseFloat(myAge) + parseInt(yourAge);
console.log("Total Age:", ourAge);
// output: Total Age: 60.5
```

### parseInt vs parseFloat

parseInt is not the same as parseFloat. parseInt will always return an integer. If you give parse int a float number, you will lose the decimal value.

**Example**

```js
var price = "19.95";

var priceAsInteger = parseInt(price);

console.log("Price as Integer:", priceAsInteger);
// output: Price as Integer: 19
// NOT 19.95
```

### Parentheses

We use parentheses in code, the same way we do on papaper.

**Example**

```js
var total = (3 + 3) * 5;
console.log("Total:", total);
// output: Total: 30
```

We also use parenthesees if we want to make sure that a numeric calculation happens BEFORE it gets converted to a string.

**Example**

```js
var cats = 30;
var dogs = 20;

var message = "I have " + (cats + dogs) + " pets.";
console.log(message);
// output: I have 50 pets.
```
