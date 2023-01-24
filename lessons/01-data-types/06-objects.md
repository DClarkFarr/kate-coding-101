## Objects

Objects are very useful in storing data in a structured way. Objects have keys and values. Usually, we know what the keys are. THis makes it easy to set values, and get them back.

We create an object as a variable, the same as the others. The object is wrapped in curly braces `{}`.

We separate the key and it's value with a `:` (colon).

We separate key-value pairs with a `,` (comma).

**Example**

```js
// this is an empty object
var emptyObject = {};

// this object has a key of "name" and a value of "Kate"
// I don't need to use quote around the key AS LONG AS the key follows variable-naming rules.
var person = { name: "Kate" };

// This key has quotes, but it doesn't need them.
var person = { name: "Kate" };

// this one follows variable naming rules, so it doesn't need quotes on the key.
var person = { firstName: "Kate" };

// so is this one
var person = { first_name: "Kate" };

// this one doesn't follow variable naming rules, so it needs quotes on the key.
var person = { "first-name": "Kate" };

// this object has multiple values, separated by commas
var person = {
    firstName: "Kate",
    lastName: "Deadman",
    age: 30, // the value can be any type
    isAwesome: true, // the property can optionally have a comma
};
```

### Accessing values

There are 2 ways of accessing values.

**1. Dot notation**
Dot notation is the most common. It only works if the key follows variable naming rules.

```js
var person = { firstName: "Cassidy", lastName: "Deadman" };

var firstName = person.firstName; // the dot (period) tells us we want to get the property of the object

var lastName = person.lastName;

console.log("My first name is " + firstName, "My last name is " + lastName);
```

**2. Bracket notation**
Bracket notation is more annoying, but it works for any key. It is useful if you don't know the key name. Or when the key name is not a valid variable name.

```js
// this follows variable naming rules, but we can still use
// square bracket syntax
var person = { firstName: "Cassidy", lastName: "Deadman" };

var firstName = person["firstName"]; // Cassidy

// this doesn't follow variable naming rules, so we have to use
// square bracket syntax
var person = { "first-name": "Cassidy", "last-name": "Deadman" };

var firstName = person["first-name"]; // Cassidy

// for numeric keys, we must also use bracket notation.
// this is not an array, because the keys do not start in 0, and
// they are not in order.
var person = { 10: "Cassidy", 4: "Deadman" };

// we don't NEED to use quotes, but we can.
var name = person[10]; // Cassidy
```

### Nesting values

Object values can have any type, including other objects. To access them, we can just keep going!

**Nested Object example**

```js
var person = {
    firstName: "Cassidy",
    lastName: "Deadman",
    address: {
        street: "123 Fake Street",
        city: "London",
        country: "UK",
    },
};

// Get the whole address object
var address = person.address;

// get the street from address
var street = address.street;

// Or, we can go straight there in one step.
var street = person.address.street;
```

### Setting Values

We set values the same way we set values to variables. From right to left. We use dot-notation/square-bracket notation to reference the spot in the object, and then we assign a value to it.

```js
var person = {
    firstName: "", // empty
    lastName: "", // empty
};

// lets give it a name
person.firstName = "Cassidy";
person.lastName = "Deadman";
```

What about nested objects?

```js
var person = {
    firstName: "", // empty
    lastName: "", // empty
    address: {
        street: "", // empty
        city: "", // empty
        country: "", // empty
    },
    emailVerified: false, // boolean, just for example
};

// lets give it a name
person.firstName = "Cassidy";
person.lastName = "Deadman";

// lets give it an address
// for setting child, grandchild values, we can use dot-notation
// and just keep going!
person.address.street = "123 Fake Street";
person.address.city = "London";
person.address.country = "UK";

// setting a boolean
person.emailVerified = true;
```
