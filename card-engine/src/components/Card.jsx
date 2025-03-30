function Card(props) {
    let color = "border-gray-700";
    if (props.color == "green") {
        color = "border-green-600";
    }
    else if (props.color == "red") {
        color = "border-red-600";
    }
    let colorStr = `flip-card ${color}`;
    return (
        <>
            <div className={colorStr}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h1>{props.front_text}</h1>
                </div>
                <div className="flip-card-back">
                    <h3>{props.back_text}</h3>
                </div>
            </div>
            </div>
        </>
    );
}

export default Card