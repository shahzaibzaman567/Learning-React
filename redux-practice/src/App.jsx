import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ChangeArman, ChangeGoflan } from "./components/slice/name";

function App() {
  const Name = useSelector((state) => state.User);
  console.log(Name)
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Hay I am Redux </h1>
        <h1 style={{ textAlign: "center" }}>
          <button onClick={() => dispatch(ChangeGoflan())}>ChangeGoflan</button>
          <button onClick={() => dispatch(ChangeArman())}>ChangeArman</button>
        </h1>
        <h1 style={{ textAlign: "center" }}>{Name}</h1>
      </div>
    </>
  );
}

export default App;
