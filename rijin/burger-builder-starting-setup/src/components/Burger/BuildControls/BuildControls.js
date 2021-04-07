import React from 'react'; 
import classes from './BuildControls.css';

import BuildControl from './BuildControl/BuildControl'; 

const controls = [
    { label: 'Salad', type: 'salad' },
    {label: 'Meat', type: 'meat'}, 
    {label: 'Cheese', type: 'cheese'}, 
    { label: 'Bacon', type: 'bacon' },
]

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>{props.price}</p>
            {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.type} 
                label={ctrl.label} 
                disable={props.disabledState[ctrl.type]}
                added={() => props.addIngredientHandler(ctrl.type)}
                removed={() => props.removeIngredientHandler(ctrl.type)}
            />))}
            <button onClick={props.ordered} className={classes.OrderButton}>ORDER</button>
        </div>
    ); 
}

export default BuildControls; 