import React from 'react';
import './Card.css';

const Card = (props) => {
    console.log('[Card.js] render');
    return (
        <div className="ex-card">
            <p>{props.text}</p>
        </div>
    );
}

export default Card;
