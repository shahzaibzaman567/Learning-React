import { useEffect, useState } from "react";
import "./useffect"

function UseEffect(props) {
const [second,setsecond]=useState(0);

    useEffect(() => {
        // first is a side effect function
        //second this is a clean up function
        //third comma depdece list

        //variation:1
        //run on every render
        //jo bi changes ati ha os sa pahla ya chalta ha


        //  alert("i run each on  rendering !")


    })

    // useEffect(() => {

    //     //variation:2
    //     //that runs only first render

    //     alert("i use in only first render")

    // }, [])

    //     useEffect(() => {

    //     //variation:3
    //     //only i run onupdate count

    //     alert("i use in only first render")

    // }, [props.con])

    //     useEffect(() => {

    //     //variation:4
    //     //only i run onupdate counts /urdu/yani moktalif
    //     // 
    //     // variable ka chalna par bi ham ya set karsata ha

    //     alert("i use in only first render")

    // }, [props.count,total])

    // useEffect((props) => {

    //     //variation:5   
    //     //ya clean up ha jo porana ko hata kar nya koch dalana ka liya istimal hota ha  

    //     alert("count is ubdate 1 ")
    //     return(
    //         alert("count is ubdate 1 this is a clean up varition")
    //     )
        
    // }, [props.count,props.total])

function timeInsecond(){


const time=setInterval(()=>{

    console.log("time is chaanging")
    setsecond(prevSecond=>prevSecond+1)


},1000)

return()=>{
    console.log("Time stope")
    clearInterval("time")
}
}

///api call function 
// const [data,setdata]=useState()
const data=[{
    name:"shah",
    id:"38d8"
},
{
    name:"shah",
    id:"38d8"
}]
const [loading,setlod]=useState(false)



// useEffect(()=>{

// fetch("dfadsfa")
// .then(res=>res.json())
// .then((data)=>{ 
//        setdata(data);
//         setlod(false)
//     })


// },[])



function cleanSecond(){

    setsecond(false)
    console.log("howa")
}


    return (
        <>
            {/* useEffect useeffect a react hook generate side effect 
example:
on increament alert show

*/}
<div>
{loading?
<h1 style={{width:100,height:100}}>Loding...</h1>
:
<ul>
    {
        data.map((usr)=>(
            
<>  
<li key={usr.name}><h1>{usr.name}</h1></li>
<li key={usr.name}><h1>{usr.id}</h1></li>
</>
))
}
</ul>
}
    
</div>




            <div className="head-container">

                <div className="card">
                    <p><b>In this page i learn useeffect</b></p>
                    {/* / this is call only the childre example : h1/ */}
                    {props.children}
                    <button onClick={props.fun}>Click Me</button>
                    <button onClick={props.funtotal}>total Click Me </button>

                    <button onClick={timeInsecond} onDoubleClick={cleanSecond}>second Click Me <h1>{second}</h1> </button>



                </div>
            </div>

        </>
    )
}

export default UseEffect ;


 




