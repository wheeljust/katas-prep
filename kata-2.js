/*
Kata 2 - adding numbers in a matrix if they match a given condition (odd or even)
*/

const conditionalSum = function(values, condition) {
  let answer = 0;
  
  // Check for even condition, then loop through array to add only even numbers
  if(condition === "even"){
    for(val of values){
      if(val % 2 === 0){
        answer += val;
      }
    }
  }

  // Check for odd condition then loop through array and add together only odd numbers
  if(condition === "odd"){
    for(val of values){
      if(val % 2 !== 0){
        answer += val;
      }
    }
  }

  // If none of the above conditions are met, or if the array is empty the function will return answer as 0
  return answer;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));