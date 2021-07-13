/*
Kata 9 - converting a normal string into camelCase text
*/

const camelCase = function(input) {
  let newText = '';

  for(let i = 0; i < input.length; i++){
    
    //If there is a space, skip to the next character in the string and make it uppercase, then add (+1) to i to skip over the next character in the loop and avoid duplication
    if(input.charAt(i) === ' '){
      newText += input.charAt(i + 1).toUpperCase();
      i++;
    } 

    else{
      newText += input.charAt(i);
    }
  }
  return newText;
};


//Test cases
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("super cali fragalistic expialidocious"));