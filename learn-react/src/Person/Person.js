import React from 'react'; 
import './Person.css';

const person = (props) => {
    return (
        <div style={props.style} className="Person">
            <p  onClick={props.click}>My name is: {props.name}</p>
            <p>My age is: {props.age}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <hr/>
        </div>
    ); 
}

export default person; 