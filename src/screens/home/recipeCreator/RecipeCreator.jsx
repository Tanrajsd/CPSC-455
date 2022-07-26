import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "./form/Form";
import { addRecipeAsync } from "../../../redux/recipe/thunks";
import "./RecipeCreator.css";

export default function RecipeCreator() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [time, setTime] = useState("");

  const dispatch = useDispatch();

  const changeName = (value) => {
    setName(value);
  };

  const changeIngredients = (value) => {
    setIngredients(value);
  };

  const changeInstructions = (value) => {
    setInstructions(value);
  };

  const changeTime = (value) => {
    setTime(value);
  };

  const addNewRecipe = () => {
    const recipe = {
      id: name,
      name: name,
      ingredients: ingredients,
      instructions: instructions,
      time: time,
    };
    dispatch(addRecipeAsync(recipe));
    clearNewRecipe();
  };

  const clearNewRecipe = () => {
    setName(" ");
    setIngredients(" ");
    setInstructions(" ");
  };

  return (
    <div>
      <div id="form" className="form-container">
        <h3 className="form-header">Recipe Creator</h3>
        <Form
          name={name}
          changeName={changeName}
          ingredients={ingredients}
          changeIngredients={changeIngredients}
          instructions={instructions}
          changeInstructions={changeInstructions}
        />
        <br />
        <button
          onClick={() => {
            clearNewRecipe();
          }}
          className="form-button"
        >
          Clear
        </button>
        <br />
        <button
          onClick={() => {
            addNewRecipe();
          }}
          className="form-button"
        >
          Add Recipe
        </button>
        <br />
        <br />
      </div>
    </div>
  );
}
