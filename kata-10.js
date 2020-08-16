// find a recipe that uses 1 ingredient from A, 1 ingredient from B

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  for (ingredientA of bakeryA) { // checks for ingredient match for Bakery A
    for (recipe of recipes) {
      if (ingredientA === recipe.ingredients[0] || ingredientA === recipe.ingredients[1]) {
        for (ingredientB of bakeryB) { // if a match is found for Bakery A, checks for match to Bakery B
          if (ingredientB === recipe.ingredients[0] || ingredientB === recipe.ingredients[1]) {
            return recipe.name;
          }
        }
      }
    }
  }

}

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

console.log(chooseRecipe(bakeryA, bakeryB, recipes)); // Persian Cheesecake

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

console.log(chooseRecipe(bakeryA, bakeryB, recipes)); // Nima's Famous Dijon Raisins