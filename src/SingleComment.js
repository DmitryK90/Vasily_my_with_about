import { useState, useEffect } from "react";
import { commentUpdate, commentDelete } from "./Redux/actions";
import { useDispatch } from "react-redux";

function SingleComments({ data }) {
  const [commentText, setCommentText] = useState("");
  const { text, id } = data; // для каждого объекта получаем text и id.
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id));
  }; // обновляем комментарий если потребуется, т.е. ы созданном комменте дописываем что-то и жмём enter.

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  }; // удаляем коммент на крестик.

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]); // каждый раз как меняется массив мы добавляем его в переменную commentText.

  const handleInput = (e) => {
    setCommentText(e.target.value); // всё что мы будет писать поверх нашего комментария будет записываться в commentText.
  };

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
}

export default SingleComments;
