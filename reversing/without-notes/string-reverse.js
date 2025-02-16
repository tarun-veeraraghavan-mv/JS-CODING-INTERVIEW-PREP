// run: npm run test to check if code is working

function reverse1(str) {
  const arr = str.split("");
  const reversedArr = arr.reverse();
  const joinedArr = reversedArr.join("");
  return joinedArr;

  // ONE LINER SOLN: return str.split('').reverse().join('')
}

function reverse2(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function reverse3(str) {
  const stringArr = str.split("");
  const output = stringArr.reduce((acc, cur) => cur + acc, "");
  return output;

  // ONE LINER SOLN: str.split("").reduce((acc, cur) => cur + acc, "");
}
