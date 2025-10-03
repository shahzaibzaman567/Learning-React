import React from "react";
import { useContext } from "react";
import { CounterContext} from "../context/counter";

function Counter() {
const counter=useContext(CounterContext)

    return (
        <>{
            console.log(counter.count +1)
        }
            <div>
                <button onClick={()=>{counter.setCount(counter.count+1)}}>  Increment   </button>
                <button>Decrement</button>
            </div>
        </>
    )

}

export default Counter;