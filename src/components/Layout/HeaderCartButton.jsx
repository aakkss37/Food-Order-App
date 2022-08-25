import CartIcon from "../Cart/CartIcon"
import css from "./HeaderCartButton.module.css"

const HeaderCartButton = (props)=>{
        return <button className={css.button} onClick={props.onClick}>
                <span className={css.icon}>
                        <CartIcon/>
                </span>
                <span>Your Cart</span>
                <span className={css.badge}>7</span>
        </button>
}

export default HeaderCartButton