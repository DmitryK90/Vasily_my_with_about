// относится к компоненту Likes
import { INCREMENT, DECREMENT } from "./types";

const initialState = {
  likes: 5
};
export const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: // если у action type="INCREMENT", то срабатывает данный case.
      // state.likes = state.likes + 1; // НО так НЕЛЬЗЯ! Никогда не производить действий с
      return {
        ...state, // спред, создали копию нашего state.
        likes: state.likes + 1 // state в store поменялся на этом этапе. Далее автоматич. перерисуется UI компоненты нужные.
      };
    case DECREMENT:
      return {
        ...state,
        likes: state.likes - 1
      };
    default:
      return state;
  }
};
