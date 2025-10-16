import React, { useEffect, useState } from "react";
import iphone from "../images/Low-code-and-fast-build.png";
import ipad from "../images/Low-code-developer.jpg";
import axios from 'axios';
import "./card.css";
import { Increaseitems } from "../contexts/itemscontext"
import { QuantitY, quantityContext } from "../contexts/quantity";

function Card() {

  let quantity=QuantitY()
  let objQuantity=quantity.quantity
  console.log(objQuantity)

  let [data, setData] = useState(
    [
      //----------------------use for not wifi if wifi not working use this--------------------------------------//
      //   {
      //     prise:22,
      //     category:"electirc",
      //     price:2421,
      //      image:ipad,
      //      quantity:0,
      //   },
      //   {
      //     prise:22,
      //     category:"electirc",
      //     price:2421,
      //      image:ipad,
      //      quantity:0,
      //   }
      // ,
      //   {
      //     prise:22,
      //     category:"electirc",
      //     price:2421,
      //      image:ipad,
      //      quantity:0,
      //   },
      //   {
      //     prise:22,
      //     category:"electirc",
      //     price:2421,
      //      image:ipad,
      //      quantity:0,
      //   },
      //   {
      //     prise:22,
      //     category:"electirc",
      //     price:244421,
      //      image:ipad,
      //      quantity:0,
      //   },
      //   {
      //     prise:22,
      //     category:"electirc",
      //     price:2421,
      //      image:ipad,
      //      quantity:0,
      //   },
      //   {
      //     prise:22,
      //     category:"electirc",
      //     price:2421,
      //      image:ipad,
      //      quantity:0,
      //   },
      //   {
      //     prise:22,
      //     category:"electirc",
      //     price:2421,
      //      image:ipad,
      //      quantity:0,
      //   },
      //   {
      //     prise:22,
      //     category:"electirc",
      //     price:2,
      //      image:ipad,
      //      quantity:0,
      //   },
      //   {
      //     prise:22,
      //     category:"electirc",
      //     price:22,
      //     image:ipad,
      //     quantity:0,
      //   }
    ]
  );
  let increment = Increaseitems();

  async function products() {
    try {
      let response = await axios.get('https://fakestoreapi.com/products');
     let   res = response.data.map((item)=>({
        ...item,
        objQuantity:0,
      }
    )
  )
      setData(res)
      console.log(res)
      console.log(response.data)
    }
    catch (err) {
      console.log(err)
    }

  }
  let [cart, setCart] = useState([]);

  localStorage.setItem("cartItems", JSON.stringify(cart))

  useEffect(() => {
    products()
  }, [])
  let [index, setIndex] = useState(0);

  return (
    <>
      <div className="cards-head">
        {
          data.map((item, i) => {


            return <div className="card m-2  " style={{ width: "300px" }} key={i} >
              <img src={item.image} className="card-img-top" alt="Product" height={220} />

              <div className={`card-body data-index="${i}"`}>
                <h5 className="card-title">Title{item.category}</h5>
                <h5 className="card-card-prise">Price: ${item.price}</h5>
                <div className="d-flex ">
                  <button className={` btn btn-primary w-100 `} onClick={(e) => {
                    increment.setCount(increment.count + 1)
                    let newCart = [...cart]
                    newCart.push(
                      {
                        category: item.category,
                        price: item.price,
                        image: item.image,
                        quantity:++i,
                      }
                    )
                    console.log(Number(e.target.getAttribute("data-index")))
                    console.log(item.quantity)
                    quantity.setQuantity(item.quantity=++objQuantity)
                    setCart(newCart)
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