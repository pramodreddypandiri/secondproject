import { useState } from "react"


function Counter() {
    const [count, setCount] = useState()
  return (
    <>
      <div style={{color:'#4503fc'}}>Counter - {count}</div>
      <button onClick={ () => (count >= 10 ?  " ": setCount(count+1))}>Increase</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
      <button onClick={()=> {setCount(count-1)}}>Decrease</button>

    </>
    
  )
}

export default Counter