import { createContext, useContext, useState } from "react";

export const loginContext = createContext(null);
export const login = () => {

    let login = useContext(loginContext);
    return login
}
export let ContextProvider = (props) => {

    let [login, setLogin] = useState(false);

    return (
        <>
            <loginContext.Provider value={{ login, setLogin }}>

                {props.children}
            </loginContext.Provider>
            
        </>
    )
}