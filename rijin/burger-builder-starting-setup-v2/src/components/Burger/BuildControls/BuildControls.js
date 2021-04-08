import React from 'react'
import Aux from '../../../hoc/Aux';
import BuildControl from './BuildControl/BuildControl';

const burgerControls = (props) => {
    let buildControlsJSX = []; 
    Object.keys(props.ingredients).forEach(e => {
        buildControlsJSX.push(<BuildControl remove={props.removeIngredients} add={props.addIngredients} key={e} label={e} />);
    }); 

    return (
        <Aux>
            { buildControlsJSX ? buildControlsJSX : null}
        </Aux>
    ); 
}

export default burgerControls; 