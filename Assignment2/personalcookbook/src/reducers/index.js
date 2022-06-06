import { combineReducers } from "redux";
import recipeReducer from "./recipeReducer.js";

const rootReducer = combineReducers({
  recipeReducer,
});

export default rootReducer;
