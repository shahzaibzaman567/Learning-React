import { useState } from "react"
import "./card.css"

function Card(){

    const [count,setcount]=useState(1);

return(

<div className="head-container">

<div className="card">

<p id="para"> Lorem ipsum dolor sit amet, c
    onsectetur adipisicing elit. Laborum nes
    ciunt eaque accusamus aspernatur eius. Re
    iciendis veniam voluptatem impedit eius
     amet nulla be-----"<b> ----"this number is increase onclik button ----</b> "<h1> {count}</h1> "---------
    atae harum, qui pariatur error dolor, iure possimus eos!</p>

<button onClick={()=>{setcount(count+1)} }>Click Me</button>

</div>










</div>









)

}

export default Card