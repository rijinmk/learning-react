import React from 'react'
import { Weather } from './Weather/Weather'

import classes from './Header.module.css'; 

export const Header = (props) => {
    return (
        <div className={classes.Header}>
            <h1>Patan Dog Walker</h1>
            <Weather />
        </div>
    )
}
