import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { useEffect } from 'react'
// import App from './App.jsx'
import {BrowserRouter,Routes,Route,useParams,NavLink} from 'react-router-dom'

let  Home=()=>{
  
  const [posts,setPost]=useState([]);
  useEffect(()=>{
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((d)=>d.json())
    .then((d)=>setPost(d))
    
  },[])
  
  console.log(posts)
  
  return(
    <>
    <h1>I am Home  Page</h1>
    <div style={{padding:40}}>
     {
       
       posts.map((p,i)=>(
         
         
         <NavLink to={`/post/${p.userId}`} style={{display:'block',}} >{p.title}</NavLink>
        ))
      }
    </div>
    </>
  )
}

let  About=()=>{
  return(
    <>
    <h1>I am About Page</h1>
    </>
  )
}
let  Profile=()=>{
  return(
    <>
    <h1>I am Profile Page</h1>
    </>
  )
}

let  Data=()=>{
  //using the hook of params to get name of dynamical
  return(
    <>
    <h1>I am account Page </h1>
    </>
  )
}

let  PostPage=()=>{
  const param=useParams()
  console.log("params of nav link or post ",param.userId,param)
  //using the hook of params to get name of dynamical
  return(
    <>
    <h1>I am postPage </h1>
    </>
  )
}

let User=()=>{
  const parms=useParams();
  console.log(parms)
  return(
    <>
  <h1>My name is {parms.userName}</h1>

  </>
  )
}


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
 < BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path={`/post/:userId`} element={<PostPage/>}/>
  {/* //using nested route */}
  <Route path='account'>

  <Route path='profile' element={<Profile/>}/>

 <Route path='data' element={<Data/>}/>

  </Route>

<Route path='/user/:userName' element={<User/>}/>

</Routes>
    {/* <App /> */}

 </BrowserRouter>
  </StrictMode>,
)
