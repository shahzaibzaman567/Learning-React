import React, { useState } from "react";
import "./Footer.css"
// import App from "../../App.jsx"; 

function Footer({ Total, reset, api }) {

   


    return (

        <>

            <div className="row">

                <button className="btn btn-danger " onClick={reset}>Reset</button>
                <div>

                    <h1 style={{ backgroundColor: "black", color: "white", margin: "2px 10px", textAlign: "center" }}>Total:{Total}</h1>

                </div>

                <button className="btn btn-primary " onClick={()=>{api}} >Pay now</button>
            </div>


            {/* <App user={user}/> */}
        </>
    )

}


export default Footer;