import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes, Link, useParams } from "react-router-dom"
import { Signin } from './component/signin.jsx'
import { Home } from './component/home.jsx'
import { ContextProvider } from './component/context/contextlogin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routes>

          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<App />} />
          <Route path='/Home' element={<Home />} />

        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
