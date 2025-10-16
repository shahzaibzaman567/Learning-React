import React from "react";
import "./App.css"
import Card from "./components/cards";
import Navbar  from "./components/navbar";

function App() {

   console.log("say hak")
   return (
      <>
<Navbar/>
<Card/>
{
   // console.log(process.env.NAME)
}
      </>
   )

}

export default App;



