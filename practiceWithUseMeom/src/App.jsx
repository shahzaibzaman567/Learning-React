import { useMemo, useState } from "react";

function App() {
  let [count, setCount] = useState(0);

function Loop(){
  for (let index = 0; index < 1000000000; index++) {  }
  console.log("hay")
}
  let Memo=useMemo(()=>Loop(),[] )
  return (
    <>
      <h1 style={{ textAlign: "center" }}>I am useMemo Hook</h1>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default App;
