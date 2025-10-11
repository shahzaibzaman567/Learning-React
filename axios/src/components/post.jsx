import { useState, useEffect } from "react";
import axios from "axios"

export default function PostExample() {

  const [response, setResponse] = useState(null);

  useEffect(() => {
    const sendData = async () => {

      try {
        const res = await axios.get("https://crudcrud.com/api/0060959d766145b58cbe78ad389ea27a/user", 
          {
          title: "React Axios",
          body: "Ye aik example hai",
          userId: 1
        })
        console.log(res);

      } catch (err) {
        console.log(err.response?.data || err.message);
      }
    };
    sendData();
  }, []);


 

  // let Delet = async () => {

  //   try {
  //     const res = await axios.delete("https://crudcrud.com/api/0060959d766145b58cbe78ad389ea27a/user");
  //     console.log(res)
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }

  // }

//    let getMovieData = async () => {

//     try {
//       const res = await axios.get("https://crudcrud.com/api/0060959d766145b58cbe78ad389ea27a/user");

//         setResponse(res.data);
//  const lastItem = res._id; // latest object
//       const resp=  await axios.delete(`https://crudcrud.com/api/0060959d766145b58cbe78ad389ea27a/user/${lastItem._id}`);
      
//       console.log(resp)     
//       // console.log(resp.data)
//     }
//     catch (err) {
//       console.log(err.response?.data || err.message)
//     }

//   }

//   useEffect(() => {

//  let  call=async( )=>{
//   await  getMovieData()
//   // await  Delet()
// }
// call()
//   }, [])
  

  return (
    <div>
      <h1>POST Response</h1>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}
