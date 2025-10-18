import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, useParams, NavLink } from 'react-router-dom'
import { Itemsprovider } from './contexts/itemscontext.jsx'
import Cart from './components/cartItems.jsx'
import { Quantity } from './contexts/quantity.jsx'
import Card from './components/cards.jsx'
import { Home } from './components/home.jsx'
import { Contact } from './components/contact.jsx'
import { About } from './components/about.jsx'

const root = createRoot(document.getElementById('root'));


root.render(
  <StrictMode>
  < BrowserRouter>
<Quantity> 
  <Itemsprovider>
  
  <Routes>

    <Route path={`/`} element={<App/>}/>
    <Route path={`/home`} element={<Home/>}/>
    <Route path={`/Products`} element={<Card/>}/>
    <Route path={`/Cart`} element={<Cart/>}/>
    <Route path={`/About`} element={<About/>}/>
    <Route path={`/Contact`} element={<Contact/>}/>

</Routes>
 </Itemsprovider>
</Quantity>
  </BrowserRouter>
</StrictMode>
)