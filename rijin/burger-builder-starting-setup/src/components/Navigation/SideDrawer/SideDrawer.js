import React from 'react'

import Logo from '../../Logo/Logo'; 
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './sideDrawer.css'; 

const sideDrawer = (props) => {
    // ... Conditional attach some CSS classes
    return (
        <div className={classes.SideDrawer}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    ); 
}

export default sideDrawer; 