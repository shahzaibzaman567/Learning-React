import React from "react";
import { useState } from "react";
import ProductPrint from "./Navbar/ProductList/printing";
import Footer from "./Footer/Footer";

function AllIsRender({ pro, setProduct }) {

    let [Data, setData] = useState([])
    // let [isError,setError]=useState(null)
    let [isLoading, setLoding] = useState(null);

    function paynow() {
        async function Userdata() {
            try {

                let response = await fetch("https://jsonplaceholder.typicode.com/posts");
                let data = await response.json();

                let isLoading = true
                setData(data)
                setLoding(isLoading)
                console.log(data)

            } catch (err) {
  console.log(err)
                let isLoading = false

                setData(isLoading)
            }

        }
        Userdata()
    }


    let [Total, setTotalAmount] = useState(0);
    //increment 
    function incrementQuantity(index) {
        //yani sara array ko otana spread
        let newprod = [...pro];
        let newTotalAmount = Total;
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
        let newTotalAmount = Total;
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
        let newTotal = Total;

        newTotal -= pro[index].quantity * pro[index].prise;

        newproduct.splice(index, 1)
        setProduct(newproduct);
        setTotalAmount(newTotal);
    }





    if (isLoading === false) {
        return (<>
            <h1>Something went rong</h1>
                
                </> 
            )
    } else if (isLoading === true) {

        return(<>
            <h1>Your order has been placed</h1>
                </> )

    } else {

        return (
            <>
{pro.length > 0 ?
                (<ProductPrint

                    dataprint={
                        //the logic of api 
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
                        }
                        
                        />)
                        : (<h1>Product was exist</h1>)
            }
                <Footer Total={Total} reset={reset} api={paynow} pro={pro} setProduct={setProduct} />
            </>)
    }


}

export default AllIsRender;