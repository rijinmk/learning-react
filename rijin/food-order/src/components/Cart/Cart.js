import Modal from '../UI/Modal';
import classes from './Cart.module.css'; 
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount.toFixed(2);
    const hasItems = cartCtx.items.length > 0; 

    const cartItems = cartCtx.items.map((item) => {
        return <li>{item.name}</li>
    }); 

    return(
        <Modal onBackdropClick={props.onHideCart}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onHideCart} className={classes['button--alt']}>Close</button>
                {hasItems ? <button className={classes.button}>Order</button> : null}
            </div>
        </Modal>
    ); 
}

export default Cart; 