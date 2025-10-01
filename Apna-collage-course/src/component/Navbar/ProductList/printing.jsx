import React from "react";
import "./product.css";
import { useState } from "react";
import Footer from "../../Footer/Footer.jsx";


function ProductPrint({ pro, setProduct }) {

    let [totalAmount, setTotalAmount] = useState(0);

    //increment 
    function incrementQuantity(index) {
        //yani sara array ko otana spread
        let newprod = [...pro];
        let newTotalAmount = totalAmount;
        //add new prise
        newprod[index].quantity++

        newTotalAmount += pro[index].prise;
        //set the the new total
        setProduct(newprod);
        setTotalAmount(newTotalAmount);
    }

    //decrement quantity
    function decrementQuantity(index) {
        //yani sara array ko otana spread
        let newprod = [...pro]
        let newTotalAmount = totalAmount;
        if (newprod[index].quantity > 0) {

            //subtract prises
            newprod[index].quantity--

            newTotalAmount -= pro[index].prise;

            //set subtract prise
            setTotalAmount(newTotalAmount);
        }

        setProduct(newprod);
    }

    function reset() {
        let newReset = [...pro]

        newReset.forEach(p => p.quantity = 0)

        setTotalAmount(0)
        setProduct(newReset);
    }

    function remove(index) {

        let newproduct = [...pro];
        let newTotal = totalAmount;

        newTotal -= pro[index].quantity * pro[index].prise;

        newproduct.splice(index, 1)
        setProduct(newproduct);
        setTotalAmount(newTotal);
    }



    //  --------------------------IMPORTANT----------------------------------- //
    // agar ham manually is ma number 2 da index ma or is ka quantity ko plu1 kara 
    //to wo to hojata ha magar function ka andar bahir wahi value wahi hota ha jo os ki
    //pahli sa ho/
    // console.log(productlist[2].quantity)=0

    // APIs using with pay now button
async function User() {


        try {

            let response = await fetch("https://jsonplaceholder.typicode.com/users");

            let user = await response.json();

            pro=[]
            setProduct(pro);

        } catch (err) {

            let user = err;
         pro.push(
         <h1>net work error </h1>
        )
        setProduct(pro);
        }
    }

   

    // if(user === 0){
    //    return (

         
        // )
    



    return (
        <>
            <div className="head-container">


                {
                    pro.length > 0 ? 
                    
                        pro.map((p, i) => {

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
                        })
                        : <h1>Product has exits </h1>
                        
                }

                            </div>


            {/* <Additem pro={productlist} /> */}
            <Footer Total={totalAmount} reset={reset}  api={User} />


        </>
    )}

// }





export default ProductPrint;