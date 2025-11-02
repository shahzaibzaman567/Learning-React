import "./cartitem.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Navbar from "./navbar";


function Cart() {
  let storedata = JSON.parse(localStorage.getItem("cartItems")) || [];

  let [data, setData] = useState(storedata || []);
  
  let [Total, setTotal] = useState(0);

  useEffect(()=>{
  let newTotal= data.reduce((acc,curr)=>acc + curr.quantity * curr.price , 0)

  setTotal(Number(newTotal).toFixed(2))
},[data])

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
        return item.quantity <= 0 ? { ...item, quantity: (0) } : { ...item, quantity: (item?.quantity || 0) - 1 }
      }
      return item;
    })

    setData(updataData)
    localStorage.setItem("cartItems", JSON.stringify(updataData))
  }

  //remove the cards
  const handlerRemove = (i) => {

    let newdata = [...data]

    newdata.splice(i, 1)
    setData(newdata);


  }




  return (
    <>
      <div className="cart-navbar" style={{margin:"-10px"}}>
        <Navbar />
      </div>

      <div className=" column-card-head boder-white ">

        {
         data.length > 0? data.map((item, i) => {
            return <div className="  head-div " key={i} >

              <div className="card h-25 mb-3 d-flex flex-row flex-wrap  col-11 p-3 justify-content-center" >

                <div className="image ">
                  <img src={`${item?.image}`} alt="" className="cart-image  p-y3 col-xl-5 col-md-5 col-sm-4 col-9" />
                </div>
                

                  <div className="card-body">
                    <h3 className="card-title">Ttitle : {item?.category}</h3>
                    <h4 className="card-text">Price : ${item?.price}</h4>
                    <h4>TotalPrice :${item?.quantity * item?.price}</h4>
                    <h4>Quantity : {item?.quantity}</h4>

                  </div>

                  <div className="">
                  </div>
<div className="head-btn d-flex align-items-center" style={{height:"auto"}}>
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
                    <button type="button " className="btn btn-warning btn-group" onClick={() => {
                      handlerRemove(item, i)
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
          :<h1  style={{paddingTop:"20%"}}>No cards!</h1>
        }

      </div>
      {/* <!-- Footer 1: Simple Total Amount Footer --> */}
   <footer className="bg-dark text-light py-4 shadow-lg w-100" style={{position:"fixed", bottom:"0"}}>
  <div className="container">
    <div className="row text-center text-md-start align-items-center">
      <div className="col-12 col-md-6 mb-2 mb-md-0">
        <h5 className="fw-bold mb-0">🛍️ Smart & Style Store</h5>
        <small className="text-secondary">© 2025 All Rights Reserved</small>
      </div>
      <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
        <h6 className="mb-0">Grand Total: $ {Total}</h6>
      </div>
    </div>
  </div>
</footer>

    </>


)
}

export default Cart;

//shahfahad//o3449762513

