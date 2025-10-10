import React from "react";
import Registration from "./components/regitration/registration";
import { Routes, Route, useParams, NavLink ,Link} from 'react-router-dom';
import Login from "./components/login/login.jsx"

function App() {



   return (
      <>
       <Routes>
         <Route path="/" element={<Registration/>} />
         <Route path="/Login" element={<Login/>} />
       </Routes>
      </>
   )

}

export default App;



