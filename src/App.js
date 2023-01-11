import React, { useReducer } from "react";
import "./style.css";

const initialstate = 0;
const reducer = (state, action) => {
switch(action) {
  case "add":
  return state + 1;
  case "sub":
  return state - 1;
  case "reset":
  return 0;
  default:
  throw new Error("Unexpected action");
}
}

export default function App() {
  const [count, dispatch] = useReducer(reducer, initialstate)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {dispatch("add")}}>Add</button>&nbsp;
      <button onClick={() => {dispatch("sub")}}>Subtract</button>&nbsp;
      <button onClick={() => {dispatch("reset")}}>Reset</button>&nbsp;
    </div>
  );
}
