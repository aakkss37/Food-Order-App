import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AllMeals from "./components/Meals/AllMeals";



function App() {

  const [cartIsShown, setCartShown] = useState(false)

  const showCartHandler = ()=>{
    setCartShown(true)
  }

  const hideCartHandler = ()=>{
    setCartShown(false)
  } 

  return (
    <Fragment>
      {cartIsShown && <Cart onCloseCart = {hideCartHandler}/>}
      <Header onShowCart = {showCartHandler} />
      <main>
        <AllMeals/>
      </main>
    </Fragment>
  );
}

export default App;
