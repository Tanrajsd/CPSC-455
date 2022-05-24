let preFilledRecipes = {
  name: "Chocolate Chip Cookies",
  ingredients:
    "1 cup of butter, 1 cup of sugar, 2 eggs, 1 teaspoon of baking soda, 1 teaspoon of salt, 2 cups of chcolate chips",
  instructions:
    "First mix all the dry ingredients together and then add in the wet ingredients. Next put the cookies into the oven at 375 degrees for 15 minutes",
};

let recipes = [preFilledRecipes];

function addNewRecipe() {
  console.log(recipes);

  const name = document.getElementById("rname").value;
  const ingredients = document.getElementById("ringredients").value;
  const instructions = document.getElementById("rinstructions").value;

  const newRecipe = {
    name: name,
    ingredients: ingredients,
    instructions: instructions,
  };

  recipes.push(newRecipe);

  renderRecipes();
}

function clearRecipe() {
  document.getElementById("rname").value = "";
  document.getElementById("rinstructions").value = "";
  document.getElementById("ringredients").value = "";
}

function clearSavedRecipes() {
  document.getElementById("viewer").innerHTML = "";
  recipes = [];
}

function deleteRecipe() {
  const dname = document.getElementById("dname").value;
  document.getElementById(dname).innerHTML = "";
  const i = recipes.indexOf(dname);
  recipes.splice(i, 1);
}

function renderRecipes() {
  document.getElementById("viewer").innerHTML = recipes
    .map(
      (recipe) =>
        `<div id="${recipe.name}">
          <div>Name: ${recipe.name}</div>
          <div>Ingredients: ${recipe.ingredients}</div>
          <div>Instructions: ${recipe.instructions}</div>
        </div>
        <br/>
        <br/>`
    )
    .join("");
}

function refreshRecipes() {
  renderRecipes();
}
