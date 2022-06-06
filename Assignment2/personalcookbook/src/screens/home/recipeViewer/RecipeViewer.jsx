import React from "react";
import { useSelector } from "react-redux";
import "./RecipeViewer.css";

export default function RecipeViewer({ openPopUp }) {
  const recipes = useSelector((state) => state.recipeReducer);
  return (
    <div>
      <div id="viewer-container" className="viewer-container">
        <h3 className="viewer-header">Recipe Viewer</h3>
        <div>
          {recipes.map((recipe) => {
            return (
              <div
                id={recipe.id}
                className="recipe-card"
                onClick={(e) => {
                  openPopUp(e);
                }}
              >
                <p className="recipe-text">Name: {recipe.name}</p>
                <p className="recipe-text">
                  Ingredients: {recipe.ingredients}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
