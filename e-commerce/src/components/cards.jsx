import React, { useEffect, useState } from "react";
import iphone from "../images/Low-code-and-fast-build.png";
import ipad from "../images/Low-code-developer.jpg";
import axios from 'axios';
import "./card.css";
import { Increaseitems } from "../contexts/itemscontext"



function Card() {
  
  let [data,setData]=useState(
    [
  {
    prise:22,
    category:"electirc",
    price:2421,
     image:ipad,
  },
  {
    prise:22,
    category:"electirc",
    price:2421,
     image:ipad,
  }
,
  {
    prise:22,
    category:"electirc",
    price:2421,
     image:ipad,
  },
  {
    prise:22,
    category:"electirc",
    price:2421,
     image:ipad,
  },
  {
    prise:22,
    category:"electirc",
    price:244421,
     image:ipad,
  },
  {
    prise:22,
    category:"electirc",
    price:2421,
     image:ipad,
  },
  {
    prise:22,
    category:"electirc",
    price:2421,
     image:ipad,
  },
  {
    prise:22,
    category:"electirc",
    price:2421,
     image:ipad,
  },
  {
    prise:22,
    category:"electirc",
    price:2,
     image:ipad,
  },
  {
    prise:22,
    category:"electirc",
    price:22,
    image:ipad,
  }
]
  );
  let increment=Increaseitems();
  console.log(increment)
  console.log(data)

//   async function products() {
//     try {
//       let response = await axios.get('https://fakestoreapi.com/products');
// setData(response.data)

//       console.log(response.data)
//     }
//     catch (err) {
//       console.log(err)
//     }

let [cart,setCart] = useState([]);
console.log(cart)
//   }
//   console.log(data)
              localStorage.setItem("cartItems",JSON.stringify(cart))

//   useEffect(()=>{
//     products()
//   },[])


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
                <button className="btn btn-primary w-100" onClick={ ()=>{
                  increment.setCount(increment.count+1)
                  
                  let newCart  =  [...cart] 
                  newCart.push(
                    {
                      category:item.category,
                      price:item.price,
                      image:item.image,
                    }
                  )
                  setCart(newCart)
                  console.log(cart)
                } 
              }>Buy Now</button>
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