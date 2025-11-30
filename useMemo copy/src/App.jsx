import { useMemo, useState } from 'react'

function App() {

  //use//reactHook
  //Memo//memorization
  //---------------------useMemmo----------------------//
  // useMemo is use to direct anser come 
  // froExample :

  // Teacher :a teacher question to student what is the answer of 3 * 4 
  //Student :One mint i calculate this anser is 12
  //so we can use next tim without calculate this anser 

  let [count, setCount] = useState(0)
  let [input, setInput] = useState(0)

  function expensiveTask(num) {
    for (let i = 0; i < 1000000000; i++) { }

    return num * 2
  }
  let double =  useMemo(()=> expensiveTask(input),[input])

  
  return (
    <>
      <h1 style={{ textAlign: "center" }}>use Memo</h1>
      <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <button onClick={() => setCount(count + 1)}>increament</button>
        <h1 >{count}</h1>

        <input
          type="number"
          value={input}
          onChange={(e) => {
            e.target.value
          setInput(e.target.value)
          }}
        />
        
        <div>
          Double:{double}
        </div>
      </div>

    </>
  )
}

export default App
