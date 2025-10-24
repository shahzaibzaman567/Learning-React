import { useAppSelector } from "./hooks/hook"

export  function Check() {

    const count=useAppSelector(state=>state.counter)

    return (
        <>
<h1>Checking in other page is same count render  {count}</h1>        
        </>
    )
}