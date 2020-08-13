// given an array of 2 or more numbers
// find the 2 largest numbers and sum them together

const sumLargestNumbers = function (input) {
  // assumes numbers are never equal
  let largest = 0;
  let secondLargest = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > largest) {
      if (largest != 0) {
        secondLargest = largest;
      }
      largest = input[i];
    } else if (input[i] < largest && input[i] > secondLargest) {
      secondLargest = input[i];
    }
  }
  return largest + secondLargest;
}

// testing
console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126 