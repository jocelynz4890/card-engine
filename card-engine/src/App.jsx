import { useState } from 'react'
import './App.css'
import CardList from './components/CardList'
const generateCardUrl = "https://web-production-29623.up.railway.app/generate_deck"
function App() {
  const [prompt, setPrompt] = useState("");
  // const [obj, setObj] = useState({"cards":[]}); 
  let obj = {
    "cards": [
      {
        "front": "What is the capital of France?",
        "back": "Paris"
      },
      {
        "front": "What is the powerhouse of the cell?",
        "back": "Mitochondria"
      },
      {
        "front": "Who wrote 'To Kill a Mockingbird'?",
        "back": "Harper Lee"
      },
      {
        "front": "What is the square root of 64?",
        "back": "8"
      },
      {
        "front": "Who painted the Mona Lisa?",
        "back": "Leonardo da Vinci"
      },
      {
        "front": "What is the chemical symbol for gold?",
        "back": "Au"
      },
      {
        "front": "Who discovered gravity?",
        "back": "Isaac Newton"
      },
      {
        "front": "What is the largest planet in our solar system?",
        "back": "Jupiter"
      },
      {
        "front": "How many continents are there?",
        "back": "7"
      },
      {
        "front": "What is the longest river in the world?",
        "back": "Nile River"
      }
    ]
  }

  async function handleSubmit(e) {
    setObj(JSON.parse(await fetch(generateCardUrl, {
      method: 'POST',
      body: prompt
    })));
  }
  function handleEdit(e) {
    setPrompt(e.target.value);
  }
  return (
    <div className="w-max h-max p-4">
      <h1 className="text-3xl font-bold mt-0 mb-4"> ♣️ 🂡 ♥️ Custom Card Engine ♦️ 🂡 ♠️ </h1>
      <hr></hr>
      <span>
          <form onSubmit = {handleSubmit}>
           <input name = "prompt" onChange={handleEdit}></input>
          <input type = "submit" value ="Submit"></input>
          </form>
        </span>
      <div className= "flex flex-row items-start w-1/2 h-1/2 flex-row gap-4">
        <CardList json={obj}></CardList>
        <button style={{ "margin": 4 }}>Export</button>
      </div>
    </div>
  )
}

export default App