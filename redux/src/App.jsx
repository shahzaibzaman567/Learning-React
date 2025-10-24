import { useState } from 'react'
import './App.css'
import { useAppDispatch } from './component/hooks/hook'
import { useAppSelector } from './component/hooks/hook'
import { increment,decrement } from './component/slices/counter'
import { Check } from './component/checkredux'

function App() {

  const count=useAppSelector(state => state.counter)
const dispatch=useAppDispatch()

  return (
    <>
   <div>
    <h1 style={{textAlign:"center"}}>hay Redux count = {count}</h1>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button>
    <Check/>
   </div>
    </>
  )
}

export default App
