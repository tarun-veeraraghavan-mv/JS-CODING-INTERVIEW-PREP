// Directions ///////////////////////////
// Given a string, return a new string with a reversed order of charecters

// TEST CASES:
// reverse('apple')
// reverse('hello')

// EXPECTED OUTPUT:
// 'elppa'
// 'olleh'

/////////////////////////////////////////

// Soln 1:

// Functions used:
// * split(): splits a srtring into an array by a charecter that is passed in
// eg: 'abcd'.split('') -> ['a','b','c','d']
// eg: 'a+b+c+d'.split('+') -> ['a','b','c','d']

function reverse1(str) {
  // split the string into an array
  const arr = str.split("");

  // reverse the array
  const reversedArr = arr.reverse();

  // join the reverse array and return the string
  const joinedArr = reversedArr.join("");

  return joinedArr;

  // ONE LINER SOLN: return str.split('').reverse().join('')
}

console.log("REVERSED SOLN 1: " + reverse1("apple"));

// NOTE: If said cannot use the inbuilt reverse() method, then use this:

// Soln 2

function reverse2(str) {
  // create an empty string called reverse
  let reversed = "";

  // for each charecter in the string, take the char and add it to the start of reversed
  // avoid for loops like this: for (let i = 0; i < str.length; i++) -> can make mistakes and looks bad to interviewer
  for (let char of str) {
    reversed = char + reversed;
  }

  // return the reversed
  return reversed;
}

// console.log("REVERSE SOLN 2: " + reverse2("hello"));

// Soln 3: very complicated but shows to the interviewer that you know how to reverse a string

function reverse3(str) {
  const stringArr = str.split("");

  const output = stringArr.reduce((acc, cur) => cur + acc, "");

  return output;

  // ONE LINER SOLN: str.split("").reduce((acc, cur) => cur + acc, "");
}

console.log("REVERSAL SOLN 3: " + reverse3("apple"));
