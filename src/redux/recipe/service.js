const getRecipes = async () => {
  const response = await fetch("http://localhost:3001/recipe", {
    method: "GET",
  });
  const data = await response.json();
  return data.recipes;
};

const addRecipe = async (recipe) => {
  const response = await fetch("http://localhost:3001/recipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data?.recipe;
};

const deleteRecipe = async (id) => {
  const response = await fetch(`http://localhost:3001/recipe/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data?.recipes;
};

export default {
  getRecipes,
  addRecipe,
  deleteRecipe,
};