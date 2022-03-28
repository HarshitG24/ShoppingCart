import "./App.css";
import ProductList from "./components/Products/ProductList";
import Cart from "./components/ShoppingCart/Cart";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [checkoutPrice, SetCheckoutPrice] = useState(0);

  return (
    <div className="App">
      <div className="page-divide">
        <div className="page-left">
          <h1>Shop</h1>
          <ProductList
            setCartItems={setCartItems}
            currentItems={cartItems}
            checkoutPrice={checkoutPrice}
            SetCheckoutPrice={SetCheckoutPrice}
          />
        </div>

        <div className="page-right">
          <h1>My Cart</h1>
          <Cart items={cartItems} checkoutPrice={checkoutPrice} />
        </div>
      </div>
    </div>
  );
}

export default App;
