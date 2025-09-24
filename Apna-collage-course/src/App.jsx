import React from 'react';
import Nabar from './component/Navbar/Nabar';
import ProductList from "./component/Navbar/ProductList/product.jsx"
import './App.css';
import { useState } from 'react';
import Footer from "./component/Footer/Footer.jsx"
import Additem from './component/form/additems.jsx';

function App() {
  //the data of printing and product files
  const Product=[
    {
    prise:3321,
    name:"honda",
    quantity:0,
  },
  {
    prise:343,
    name:"lumbergini",
    quantity:0,
  },
 {
   prise:333,
   name:"vinax",
   quantity:0,
  },
]





return (
  <>
 
<Nabar />
<Additem/>
<ProductList p={Product }  />
{/* <Footer/> */}
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