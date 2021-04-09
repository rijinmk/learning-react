import React from 'react'
import Aux from '../../../hoc/Aux';

import Logo from '../../Logo/Logo'; 
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop'; 
import classes from './SideDrawer.css'; 

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Closed];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    } 

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <Logo height="10%" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    ); 
}

export default sideDrawer; 