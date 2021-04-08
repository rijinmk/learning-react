import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Aux';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'; 
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

const PRICE_OF_INGREDIENTS = {
    Meat: 3.5,
    Cheese: 1.5,
    Salad: 2.3,
    Bacon: 0.5,
}

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            Meat: 0, 
            Cheese: 0, 
            Salad: 0, 
            Bacon: 0, 
        },
        totalPrice: 4, 
        modal: false, 
    }

    addIngredientHandler = (type) => {
        let cpIngredientState = {
            ...this.state.ingredients
        }
        cpIngredientState[type] += 1; 
        this.setState({ingredients: cpIngredientState}); 
        
        let cpPrice = this.state.totalPrice + PRICE_OF_INGREDIENTS[type]; 
        this.setState({ totalPrice: cpPrice });
    }

    removeIngredientsHandler = (type) => {
        let cpIngredientState = {
            ...this.state.ingredients
        }
        if (cpIngredientState[type]){
            cpIngredientState[type] -= 1;
            this.setState({ ingredients: cpIngredientState });
            let cpPrice = this.state.totalPrice - PRICE_OF_INGREDIENTS[type];
            this.setState({ totalPrice: cpPrice });
        }
    }

    showModalHandler = () => {
        this.setState({modal: true});
    }

    hideModalHandler = () => {
        this.setState({ modal: false });
    }

    render(){
        return(
            <Aux>
                <Modal hideModal={this.hideModalHandler} showModal={this.state.modal}>
                    <OrderSummary summary={this.state} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls removeIngredients={this.removeIngredientsHandler} addIngredients={this.addIngredientHandler} ingredients={this.state.ingredients} />
                <button onClick={this.showModalHandler}>Order</button>
            </Aux>
        );
    }
}

export default BurgerBuilder; 