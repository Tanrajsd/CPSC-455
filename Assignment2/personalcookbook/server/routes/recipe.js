var express = require("express");
var router = express.Router();

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

let recipesJson = JSON.stringify(recipeList);

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send({ message: "recipes successfully created", recipes: recipesJson });
});

router.post("/", function (req, res, next) {
  try {
    recipeList.push(req.body);
    res.send({ message: "Recipe successfully created", recipe: req.body });
  } catch (err) {
    res
      .status(400)
      .send({ message: "Recipe was not unable to be created", error: err });
  }
});

router.delete("/:id", function (req, res, next) {
  try {
    recipeList.filter((recipe) => {
      return recipe.id !== req.params.id;
    });
  } catch (err) {
    res
      .status(400)
      .send({ message: "Recipe was not unable to be deleted", error: err });
  }
  res.send("Recipe successfully deleted");
});

module.exports = router;
