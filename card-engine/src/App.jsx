import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/CardList'
const generateCardUrl = "https://web-production-29623.up.railway.app/generate_deck"
const getOldDeckUrl = "https://web-production-29623.up.railway.app/get_deck"
// const generateCardUrl = "http://127.0.0.1:5000/generate_deck"
// const getOldDeckUrl = "http://127.0.0.1:5000/get_deck"
function App() {
  const [prompt, setPrompt] = useState("");
  const [obj, setObj] = useState({"cards":[]}); 
  
  useEffect(() => {
    async function f() {
      let key = (new URLSearchParams(window.location.search)).get("key");
      if (key != null) {
        let cards = await (await fetch(getOldDeckUrl + `/${key}`)).json()
        console.log(cards)
        setObj(cards);
      }}
      
    f()
    }, [])
  // let obj = {
  //   "cards": [
  //     {
  //       "front": "What is the capital of France?",
  //       "back": "Paris"
  //     },
  //     {
  //       "front": "What is the powerhouse of the cell?",
  //       "back": "Mitochondria"
  //     },
  //     {
  //       "front": "Who wrote 'To Kill a Mockingbird'?",
  //       "back": "Harper Lee"
  //     },
  //     {
  //       "front": "What is the square root of 64?",
  //       "back": "8"
  //     },
  //     {
  //       "front": "Who painted the Mona Lisa?",
  //       "back": "Leonardo da Vinci"
  //     },
  //     {
  //       "front": "What is the chemical symbol for gold?",
  //       "back": "Au"
  //     },
  //     {
  //       "front": "Who discovered gravity?",
  //       "back": "Isaac Newton"
  //     },
  //     {
  //       "front": "What is the largest planet in our solar system?",
  //       "back": "Jupiter"
  //     },
  //     {
  //       "front": "How many continents are there?",
  //       "back": "7"
  //     },
  //     {
  //       "front": "What is the longest river in the world?",
  //       "back": "Nile River"
  //     }
  //   ]
  // }

  async function handleSubmit(e) {
    console.log("a");
    let response = await fetch(generateCardUrl, {
      method: 'POST',
      body: JSON.stringify({"prompt":prompt}),
      headers: {
        "Content-Type" : "application/json"
      }
    })
    console.log(response);
    let res = await response.json();
    console.log(res)
    setObj(res);
    
  }
  function handleEdit(e) {
    setPrompt(e.target.value);
    // console.log(e.target.value);
  }
  return (
    <div className="w-max h-max p-4">
      <h1 className="text-3xl font-bold mt-0 mb-4"> ♣️ 🂡 ♥️ Custom Card Engine ♦️ 🂡 ♠️ </h1>
      <hr></hr>
      <span style = {{"margin" : "15px"}}>
          <input name = "prompt" onChange={handleEdit}></input>
          <button onClick={handleSubmit}>Submit</button>
        </span>
        {obj.cards.length > 0 ? <div className= "flex flex-row items-start w-1/2 h-1/2 flex-row gap-4">
        
        <div className="interface w-1/2 h-1/2 border gap-4">
        
        <CardList json={obj}></CardList>
        </div>
        <button>Export</button>
      </div> : <></>}
    </div>
  )
}

export default App