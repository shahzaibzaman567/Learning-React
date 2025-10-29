import React, { useEffect, useState } from "react";
// import iphone from "../images/Low-code-and-fast-build.png";
import ipad from "../images/Low-code-developer.jpg";
import axios from 'axios';
import "./card.css";
// import  Increaseitems from "../contexts/itemscontext.jsx"
import { Cartnav } from "./cartNav";
import { useDispatch } from "react-redux";
import { increment } from "../contexts/slice";

function Card() {

  let [loding, setLoding] = useState(false)
  // let quantity = QuantitY()

  let [cart, setCart] = useState([]);

  // let increment = Increaseitems();  //increment count//
  let dispatch = useDispatch();
  

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart))
  }, [cart])




  let [data, setData] = useState(
    [
      // ----------------------use for not wifi if wifi not working use this--------------------------------------//
      {
        price: 22,
        category: "house",
        price: 2421,
        image: ipad,
        quantity: 0,
      },
      {
        price: 32,
        category: "banner",
        price: 30,
        image: ipad,
        quantity: 0,
      }
      ,
      {
        price: 22,
        category: "electirc",
        price: 2421,
        image: ipad,
        quantity: 0,
      },
      {
        price: 22,
        category: "electirc",
        price: 2421,
        image: ipad,
        quantity: 0,
      },
      {
        price: 22,
        category: "electirc",
        price: 244421,
        image: ipad,
        quantity: 0,
      },
      {
        price: 22,
        category: "electirc",
        price: 2421,
        image: ipad,
        quantity: 0,
      },
      {
        price: 22,
        category: "electirc",
        price: 2421,
        image: ipad,
        quantity: 0,
      },
      {
        price: 22,
        category: "electirc",
        price: 2421,
        image: ipad,
        quantity: 0,
      },
      {
        price: 22,
        category: "alamonyam",
        price: 2,
        image: ipad,
        quantity: 0,
      },
      {
        price: 22,
        category: "electirc",
        price: 22,
        image: ipad,
        quantity: 0,
      }
    ]
  );




  useEffect(() => {

    async function products() {
      try {
        setLoding(true)
       
        let response = await axios?.get('https://fakestoreapi.com/products');
        let res = response?.data.map((item) => ({
          ...item,
          objQuantity: 0,
        }
        )
        )
        setLoding(false)
        setData(res)
        console.log(res)
        console.log(response.data)

      }
      catch (err) {
      
        setLoding(false)
        console.log(err.response)

      }


    }
    products()
    // export const Esasa=useState(data) ;

  }, [])

  //this is the search bar of nav bar 

  const handlerClick = (index) => {

    let selectedData = data[index];

    let newCart = [...cart]

    let findTitle = newCart.findIndex((item) => item.category === selectedData.category && item.price === selectedData.price );

    if (!selectedData) {

      return;

    }
    if (findTitle !== -1 ) {

      console.log(findTitle)

      newCart[findTitle] = {
        ...newCart[findTitle],
        quantity: (newCart[findTitle]?.quantity || 0) + 1
      }
    }
    else {
      console.log(findTitle)
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

  console.log(data.length)
  useEffect(() => {
  }, [])
  if (loding === true) {

    return (
      <>
        <Cartnav data={data} />

        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: "#f8f9fa" }}>
          <div className="spinner-border text-dark" role="status" style={{ width: "4rem", height: "4rem" }}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>

        {/* {
  setData(()=>{


    
  
      return (
      <>
        <Cartnav />
        <h1 className="text-danger">!Network Error Please check your netWorl</h1>
      </>) 
  },4000)

} */}

      </>
    )
  }
  else {
    if (data.length <= 0) {

      return (<>
        <Cartnav data={data} />
        <div style={{ height: "100vh", paddingTop: "10%" }}>

          <h1 className="text-danger">!Net work error please try again </h1>
        </div>
      </>)
    }

    else {
      return (
        <>
          <Cartnav data={data} />
          <div className="cards-head">
            {
              data.map((item, i) => {


                return <div className="card m-2  " style={{ width: "300px" }} key={i} >
                  <img src={item.image} className="card-img-top" alt="Product" height={220} />

                  <div className={`card-body data-index="${i}"`}>
                    <h5 className="card-title">Title{item.category}</h5>
                    <h5 className="card-card-price">Price: ${item.price}</h5>
                    <div className="d-flex ">
                      <button className={` btn btn-dark w-100 `} onClick={(e) => {
                        dispatch(increment())
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
  }
}
export default Card;