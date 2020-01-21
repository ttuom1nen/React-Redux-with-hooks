import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions/actionCreators";

const counterStyle = {
  background: "cyan",
  padding: "10px",
  margin: "10px",
  boxSizing: "border-box"
};

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return (
    <div style={{ ...counterStyle }}>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(decrement())}>Subtract</button>
    </div>
  );
};

export default Counter;
