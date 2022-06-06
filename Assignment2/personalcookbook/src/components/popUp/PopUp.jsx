import React from "react";
import "./PopUp.css";

export default function PopUp({ recipe, closePopUp }) {
  console.log(recipe);
  return (
    <div className="popUp-container">
      <div id={recipe.id} className="pop-up-card">
        <p className="popUp-text">Name: {recipe.name}</p>
        <p className="popUp-text">Ingredients: {recipe.ingredients} </p>
        <p className="popUp-text">Instructions: {recipe.instructions} </p>
        <button className="close" onClick={closePopUp}>
          Close
        </button>
      </div>
    </div>
  );
}
