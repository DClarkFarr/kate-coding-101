/**
 * Fix it
 * Fix the loop so that it outputs the correct
 *
 * Looking for 1, 2, 3, 4, 5, etc until 10
 */
var c = 0;
for (i = 1; i < 11; i + 1) {
  c++;
  if (c > 100) {
    console.log("oops!  We got to 100! This is wrong!");
    break;
  }
  console.log("i is: " + i);
}
