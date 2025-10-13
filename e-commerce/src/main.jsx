import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, useParams, NavLink } from 'react-router-dom'
import { Itemsprovider } from './contexts/itemscontext.jsx'

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  < BrowserRouter>
  {/* <Routes> */}

  <Itemsprovider>
  <App />
 </Itemsprovider>
  {/* </Routes> */}

  </BrowserRouter>

</StrictMode>
)