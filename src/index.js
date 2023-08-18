import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk"; // подтягивает данные с сервера, добавляется при создании хранилища.
import { createStore, compose, applyMiddleware } from "redux"; // compose объединяет applyMiddleware и ReactdevTols
import { rootReducer } from "./Redux/rootReducer";
import { Provider } from "react-redux"; // этот компонент свяжет наш проект с react-redux.
import "./Index.css";
import App from "./App";

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// ); // создали store, rootReducer - все редьюсеры в одном файте собраны.
const store = createStore(rootReducer); // создали store, rootReducer - все редьюсеры в одном файте собраны.

ReactDOM.render(
  // Provider = для всех компонентов внутри App будет доступ наш store в props.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//!!! проекс написан до подтягивания с сервера, не подтягиват, ошибка, дома можно проверит
// раскомментить тут выше и раскомментить в comments.
