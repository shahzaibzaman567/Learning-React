import React from "react";

function API(){

//asyncronas  : ya jo wait karta ha ak ma masla ajata ha to dosra chalta ha.
//syncronas   : jo sara code chalata ha kisi ka liya intizar nahi karta 
//agar error ajay to agl wala nahi chalta .

//important//javascript is syncronas

//Async  functioin
// async function Getdata(){

// setTimeout(() => {
//     console.log("get data ")
// }, 2000);

// }
async function Getdata(){


 let response=await fetch('https://jsonplaceholder.typicode.com/todos/2')
 let data = await response.json();
 
 console.log(data)
}
Getdata()
return(
    <>
    
    </>
)

//Await


}

export default API;