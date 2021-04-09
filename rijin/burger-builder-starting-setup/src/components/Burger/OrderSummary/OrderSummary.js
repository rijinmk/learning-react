import React, { Component } from 'react'; 
import Aux from '../../../hoc/Aux';


class OrderSummary extends Component {

    render(){

        const orderSummaryObj = this.props.currentOrder;
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
                <button onClick={this.props.cancelClicked}>CANCEL</button>
                <button onClick={this.props.continueClicked}>CONTINUE</button>
            </Aux>
        );
    }
}

export default OrderSummary; 