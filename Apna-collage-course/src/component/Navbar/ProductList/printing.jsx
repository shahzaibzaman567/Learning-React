import React from "react";
import "./product.css";
import { useState } from "react";
import Footer from "../../Footer/Footer.jsx";


function ProductPrint({ productlist }) {
    let [product, setproductlist] = useState(productlist);
    
    let [totalAmount, setTotalAmount] = useState(0);
    let [Reset, setReset] = useState(productlist);

    let [increment, setIncrement] = useState(productlist);
    let [decrement, setDecrement] = useState(productlist);

    //increment 
    function incrementQuantity(index) {
        //yani sara array ko otana spread
        let newprod = [...increment];
        let newTotalAmount = totalAmount;
        //add new prise
        newprod[index].quantity++

        newTotalAmount += increment[index].prise;
        //set the the new total
        setIncrement(newprod);
        setTotalAmount(newTotalAmount);
    }

    //decrement quantity
    function decrementQuantity(index) {
        //yani sara array ko otana spread
        let newprod = [...decrement]
        let newTotalAmount = totalAmount;
        if (newprod[index].quantity > 0) {

            //subtract prises
            newprod[index].quantity--

            newTotalAmount -= increment[index].prise;

            //set subtract prise
            setTotalAmount(newTotalAmount);
        }

        setDecrement(newprod);
    }

    function reset() {
        newReset= [...productlist]

        newReset.forEach(p => p.quantity=0)
           
                setTotalAmount(0)
        setReset(newReset);
    }

    function remove(index) {
        
        let newproduct=[...productlist]
        newtotal=totalAmount;
console.log(newtotal)
        total -=productlist[index].quantity*productlist[index].prise;
        console.log(newproduct);

        newproduct.splice(index,1)
        setproductlist(newproduct);
setTotalAmount(total);
    }

    //  --------------------------IMPORTANT----------------------------------- //
    // agar ham manually is ma number 2 da index ma or is ka quantity ko plu1 kara 
    //to wo to hojata ha magar function ka andar bahir wahi value wahi hota ha jo os ki
    //pahli sa ho/
    // console.log(productlist[2].quantity)=0




    return (
        <>

            <div className="head-container">


                {productlist.map((p, i) => {

                    //    let index = i
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
                            <button type="button" className="btn btn-success btn-lg w-50 mt-5 mb-5  " key={i} onClick={() => remove(i)} >remove</button>
                            <h1 style={{ textAlign: " center" }}>{p.prise * p.quantity}</h1>


                        </div>





                    )
                })}


            </div>
            <Footer Total={totalAmount} pro={productlist} reset={reset} />


        </>
    )
}





export default ProductPrint;