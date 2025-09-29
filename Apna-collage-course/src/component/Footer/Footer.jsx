import React, { useState } from "react";
import "./Footer.css"

function Footer({ Total, reset, pro, set }) {

    const [user, setData] = useState("")


    async function User() {


        try {

            let response = await fetch("https://jsonplaceholder.typicode.com/users");

            let user = await response.json();

            setData(user);

            console.log(user);
            
            let pro = ""
            set(pro)
        } catch (err) {
            let user = err;
            let pro = " "

            setData(user);
            set(pro)


            console.log(err)
        }
    }


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

                    <h1 style={{ backgroundColor: "black", color: "white", margin: "2px 10px", textAlign: "center" }}>Total:{Total}</h1>

                </div>

                <button className="btn btn-primary " onClick={ User  }>Pay now</button>
            </div>


        </>
    )

}


export default Footer;