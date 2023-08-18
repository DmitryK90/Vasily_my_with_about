// относится к компоненту Likes
import { INPUT_TEXT } from "./types";

const initialState = {
  text: ""
};
export const inputReducer = (state = initialState, action) => {
  console.log("inputReducer > ", action);
  switch (action.type) {
    case INPUT_TEXT: // если у action type="INPUT_TEXT", то срабатывает данный case.
      // state.likes = state.likes + 1; // НО так НЕЛЬЗЯ! Никогда не производить действий с
      return {
        ...state, // спред, создали копию нашего state.
        text: action.text // state в store поменялся на этом этапе. Далее автоматич. перерисуется UI компоненты нужные.
      };
    default:
      return state;
  }
};
