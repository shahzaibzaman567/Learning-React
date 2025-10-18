import React from "react";
import "./App.css"
import Card from "./components/cards";
import Navbar  from "./components/navbar";
import { Home } from "./components/home";

function App() {

   console.log("say hak")
   return (
      <>
<Navbar/>
<Home/>
      </>
   )
   
}

export default App;


{/* { */}
   // console.log(process.env.NAME)
{/* } */}

