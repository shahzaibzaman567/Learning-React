import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes ,Route} from 'react-router-dom'
import { About } from './components/about.jsx'
import { ContextProvider } from './Context/userContex.jsx'
import { Home} from './components/Home.jsx'
import { App } from './App.jsx'
import { Signin } from './components/signin.jsx'
import { Protect } from './components/Protect.jsx'
//use the useuseEffect for api 
  



createRoot(document.getElementById('root')).render(

  <StrictMode>
   < BrowserRouter>
<ContextProvider>
      <Routes>
        <Route path='/home' element={<Protect Component={Home} />} />
        <Route path='/about' element={<Protect Component={About} />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/' element={<App protect={Protect} />} />


      </Routes>
</ContextProvider>

    </BrowserRouter>
  </StrictMode>,
)
