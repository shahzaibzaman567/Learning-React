import { Navigate } from "react-router-dom";
import { userContext } from "../Context/userContex";
import { useContext } from "react";

export const Protect = ({Component}) => {
  let User = useContext(userContext).User;

  if (!User) {
    return (
      <>
        <Navigate to="/signin" />
      </>
    );
  }

  return(
    <Component/>
  )
 
};
