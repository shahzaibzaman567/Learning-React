import React from "react";
import "./product.css";
import { useState } from "react";
import Footer from "../../Footer/Footer.jsx";


function ProductPrint({ productlist }) {
    
    let [totalAmount, setTotalAmount] = useState(0);
    let [increment, setIncrement] = useState(productlist);
    let [decrement, setDecrement] = useState(productlist);
    let [Reset, setReset] = useState(productlist);
     
    function incrementQuantity(index) {
        //yani sara array ko otana spread
        let newprod = [...increment];
        let newTotalAmount = totalAmount;
       //add new prise
        newprod[index].quantity++
        newTotalAmount += increment[index].prise;
       //set the the new total
        setTotalAmount(newTotalAmount);
        setIncrement(newprod);
    }
    function decrementQuantity(index) {
        //yani sara array ko otana spread
        let newprod = [...decrement]
        if (newprod[index].quantity > 0) {

            let newTotalAmount = totalAmount;
            //subtract prises
            newprod[index].quantity--
            newTotalAmount -= decrement[index].prise;

             //set subtract prise
            setTotalAmount(newTotalAmount);
        }

        setDecrement(newprod);
    }

    function reset(){
      Reset=[...productlist]

        Reset.map((p,i)=>{
            
        Reset[i].quantity=0    
  
          setReset(Reset);
        
    
    })}
    //  --------------------------IMPORTANT----------------------------------- //
    // agar ham manually is ma number 2 da index ma or is ka quantity ko plu1 kara 
    //to wo to hojata ha magar function ka andar bahir wahi value wahi hota ha jo os ki
    //pahli sa ho/
    // console.log(productlist[2].quantity)=0




    return (
        <>

            <div className="head-container">


                {
                    productlist.map((p, i) => {

                        let index = i
                        return (

                            <div className="card" key={i} >

                                <ul className="prodUl">
                                    <li className="prodLi" >Name   : {p.name}</li>
                                    <li className="prodLi" >Prise   : {p.prise}</li>
                                    <li className="prodLi" >Quantity: {p.quantity}</li>

                                </ul>
                                <div className="btn-group">
                                    <button className="btn blu" onClick={() => { incrementQuantity(i) }}>+</button>
                                    <button className="btn green">{p.quantity}</button>
                                    <button className="btn red" onClick={() => { decrementQuantity(i) }}>-</button>
                                </div>
                                <h1>{p.prise * p.quantity}</h1>


                            </div>


                        )
                    })
                }


            </div>
<Footer Total={totalAmount} pro={productlist}  reset={reset}/>


        </>
    )
}





export default ProductPrint;