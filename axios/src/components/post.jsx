import { useState,useEffect } from "react";
import axios from "axios"

export default function Post(){

  let [data,setData]=useState([])

  //function of geting api
  let Send= async ()=>{
   

    try{

      const res= await axios.get("https://example.com/api",{
        Name:"shah",
        age:22
      });

      //set the api in variable
setData(res.data)
console.log(res)

}
catch(err){
  console.log(err.res.message)
}

}
console.log(data)


useEffect(()=>{
  
  Send()
  
},[])

return (
<>

</>
)
}