// Direction
// Check to see if 2 provided strings are anagrams, meaning the strings have same charecters in the same quantity. Only
// consider charecters, not spaces or punctuation. Consider capital letters to be same as lower case
// Examples
// anagram('rail safety', 'fairy tales') -> true
// anagram(' RAIL! SAFETY, 'fairy tales') -> true
// anagram("Hi there", "Bye there") -> false

function charMap(str) {
  const map = {};

  // regex helps to 
  for (let letter of str.replace(/[^\w]/g, '')) {
    if (!map[letter]) {
      map[letter] = 1;
    } else {
      map[letter]++;
    }
  }

  return map;
}

function anagram1(str1, str2) {
  const str1Map = charMap(str1);
  const str2Map = charMap(str2);

  console.log(str1Map);
  console.log(str2Map);
}

anagram1("qelwiwrijr", "wejlwowe");
