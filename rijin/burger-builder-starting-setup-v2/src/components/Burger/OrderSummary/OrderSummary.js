import React from 'react'

const orderSummary = (props) => {

    let summary = []; 
    let ingredients = props.summary.ingredients; 
    Object.keys(ingredients).forEach(e => {
        summary.push(<li key={e + ingredients[e]}>{e + ingredients[e]}</li>);
    }); 

    return(
        <div>
            <h2>{props.summary.totalPrice}</h2>
            <ul>
                {summary ? summary : null}
            </ul>
        </div>
    );
}

export default orderSummary;