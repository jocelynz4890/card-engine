import Card from "./Card";
import { useState } from 'react'

function CardList(props) {
    // props.json is a json of the form "cards": [{"front": String, "back": String}, etc]
    const [idx, setIdx] = useState(1); // when indexing cards, use idx-1 to zero index it
    let n = props.json.cards.length;
    let cards = props.json.cards.map(texts => {
        return {color: "default", front_text:texts.front, back_text:texts.back}
    })
    const [cardColor, setColor] = useState(cards[idx-1].color);
    return (
        <>
            <span>
                <button className="m-5" onClick={()=>{setIdx(Math.max(1, idx-1))}}>Back</button>
                <button className="m-5" onClick={()=>{setIdx(Math.min(n, idx+1))}}>Next</button>
            </span>
            <Card front_text={cards[idx-1].front_text}  back_text={cards[idx-1].back_text} color={cardColor}/>
            <div>{idx}/{n}</div>
            <div>
                <span>
                    <button className="m-5" onClick={()=>{setColor("green"); cards[idx-1].color = "green"}}>✅</button>
                    <button className="m-5" onClick={()=>{setColor("red"); cards[idx-1].color = "red"}}>❌</button>
                </span>
            </div>
        </>
    )
}

export default CardList