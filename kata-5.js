/*
Kata 5 - function to replace spaces in string w/ '%20'
*/

const urlEncode = function(text) {
  let newText = '';
  
  //Loop through text string and seach for spaces that are not at index 0 or at last index position
  //Build a newText string from the text passed to the fuction, and insert %20 where there are spaces within the string, and not at the first or last positions

  for(let i = 0; i < text.length; i++){
    if((text.charAt(i) === ' ' && i === 0) || (text.charAt(i) === ' ' && i === text.length - 1)){
      newText += '';
    } 
    else if(text.charAt(i) === ' '){
      newText += '%20';
    }
    else{
      newText += text.charAt(i);
    }
  }

  return newText;
};


//Test Cases
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));