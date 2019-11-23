import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Add</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Subtract</button>
    </div>
  );
}

export default App;
