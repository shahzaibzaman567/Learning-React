import React from "react";
import { cartContext } from "./cartContext";
import { Cart } from "./cartContext";

function Cartitem(p){


const cart= Cart();
// console.log(p)
console.log(cart)
    return(
        <>
        <div className="item-card" style={{ display: "flex",gap:20, flexDirection: "column"}} >

            <h3>Name:{p.name}</h3>
            <h4>prise:{p.prise}$</h4>
            <button  onClick={()=>cart.setItem([...cart.items,{Name:p.name ,prise:p.prise}])} >Add to cart</button>

        </div>
        </>
    )
}

export default Cartitem;