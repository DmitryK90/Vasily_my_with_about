import { connect } from "react-redux"; // поможет соеденить этот компонент с хранилищем redux.
import { incrementLikes, decrementLikes } from "./Redux/actions";

function Likes(props) {
  // в props будет likes из функции ниже(mapStateToProps)
  console.log("render > ", props);
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
      <button onClick={props.onDecrementLikes}>Dislake</button>
    </div>
  );
}

function mapStateToProps(state) {
  // мапит state из хранилища с props которые наход. в компоненте. Т.е. пробрасываем state(состояние) нашего хранилища в наш компонент.
  // здесь имеем доступ к нашему глобальному state хранилища redux.
  const { likesReducer } = state;
  return {
    likes: likesReducer.likes // и берём из state конкретные свойства, а именно .likes.
  }; // возвращает свойство Likes и она равно likes которое хранится в state.
  // свойство likes передаётся в props нашего компонента Likes
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => dispatch(incrementLikes()), // диспатчим action из import, сам dispatch в пропсах, пришёл из store при создании, далее action попадает в reducer.
    onDecrementLikes: () => dispatch(decrementLikes()) // диспатчим action из import, сам dispatch в пропсах, пришёл из store при создании, далее action попадает в reducer.
  }; // два метода выше поподают в props компонента.
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes); // connect - компонент высшего порядка, в
// которую мы оборачиваем нам компонент Likes, и на выходе получаем новый компонент, в котором
// будут доступны нужные нам свойства для взаимодействия с хранилищем Redux. В данном случаем в
// props(после connect) будет: likes: 0, store: много функций(dispatch: ƒ, getState: ƒ,
//, subscribe: ƒ и тд.)
