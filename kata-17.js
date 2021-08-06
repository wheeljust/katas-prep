/*
Kata 17 - decode URL to create a javascript object
*/

const urlDecode = function(text) {
  //first remove all the encod%20 characters and replace with spaces
  let newStr = text.split('%20').join(' ');

  //make an array of only the key value pairs
  let keyArr = newStr.split('&');
  let objArr = [];
  let result = {};

  //break apart the key value pairs into a new array or arrays of key and parameter
  for (const key of keyArr) {
    objArr.push(key.split('='));
  }
  for (const obj of objArr) {
    result[obj[0]] = obj[1];
  }

  return result;
};


//Test cases
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);