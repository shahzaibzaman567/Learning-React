import { createContext, useContext, useState } from "react";

export const loginContext = createContext(null);

export const LoginContext = () => {

    let login = useContext(loginContext);
    return login
}
export let ContextProvider = (props) => {

    let [login, setLogin] = useState(false);
    let [name,setName]=useState(null)

    return (
        <>
            <loginContext.Provider value={{ login, setLogin, name,setName }}>

                {props.children}
            </loginContext.Provider>
            
        </>
    )
}