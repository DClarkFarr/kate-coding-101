/**
 * FIX IT
 *
 * Fix the following loop so that the "DANGER DANGER"
 * log never runs.
 */

var count = 0;

var foundIndex = -1;

var books = ["book 1", "book 2", "book 3", "book 4", "book 5", "book 6"];
while (foundIndex === -1) {
  count++;

  // this book doesn't exist
  // it will not be found
  if (books[count] === "The Never-Ending Story") {
    foundIndex = count;
  }

  // Maybe put another if-statement here
  // Check if count is greater than books.length and break

  // Do not modify this
  if (count >= 100) {
    console.log("DANGER DANGER! You should not have reached this!");
    break;
  }
}
