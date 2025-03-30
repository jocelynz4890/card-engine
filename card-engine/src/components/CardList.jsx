import Card from "./Card";
import { useState } from 'react'

function CardList(props) {
    // props.json is a json of the form "cards": [{"front": String, "back": String}, etc]
    const [idx, setIdx] = useState(1); // when indexing cards, use idx-1 to zero index it
    let n = props.json.cards.length;
    const [cards, setCards] = useState(
        props.json.cards.map(texts => ({
            color: "default",
            front_text: texts.front,
            back_text: texts.back
        }))
    );

    const colorMap = {
        default: "border-gray-800",
        green: "border-green-600",
        red: "border-red-600"
    };
    
    const updateCardColor = (idx, newColor) => {
        setCards( prevCards =>
            prevCards.map((card, i) =>
                i === idx ? { ...card, color: newColor } : card
            )
        );
    };

    return (
        <>
            <span>
                <button className="text-xl" onClick={()=>{setIdx(Math.max(1, idx-1))}}>⏪</button>
                <button className="text-xl" onClick={()=>{setIdx(Math.min(n, idx+1))}}>⏭️</button>
            </span>
            <Card front_text={cards[idx-1].front_text}  back_text={cards[idx-1].back_text} color={cards[idx-1].color}/>
            <div>{idx}/{n}</div>
            <div>
                <span>
                    <button className={`${colorMap[props.color]}`} onClick={()=>{updateCardColor(idx-1, "green")}}>✅</button>
                    <button className={`${colorMap[props.color]}`} onClick={()=>{updateCardColor(idx-1, "red")}}>❌</button>
                </span>
            </div>
        </>
    )
}

export default CardList