import { useState } from 'react';
import Cart from './components/Cart/Cart';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [isCartShown, setCartShown] = useState(false)

  const showCartHandler = ()=>{
    setCartShown(true)
  }
  const hideCartHandler = ()=>{
    setCartShown(false)
  }

  return (
    <CartProvider>
      {isCartShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;