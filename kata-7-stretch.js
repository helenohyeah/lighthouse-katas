const camelCase = function (input) {
  let splitInput = input.split(" ");
  for (let i = 1; i < splitInput.length; i++) {
    let capital = splitInput[i].slice(0,1).toUpperCase();
    splitInput[i] = capital + splitInput[i].substring(1);
  }
  return splitInput.join("");
};

// testing
console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy lighthouse")); // thisIsAString
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious