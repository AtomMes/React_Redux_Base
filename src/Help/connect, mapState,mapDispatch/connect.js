import { connect } from "react-redux";

function Likes(props) {
  return <div>{props.likes}</div>; //(3) propseric qashel enq Likery(mapStateToProps-ic)
}

function mapStateToProps(state) {
  return {
    likes: state.likesReducer.likes, //(1)state-ic likery qashel enq
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => dispatch(incrementLikes()),
    onDecrementLikes: () => dispatch(decrementLikes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes); //(2) u stex vor connect enq anum mapStateToPropsi meji returni arjeqnery haytnvuma Likes-i propserum

//! state-n stacel enq providerov ekac
