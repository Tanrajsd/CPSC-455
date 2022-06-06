let recipeList = [
  {
    id: "Chocolate Chip Cookies",
    name: "Chocolate Chip Cookies",
    ingredients:
      "1 cup of butter, 1 cup of sugar, 2 eggs, 1 teaspoon of baking soda, 1 teaspoon of salt, 2 cups of chocolate chips",
    instructions:
      "First mix all the dry ingredients together and then add in the wet ingredients. Next put the cookies into the oven at 375 degrees for 15 minutes",
  },
];

const recipeReducer = (recipes = recipeList, action) => {
  switch (action.type) {
    case "ADD":
      return [...recipes, action.payload];
    case "REMOVE":
      return recipes.filter((recipe) => {
        return recipe.id !== action.payload;
      });
    default:
      return recipeList;
  }
};

export default recipeReducer;
