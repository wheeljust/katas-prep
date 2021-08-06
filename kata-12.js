/*
Kata 12 - check recipe ingredients vs items in stock at the bakery to determine which recipe can be made
*/

//This helper function will compare any array of bakery ingredients to an array of recipe ingredients and return true if there is at least one match
const ingredientsCheck = function(bakery, recipe) {
  for (let i = 0; i < bakery.length; i++) {
    for (let j = 0; j < recipe.length; j++) {
      if (bakery[i] === recipe[j]) {
        return true;
      }
    }
  }
  return false;
};

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (const x of recipes) {
    if (ingredientsCheck(bakeryA, x.ingredients) && ingredientsCheck(bakeryB, x.ingredients)) {
      return x.name;
    }
  }
  return 'We do not have the right ingredients!';
};


//Test code below
let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));