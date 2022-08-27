import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AllMeals from "./components/Meals/AllMeals";
import CartContextProvider from "./store/CartContectProvider";



function App() {

  const [cartIsShown, setCartShown] = useState(false)

  const showCartHandler = ()=>{
    setCartShown(true)
  }

  const hideCartHandler = ()=>{
    setCartShown(false)
  } 

  return (
    // <Fragment>  ---> now no need of wraper component any more coz CartContextProvider component can be used as wraper.
      <CartContextProvider>
        {cartIsShown && <Cart onCloseCart = {hideCartHandler}/>}
        <Header onShowCart = {showCartHandler} />
        <main>
          <AllMeals/>
        </main>
      </CartContextProvider>
    // </Fragment>
  );
}

export default App;
