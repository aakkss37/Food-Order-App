import { useContext } from "react"
import CartIcon from "../Cart/CartIcon"
import css from "./HeaderCartButton.module.css"
import CartContext from "../../store/CartContext"

const HeaderCartButton = (props)=>{

        const cartCntxt = useContext(CartContext);

        const numberOfCartItem = cartCntxt.items.reduce((currentNumber, item)=>{
                return currentNumber = item.amount;
        }, 0);

        return <button className={css.button} onClick={props.onClick}>
                <span className={css.icon}>
                        <CartIcon/>
                </span>
                <span>Your Cart</span>
                <span className={css.badge}> {numberOfCartItem} </span>
        </button>
}

export default HeaderCartButton