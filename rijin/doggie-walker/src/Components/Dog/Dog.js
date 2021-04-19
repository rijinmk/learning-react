import React, { useEffect } from 'react'

import classes from './Dog.module.css'; 

export const Dog = (props) => {

    useEffect(() => {
        console.log("[Dogs.js]: ", props); 
    }); 

    return (
        <div className={classes.Dog} >
            <img src={`https://cdn2.thedogapi.com/images/${props.reference_image_id}.jpg`} alt=""/>
            <div>
                <p>{props.temperament}</p>
                <p>Weight: {props.weight.metric}</p>
            </div>
        </div>
    )
}
