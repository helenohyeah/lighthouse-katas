const squareCode = function (message) {
  let messageNoSpace = message.replace(/ /g, "");
  let cols = Math.ceil(Math.sqrt(messageNoSpace.length));
  let square = makeSquare(messageNoSpace, cols);
  let code = [];
  for (string of square) {
    let codeIndex = 0;
    for (char of string) {
      if (code[codeIndex] === undefined) {
        code[codeIndex] = '';
      }
      code[codeIndex] += char;
      codeIndex++;
    }
  }
  return code.join(" ");
}

function makeSquare(message, cols) {
  let square = [''];
  let row = 0;
  for (char of message) {
    if (square[row].length === cols) {
      row++;
      square[row] = '';
    }
    square[row] += char;
  }
  return square;
}

console.log(squareCode("chill out"));
/*
chi
llo
ut

[0][0], [1][0], [2][0], [0][1], [1][1], [2][1], [0][2], [1][2]
clu hlt io */

console.log(squareCode("feed the dog"));
/*
feed
thed
og

[0][0], [1][0], [2][0], 
[0][1], [1][1], [2][1], 
[0][2], [1][2],
[0][3], [1][3]
fto ehg ee dd */

console.log(squareCode("have a nice day")); // hae and via ecy

console.log(squareCode("if man was meant to stay on the ground god would have given us roots")); // imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau */