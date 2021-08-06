/*
Kata 21 - A number guessing game!
*/

let prompt = require("prompt-sync")();

let answer = Math.floor(Math.random() * 100 + 1);
let numberFound = false;
let newGuess;
const guessHistory = [];

while (!numberFound) {
  newGuess = prompt("Guess a number between 1 - 100: ");
  let alreadyGuessed = false;
  let isANumber = true;

  if (Number(newGuess) != newGuess) {
    console.log('Not a Number. Try Again.');
    isANumber = false;
  } else {
    //The prompt receives a string. Convert the string to a number.
    newGuess = parseInt(newGuess, 10);
  }

  if (isANumber) {
    for (let i = 0; i < guessHistory.length; i++) {
      if (guessHistory[i] === newGuess) {
        console.log('Already Guessed! Try Again.');
        alreadyGuessed = true;
      }
    }
    //The loop above checks if the number is already guessed. If it's true, then we don't need to check it again, or add it to the guess history.

    if (!alreadyGuessed) {
      if (newGuess < answer) {
        console.log('Too Low!');
        guessHistory.push(newGuess);
      } else if (newGuess > answer) {
        console.log('Too High!');
        guessHistory.push(newGuess);
      } else if (newGuess === answer) {
        guessHistory.push(newGuess);
        console.log('You did it! ' + newGuess + ' is correct. It took you ' + guessHistory.length + ' attempts.');
        numberFound = true;
      }
    }
  }
}
