import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterProvider } from './context/counter.jsx'
import CardPrvider from './component/cartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CounterProvider> */}
    <CardPrvider>
    <App />
    </CardPrvider>
    {/* </CounterProvider> */}

  </StrictMode>,
)
