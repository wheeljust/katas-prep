/*
Kata 4 - filter an array of objects and find the longest name
*/

const instructorWithLongestName = function(instructors) {
  let numLetters = 0;
  let answer = {};

  // Loop through each obj and check the name length, update number of characters and the answer variable
  for(inst of instructors){
    if(inst['name'].length > numLetters){
      numLetters = inst['name'].length;
      answer = inst;
    }
  }

  return answer;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));