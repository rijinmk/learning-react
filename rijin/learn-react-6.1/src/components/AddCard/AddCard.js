import React from 'react'; 
import './AddCard.css';

const AddCard = (props) => {
    console.log('[AddCard.js] render');

    return (
        <div className="ex-add-card">
            <input type="text" id="add-card-input" placeholder="Add Card" />
            <input type="button" value="+" onClick={props.clicked}/>
        </div>
    );
}

export default AddCard;