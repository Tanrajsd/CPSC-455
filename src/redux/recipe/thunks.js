import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import service from "./service";

export const getRecipesAsync = createAsyncThunk(
  actionTypes.GET_RECIPES,
  async () => {
    return await service.getRecipes();
  }
);

export const addRecipeAsync = createAsyncThunk(
  actionTypes.ADD_RECIPE,
  async (recipe) => {
    return await service.addRecipe(recipe);
  }
);

export const deleteRecipeAsync = createAsyncThunk(
  actionTypes.DELETE_RECIPE,
  async (id) => {
    return await service.deleteRecipe(id);
  }
);
