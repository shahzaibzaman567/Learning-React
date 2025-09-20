import React from 'react';
import Nabar from './component/Navbar/Nabar';
import ProductList from "./component/Navbar/ProductList/product.jsx"
import './App.css';
import { useState } from 'react';

function App() {
  
  const Product=[
    {
    prise:3321,
    name:"honda",
    quantity:1,
  },
  {
    prise:343,
    name:"lumbergini",
    quantity:3,
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
<ProductList p={Product }  />
{/* <footer/> */}
  {/* {console.log(Nabar)} */}
    <h1></h1>
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