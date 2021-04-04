import './Card.css'; 

const Card = (props) => {
    return(
        <>
            <div className="ex-card">
                <p>{props.text}</p>
            </div>
        </>
    ); 
}

export default Card; 
