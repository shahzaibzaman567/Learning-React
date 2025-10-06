import React from "react";
import { useContext } from "react";
import { cartContext } from "./cartContext";

function CartItem() {
    
    let cart = useContext(cartContext);
    const Total = cart.items && cart.items.length >0 ? cart.items.reduce((a, b) => a + Number(b.prise),0):0 
    console.log(cart.items)
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 5 }}>
                <h1>Cart</h1>
                {cart && cart.items.map((item, i) => {

                    return <li key={item.Name + i}>{item.Name} - $ {item.prise}</li>
                })}
                <li>Macbook</li>

                <h5>Total bill:$ {Total}</h5>
            </div>

        </>
    )
}

export default CartItem;