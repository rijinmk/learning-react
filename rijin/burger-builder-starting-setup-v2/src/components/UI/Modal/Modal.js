import React from 'react'
import classes from './Modal.css'; 
import Aux from '../../../hoc/Aux'; 
import Backdrop from '../Backdrop/Backdrop'; 

const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.showModal} hide={props.hideModal} />
            <div style={{
                transform: props.showModal ? 'translate(0px)' : 'translate(-1000px)',
                opacity: props.showModal ? 1 : 0,
            }} className={classes.Modal}>
                {props.children}
            </div>
        </Aux>
    ); 
}

export default modal; 