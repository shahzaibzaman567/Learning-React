import { Link, Routes, Route } from "react-router-dom"
import "./cartitem.css"
import { useState } from "react";

function Cart() {
  let storedata =JSON.parse(localStorage.getItem("cartItems")) || [];
  let [data, setData] = useState(storedata || []);
  console.log(data);

const handlerClick=(index)=>{
   const updatedData = data.map((item, i) => {
    if (i === index) {
      return { ...item, quantity: (item.quantity || 0) + 1 };
    }
    return item;
})
  setData(updatedData)
  localStorage.setItem("cartItems",JSON.stringify(updata)) 

} 
  return (
    <>
      <div className="d-flex flex-column">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed w-100 mb-5">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">MyShop</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item text-white  "><a className="nav-link active" href="#">Home</a></li>
                <li className="nav-item text-white"><a className="nav-link" href="#">Products</a></li>
                <li className="nav-item text-white"><a className="nav-link" href="#">About</a></li>
                <li className="nav-item text-white"><a className="nav-link" href="#">Contact</a></li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" />
                <button className="btn btn-outline-success text-white border-white" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <div className="column-card-head">

          {
            data.map((item, i) => {

              return <div className="  head-div " style={{ maxWidth: 1508 }}>

                <div class="card w-100  mb-3 d-flex flex-row">
                  <div className="image ">
                    <img src={`${item.image}`} alt="" className="cart-image" />
                  </div>
                  <div className="w-75 d-flex flex-row align-items-center">
                  <div class="card-body">
                    <h3 class="card-title">Ttitle : {item.category}</h3>
                    <h4 class="card-text">Price : ${item.price}</h4>
                        <h4>Quantity : {item.quantity}</h4>
                        {/* <h4>Total-Price : @{item.quantity}</h4> */}
                       </div>
                       
                       <div className="">
                       </div>

                       <div
                      className="btn-group "
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <button type="button " className="btn btn-danger btn-group">
                        -
                      </button>
                      <button type="button " className="btn btn-warning btn-group">
                        <i class="bi bi-trash-fill text-danger fs-4"></i>

                      </button>
                      <button type="button " className="btn btn-success btn-group" onClick={()=>{
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
      </div>
    </>


  )
}

export default Cart;


