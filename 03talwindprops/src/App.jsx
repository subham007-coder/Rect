import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Use Tailwind</h1>
      <Card userName = "subham" btn="click me"/>
      <Card userName = "Chai" btn="visit me"/>
    </>
  )
}

export default App
