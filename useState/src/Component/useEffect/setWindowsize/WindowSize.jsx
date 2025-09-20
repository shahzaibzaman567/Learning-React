import React, { useEffect } from "react";
import { useState } from "react";


function WindowSize(){

    // is a var of window width
const [size,setSize]=useState(window.innerWidth)

useEffect(()=>{

const  size= ( ) =>setSize(window.innerWidth);

console.log("Event Listener is added")
window.addEventListener("resize",size)


},[])

return(

    <>
    <div>
 <h1>the size of window is {size}</h1>


    </div>

    </>
)




}

export default WindowSize