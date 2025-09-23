import React from "react";
import { useState } from 'react';
import './App.css'
import  Login from "./assets/component/login/login.jsx"
import  Logout from "./assets/component/login/logout/logout.jsx"

function App(){

    const [LOgin,setLOgin]=useState(false);

    // 4 //fourth practice in conditional readering with Early return (!)
if(!LOgin){

  return(
    <Login/>
  )
  
}

    // 3 //third practice in conditional readering with logical operater (&&)
return(

<div>

  <h1>Welcome to shah-coder</h1>
{
LOgin && <Logout/>
}

</div>

)





    // 2 //Second practice in conditional readering with Ternary operater
// return(

// <div>

// {
//   LOgin ? <Login/> :<Logout/>
// }

// </div>

// )




// 1 //first practice in conditional readering with if else

// if(LOgin){

//  return( <Login/>)
    
 
// }else{

//   return(  <Logout/>)

// }

}

export default App;