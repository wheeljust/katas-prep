/*
Kata 16 - changing test strings based on the type of case requested
*/

//Defined a series of helper functions for each case type
const toCamel = function(str){
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === ' '){
      newStr += str.charAt(i + 1).toUpperCase();
      i++;
    } 
    else{
      newStr += str.charAt(i);
    }
  }
  return newStr;
}

const toPascal = function(str){
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    if(i === 0){
      newStr += str.charAt(i).toUpperCase();
    }
    else if(str.charAt(i) === ' '){
      newStr += str.charAt(i + 1).toUpperCase();
      i++;
    } 
    else{
      newStr += str.charAt(i);
    }
  }
  return newStr;
}

const toSnake = function(str){
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === ' '){
      newStr += '_';
    } 
    else{
      newStr += str.charAt(i);
    }
  }
  return newStr;
}

const toKebab = function(str){
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === ' '){
      newStr += '-';
    } 
    else{
      newStr += str.charAt(i);
    }
  }
  return newStr;
}

const toTitle = function(str){
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    if(i === 0){
      newStr += str.charAt(i).toUpperCase();
    }
    else if(str.charAt(i) === ' '){
      newStr += ' ' + str.charAt(i + 1).toUpperCase();
      i++;
    } 
    else{
      newStr += str.charAt(i);
    }
  }
  return newStr;
}

const capVowels = function(str){
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u'){
      newStr += str.charAt(i).toUpperCase();
    }
    else{
      newStr += str.charAt(i);
    }
  }
  return newStr;
}

const capConst = function(str){
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    if(!(str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u')){
      newStr += str.charAt(i).toUpperCase();
    }
    else{
      newStr += str.charAt(i);
    }
  }
  return newStr;
}

const upperCase = function(str){
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    newStr += str.charAt(i).toUpperCase();
  }
  return newStr;
}

const lowerCase = function(str){
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    newStr += str.charAt(i).toLowerCase();
  }
  return newStr;
}

//MAIN function for this exercise

const makeCase = function(input, cases) {
  //Set up a statement to determine what types of cases are being requested, store all case types in an array
  let caseTypes = [];
  if(typeof cases === 'string'){
    caseTypes.push(cases);
  } else{
    for(c of cases){
      caseTypes.push(c);
    }
  }

  let newText = input;
  //First priority cases
  for(type of caseTypes){
    switch(type){
      case 'camel':
        newText = toCamel(newText);
        break;
      case 'pascal':
        newText = toPascal(newText);
        break;
      case 'snake':
        newText = toSnake(newText);
        break;
      case 'kebab':
        newText = toKebab(newText);
        break;
      case 'title':
        newText = toTitle(newText);
        break;
    }
  }
  //Second priority cases
  for(type of caseTypes){
    switch(type){
      case 'vowel':
        newText = capVowels(newText);
        break;
      case 'consonant':
        newText = capConst(newText);
        break;
    }
  }
  //Third priority cases
  for(type of caseTypes){
    switch(type){
      case 'upper':
        newText = upperCase(newText);
        break;
      case 'lower':
        newText = lowerCase(newText);
        break;
    }
  }
  return newText;
}



//Test Cases
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
