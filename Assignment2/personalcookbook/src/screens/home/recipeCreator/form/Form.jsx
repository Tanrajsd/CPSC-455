import React from "react";

export default function Form({
  name,
  changeName,
  ingredients,
  changeIngredients,
  instructions,
  changeInstructions,
}) {
  return (
    <div>
      <form id="form">
        <label for="rname" className="form-label">
          Recipe Name:
        </label>
        <br />
        <input
          type="text"
          id="rname"
          name="rname"
          className="form-input"
          onChange={(e) => {
            changeName(e.target.value);
          }}
          value={name}
        />
        <br />
        <br />
        <label for="ringredients" className="form-label">
          Ingredients:
        </label>
        <br />
        <textarea
          id="ringredients"
          name="ringredients"
          className="form-textarea"
          onChange={(e) => {
            changeIngredients(e.target.value);
          }}
          value={ingredients}
        />
        <br />
        <br />
        <label for="rinstructions" className="form-label">
          Instructions:
        </label>
        <br />
        <textarea
          id="rinstructions"
          name="rinstructions"
          className="form-textarea"
          onChange={(e) => {
            changeInstructions(e.target.value);
          }}
          value={instructions}
        />
      </form>
    </div>
  );
}
