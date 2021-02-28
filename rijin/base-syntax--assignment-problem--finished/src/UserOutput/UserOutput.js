import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div class="UserOutput">
            <p>Lorem, ipsum dolor. Username: {props.username}</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, id?</p>
        </div>
    );
}

export default userOutput; 