export const add = (recipe) => {
  return {
    type: "ADD",
    payload: recipe,
  };
};

export const remove = (recipeId) => {
  return {
    type: "REMOVE",
    payload: recipeId,
  };
};
