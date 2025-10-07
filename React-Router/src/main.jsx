import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

let  Home=()=>{
  return(
    <>
    <h1>I am Home  Page</h1>
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
  return(
    <>
    <h1>I am data Page</h1>
    </>
  )
}

createRoot(document.getElementById('root')).render(



  <StrictMode>
 < BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  {/* //using nested route */}
  <Route path='account'>

  <Route path='Profile' element={<Profile/>}/>
 <Route path='data' element={<Data/>}/>

  </Route>
</Routes>
    {/* <App /> */}

 </BrowserRouter>
  </StrictMode>,
)
