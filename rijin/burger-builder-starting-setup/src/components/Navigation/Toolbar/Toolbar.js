import React, { Component } from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './Toolbar.css'; 

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div onClick={props.openSideDrawer}>MENU</div>
            <Logo height="80%"/>
            <NavigationItems/>
        </header>
    );
}

export default toolbar; 