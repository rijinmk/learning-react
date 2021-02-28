import React from 'react';
import './Person.css';

const person = (props) => {
    return(
        <div className="Person">
            <button onClick={props.delete}>Delete</button>
            <h1>Name: {props.name}</h1>
            <h3>Age: {props.age}</h3>
            <input type="text" onChange={props.change} />
        </div>
    );
}

export default person; 