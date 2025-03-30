function Card(props) {
    return (
        <>
            <div className={`flex align-self-center justify-center items-center border-solid rounded-md`}>
                <div className={`flip-card flex justify-center items-center w-full h-full rounded-md border-solid border-4`}>
                <div className="flip-card-inner flex justify-center items-center w-full h-full">
                    <div className="flip-card-front flex justify-center items-center">
                        <h1 className="text-center">{props.front_text}</h1>
                    </div>
                    <div className="flip-card-back flex justify-center items-center w-full h-full">
                        <h3 className="text-center">{props.back_text}</h3>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Card