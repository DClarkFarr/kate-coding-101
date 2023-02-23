var string1 = "Happy birthday";
var string2 = "day";

// this is true
console.log(string1 + " includes " + string2, ":", string1.includes(string2));

// this is false
var string3 = "Happy birthday";
var string4 = "day";
console.log(
  string3 + " starts with " + string4 + ":",
  string1.startsWith(string2)
);

// this is true
var string5 = "Happy birthday";
var string6 = "day";
console.log(string5 + " ends with " + string6 + ":", string1.endsWith(string2));
