import React, { useEffect, useState } from "react";
import iphone from "../images/Low-code-and-fast-build.png";
import ipad from "../images/Low-code-developer.jpg";
import axios from 'axios';
import "./card.css";
import { Increaseitems } from "../contexts/itemscontext"
import { QuantitY, quantityContext } from "../contexts/quantity";
import { Itemsincrease } from "../contexts/itemscontext"
import { useContext } from "react"
import { Link } from "react-router-dom";


function Card() {
  
  let quantity = QuantitY()
  let objQuantity = quantity.quantity
  let [cart, setCart] = useState([]);
  let increments = useContext(Itemsincrease)



  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart))
  }, [cart])

  console.log(objQuantity)



  let [data, setData] = useState(
    [
      //----------------------use for not wifi if wifi not working use this--------------------------------------//
      {
        prise: 22,
        category: "electirc",
        price: 2421,
        image: ipad,
        quantity: 0,
      },
      {
        prise: 22,
        category: "electirc",
        price: 2421,
        image: ipad,
        quantity: 0,
      }
      ,
      {
        prise: 22,
        category: "electirc",
        price: 2421,
        image: ipad,
        quantity: 0,
      },
      {
        prise: 22,
        category: "electirc",
        price: 2421,
        image: ipad,
        quantity: 0,
      },
      {
        prise: 22,
        category: "electirc",
        price: 244421,
        image: ipad,
        quantity: 0,
      },
      {
        prise: 22,
        category: "electirc",
        price: 2421,
        image: ipad,
        quantity: 0,
      },
      {
        prise: 22,
        category: "electirc",
        price: 2421,
        image: ipad,
        quantity: 0,
      },
      {
        prise: 22,
        category: "electirc",
        price: 2421,
        image: ipad,
        quantity: 0,
      },
      {
        prise: 22,
        category: "alamonyam",
        price: 2,
        image: ipad,
        quantity: 0,
      },
      {
        prise: 22,
        category: "electirc",
        price: 22,
        image: ipad,
        quantity: 0,
      }
    ]
  );
  let increment = Increaseitems();

  // async function products() {
  //   try {
  //     let response = await axios.get('https://fakestoreapi.com/products');
  //    let   res = response.data.map((item)=>({
  //       ...item,
  //       objQuantity:0,
  //     }
  //   )
  // )
  //     setData(res)
  //     console.log(res)
  //     console.log(response.data)
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }


  // }


  const handlerClick = (index) => {
    let selectedData = data[index];

    console.log(selectedData)
    let newCart = [...cart]

    let find = newCart.findIndex((item) => item.category === selectedData.category);

    if (!selectedData) {
      return console.log("Invailed data!")
    }
    if ( find !==-1) {
      console.log(find)

  newCart[find]={
  ...newCart[find],
  quantity:(newCart[find].quantity || 0) +1
  }
}
    else {
console.log(find )
      newCart.push(
        {
          category: selectedData.category,
          price: selectedData.price,
          image: selectedData.image,
          quantity: 1,
        })
      }
      setCart(newCart)
      // localStorage.setItem("cartItems", JSON.stringify(cart))



  }


  // useEffect(() => {
  //   products()
  // }, [])

   return (
    <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed w-100 cart-navbar mt-0">
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
              <li className="nav-item text-white  "><Link className="nav-link active" to={"/home"}>Home</Link></li>
              <li className="nav-item text-white"><Link className="nav-link" to={"/Products"}>Products</Link></li>
              <li className="nav-item text-white"><Link className="nav-link" to={"/About"}>About</Link></li>
              <li className="nav-item text-white"><Link className="nav-link" to={"/contact"}>Contact</Link></li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success text-white border-white" type="submit">Search</button>
                <Link className="btn   text-white  ms-2 py-2" to={"/Cart"}  > <span className="troli-span ">{increments.count}</span> <i className="bi bi-cart-fill troli-icon "></i></Link>
            </form>
          </div>
        </div>
      </nav>
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
                    handlerClick(i)
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