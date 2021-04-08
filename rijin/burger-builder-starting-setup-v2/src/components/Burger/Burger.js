import React from 'react'
import Aux from '../../hoc/Aux';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let betweenBuns = []; 
    Object.keys(props.ingredients).forEach(e => {
        console.log(props.ingredients[e]);
        for (let i = 0; i < props.ingredients[e]; i++){
            betweenBuns.push(<BurgerIngredient key={i+e} height="10px" ingredient={e} />);
        } 
    }); 

    return (
        <Aux>
            <BurgerIngredient height="60px" ingredient="BreadTop" />
            {betweenBuns.length ? betweenBuns : <h3 align="center">Add Ingredients</h3>}
            <BurgerIngredient height="60px" ingredient="BreadBottom" />
        </Aux>
    );
}

export default burger; 