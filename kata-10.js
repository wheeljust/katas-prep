/*
Kata 10 - printing multiplication tables to the console
*/

const multiplicationTable = function(maxValue) {
  let table = '';

  //The i variable acts like a multiple for each line of the table
  for(let i = 1; i <= maxValue; i++){
    for(let j = 0; j < maxValue * i; j = j + i){
      table += (j + i).toString()+' ';
    }
    
    //make a new line in the string after each j line is completed up to the max value
    table += '\n';
  }
  return table;
};


//Test cases
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));