import { useState } from 'react'
import './App.css'
import Card from "./Component/card.jsx"
// import UseEffect from './Component/useEffect/useffect.jsx'
import timeInsecond from "./Component/useEffect/useffect.jsx" 
import WindowSize from './Component/useEffect/setWindowsize/WindowSize.jsx'
import UseEffect from './Component/useEffect/useffect.jsx'
import { Greeting } from './Greet.jsx'

function App() {

const [count,setcount]=useState(0);
const [total,settotal]=useState(1);

function increement(){

  setcount(count+1);
 
}
function Total(){

  settotal(total + 1);
}

  return (
    <>

 <h1>In this page i learn useState</h1>

{/* <timeInsecond> */}

{/* </timeInsecond> */}
<br />
<br />
<br />
<Card/>

<UseEffect   fun={increement} funtotal={Total} total={total} count={count}  />
<h1>Count is hhh:{count}</h1>
<h1>Total Count is:{total}</h1>
{/* <UseEffect/> */}

<WindowSize/>

<h1>dalta</h1>  
<Greeting father={'ali'} name={'fahad'}/>


    </>
  )
}

export default App
