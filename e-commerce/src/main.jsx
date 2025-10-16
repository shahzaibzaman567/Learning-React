import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, useParams, NavLink } from 'react-router-dom'
import { Itemsprovider } from './contexts/itemscontext.jsx'
import Cart from './components/cartItems.jsx'
import { Quantity } from './contexts/quantity.jsx'


const root = createRoot(document.getElementById('root'));


root.render(
  <StrictMode>
  < BrowserRouter>
<Quantity> 
  <Itemsprovider>
  
  <Routes>

    <Route path={`/`} element={<App/>}/>
    <Route path={`/productlist`} element={<Cart/>}/>

</Routes>
 </Itemsprovider>
</Quantity>
  </BrowserRouter>
</StrictMode>
)