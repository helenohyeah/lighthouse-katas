// write a guessing game where the user has to guess a secret number
// after every guess the program tells the user whether the number was too small or too large
// at the end, print the number of tries
// inputting the same number multiple times counts as 1 try
// if user input isn't a number, print an error message and do not count as a try

const generateNumber = function () {
  return (Math.floor(Math.random() * 100));
}

const playGame = function () {
  let secretNumber = generateNumber();
  // console.log(secretNumber);
  let prompt = require('prompt-sync')();
  let guess, prevGuess, attempts = 0, gameOver = false;

  guess = prompt('Guess a number: ');
  while (!gameOver) {
    guess = parseInt(guess, 10);
    if (guess === secretNumber) {
      attempts++;
      gameOver = true;
      console.log(`You got it! You took ${attempts} attempts!`);
    } else if (guess === prevGuess) {
      console.log('Already Guessed!');
      guess = prompt('Guess a number: ');
    } else if (guess <= secretNumber) {
      console.log('Too Low!');
      prevGuess = guess;
      attempts++;
      guess = prompt('Guess a number: ');
    } else if (guess >= secretNumber) {
      prevGuess = guess;
      attempts++;
      console.log('Too High!');
      guess = prompt('Guess a number: ');
    } else {
      console.log('Not a number! Try again!');
      guess = prompt('Guess a number: ');
    }
  }
}

playGame();
