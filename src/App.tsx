import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is <span style={{"fontVariant": "tabular-nums"}}>{count}</span>
        </button>
      </div>
    </>
  )
}

export default App
