import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter(Counter + 1)
    if (Counter == 20) {
      setCounter(Counter)
    }
  }

  const removeVal = () => {
    setCounter(Counter - 1)
    if (Counter == 0) {
      setCounter(Counter)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {Counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeVal}>Remove Value</button>
    </>
  )
}

export default App
