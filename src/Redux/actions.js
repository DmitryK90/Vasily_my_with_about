// тут будут храниться actionCreactors, эти функции возвращают объект с типом каждого экшена.
import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD
} from "./types"; // экспортируем типы.

export function incrementLikes() {
  return {
    type: INCREMENT
  };
}

export function decrementLikes() {
  return {
    type: DECREMENT
  };
}

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text //свойство будет равно тексту из аргумента(text).
  };
}

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: { text, id } //свойство будет равно тексту из аргумента(text), а id (id из аргумента).
  };
}

export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: { text, id } //свойство будет равно тексту из аргумента(text), а id (id из аргумента).
  };
}

export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id
  };
}

export function commentsLoad(id) {
  return async (dispatch) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=10"
    );
    const jsonData = await response.json();
    dispatch({
      type: COMMENTS_LOAD,
      data: jsonData
    });
  }; // с сервака берём данные.
}
