import React, {useEffect, useState} from 'react'; 
import './AddCard.css';

const AddCard = (props) => {

    useEffect(() => {
        console.log('[AddCard.js] useEffect (componentDidMount)'); 
        setTimeout(() => {
            alert('Saved to DB [ADD CARD]');
        }, 1000);
    }, []); 

    console.log('[AddCard.js] render');
    return (
        <div className="ex-add-card">
            <input type="text" id="add-card-input" placeholder="Add Card" />
            <input type="button" value="+" onClick={props.clicked} />
        </div>
    );
}

export default AddCard;