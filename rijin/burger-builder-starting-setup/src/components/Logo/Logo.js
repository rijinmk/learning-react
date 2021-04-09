import React, { Component } from 'react'
import burgerLogo from '../../assets/images/burger-logo.png';

import classes from './Logo.css'; 

const logo = (props) => {
    return (
        <div style={{height: props.height}} className={classes.Logo}>
            <img src={burgerLogo} />
        </div>
    );
}

export default logo; 