import React, { useEffect, useState } from "react";
import iphone from "../images/Low-code-and-fast-build.png";
import ipad from "../images/Low-code-developer.jpg";
import axios from 'axios';
import "./card.css";
import { Increaseitems } from "../contexts/itemscontext"


function products() {
  
  let [data,setData]=useState([]);
  let increment=Increaseitems();
  console.log(increment)

  async function Cars() {
    try {
      let response = await axios.get('https://fakestoreapi.com/products');
setData(response.data)

      console.log(response.data)
    }
    catch (err) {
      console.log(err)
    }


  }
  console.log(data)

  useEffect(()=>{
    products()
  },[])

  return (
    <>
<div className="cards-head">

      {
        data.map((item, i) => {

          return <div className="card m-2  " style={{ width: "300px" }} key={i}>
            <img src={item.image} className="card-img-top" alt="Product"  height={220}/>

            <div className="card-body">
              <h5 className="card-title">{item.category}</h5>
              <h5 className="card-card-prise">${item.price}</h5>
               <div className="d-flex ">
                <button className="btn btn-primary w-100" onClick={()=>{increment.setCount(increment.count+1)}}>Buy Now</button>
              </div>
            </div>
          </div>
        })
      }
</div>
    </>
  )
}

export default Card;