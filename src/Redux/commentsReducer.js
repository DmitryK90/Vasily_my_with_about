// относится к компоненту Comments
import {
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD
} from "./types";

const initialState = {
  comments: []
};
export const commentsReducer = (state = initialState, action) => {
  console.log("commentsReducer > ", action);

  switch (action.type) {
    case COMMENT_CREATE: // если у action type="COMMENT_CREATE", то срабатывает данный case.
      return {
        ...state, // спред, создали копию нашего state.
        comments: [...state.comments, action.data] // создали копию коментариев, action.data = добавляет в конец наш новый комментарий.
      };

    case COMMENTS_LOAD: // приводим к нашей структуре.
      const commentsNew = action.data.map((res) => {
        return {
          text: res.name,
          id: res.id
        };
      });
      return {
        ...state,
        comments: commentsNew
      };

    case COMMENT_UPDATE:
      const { data } = action; // в action приходит новый комментарий.
      const { comments } = state; // комментарии которые хранятся в state.
      const itemIndex = comments.findIndex((res) => res.id === data.id); // ищём индексное значение элемента id которого = тому который получаем в action(data.id).
      const nextComments = [
        ...comments.slice(0, itemIndex), // от индекса 0 до индексного значения нашего комментария.
        data, // data = добавляем наш комментарий новый в конец массива.
        ...comments.slice(itemIndex + 1) // копируем в массив все оставшиеся элементы которые идут после элемента с нашим индексным значением, как бы вырезаем ненужный коммент и вставляем наш новый изменённый.
      ]; // slice - разрезаем массив.
      return {
        ...state, // спред, создали копию нашего state.
        comments: nextComments
        // comments: [...state.comments, action.data] // создали копию коментариев, action.data = добавляет в конец наш новый комментарий.
      };
    case COMMENT_DELETE:
      return (() => {
        // обернули в стрелочную, чтобы изолировать от одинаковых переменных в UPDATE.
        const { id } = action; // в action приходит id.
        const { comments } = state; // комментарии которые хранятся в state.
        const itemIndex = comments.findIndex((res) => res.id === id); // ищём индексное значение элемента id которого = тому который получаем в action.
        const nextComments = [
          ...comments.slice(0, itemIndex), // от индекса 0 до индексного значения нашего комментария.
          ...comments.slice(itemIndex + 1) // копируем в массив все оставшиеся элементы которые идут после элемента с нашим индексным значением, как бы вырезаем ненужный коммент и вставляем наш новый изменённый.
        ]; // slice - разрезаем массив.
        return {
          ...state, // спред, создали копию нашего state.
          comments: nextComments
          // comments: [...state.comments, action.data] // создали копию коментариев, action.data = добавляет в конец наш новый комментарий.
        };
      })();
    default:
      return state;
  }
};
