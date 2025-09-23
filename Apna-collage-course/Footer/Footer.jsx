import React, { useState } from "react";
import "./Footer.css"

function Footer({Total,reset}) {

     //REset function 
   

     //   let  [Reset,setRest]=useState(0);
     
     // function reset(){
        
     //    newprodust=     
     
     // }
     
     return (
         
         <>

            <div className="row">

                <button className="btn btn-danger " onClick={reset}>Reset</button>
                <div>

                    <h1 style={{ backgroundColor: "black", color: "white", margin: "2px 10px",textAlign:"center" }}>Total:{Total}</h1>

                </div>

                <button className="btn btn-primary ">Pay now</button>

            </div>


        </>
    )

}


export default Footer;