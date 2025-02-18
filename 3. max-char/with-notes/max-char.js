// Directions
// Given a string, return the charecter that is mostly used
// Examples
// maxChar("aabbccccd") -> "c"
// maxChar("apple 112211") -> "1"

// Other questions
// What is the most common charecter in a string?
// Does string A have same charecters as string B
// Does given string have any repeated charecters in it

function charMap(str) {
  const map = {};
  for (let letter of str) {
    if (!map[letter]) {
      map[letter] = 1;
    } else {
      map[letter]++;
    }
  }

  // Shorter
  // for (let char of str) {
  //    map[char] = map[char] + 1 || 1
  // }

  return map;
}

console.log(charMap("hello"));

function maxChar(str) {
  const map = charMap(str);

  let max = 0;
  let maxChar = "";

  for (let letter in map) {
    if (map[letter] > max) {
      max = map[letter];
      maxChar = letter;
    }
  }

  return maxChar;
}

console.log(maxChar("assdfgh"));
