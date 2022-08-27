import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState = {
        items: [],
        totalAmount: 0
}

const cartReducerFunction = (prevState, action)=>{
        if(action.type === 'ADD'){
                const updatedItems = prevState.items.concat(action.item);
                const updatedTotalAmount = prevState.totalAmount + (action.price*action.item.amount);
                return{
                        items: updatedItems,
                        totalAmount: updatedTotalAmount
                }
        }
        return defaultCartState
}


const CartContextProvider = (props)=>{

        const [cartState, dispatchCartAction] = useReducer(cartReducerFunction, defaultCartState)
        
        const addItemToCartHandler = (item)=>{
                dispatchCartAction({type: 'ADD', item: item});
        }
        
        const removeItemToCartHandler = (id)=>{
                dispatchCartAction({ type: 'REMOVE', id: id });
        }

        const cartContext = {
                items: cartState.items,
                totalAmount: cartState.totalAmount,
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