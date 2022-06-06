import React, { useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "../../components/navbar/NavBar";
import PopUp from "../../components/popUp/PopUp";
import RecipeCreator from "./recipeCreator/RecipeCreator";
import RecipeViewer from "./recipeViewer/RecipeViewer";
import "./Home.css";

export default function Home() {
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [selectedRecipe, seteSlectedRecipe] = useState("");

  const recipes = useSelector((state) => state.recipeReducer);

  const openPopUp = (e) => {
    setPopUpOpen(true);
    seteSlectedRecipe(e.target.id);
  };

  const closePopUp = () => {
    setPopUpOpen(false);
  };

  return (
    <div className="home">
      <NavBar />
      <RecipeCreator />
      <RecipeViewer openPopUp={openPopUp} />
      {popUpOpen && (
        <PopUp
          closePopUp={closePopUp}
          recipe={recipes.find((recipe) => selectedRecipe === recipe.id)}
        />
      )}
    </div>
  );
}
