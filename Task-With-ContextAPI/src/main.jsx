import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from './Context/userContext.jsx' 



createRoot(document.getElementById('root')).render(

  <StrictMode>
    < BrowserRouter>
    <Provider>
           <App />
</Provider>
    </BrowserRouter>
  </StrictMode>,
)
