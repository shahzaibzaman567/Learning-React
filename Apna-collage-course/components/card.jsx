import React from "react";

function Card(props){

    return(
        <>
        <h1>{props.name}</h1>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
            {props.children}
        </div>
        </>
    )
}
 export default Card