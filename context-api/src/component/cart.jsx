import React from "react";
import { useContext } from "react";
import { cartContext } from "./cartContext";

function CartItem(){
let cart = useContext(cartContext);
console.log(cart.items)
    return(
        <>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:5}}>
            <h1>Cart</h1>
            {cart && cart.items.map((item,i)=>{

return <li key={item.Name}>{item.Name} - $ {item.prise}</li>
            }) }
            <li>Macbook</li>

            <h5>Total bill:$</h5>
        </div>
        
        </>
    )
}

export default CartItem;