/*
Kata 8 - return a string of repeated numbers
*/

const repeatNumbers = function(data) {
  let answer = '';

  //If there is more then one array set inside data, then we use this loop to add commas between the number strings
  if (data.length > 1) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 1; j <= data[i][1]; j++) {
        answer += data[i][0].toString();
      }
      //add this if statement to make sure the comma isn't added after the very last set of repeated numbers
      if (i < data.length - 1) {
        answer += ', ';
      }
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      for (let j = 1; j <= data[i][1]; j++) {
        answer += data[i][0].toString();
      }
    }
  }
  return answer;
};


//Test cases
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));