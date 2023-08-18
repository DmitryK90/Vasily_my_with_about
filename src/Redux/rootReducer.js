// тут будух храниться reducer-ы.
import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";
import { commentsReducer } from "./commentsReducer";

export const rootReducer = combineReducers({
  likesReducer,
  inputReducer,
  commentsReducer
});
