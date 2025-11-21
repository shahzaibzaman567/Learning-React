import { Navigate } from "react-router-dom"
import { userContext } from "../Context/userContex"
import { useContext } from "react";

export  let Protect = () => {
let User=useContext(userContext).User;
console.log(User.User)

if(!User){
return (
  <>
<h1>hay home </h1>
<Navigate to="/" />
</>
)
}

return (
  <>
<h1>hay home </h1>
<Navigate to="/home" />
</>
)
  }