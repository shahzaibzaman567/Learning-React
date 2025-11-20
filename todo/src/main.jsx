import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes, Link, useParams } from "react-router-dom"
import { Signin } from './component/signin.jsx'
import { Home } from './component/home.jsx'
import { ContextProvider } from './component/context/contextlogin.jsx'
import { History } from './component/history.jsx'
import { Delet } from './component/deleted.jsx'
import { Complete } from './component/completed.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routes>

          <Route path='/signin' element={<Signin/>} />
          <Route path='/' element={<App/>} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Complete' element={<Complete/>} />
          <Route path='/delet' element={<Delet/>} />
          <Route path='/history' element={<History/>} />

        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
