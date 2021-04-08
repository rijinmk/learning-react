import React from 'react'
import classes from './BurgerIngredient.css'; 

const burgerIngredient = (props) => {
    return(
        <div style={{ height: props.height }} className={classes[props.ingredient]}></div>
    );
}

export default burgerIngredient; 