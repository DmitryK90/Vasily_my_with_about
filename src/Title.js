import { useDispatch, useSelector } from "react-redux"; // Хуки(не требуется оборачивать в connect), useDispatch будем использовать вместо функции mapDispatchToProps, и useSelector вместо mapStateToProps.
import { inputText } from "./Redux/actions"; // импортируем action изменения инпута.

function Title(props) {
  console.log(props.title);

  const text = useSelector((state) => {
    const { inputReducer } = state;
    return inputReducer.text;
    console.log("state > ", state);
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log("hendle text > ", e.target.value);
    dispatch(inputText(e.target.value));
  };

  return (
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={handleChange} />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Title;
