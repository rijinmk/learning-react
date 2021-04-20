import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'; 
import { useRef, useState } from 'react'; 

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    console.log(amountInputRef, "amountInputRef");

    const submitHandler = event => {
        event.preventDefault(); 
        const enteredAmount = +amountInputRef.current.value; 
        props.onAddToCart(enteredAmount);
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef} label="Amount" input={{id: "amount", type: "number"}} />
            <button>+ Add</button>
        </form>
    ); 
}

export default MealItemForm; 