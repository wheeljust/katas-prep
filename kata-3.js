/*
Kata 3 - counting the number of vowels in a given string
*/

const numberOfVowels = function(data) {
  let count = 0;
  
  // Use switch statement to check all vowel options and add to the counter if condition is true
  for(let i = 0; i < data.length; i++){
    switch(data.charAt(i)){
      case 'a':
        count += 1;
        break;
      case 'e':
        count += 1;
        break;
      case 'i':
        count += 1;
        break;
      case 'o':
        count += 1;
        break;
      case 'u':
        count += 1;
        break;
    }
  }  

  // Return the total count, if no vowels or empty string is passed, returns 0
  return count;
};

// Test cases
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));