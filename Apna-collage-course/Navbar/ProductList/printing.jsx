import React from "react";
import "./product.css";
import { useState } from "react";
import Footer from "../../Footer/Footer.jsx";


function ProductPrint({ productlist }) {
    
    let [product, setproductlist] = useState(productlist);

    let [totalAmount, setTotalAmount] = useState(0);

    //increment 
    function incrementQuantity(index) {
        //yani sara array ko otana spread
        let newprod = [...product];
        let newTotalAmount = totalAmount;
        //add new prise
        newprod[index].quantity++

        newTotalAmount += product[index].prise;
        //set the the new total
        setproductlist(newprod);
        setTotalAmount(newTotalAmount);
    }

    //decrement quantity
    function decrementQuantity(index) {
        //yani sara array ko otana spread
        let Newprod = [...product]
        let NewTotalAmount = totalAmount;
        if (Newprod[index].quantity > 0) {

            //subtract prises
            Newprod[index].quantity--

            NewTotalAmount -= product[index].prise;

            //set subtract prise
            setproductlist(NewTotalAmount);
        }

        setproductlist(Newprod);
    }

    function reset() {
       let NewReset = [...product]
        NewReset.forEach(p => p.quantity = 0)

        setTotalAmount(0)
        setproductlist(NewReset);
    }

    function remove(index) {

        let newproduct = [...product]
        console.log(product)
        
      let  total=totalAmount;
if(total===0){
    total=0
}else{

    total -= productlist[index].quantity * productlist[index].prise;
    console.log(newproduct)
}

        newproduct.splice(index, 1);
        console.log(newproduct);
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

                {product.map((p, i) => {
{console.log(product)}

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