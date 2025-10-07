import React from "react";
import { createContext , useState,useContext  } from "react";

export const CounterContext=createContext(null);

export const Count=()=>{
    let count=useContext(CounterContext);
    return count
}
export const CountProvider=(p)=>{

    let [count,setCount]=useState(0);
    return(
        <>
       < CounterContext.Provider value={{count,setCount}}>
       {
           p.children
        }
      </CounterContext.Provider>
        {/* {console.log(set)} */}
        </>
    )

}
// export const cou