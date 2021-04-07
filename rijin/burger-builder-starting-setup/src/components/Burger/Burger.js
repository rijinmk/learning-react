import React from 'react'; 
import classes from './Burger.css'; 

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'; 

const burger = (props) => {

    let betweenTheBuns = []; 
    let ingredients = Object.keys(props.ingredients);
    ingredients.forEach(e => {
        for (let i = 0; i < props.ingredients[e]; i++){
            betweenTheBuns.push(<BurgerIngredient key={e+i} type={e}></BurgerIngredient>);
        }
    });

    let emptyMessage = (betweenTheBuns.length) ? null : <h1 text-align="center">The burger is empty</h1>;

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {betweenTheBuns ? betweenTheBuns : null}
            {emptyMessage ? emptyMessage : null}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    ); 
};

export default burger