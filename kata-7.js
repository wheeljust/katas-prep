/*
Kata 7 - count number of dirty air samples in a set to determine if the overall air quality meets the threshold
*/

const checkAir = function(samples, threshold) {

  //Initialize counting variable for the number of dirty air samples
  //Use for loop to check each element in the samples array
  let numDirty = 0;
  for (const sample of samples) {
    if (sample === 'dirty') {
      numDirty += 1;
    }
  }

  //Calculate the sample percentage that is dirty
  //Compare sample percent to threshold and return the correct response
  let percentDirty = numDirty / samples.length;
  if (percentDirty > threshold) {
    return 'Polluted';
  } else {
    return 'Clean';
  }
};


//Test Cases
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));