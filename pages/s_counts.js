import React from 'react'
import { useState } from 'react'

export default function Home() {
    const[count,setCount] = useState(0)
  return (
    <div>
        <h1>Visitors Visit: {count}</h1>
        <button onClick={() => setCount(count+1)}>+</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
