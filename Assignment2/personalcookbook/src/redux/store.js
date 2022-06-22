import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./recipe/reducer";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
  devTools: true,
});
