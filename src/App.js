import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AllMeals from "./components/Meals/AllMeals";



function App() {
  return (
    <Fragment>
      <Cart/>
      <Header></Header>
      <main>
        <AllMeals/>
      </main>
    </Fragment>
  );
}

export default App;
