import CartContext from "./CartContext";

const addItemToCartHandler = (item)=>{}

const removeItemToCartHandler = (id)=>{}

const CartContextProvider = (props)=>{
        const cartContext = {
                items: [],
                totalAmount: 0,
                addItem: addItemToCartHandler,
                removeItem: removeItemToCartHandler
        }

        return(
                <CartContext.Provider value={cartContext}>
                        {props.children}
                </CartContext.Provider>
        )
}

export default CartContextProvider;