var typedName = "Kate the Amazing";

// let's check to see if they typed "Kate"
var checkName = "Kate";

var positionAt = typedName.indexOf(checkName);

// this will be true, if "Kate" is at position 0 or greater
if (positionAt > -1) {
  // lets replace the typed name with just the first name
  // start at the position of the word
  // go for the number of characters in the word
  typedName = typedName.slice(positionAt, checkName.length);
  console.log("got first name:", typedName);
}
