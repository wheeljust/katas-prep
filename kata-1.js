/*
Kata 1 - Create a function that returns the sum of the two largest numbers in an array
*/

const sumLargestNumbers = function(data) {

  let x = 0;
  let y = 0;

  //First for loop checks each element of the arry to find the largest number, assigns it to x
  for (const num of data) {
    if (num > x) x = num;
  }

  //Second for loop checks each element of the array for the second highest number by comparing it to x, then sets it as y
  for (const num of data) {
    if (num > y && num < x) y = num;
  }

  // Return the sum of the two largest numbers
  return x + y;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));