import {v4 as uuid} from 'uuid'; 
import Card from '../Card/Card'; 
import './AddCard.css';

const AddCard = (props) => {

    const handleAddCard = (e) => {
        console.log(e.target); 
        let text = document.querySelector("#add-card-input").value;
        props.setCardsStateProp([...props.cardStateProp, <Card key={uuid} text={text}></Card>]);
    }

    return(
        <>
            <div className="ex-add-card">
                <input type="text" id="add-card-input" placeholder="Add Card"/>
                <input type="button" value="+" onClick={handleAddCard}/>
            </div>
        </>
    );
}

export default AddCard; 