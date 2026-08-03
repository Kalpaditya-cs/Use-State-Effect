import React from 'react'
import { useState } from 'react'

export default function Home() {

    const[light ,setLight] = useState(false)
  return (
    <div>

        <h1>{light ? "On" : "Off"}</h1>

        <button onClick={() => setLight(!light)}>Toogle button</button>
    </div>
  )
}
