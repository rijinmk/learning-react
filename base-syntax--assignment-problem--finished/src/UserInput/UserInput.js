import React from 'react'; 
import './UserInput.css';

const userInput = (props) => {
    return (
        <input class="UserInput" onChange={props.changer} value={props.username} type="text" />
    ); 
}

export default userInput; 