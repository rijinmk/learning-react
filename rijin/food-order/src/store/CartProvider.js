import CartContext from "./cart-context"
import { useReducer } from 'react'; 

const defaultCartState = {
    items: [], 
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === "ADD"){
        const updatedItems = state.items.concat(action.item);
        const newTotalAmount = state.totalAmount + (action.item.price * action.item.amount)
        return {
            items: updatedItems, 
            totalAmount: newTotalAmount
        };  
    }

    if (action.type === "REMOVE") {

    }

    return defaultCartState
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState); 

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item}); 
    }; 

    const removeItemFromCart = id => {
        dispatchCartAction({ type: 'REMOVE', item: id });
    }; 

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount, 
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCart,
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    ); 
}

export default CartProvider; 