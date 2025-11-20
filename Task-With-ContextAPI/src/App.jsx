import React from "react";
import "./App.css";
import { Counter } from "./Context/userContext";

function App() {
  let Count = Counter();
  console.log(Count);
  return (
    <>
      <div className="Head-Container ">
        <h1 className="Count-Me"> Count Me </h1>
        <div className="count-container col-12" >
          <h2 className="Inner-h1">Counter App With Context API</h2>
          <div className="btn-head">
            <button
              className="Danger"
              onClick={() => {
                Count.setCount(Count.count - 1);
              }}
            >
              Decrease
            </button>
            <h1 style={{color:"white"}}>{Count.count}</h1>
            <button
              className="Green"
              onClick={() => {
                Count.setCount(Count.count + 1);
              }}
            >
              Increase
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
