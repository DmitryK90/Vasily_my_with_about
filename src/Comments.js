import { useState, useEffect } from "react"; // useState - для дефолтного state(состояния) нашего поля input.
import { commentCreate, commentsLoad } from "./Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid"; // библиотека для генерации id.
import SingleComment from "./SingleComment";

function Comments(props) {
  const [textComment, setTextComment] = useState(""); // дефолтное состояние пустая строка '', setTextComment с его помощью обновляем состояние.
  //console.log("comments props > ", props);
  const comments = useSelector((state) => {
    console.log("redux state > ", state);
    const { commentsReducer } = state;
    return commentsReducer.comments; // наш новый комментарий доступен в переменной comments.
  });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTextComment(e.target.value); // записываем значение в textComment с помощью функции setTextComment,
    // при каджой записи в input 1,2,3 и тд textComment = 1, 12, 123 и тд.
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // отменяем дефолтное поведение, чтоб страница не перезагружалась.
    console.log("submit text comment > ", textComment);
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };

  // useEffect(() => {
  //   dispatch(commentsLoad());
  // }, []); // отрисовываем сообщения с сервака при загрузке страницы .

  return (
    // onSubmit={handleSubmit} на форме это событие при вводе(enter).
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((res) => {
          // comments.length = если в этом массиве что-то есть, то пробежаться по массиву map...
          return <SingleComment key={res.id} data={res} />;
        })}
    </div>
  );
}

export default Comments;
