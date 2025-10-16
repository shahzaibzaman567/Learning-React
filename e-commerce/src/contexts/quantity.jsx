import { createContext, useState } from "react";
import { useContext } from "react";

export const quantityContext= createContext();

export const QuantitY=()=>{
    let quantity=useContext(quantityContext)
    return quantity
}

export const Quantity=(props)=>{

const [quantity,setQuantity]=useState(0);

return    <quantityContext.Provider value={{quantity,setQuantity}}>
 {
    props.children
}
    </quantityContext.Provider>
}