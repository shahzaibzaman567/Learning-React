import "./cartitem.css"
import { useState } from "react";
import {Link} from "react-router-dom"
import Navbar from "./navbar";


function Cart() {
  let storedata = JSON.parse(localStorage.getItem("cartItems")) || [];
 
  let [data, setData] = useState(storedata || []);

  

  const handlerClick = (index) => {
    const updataData = data.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: (item.quantity || 0) + 1 }
      }
      return item;
    })

    setData(updataData)
    localStorage.setItem("cartItems", JSON.stringify(updataData))
  }
  const HandlerClick = (index) => {
    const updataData = data.map((item, i) => {
      if (i === index) {
        return item.quantity <= 0 ? { ...item, quantity: (0) } : { ...item, quantity: (item.quantity || 0) - 1 }
      }
      return item;
    })

    setData(updataData)
    localStorage.setItem("cartItems", JSON.stringify(updataData))
  }

//remove the cards
const handlerRemove=(item,i)=>{

  let removeData= JSON.parse(localStorage.getItem("cartItems")) || [];
  let find=removeData.findIndex((data)=>data.category === item.category)

  console.log(data)
  console.log(find)

  if(find !== -1){

 removeData=  data.splice(0,find)

 console.log(removeData)
 console.log(find)  
 localStorage.setItem("cartItems",JSON.stringify(removeData));
 console.log("hay");

 //to solver remove logic
    // function remove(index) {

    //     let newproduct = [...pro];
    //     let newTotal = Total;

    //     newTotal -= pro[index].quantity * pro[index].prise;

    //     newproduct.splice(index, 1)
    //     setProduct(newproduct);
    //     setTotalAmount(newTotal);
    // }
  }else{
    console.log(find)
    console.log("hay")
  }

}




  return (
    <>
   <Navbar/>

        <div className="column-card-head">

          {
            data.map((item, i) => {

              return <div className="  head-div " key={i} style={{ maxWidth: 1508 }}>

                <div className="card w-100  mb-3 d-flex flex-row">
                  <div className="image ">
                    <img src={`${item.image}`} alt="" className="cart-image" />
                  </div>
                  <div className="w-75 d-flex flex-row align-items-center">
                    <div className="card-body">
                      <h3 className="card-title">Ttitle : {item.category}</h3>
                      <h4 className="card-text">Price : ${item.price}</h4>
                      <h4>TotalPrice :${item.quantity * item.price}</h4>
                      <h4>Quantity : {item.quantity}</h4>
                    </div>

                    <div className="">
                    </div>

                    <div
                      className="btn-group "
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <button type="button " className="btn btn-danger btn-group" onClick={() => {
                        HandlerClick(i)
                      }}>
                        -
                      </button>
                      <button type="button " className="btn btn-warning btn-group" onClick={()=>{
                        handlerRemove(item,i)
                      }}>
                        <i className="bi bi-trash-fill text-danger fs-4"></i>

                      </button>
                      <button type="button " className="btn btn-success btn-group" onClick={() => {
                        handlerClick(i)
                      }}>
                        +
                      </button>
                    </div>
                  </div>


                </div>


              </div>


            })
          }

        </div>
    </>


  )
}

export default Cart;


