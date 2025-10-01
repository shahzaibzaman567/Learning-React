import React from 'react';
import Nabar from './component/Navbar/Nabar';
import './App.css';
import { useState } from 'react';
import Footer from "./component/Footer/Footer.jsx"
import Additem from './component/form/additems.jsx';
import ProductPrint from './component/Navbar/ProductList/printing.jsx';

function App({user}) {
  //the data of printing and product files
  const [Product, setProduct] = useState([
    {
      prise: 3321,
      name: "honda",
      quantity: 0,
    },
    {
      prise: 343,
      name: "lumbergini",
      quantity: 0,
    },
    {
      prise: 333,
      name: "vinax",
      quantity: 0,
    },
  ]

)
// if(user){

//   setProduct(<h1>"Your oder has been placed!"</h1>)

// }



  return (
    <>
        
      <Nabar />
      <Additem pro={Product} setProduct={setProduct} />

      <ProductPrint pro={Product} setProduct={setProduct} />
      {/* <Footer/>  */}
    </>

  )
}
export default App;


// const pro=["kaka","dd]","dd"]

// const [[s],[d],[d]]=pro

// const obj = {
//   name:"ali",
//   class:3
// }


// const std_name = obj.name;