import React, { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

export const cartContext = createContext(null);

//another good practice
export let Cart = () => {
    const cart = useContext(cartContext);
    return cart
}


function CardPrvider(p) {
    const [items, setItem] = useState([])
    return (
        <>
            <cartContext.Provider value={{ items, setItem }}>
                {
                    p.children
                }
            </cartContext.Provider>

        </>
    )
}

export default CardPrvider;