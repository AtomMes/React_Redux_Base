import { connect } from "react-redux";
import { incrementLies, decrementLikes, incrementLikes } from "./redux/actons";

function Likes(props) {
  console.log("store", props);
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>{props.likes}</button>
      <button onClick={props.onDecrementLikes}>DisLike</button>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("mapStateToProps >", state);
  return {
    likes: state.likesReducer.likes,
    // likes:''
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => dispatch(incrementLikes()),
    onDecrementLikes: () => dispatch(decrementLikes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
