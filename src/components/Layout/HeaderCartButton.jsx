import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
        const [isBtnHighlighted, setBtnHighlited] = useState(false)


        const cartctx = useContext(CartContext)
        const initialValue = 0
        const {items} = cartctx
        const numberOfCartItems = items.reduce((currentValue, item) => {
                return currentValue + item.amount
         }, initialValue);


        const btnClasses = `${classes.button} ${isBtnHighlighted ? classes.bump : ''}`
         useEffect(()=>{
                if(items.lengtn === 0){
                        return;
                }
                setBtnHighlited(true)
                setTimeout(()=>{
                        setBtnHighlited(false)
                }, 300);
                
         }, [items])
        return (
                <button className={btnClasses} onClick={props.onClick}>
                        <span className={classes.icon}>
                                <CartIcon />
                        </span>
                        <span>Your Cart</span>
                        <span className={classes.badge}>{numberOfCartItems}</span>
                </button>
        );
};  

export default HeaderCartButton;