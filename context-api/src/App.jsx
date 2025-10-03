import { useContext } from "react";
import React from "react";
import { useState } from 'react';
import Counter from "./component/Counter";
import { CounterContext } from "./context/counter";

function complexApi() {

const CoutnerState=useContext(CounterContext)
console.log(CoutnerState)
   return (
      <>
         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <h1>Context API</h1>
            <br />
            <br />
            <h1>Count is {CoutnerState.count} </h1>
            <br />{console.log(CounterContext.count)}
            <Counter />
            {/* <Counter /> */}
            {/* <Counter /> */}
            {/* <Counter /> */}
         </div>
      </>
   )

}

export default complexApi;