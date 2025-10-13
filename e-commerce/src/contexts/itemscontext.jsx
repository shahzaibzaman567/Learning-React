import { createContext, useState } from "react";
import { useContext } from "react";
// import { itemsincrease } from "../contexts/itemscontext";


export const Itemsincrease = createContext();

export const Increaseitems = () => {
let  increment=useContext(Itemsincrease)
return increment

}

export const Itemsprovider = (props) => {

    const [count, setCount] = useState(0);

    return <Itemsincrease.Provider value={{ count, setCount }}>
        {
            props.children
        }
    </Itemsincrease.Provider>


}