import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {

        const cartctx = useContext(CartContext)

        const initialValue = 0
        const numberOfCartItems = cartctx.items.reduce((currentValue, item) => {
                return currentValue + item.amount
         }, initialValue);

        return (
                <button className={classes.button} onClick={props.onClick}>
                        <span className={classes.icon}>
                                <CartIcon />
                        </span>
                        <span>Your Cart</span>
                        <span className={classes.badge}>{numberOfCartItems}</span>
                </button>
        );
};

export default HeaderCartButton;