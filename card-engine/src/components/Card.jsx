function Card(props) {
    return (
        <>
            <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h1>{props.front_text}</h1>
                </div>
                <div class="flip-card-back">
                    <h3>{props.back_text}</h3>
                </div>
            </div>
            </div>
        </>
    );
}

export default Card