// Direction
// Write a function that takes in a string. This function should capitalize the first letter of each word in the string
// then return the capitalized string
// Examples
// capitalize('a short sentence') -> 'A Short Sentence'
// capitalize('a lazy fox') -> 'A Lazy Fox'

function capitalize1(str) {
  return str
    .split(" ")
    .map((el) => el.replace(el[0], el[0].toUpperCase()))
    .join(" ");
}

console.log(capitalize1("a short sentence"));
