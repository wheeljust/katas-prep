/*
Kata 15 - organized an array of instructors based on the course the teach
*/

const organizeInstructors = function(instructors){
  let organized = {};

  for(instructor of instructors){
    
    /*
    Check if the object organized already has a key with the same name as the course listed for the current instructor
    Use the ! operator so that when there is no existing course in the object already, we intialize an array for that course
    */
    if(!organized[instructor.course]){
      organized[instructor.course] = [];
    }
    //Otherwise if the course already exisits then it must have an array so we push the instructors name to the array
    organized[instructor.course].push(instructor.name);

  }

  return organized;
};


//Test cases
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));


console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));