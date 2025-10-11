import React from "react";
import "./btn.css"
function Btn(props){

    return(
<>

<div style={{width:300}}>
{props.children}
<button onClick={props.numIncrement}>{props.text}</button>

</div>

<div>
   <h1> {props.name}</h1>
</div>
</>

    )
}
export default Btn