import React, { Component } from "react";
import Aux from '../../hoc/Aux'; 

import Burger from '../../components/Burger/Burger'; 
import BuildControls from '../../components/Burger/BuildControls/BuildControls'; 

import Modal from '../../components/UI/Modal/Modal'; 
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const PRICE_INGREDIENTS = {
    cheese: 1, 
    meat: 5, 
    salad: 1, 
    bacon: 3, 
}
class BurgerBuilder extends Component{

    state = {
        ingredients: {
            meat: 0, 
            cheese: 0, 
            salad: 0, 
            bacon: 0, 
        }, 
        totalPrice: 4, 
        purchasing: false, 
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]; 
        const updatedCount = oldCount + 1; 
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount; 
        const priceAddition = PRICE_INGREDIENTS[type]
        const oldPrice = this.state.totalPrice; 
        const newPrice = oldPrice + priceAddition; 
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        }); 
    }

    removeIngredients = (type) => {
        const oldCount = this.state.ingredients[type]; 
        const updatedCount = oldCount - 1;
        if (updatedCount >= 0){
            console.log(type, oldCount, updatedCount);
            let updatedIngredients = {...this.state.ingredients}; 
            updatedIngredients[type] = updatedCount; 

            const priceSub = PRICE_INGREDIENTS[type]; 
            const oldPrice = this.state.totalPrice; 
            const newPrice = oldPrice - priceSub;

            this.setState({
                ingredients: updatedIngredients, 
                totalPrice: newPrice, 
            });  
        }
    }

    purchaseHandler = () => {
        this.setState({purchasing: true}); 
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        alert("you continued"); 
    }

    render(){
        return(
            <Aux>
                <Modal modalClosed={this.purchaseCancelHandler} show={this.state.purchasing}>
                    <OrderSummary updateOnly={this.state.purchasing} continueClicked={this.purchaseContinueHandler} cancelClicked={this.purchaseCancelHandler} currentOrder={this.state} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ordered={this.purchaseHandler} price={this.state.totalPrice} disabledState={this.state.ingredients} addIngredientHandler={this.addIngredientHandler} removeIngredientHandler={this.removeIngredients} />
            </Aux>
        ) 
    } 
}

export default BurgerBuilder; 