// count the number of vowels in a given string
// vowels = a, e, i, o, u

const numberOfVowels = function (data) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
      count += 1;
    }
  }
  return count;
}

// testing
console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("lighthouse labs")); // 5
console.log(numberOfVowels("aeiou")); // 5