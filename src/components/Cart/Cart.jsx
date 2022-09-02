import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Model';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

        const cartCtx = useContext(CartContext);
        const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
        const hasItemInCart = cartCtx.items.length > 0;

        const cartItemRemoveHandler = (id)=>{}
        const cartItemAddHandler = (item)=>{}

        const cartItems = (
                <ul className={classes['cart-items']}>
                        {cartCtx.items.map((item) => (
                                <li>
                                        <CartItem
                                                name={item.name}
                                                price={item.price}
                                                key={item.id}
                                                amount={item.amount}
                                                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                                                onAdd={cartItemAddHandler.bind(null, item)}
                                        />
                                </li> 
                        ))}
                </ul>
        );

        return (
                <Modal onClose={props.onHideCart}>
                        {cartItems}
                        <div className={classes.total}>
                                <span>Total Amount</span>
                                <span>{totalAmount}</span>
                        </div>
                        <div className={classes.actions}>
                                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                                {hasItemInCart && <button className={classes.button}>Order</button>}
                        </div>
                </Modal>
        );
};

export default Cart;