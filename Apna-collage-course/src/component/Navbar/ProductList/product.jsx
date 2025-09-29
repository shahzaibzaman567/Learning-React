import React from "react";
import "./product.css";
import ProductPrint from "./printing.jsx";

//product function 
//using props 

function ProductList({ p }) {

    // console.log(incrnt())

    return (
        <>

            <ProductPrint productlist={p} />
      
        </>
    )


}
export default ProductList;
