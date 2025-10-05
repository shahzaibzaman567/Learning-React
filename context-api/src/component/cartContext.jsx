import React, { useState } from "react";
import { createContext } from "react";
import cartItem from "./cart";


export const cartContext=createContext(null);

function CardPrvider(p){
const [items,setItem]=useState([])
    return(
        <>
<cartContext.Provider  value={{items,setItem}}>
{
    p.children
}
</cartContext.Provider>

        </>
    )
}

export default CardPrvider;