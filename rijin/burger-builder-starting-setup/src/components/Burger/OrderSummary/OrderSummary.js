import React from 'react'; 
import Aux from '../../../hoc/Aux';

const orderSummary = ( props ) => {

    const orderSummaryObj = props.currentOrder;
    const listJSX = []; 
    Object.keys(orderSummaryObj.ingredients).forEach(e => {
        listJSX.push(<li key={e}>{e}:{orderSummaryObj.ingredients[e]}</li>);
    });

    return (
        <Aux>
            <h3>Your Order: </h3>
            <ul>
                {listJSX ? listJSX : null}
            </ul>
            <h4>Total Price: {orderSummaryObj.totalPrice}</h4>
            <button onClick={props.cancelClicked}>CANCEL</button>
            <button onClick={props.continueClicked}>CONTINUE</button>
        </Aux>
    ); 
}

export default orderSummary; 