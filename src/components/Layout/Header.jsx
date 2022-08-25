import React from "react";
import { Fragment } from "react";
import css from "./Header.module.css"
import mealsImg from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";


const Header = (props)=>{
        return <Fragment>
                <header className={css.header}>
                        <h1>FOOD BUDDY</h1>
                        <HeaderCartButton onClick={props.onShowCart}/>
                </header>
                <div className={css["main-image"]}>
                        <img src={mealsImg} alt="error"/>  
                </div>
        </Fragment>
}

export default Header;