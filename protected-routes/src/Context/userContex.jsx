import { createContext, useState } from "react";

export let userContext = createContext(null);

export let ContextProvider = (p) => {
    
     let [User,setUser] = useState(true);
    
  return  (
  
    <userContext.Provider value={{User,setUser}}>
    {p.children}
    </userContext.Provider>
   
    )

};
