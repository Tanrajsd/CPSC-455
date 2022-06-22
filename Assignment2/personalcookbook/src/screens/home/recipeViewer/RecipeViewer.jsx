import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteRecipeAsync,
  getRecipesAsync,
} from "../../../redux/recipe/thunks";
import "./RecipeViewer.css";

export default function RecipeViewer({ openPopUp }) {
  const recipes = useSelector((state) => state.recipes.list);
  const dispatch = useDispatch();

  const removeRecipe = (id) => {
    dispatch(deleteRecipeAsync(id));
  };

  useEffect(() => {
    dispatch(getRecipesAsync());
  }, []);

  return (
    <div>
      <div id="viewer-container" className="viewer-container">
        <h3 className="viewer-header">Recipe Viewer</h3>
        <div>
          {recipes.map((recipe) => {
            return (
              <div key={recipe.id} id={recipe.id} className="recipe-card">
                <p className="recipe-text">Name: {recipe.name}</p>
                <p className="recipe-text">
                  Ingredients: {recipe.ingredients}{" "}
                </p>
                <button
                  onClick={(e) => {
                    openPopUp(e.target.id);
                  }}
                  id={recipe.id}
                  className="form-button"
                >
                  Open Recipe
                </button>
                <button
                  onClick={(e) => {
                    removeRecipe(e.target.id);
                  }}
                  id={recipe.id}
                  className="form-button"
                >
                  Delete Recipe
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
