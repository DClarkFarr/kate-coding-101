## If Statements

You can't program without if-statements! Programming is all about conditions.

If statements are super easy.
We use the special keyword `if`
Then we put conditions between `()` (parentheses)
Then we put the conditional code that should run when the condition is true between `{}` (curly braces)

**Definition:**

```js
if( /* conditions here */ ){
  /* Conditional code here */
  /* Anything between the starting { and closing } will run */
}
```

**Truthy and falsy**
Conditions in if statements do not need to be `true` or `false`. They need to be "truthy" or "falsy". See `01-data-types/08-booleans.md` for more on "truthy" and "falsy".

**Truthy Example**

```js
var name = "daniel";
var emptyName = "";
var trueBoolean = true;
var falseBoolean = false;
var emptyObject = [];

if (name) {
  // this is truthy!
  // this code will run!
}

if (emptyName) {
  // empty strings are falsy
  // this will not run
}

if (trueBoolean) {
  // true is....true!
}

if (falseBoolean) {
  // false is...not true
  // this code will not run
}

if (emptyObjects) {
  // objects are always truthy!
  // this code will run!
}
```

### Multiple Conditions

You can put as many conditions in an if statement as you want!

We separate each condition with `&&`. We read it as "and".

We can also use `||` which we read as "or".

**&& (and) Example**

```js
var firstName = "daniel"; // truthy
var lastName = "farr"; // truthy

// And example
// only run if first and last name are truthy
// this would be read as "if first name and last name"
if (firstName && lastName) {
  console.log("you have successfully submitted your name!");
}
```

**|| (or) Example**
With or, only one condition needs to be true.

```js
var firstName = "daniel";
var lastName = false; // oops, no last name!

// this would read as "if first name OR last name"
if (firstName || lastName) {
  // this will run, because firstName was true
  console.log("you have successfully entered first or last name!");
}
```

### Condition Grouping

Sometimes we need to group conditions.

For example if A is true, and B or C or D are true, then proceed. How would we do that? Like in math, we use `()` (parentheses). Each parentheses group will evaluate to truthy or falsy.

**Basic Example**
In this condition, you must have a first and last name to sign up.
BUT...you must only have EITHER a phone OR email. You can have both a phone and an email, or one of them.

> **Note** If statements can be broken onto multiple lines for clarity

```js
if (firstName && lastName && (phone || email)) {
  // first name was truthy
  // last name was truthy
  // either phone or email were truthy, or they both were
}
```

### More comparisons

Sometimes we don't just want to know if "truthy" or "falsy".

For example, maybe you must be more than 13 years to play. How would we do that?

We can use operators! Here's a quick list: (See the operators section for more).

- `>` greater than
- `>=` greater OR equal than
- `<` less than
- `<=` less than OR equal to
- `==` roughly equal
- `===` exactly equal in every way

```js
var age = getPersonsAge();

// if age is less than 13
if (age < 13) {
  throw new Error("You must be at least 13 to play!");
}
```

### Else-Statement

Sometimes, we want to do something `IF` a condition is true, but something `ELSE` when it isn't.

**Bad Example**

```js
// this would be annoying
if (name) {
  console.log("Success! You have a name");
}

if (!name) {
  console.log("Error! You don't have a name!");
}

// Could there be a better way to do about this?
```

**Else Example**
We can use the special `else` keyword.

```js
if (name) {
  console.log("Success! You have a name");
} else {
  console.log("Error! You don't have a name!");
}
```

**Else-if Example**
We can also do `else if` to add in between conditions.

Let's take a rating app. You can give 1-5 stars. It might look like this:

```js
// stars will be 1, 2, 3, 4 or 5
var stars = getStarsForItem();

// once a variable is assigned, it can be re-assigned without
// using `var` again. See below:
var message = "";
if (stars > 4) {
  message = "Wow, I love this!";
}

if (stars < 5 && stars > 3) {
  message = "I really liked this!";
}

if (stars < 4 && stars > 2) {
  message = "It was okay";
}

if (stars < 3 && stars > 1) {
  message = "I didn't like it much";
}

if (stars < 2) {
  message = "I hated it!";
}

console.log("message:", message);
```

The last example is a really complicated way of doing that. You have to read a lot to understand it, and it could easily give you a result you didn't expect.

Let's try again with `else-if`.

The cool thin with `else-if` is that, as soon as one condition is true, it stops looking. So if the top condition isn't true, it will look at the next one. If that one isn't true, it will go down one more. As soon as one is true, it stops, and you're done!

```js
var stars = getStarsForItem();

var message;
if (stars > 4) {
  message = "Wow, I love this!";

  // we don't need to worry about less than 5, because
  // the first condition didn't pass, so we know it isn't!
} else if (stars > 3) {
  message = "I really liked this!";
} else if (stars > 2) {
  message = "It was okay";
} else if (stars > 1) {
  message = "I didn't like it much";

  // it was not any of the above, so the answer MUST have been 1
} else {
  message = "I hated it!";
}

console.log("message:", message);
```
