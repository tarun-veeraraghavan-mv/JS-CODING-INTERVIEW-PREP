// Direction
// Check to see if 2 provided strings are anagrams, meaning the strings have same charecters in the same quantity. Only
// consider charecters, not spaces or punctuation. Consider capital letters to be same as lower case
// Examples
// anagram('rail safety', 'fairy tales') -> true
// anagram(' RAIL! SAFETY, 'fairy tales') -> true
// anagram("Hi there", "Bye there") -> false

function charMap(str) {
  const map = {};

  // any time we find a charecter that is not a number, capital letter or lowercase letter we want to replace it
  // with an empty string
  for (let letter of str.replace(/[^\w]/g, "").toLowerCase()) {
    if (!map[letter]) {
      map[letter] = 1;
    } else {
      map[letter]++;
    }
  }

  return map;
}

// Soln 1
function anagram1(str1, str2) {
  const str1Map = charMap(str1);
  const str2Map = charMap(str2);

  if (Object.keys(str1Map).length !== Object.keys(str2Map).length) {
    return false;
  }

  for (let letter in str1Map) {
    if (str1Map[letter] !== str2Map[letter]) {
      return false;
    }
  }

  return true;
}

console.log(anagram1("abv", "abv"));

// Soln 2
function anagram2(str1, str2) {
  return cleanString(str1) === cleanString(str2);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

console.log(anagram2('abcdf','abcdf!'));