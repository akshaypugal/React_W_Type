import { useState } from "react"


const Counter = () => {
    const [count , setCount] = useState<number>(0)
  return (
    <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>INCRE</button>
        <button onClick={() => setCount(count - 1)}>DECRE</button>
    </div>
  )
}

export default Counter