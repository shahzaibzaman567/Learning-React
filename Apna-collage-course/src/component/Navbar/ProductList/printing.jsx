import React from "react";
import "./product.css";
import Footer from "../../Footer/Footer.jsx";


function ProductPrint( {dataprint}) {




    //  --------------------------IMPORTANT----------------------------------- //
    // agar ham manually is ma number 2 da index ma or is ka quantity ko plu1 kara 
    //to wo to hojata ha magar function ka andar bahir wahi value wahi hota ha jo os ki
    //pahli sa ho/
    // console.log(productlist[2].quantity)=0
    // APIs using with pay now button
    // 

  
    //the using of useeffect
    // useEffect(() => {

    //     comments();

    // }, []);



    return (
        <>

           <div className="head-container">

 

 
 {dataprint}
{/* <Additem/> */}
                
            </div>


        </>
    )
}

// }





export default ProductPrint;





