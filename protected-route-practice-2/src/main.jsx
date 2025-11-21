import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Protect } from './components/Protect.jsx'
import { Signin } from './components/signin.jsx'
import { Routes ,Route} from 'react-router-dom'
import { Signup } from './App.jsx'
import { ContextProvider } from './Context/userContex.jsx'
  //use the useuseEffect for api 
  



createRoot(document.getElementById('root')).render(

  <StrictMode>
   < BrowserRouter>
<ContextProvider>
      <Routes>
        <Route path='/home' element={<Protect />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/' element={<Signup />} />


      </Routes>
</ContextProvider>

    </BrowserRouter>
  </StrictMode>,
)
