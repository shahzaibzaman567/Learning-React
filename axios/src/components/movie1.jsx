import { useState,useEffect } from "react";
import axios from "axios"

function Movie1(){

  let [data,setData]=useState([])

  //function of geting api
  let getMovieData= async ()=>{
   

    try{

      const res= await axios.get("https://imdb.iamidiotareyoutoo.com/search?q=Spiderman");

      //set the api in variable
setData(res.data.description)
console.log(res)
}
catch(err){
  console.log(err)
}

}
console.log(data)


useEffect(()=>{
  
  getMovieData()
  
},[])

return (<>


<h1>Movie 1</h1>

{
data.map((data,i)=>{

    return(
        <>
        <div key={data.IMDB_ID}>
        <h1 >{data["#TITLE"]}</h1>
        <h2 >{data["#ACTORS"]}</h2>
        </div>
        </>
    )

})
}
</>)

}

export default Movie1;