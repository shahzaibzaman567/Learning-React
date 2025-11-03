import React from "react";
import { useContext, useState } from "react";
import { Count } from "../context/incrementcontext";

function CountIncrement() {

    let count = Count()
    console.log(count)
    return (
        <>

            <button style={{ marginTop: 50 }}
                
                onClick={() => count.setCount(count.count + 1)}>CounIncrement</button>

            <button style={{ marginTop: 50 }}
                
                onClick={() => count.setCount(count.count - 1)}>decrement</button>
                
            <h1 >Count={count.count}  </h1>
        </>
    )

}

export default CountIncrement;