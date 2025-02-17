// Directions:
// With a given string, return true if the string is a palindrome and false if not. Do include spaces and punctuation
// -- Sample test
// plaindrome('aba')
// plaindrome('abb bba')
// plaindrome('cba')
// -- Expected output
// true
// true
// false

// Soln 1

exports.palindrome1 = (str) => {
  // reverse a string
  const reversed = str.split("").reverse().join("");

  // check reversed string with original string
  const finalValue = reversed === str;

  // returns true / false
  return finalValue;
};

exports.palindrome2 = (str) => {
  return str
    .split("")
    .every((letter, index) => letter === str[str.length - index - 1]);
};
