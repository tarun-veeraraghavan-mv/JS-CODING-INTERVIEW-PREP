// Directions
// Given integer, return an integer that reverses the order of numbers
// Examples
// reverseInt1(15) -> 51
// reverseInt1(981) -> 189
// reverseInt1(-15) -> -51
// reverseInt1(-90) -> -9

function reverseInt1(num) {
  const reversed = num.toString().split("").reverse().join("");

  if (num < 0) {
    return parseInt(reversed) * -1;
  }

  return parseInt(reversed);

  // return parseInt(reversed) * Math.sign(num)
}

console.log(reverseInt1(-5));
