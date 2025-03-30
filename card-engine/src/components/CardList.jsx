import Card from "./Card";
import { useState } from 'react'

function CardList(props) {
    // props.json is a json of the form "cards": [{"front": String, "back": String}, etc]
    const [idx, setIdx] = useState(1); // when indexing cards, use idx-1 to zero index it
    let n = props.json.cards.length;
    // if (n===0) {
    //     return (
    //         <Card front_text="submit a prompt to create a card!"  back_text="🐕" color="default"/>
    //     );
    // }
    const [cards, setCards] = useState(
        props.json.cards.map(texts => ({
            color: "default",
            front_text: texts.front,
            back_text: texts.back
        }))
    );

    const colorMap = {
        default:"rgb(255, 255, 255)",
        green: "rgb(85, 215, 122)",
        red: "rgb(215, 85, 85)"
    };
    
    const updateCardColor = (idx, newColor) => {
        setCards( prevCards =>
            prevCards.map((card, i) =>
                i === idx ? { ...card, color: newColor } : card
            )
        );
    };

    return (
        <div className="interface w-1/2 h-1/2 border gap-4" style={{ borderColor: colorMap[cards[idx-1].color] }}>
            <span style={{ "margin": 4 }}>
                <button style={{ "margin": 4, "fontSize": 25 }} className="text-xl" onClick={()=>{setIdx(Math.max(1, idx-1))}}>⏮️</button>
                <button style={{ "margin": 4, "fontSize": 25 }} className="text-xl" onClick={()=>{setIdx(Math.min(n, idx+1))}}>⏭️</button>
            </span>
            <Card front_text={cards[idx-1].front_text}  back_text={cards[idx-1].back_text} color={cards[idx-1].color}/>
            <div style={{ "padding": 8 }}>{idx}/{n}</div>
            <div>
                <span>
                    <button style={{ "margin": 4 }} onClick={()=>{updateCardColor(idx-1, "green")}}>✅</button>
                    <button style={{ "margin": 4 }} onClick={()=>{updateCardColor(idx-1, "red")}}>❌</button>
                </span>
            </div>
        </div>
    )
}

export default CardList