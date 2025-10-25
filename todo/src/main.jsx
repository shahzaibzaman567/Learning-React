import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Route,Routes,Link,useParams} from "react-router-dom"
import { Signin } from './component/signin.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>

<Routes>
  
<Route path='/signin' element={<Signin/>}/>
<Route path='/' element={<App />}/>
    

</Routes>
</BrowserRouter>
  </StrictMode>,
)
