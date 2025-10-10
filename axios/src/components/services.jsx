import axios from "axios";

export function api(){

    axios.create({
        baseURL:"https://imdb.iamidiotareyoutoo.com/"
    })
    
}

export const getMovi=()=>{
    return api.get("search?q=Spiderman");
}