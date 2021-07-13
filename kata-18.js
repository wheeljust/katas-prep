/*
Kata 18 - create a secret message output using the square code method
*/

const squareCode = function(message) {
  let text = message.split(' ').join('');
  let strLen = text.length;
  let numCols = Math.ceil(Math.sqrt(strLen));
  let sqArr = [];
  let secretMsg = [];

  //make an array of substrings, where the ammount of characters in each substring is equal to numCols
  
  for(let i = 0; i < text.length; i += numCols){
    let count = numCols + i;
    sqArr.push(text.substring(i,count));
  }

  //Use a nested for loop to build the coded strings. The j loop takes the letter at character index i of each element (j) in the sqArr, and then pushes the final string to the secret message array. Then we clear the tempString, index i up by 1 and repeat.

  for(let i = 0; i < numCols; i++){
    let tempStr = '';
    for(let j = 0; j < sqArr.length; j++){
      tempStr += sqArr[j].charAt(i);
    }
    secretMsg.push(tempStr);
  }

  //Use the .join() method to covert the array to a string with spaces, instead of commas
  return secretMsg.join(' ');
};


//Test cases
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));