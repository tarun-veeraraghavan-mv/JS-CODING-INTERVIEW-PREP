// Directions
// Given an array and chunk size, divide the array into multiple sub arrays where each sub array i of length size
// Examples
// chunk([1,2,3,4],2) -> [[1,2],[3,4]]
// chunk([1,2,3,4,5],2) -> [[1,2],[3,4],[5]]
// chunk([1,2,3,4,5],10) -> [1,2,3,4,5]

// Soln 1
function chunk1(array, size) {
  const chucked = [];

  for (let element of array) {
    const last = chucked[chucked.length - 1];

    if (!last || last.length === size) {
      chucked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chucked;
}

console.log(chunk1([1, 2, 3, 4, 5], 2));

// Soln 2: using slice() method
function chunk2(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

console.log(chunk2([1, 2, 2, 3, 4], 2));
