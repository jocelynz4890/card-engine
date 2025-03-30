import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="w-max h-max p-4">
      <h1 className="text-3xl font-bold mt-0 mb-4">♣️ 🂡 ♥️ Custom Card Game Engine ♦️ 🂡 ♠️ </h1>
      <div className= "flex flex-row items-start w-1/2 h-1/2 flex-row gap-4">
        <div className="interface w-1/2 h-1/2 border gap-4">

        </div>
        <div className="interface w-2 h-1/2 border gap-4">
          <Card front_text="hi bab" back_text="bye bab"/>
        </div>
        <span>
          <button className="m-5">✅</button>
          <button className="m-5">❌</button>
        </span>
        <button>Export Game</button>
      </div>
    </div>
  )
}

export default App