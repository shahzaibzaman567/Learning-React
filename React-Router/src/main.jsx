import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { useEffect } from 'react'
// import App from './App.jsx'
import { BrowserRouter, Routes, Route, useParams, NavLink } from 'react-router-dom'

let Home = () => {

  const [posts, setPost] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((d) => d.json())
      .then((d) => setPost(d))

  }, [])

  console.log(posts)

  return (
    <>
      <div className='title-div-head'>
    <h1>I am Home  Page</h1>
         {

          posts.map((p, i) => (

<div className='title-div'>

            <NavLink to={`/post/${p.userId}`} style={{ display: 'block', }} ><h2>{p.title}</h2></NavLink>

            </div>
          ))
        }
        </div>
    </>
  )
}

let About = () => {
  return (
    <>
      <h1>I am About Page</h1>
    </>
  )
}
let Profile = () => {
  return (
    <>
      <h1>I am Profile Page</h1>
    </>
  )
}

let Data = () => {
  //using the hook of params to get name of dynamical
  return (
    <>
      <h1>I am account Page </h1>
    </>
  )
}

let PostPage = () => {
  const [data, setData] = useState(null);
  const param = useParams()

  //use the useuseEffect for api 
  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/posts/${param.userId}`)
      .then((da) => da.json())
      .then((da) => setData(da))

  }, [])

  console.log("one  post data", data)
  console.log("params of nav link or post ", param.userId, param)
  //using the hook of params to get name of dynamical
  
  if (data === null) { return <h1> Loading..... </h1> }
  return (
    <>
    <div className='post-title'>
      
      <h1>{param.userId +" ) "+ data.title} </h1>
      {
      console.log(data.userId)  
      }
      <div style={{display:'flex',alignItems:'center',justifyContent:'center' ,width:700 ,marginTop:60,}}>
      
      <h3>Description : {data.body} </h3>

      </div>

      </div>
    </>
  )
}

let User = () => {
  const parms = useParams();
  console.log(parms)
  return (
    <>
      <h1>My name is {parms.userName}</h1>

    </>
  )
}


createRoot(document.getElementById('root')).render(

  <StrictMode>
    < BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path={`/post/:userId`} element={<PostPage />} />
        {/* //using nested route */}
        <Route path='account'>

          <Route path='profile' element={<Profile />} />

          <Route path='data' element={<Data />} />

        </Route>

        <Route path='/user/:userName' element={<User />} />

      </Routes>
      {/* <App /> */}

    </BrowserRouter>
  </StrictMode>,
)
