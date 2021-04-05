import React, { Component } from "react";
import Aux from '../../hoc/Aux'; 

// Testing
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient'; 

class BurgerBuilder extends Component{
    render(){
        return(
            <Aux>
                <div>Burger</div>
                <div>Build Controls</div>
                {/* Testing */}
                <BurgerIngredient type="bread-bottom"></BurgerIngredient>
            </Aux>
        ) 
    } 
}

export default BurgerBuilder; 