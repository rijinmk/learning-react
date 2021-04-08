import React from 'react'
import Aux from '../../../../hoc/Aux';

const buildControl = (props) => {
    return (
        <Aux>
            <span>{props.label}</span>
            <button onClick={() => {props.add(props.label)}}>More</button>
            <button onClick={() => {props.remove(props.label)}}>Less</button> <br/>
        </Aux>
    );
}

export default buildControl; 