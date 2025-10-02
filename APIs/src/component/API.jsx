import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function API(){

 let  [data,setdata]=useState([])

async function comments() {
   try{ 

  
    let response=await fetch("https://jsonplaceholder.typicode.com/posts");
    let data=await response.json();
setdata(data)
 }catch(err){
    console.log(err)
 }


}

  useEffect(() => {
    
    comments();

  }, []);




  return(
  <>
  { data.length > 0 ? <h1 style={{textAlign:"center",}}>{"Name :"+data[0].name} {"id :"+data[0].id} {"school :"+data[0].school} { console.log(data[0].name)} </h1>: <h1 style={{textAlign:"center",fontStyle:"italic",}}>net work error please check your network connention! </h1>} 
 
    { console.log("i am api")}

  </>
)


}
export default API;
  
